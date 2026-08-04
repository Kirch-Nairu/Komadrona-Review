import { examBlueprint } from './examBlueprint';
import { referenceRegistry } from './referenceRegistry';
import {
  blueprintCompetencyCatalog,
  competencyIdFor,
  contentGaps,
  initialImplementationSequence,
  plannedModules,
  sourcePackets
} from './contentMap';

export interface AreaMappingReport {
  domainId: string;
  domainTitle: string;
  blueprintAreaId: string;
  blueprintAreaLabel: string;
  evidenceStatus: string;
  competencyCount: number;
  mappedCompetencyCount: number;
  moduleCount: number;
  plannedLessonCount: number;
  questionTarget: number;
  expectedQuestionTarget: number;
  sourceReadyModuleCount: number;
  blockedModuleCount: number;
}

export interface DomainMappingReport {
  domainId: string;
  domainTitle: string;
  competencyCount: number;
  mappedCompetencyCount: number;
  moduleCount: number;
  plannedLessonCount: number;
  questionTarget: number;
  sourceReadyModuleCount: number;
  blockedModuleCount: number;
  areas: AreaMappingReport[];
}

export interface ContentMapReport {
  competencyCount: number;
  mappedCompetencyCount: number;
  moduleCount: number;
  plannedLessonCount: number;
  questionTarget: number;
  sourcePacketCount: number;
  readySourcePacketCount: number;
  acquiringSourcePacketCount: number;
  blockedSourcePacketCount: number;
  sourceReadyModuleCount: number;
  sourceAcquisitionModuleCount: number;
  blockedModuleCount: number;
  openGapCount: number;
  blockerCount: number;
  currentlyUnavailableGapCount: number;
  domains: DomainMappingReport[];
  errors: string[];
}

