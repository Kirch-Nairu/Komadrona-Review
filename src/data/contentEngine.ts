import type { CollectionEntry } from 'astro:content';
import { examBlueprint } from './examBlueprint';
import { referenceRegistry } from './referenceRegistry';

export type LessonEntry = CollectionEntry<'lessons'>;
export type QuestionEntry = CollectionEntry<'questions'>;

export interface AreaCoverage {
  domainId: string;
  domainTitle: string;
  blueprintAreaId: string;
  blueprintAreaLabel: string;
  weightPercent: number;
  lessonCount: number;
  questionCount: number;
  covered: boolean;
}

export interface DomainCoverage {
  domainId: string;
  domainTitle: string;
  areaCount: number;
  coveredAreaCount: number;
  lessonCount: number;
  questionCount: number;
  weightedCoveragePercent: number;
  areas: AreaCoverage[];
}

export interface ContentEngineReport {
  lessonCount: number;
  questionCount: number;
  publicLessonCount: number;
  publicQuestionCount: number;
  fixtureLessonCount: number;
  fixtureQuestionCount: number;
  totalBlueprintAreas: number;
  coveredBlueprintAreas: number;
  domains: DomainCoverage[];
  errors: string[];
}

const isReviewedStatus = (status: string) =>
  status === 'source-checked' || status === 'clinically-reviewed';

const requireReviewedMetadata = (
  kind: 'Lesson' | 'Question',
  id: string,
  entry: LessonEntry['data'] | QuestionEntry['data'],
  errors: string[]
) => {
  if (isReviewedStatus(entry.status) && (!entry.lastVerified || !entry.sourceChecker)) {
    errors.push(`${kind} ${id} is ${entry.status} but lacks lastVerified or sourceChecker.`);
  }

  if (entry.status === 'clinically-reviewed' && !entry.clinicalReviewer) {
    errors.push(`${kind} ${id} is clinically reviewed but lacks clinicalReviewer.`);
  }

  if (entry.publicationState === 'public') {
    if (!isReviewedStatus(entry.status)) {
      errors.push(`${kind} ${id} is public but has non-publishable status ${entry.status}.`);
    }

    if (
      entry.contentKind === 'review' &&
      (entry.riskLevel === 'high' || entry.riskLevel === 'critical') &&
      entry.status !== 'clinically-reviewed'
    ) {
      errors.push(`${kind} ${id} is public ${entry.riskLevel}-risk review content without clinical review.`);
    }
  }
};

