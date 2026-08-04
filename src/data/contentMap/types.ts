export type GapCategory = 'mapping' | 'source' | 'review' | 'content' | 'assessment' | 'product';
export type GapSeverity = 'high' | 'blocker';
export type SourcePacketStatus = 'ready' | 'acquiring' | 'blocked';
export type ModulePriority = 'highest' | 'high' | 'core' | 'pending';
export type ModuleRisk = 'standard' | 'high' | 'critical';
export type ModuleStage =
  | 'planned'
  | 'source-acquisition'
  | 'ready-to-draft'
  | 'drafting'
  | 'source-checked'
  | 'clinically-reviewed'
  | 'released'
  | 'blocked';

export interface ContentGap {
  id: string;
  category: GapCategory;
  severity: GapSeverity;
  title: string;
  blocks: string[];
}

export interface SourcePacket {
  id: string;
  title: string;
  status: SourcePacketStatus;
  referenceIds: string[];
  openGapIds: string[];
}

export interface PlannedLesson {
  id: string;
  title: string;
}

export interface PlannedModule {
  id: string;
  domainId: string;
  blueprintAreaId: string;
  title: string;
  competencyIndexes: number[];
  questionTarget: number;
  sourcePacketId: string;
  plannedLessons: PlannedLesson[];
  priority: ModulePriority;
  riskLevel: ModuleRisk;
  stage: ModuleStage;
  note?: string;
}

export const defineModule = (
  id: string,
  domainId: string,
  blueprintAreaId: string,
  title: string,
  competencyIndexes: number[],
  questionTarget: number,
  sourcePacketId: string,
  lessonTitles: string[],
  priority: ModulePriority,
  riskLevel: ModuleRisk,
  stage: ModuleStage = 'source-acquisition',
  note?: string
): PlannedModule => ({
  id,
  domainId,
  blueprintAreaId,
  title,
  competencyIndexes,
  questionTarget,
  sourcePacketId,
  plannedLessons: lessonTitles.map((lessonTitle, index) => ({
    id: `${id}-L${String(index + 1).padStart(2, '0')}`,
    title: lessonTitle
  })),
  priority,
  riskLevel,
  stage,
  ...(note ? { note } : {})
});