export const inspectContentMap = (): ContentMapReport => {
  const errors: string[] = [];
  const referenceIds = new Set(referenceRegistry.map((reference) => reference.id));
  const gapById = new Map(contentGaps.map((gap) => [gap.id, gap]));
  const packetById = new Map(sourcePackets.map((packet) => [packet.id, packet]));
  const moduleById = new Map<string, (typeof plannedModules)[number]>();
  const plannedLessonIds = new Set<string>();

  if (gapById.size !== contentGaps.length) errors.push('Content-gap IDs must be unique.');
  if (packetById.size !== sourcePackets.length) errors.push('Source-packet IDs must be unique.');

  for (const gap of contentGaps) {
    if (gap.availability === 'currently-unavailable' && !gap.availabilityNote) {
      errors.push(`Unavailable gap ${gap.id} must explain its availability state.`);
    }
    if (gap.availabilityNote && gap.availability !== 'currently-unavailable') {
      errors.push(`Gap ${gap.id} has an availability note without an unavailable state.`);
    }
  }

  for (const packet of sourcePackets) {
    if (packet.referenceIds.length === 0) {
      errors.push(`Source packet ${packet.id} has no registered references.`);
    }
    for (const referenceId of packet.referenceIds) {
      if (!referenceIds.has(referenceId)) {
        errors.push(`Source packet ${packet.id} references unknown source ${referenceId}.`);
      }
    }
    for (const gapId of packet.openGapIds) {
      if (!gapById.has(gapId)) errors.push(`Source packet ${packet.id} references unknown gap ${gapId}.`);
    }
    if (packet.status === 'ready' && packet.openGapIds.length > 0) {
      errors.push(`Ready source packet ${packet.id} still has open gaps.`);
    }
    if (packet.status === 'blocked' && packet.openGapIds.length === 0) {
      errors.push(`Blocked source packet ${packet.id} must identify a blocking gap.`);
    }
  }

  const domainById = new Map(examBlueprint.map((domain) => [domain.id, domain]));
  const areaById = new Map(
    examBlueprint.flatMap((domain) =>
      domain.areas.map((area) => [area.id, { domainId: domain.id, domainTitle: domain.title, area }] as const)
    )
  );

  for (const module of plannedModules) {
    if (moduleById.has(module.id)) errors.push(`Duplicate planned module ID: ${module.id}.`);
    moduleById.set(module.id, module);

    const domain = domainById.get(module.domainId);
    const areaRecord = areaById.get(module.blueprintAreaId);
    const packet = packetById.get(module.sourcePacketId);

    if (!domain) errors.push(`Module ${module.id} references unknown domain ${module.domainId}.`);
    if (!areaRecord) {
      errors.push(`Module ${module.id} references unknown blueprint area ${module.blueprintAreaId}.`);
    } else {
      if (areaRecord.domainId !== module.domainId) {
        errors.push(`Module ${module.id} maps ${module.blueprintAreaId} to the wrong domain.`);
      }
      for (const competencyIndex of module.competencyIndexes) {
        if (
          !Number.isInteger(competencyIndex) ||
          competencyIndex < 0 ||
          competencyIndex >= areaRecord.area.competencies.length
        ) {
          errors.push(`Module ${module.id} references invalid competency index ${competencyIndex}.`);
        }
      }
    }

    if (!packet) {
      errors.push(`Module ${module.id} references unknown source packet ${module.sourcePacketId}.`);
    } else {
      if (module.stage === 'ready-to-draft' && packet.status !== 'ready') {
        errors.push(`Module ${module.id} is ready to draft but source packet ${packet.id} is not ready.`);
      }
      if (module.stage === 'blocked' && packet.status !== 'blocked') {
        errors.push(`Blocked module ${module.id} must use a blocked source packet.`);
      }
      if (module.stage !== 'blocked' && packet.status === 'blocked') {
        errors.push(`Module ${module.id} uses blocked packet ${packet.id} but is not marked blocked.`);
      }
    }

    if (module.competencyIndexes.length === 0) errors.push(`Module ${module.id} maps no competency.`);
    if (module.questionTarget <= 0 || !Number.isInteger(module.questionTarget)) {
      errors.push(`Module ${module.id} must have a positive integer question target.`);
    }
    if (module.plannedLessons.length === 0) errors.push(`Module ${module.id} plans no lessons.`);

    for (const lesson of module.plannedLessons) {
      if (plannedLessonIds.has(lesson.id)) errors.push(`Duplicate planned lesson ID: ${lesson.id}.`);
      plannedLessonIds.add(lesson.id);
    }
  }

  const sequenceIds = new Set<string>();
  for (const moduleId of initialImplementationSequence) {
    if (!moduleById.has(moduleId)) errors.push(`Initial sequence references unknown module ${moduleId}.`);
    if (sequenceIds.has(moduleId)) errors.push(`Initial sequence repeats module ${moduleId}.`);
    sequenceIds.add(moduleId);
  }

  const mappedCompetencyIds = new Set(
    plannedModules.flatMap((module) =>
      module.competencyIndexes.map((index) => competencyIdFor(module.blueprintAreaId, index))
    )
  );

  for (const competency of blueprintCompetencyCatalog) {
    if (!mappedCompetencyIds.has(competency.id)) {
      errors.push(`Blueprint competency ${competency.id} has no planned module.`);
    }
  }

  const domains: DomainMappingReport[] = examBlueprint.map((domain) => {
    const areas: AreaMappingReport[] = domain.areas.map((area) => {
      const areaModules = plannedModules.filter((module) => module.blueprintAreaId === area.id);
      const mappedAreaCompetencies = new Set(
        areaModules.flatMap((module) =>
          module.competencyIndexes.map((index) => competencyIdFor(area.id, index))
        )
      );
      const expectedQuestionTarget = area.itemCount ?? area.weightPercent;
      const questionTarget = areaModules.reduce((sum, module) => sum + module.questionTarget, 0);

      if (questionTarget !== expectedQuestionTarget) {
        errors.push(`Area ${area.id} allocates ${questionTarget} questions; expected ${expectedQuestionTarget}.`);
      }

      return {
        domainId: domain.id,
        domainTitle: domain.title,
        blueprintAreaId: area.id,
        blueprintAreaLabel: area.label,
        evidenceStatus: area.evidenceStatus,
        competencyCount: area.competencies.length,
        mappedCompetencyCount: mappedAreaCompetencies.size,
        moduleCount: areaModules.length,
        plannedLessonCount: areaModules.reduce((sum, module) => sum + module.plannedLessons.length, 0),
        questionTarget,
        expectedQuestionTarget,
        sourceReadyModuleCount: areaModules.filter(
          (module) => packetById.get(module.sourcePacketId)?.status === 'ready'
        ).length,
        blockedModuleCount: areaModules.filter((module) => module.stage === 'blocked').length
      };
    });

    return {
      domainId: domain.id,
      domainTitle: domain.title,
      competencyCount: areas.reduce((sum, area) => sum + area.competencyCount, 0),
      mappedCompetencyCount: areas.reduce((sum, area) => sum + area.mappedCompetencyCount, 0),
      moduleCount: areas.reduce((sum, area) => sum + area.moduleCount, 0),
      plannedLessonCount: areas.reduce((sum, area) => sum + area.plannedLessonCount, 0),
      questionTarget: areas.reduce((sum, area) => sum + area.questionTarget, 0),
      sourceReadyModuleCount: areas.reduce((sum, area) => sum + area.sourceReadyModuleCount, 0),
      blockedModuleCount: areas.reduce((sum, area) => sum + area.blockedModuleCount, 0),
      areas
    };
  });

  const questionTarget = plannedModules.reduce((sum, module) => sum + module.questionTarget, 0);
  if (questionTarget !== 500) {
    errors.push(`Version 1 module plan allocates ${questionTarget} questions; expected 500.`);
  }

  return {
    competencyCount: blueprintCompetencyCatalog.length,
    mappedCompetencyCount: mappedCompetencyIds.size,
    moduleCount: plannedModules.length,
    plannedLessonCount: plannedModules.reduce((sum, module) => sum + module.plannedLessons.length, 0),
    questionTarget,
    sourcePacketCount: sourcePackets.length,
    readySourcePacketCount: sourcePackets.filter((packet) => packet.status === 'ready').length,
    acquiringSourcePacketCount: sourcePackets.filter((packet) => packet.status === 'acquiring').length,
    blockedSourcePacketCount: sourcePackets.filter((packet) => packet.status === 'blocked').length,
    sourceReadyModuleCount: plannedModules.filter(
      (module) => packetById.get(module.sourcePacketId)?.status === 'ready'
    ).length,
    sourceAcquisitionModuleCount: plannedModules.filter((module) => module.stage === 'source-acquisition').length,
    blockedModuleCount: plannedModules.filter((module) => module.stage === 'blocked').length,
    openGapCount: contentGaps.length,
    blockerCount: contentGaps.filter((gap) => gap.severity === 'blocker').length,
    currentlyUnavailableGapCount: contentGaps.filter(
      (gap) => gap.availability === 'currently-unavailable'
    ).length,
    domains,
    errors
  };
};

export const assertContentMapIntegrity = (): ContentMapReport => {
  const report = inspectContentMap();
  if (report.errors.length > 0) {
    throw new Error(`Content-map validation failed:\n- ${report.errors.join('\n- ')}`);
  }
  return report;
};
