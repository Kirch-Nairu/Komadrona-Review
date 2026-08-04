import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Expected an ISO date in YYYY-MM-DD format');

const sourceReferenceSchema = z.object({
  referenceId: z.string().min(1),
  locator: z.string().min(3)
});

const contentStatusSchema = z.enum([
  'draft',
  'source-checked',
  'clinically-reviewed',
  'needs-reverification',
  'archived'
]);

const riskLevelSchema = z.enum(['low', 'moderate', 'high', 'critical']);
const publicationStateSchema = z.enum(['internal-preview', 'public']);
const contentKindSchema = z.enum(['review', 'system-fixture']);

const lessons = defineCollection({
  loader: glob({ base: './src/content/lessons', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    contentId: z.string().regex(/^[A-Z0-9-]+$/),
    title: z.string().min(4),
    summary: z.string().min(20),
    contentKind: contentKindSchema,
    coverageEligible: z.boolean(),
    domainId: z.string().min(1),
    blueprintAreaId: z.string().min(1),
    module: z.string().min(2),
    priority: z.enum(['highest', 'high', 'core', 'supporting']),
    status: contentStatusSchema,
    riskLevel: riskLevelSchema,
    publicationState: publicationStateSchema,
    learningObjectives: z.array(z.string().min(8)).min(1),
    prerequisites: z.array(z.string()).default([]),
    sources: z.array(sourceReferenceSchema).min(1),
    lastVerified: isoDate.nullable(),
    nextReview: isoDate.nullable(),
    sourceChecker: z.string().min(2).nullable(),
    clinicalReviewer: z.string().min(2).nullable(),
    estimatedMinutes: z.number().int().positive(),
    questionIds: z.array(z.string()).default([]),
    keywords: z.array(z.string().min(2)).min(1),
    order: z.number().int().positive()
  })
});

const questions = defineCollection({
  loader: glob({ base: './src/content/questions', pattern: '**/*.json' }),
  schema: z.object({
    questionId: z.string().regex(/^[A-Z0-9-]+$/),
    version: z.number().int().positive(),
    contentKind: contentKindSchema,
    coverageEligible: z.boolean(),
    domainId: z.string().min(1),
    blueprintAreaId: z.string().min(1),
    lessonIds: z.array(z.string().min(1)).min(1),
    stem: z.string().min(12),
    choices: z
      .array(
        z.object({
          id: z.string().regex(/^[a-z0-9-]+$/),
          text: z.string().min(1)
        })
      )
      .length(4),
    correctChoiceId: z.string().min(1),
    rationale: z.string().min(20),
    distractorRationales: z
      .array(
        z.object({
          choiceId: z.string().min(1),
          rationale: z.string().min(10)
        })
      )
      .length(3),
    difficulty: z.enum(['basic', 'intermediate', 'advanced']),
    cognitiveLevel: z.enum(['recall', 'understanding', 'application', 'analysis']),
    riskLevel: riskLevelSchema,
    sources: z.array(sourceReferenceSchema).min(1),
    status: contentStatusSchema,
    publicationState: publicationStateSchema,
    lastVerified: isoDate.nullable(),
    sourceChecker: z.string().min(2).nullable(),
    clinicalReviewer: z.string().min(2).nullable(),
    tags: z.array(z.string().min(2)).min(1),
    estimatedSeconds: z.number().int().positive()
  })
});

export const collections = { lessons, questions };