export const inspectContentEngine = (
  lessons: LessonEntry[],
  questions: QuestionEntry[]
): ContentEngineReport => {
  const errors: string[] = [];
  const referenceIds = new Set(referenceRegistry.map((reference) => reference.id));
  const domainById = new Map(examBlueprint.map((domain) => [domain.id, domain]));
  const areaById = new Map(
    examBlueprint.flatMap((domain) =>
      domain.areas.map((area) => [area.id, { domainId: domain.id, domainTitle: domain.title, area }] as const)
    )
  );

  const lessonByContentId = new Map<string, LessonEntry>();
  for (const lesson of lessons) {
    const { contentId } = lesson.data;
    if (lessonByContentId.has(contentId)) {
      errors.push(`Duplicate lesson contentId: ${contentId}.`);
    }
    lessonByContentId.set(contentId, lesson);

    requireReviewedMetadata('Lesson', contentId, lesson.data, errors);

    if (lesson.data.coverageEligible) {
      const domain = domainById.get(lesson.data.domainId);
      const area = areaById.get(lesson.data.blueprintAreaId);

      if (!domain) {
        errors.push(`Lesson ${contentId} references unknown domain ${lesson.data.domainId}.`);
      }
      if (!area) {
        errors.push(`Lesson ${contentId} references unknown blueprint area ${lesson.data.blueprintAreaId}.`);
      } else if (area.domainId !== lesson.data.domainId) {
        errors.push(`Lesson ${contentId} maps area ${area.area.id} to the wrong domain.`);
      }
    } else if (
      lesson.data.contentKind !== 'system-fixture' ||
      lesson.data.domainId !== 'system' ||
      !lesson.data.blueprintAreaId.startsWith('system-')
    ) {
      errors.push(`Non-coverage lesson ${contentId} must be an explicitly isolated system fixture.`);
    }

    for (const source of lesson.data.sources) {
      if (!referenceIds.has(source.referenceId)) {
        errors.push(`Lesson ${contentId} references unknown source ${source.referenceId}.`);
      }
    }
  }

  const questionById = new Map<string, QuestionEntry>();
  for (const question of questions) {
    const { questionId } = question.data;
    if (questionById.has(questionId)) {
      errors.push(`Duplicate questionId: ${questionId}.`);
    }
    questionById.set(questionId, question);

    requireReviewedMetadata('Question', questionId, question.data, errors);

    const choiceIds = question.data.choices.map((choice) => choice.id);
    if (new Set(choiceIds).size !== choiceIds.length) {
      errors.push(`Question ${questionId} contains duplicate choice IDs.`);
    }
    if (!choiceIds.includes(question.data.correctChoiceId)) {
      errors.push(`Question ${questionId} correctChoiceId does not match any choice.`);
    }

    const distractorIds = question.data.distractorRationales.map((item) => item.choiceId);
    const expectedDistractorIds = choiceIds.filter((choiceId) => choiceId !== question.data.correctChoiceId);
    if (
      new Set(distractorIds).size !== distractorIds.length ||
      distractorIds.some((choiceId) => !expectedDistractorIds.includes(choiceId)) ||
      expectedDistractorIds.some((choiceId) => !distractorIds.includes(choiceId))
    ) {
      errors.push(`Question ${questionId} must provide one rationale for every incorrect choice only.`);
    }

    if (question.data.coverageEligible) {
      const area = areaById.get(question.data.blueprintAreaId);
      if (!domainById.has(question.data.domainId)) {
        errors.push(`Question ${questionId} references unknown domain ${question.data.domainId}.`);
      }
      if (!area) {
        errors.push(`Question ${questionId} references unknown blueprint area ${question.data.blueprintAreaId}.`);
      } else if (area.domainId !== question.data.domainId) {
        errors.push(`Question ${questionId} maps area ${area.area.id} to the wrong domain.`);
      }
    } else if (
      question.data.contentKind !== 'system-fixture' ||
      question.data.domainId !== 'system' ||
      !question.data.blueprintAreaId.startsWith('system-')
    ) {
      errors.push(`Non-coverage question ${questionId} must be an explicitly isolated system fixture.`);
    }

    for (const lessonId of question.data.lessonIds) {
      const lesson = lessonByContentId.get(lessonId);
      if (!lesson) {
        errors.push(`Question ${questionId} references unknown lesson ${lessonId}.`);
        continue;
      }

      if (question.data.coverageEligible) {
        if (!lesson.data.coverageEligible) {
          errors.push(`Coverage question ${questionId} references non-coverage lesson ${lessonId}.`);
        }
        if (
          lesson.data.domainId !== question.data.domainId ||
          lesson.data.blueprintAreaId !== question.data.blueprintAreaId
        ) {
          errors.push(`Question ${questionId} and lesson ${lessonId} do not share the same blueprint mapping.`);
        }
      }
    }

    for (const source of question.data.sources) {
      if (!referenceIds.has(source.referenceId)) {
        errors.push(`Question ${questionId} references unknown source ${source.referenceId}.`);
      }
    }
  }

  for (const lesson of lessons) {
    for (const questionId of lesson.data.questionIds) {
      const question = questionById.get(questionId);
      if (!question) {
        errors.push(`Lesson ${lesson.data.contentId} references unknown question ${questionId}.`);
      } else if (!question.data.lessonIds.includes(lesson.data.contentId)) {
        errors.push(`Lesson ${lesson.data.contentId} and question ${questionId} do not reference each other.`);
      }
    }
  }

  const domains: DomainCoverage[] = examBlueprint.map((domain) => {
    const areas = domain.areas.map((area): AreaCoverage => {
      const lessonCount = lessons.filter(
        (lesson) => lesson.data.coverageEligible && lesson.data.blueprintAreaId === area.id
      ).length;
      const questionCount = questions.filter(
        (question) => question.data.coverageEligible && question.data.blueprintAreaId === area.id
      ).length;

      return {
        domainId: domain.id,
        domainTitle: domain.title,
        blueprintAreaId: area.id,
        blueprintAreaLabel: area.label,
        weightPercent: area.weightPercent,
        lessonCount,
        questionCount,
        covered: lessonCount > 0 && questionCount > 0
      };
    });

    return {
      domainId: domain.id,
      domainTitle: domain.title,
      areaCount: areas.length,
      coveredAreaCount: areas.filter((area) => area.covered).length,
      lessonCount: lessons.filter(
        (lesson) => lesson.data.coverageEligible && lesson.data.domainId === domain.id
      ).length,
      questionCount: questions.filter(
        (question) => question.data.coverageEligible && question.data.domainId === domain.id
      ).length,
      weightedCoveragePercent: areas
        .filter((area) => area.covered)
        .reduce((sum, area) => sum + area.weightPercent, 0),
      areas
    };
  });

  return {
    lessonCount: lessons.length,
    questionCount: questions.length,
    publicLessonCount: lessons.filter((lesson) => lesson.data.publicationState === 'public').length,
    publicQuestionCount: questions.filter((question) => question.data.publicationState === 'public').length,
    fixtureLessonCount: lessons.filter((lesson) => lesson.data.contentKind === 'system-fixture').length,
    fixtureQuestionCount: questions.filter((question) => question.data.contentKind === 'system-fixture').length,
    totalBlueprintAreas: domains.reduce((sum, domain) => sum + domain.areaCount, 0),
    coveredBlueprintAreas: domains.reduce((sum, domain) => sum + domain.coveredAreaCount, 0),
    domains,
    errors
  };
};

export const assertContentEngineIntegrity = (
  lessons: LessonEntry[],
  questions: QuestionEntry[]
): ContentEngineReport => {
  const report = inspectContentEngine(lessons, questions);
  if (report.errors.length > 0) {
    throw new Error(`Content engine validation failed:\n- ${report.errors.join('\n- ')}`);
  }
  return report;
};
