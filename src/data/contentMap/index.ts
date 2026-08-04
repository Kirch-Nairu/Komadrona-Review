import { examBlueprint } from '../examBlueprint';
import { contentGaps } from './gaps';
import { sourcePackets } from './sourcePackets';
import { obstetricsModules } from './modules/obstetrics';
import { infantProvisionModules } from './modules/infantProvision';
import { infantFeedingModules } from './modules/infantFeeding';
import { infantIllnessModules } from './modules/infantIllness';
import { professionalEthicsModules } from './modules/professionalEthics';
import { professionalLawModules } from './modules/professionalLaw';
import { fundamentalsPrenatalModules } from './modules/fundamentalsPrenatal';
import { fundamentalsLaborModules } from './modules/fundamentalsLabor';
import { fundamentalsPostpartumModules } from './modules/fundamentalsPostpartum';
import { fundamentalsPendingModules } from './modules/fundamentalsPending';
import { phcCommunityModules } from './modules/phcCommunity';
import { phcMaternalChildModules } from './modules/phcMaternalChild';
import { phcDiseaseControlModules } from './modules/phcDiseaseControl';

export type {
  ContentGap,
  GapCategory,
  GapSeverity,
  ModulePriority,
  ModuleRisk,
  ModuleStage,
  PlannedLesson,
  PlannedModule,
  SourcePacket,
  SourcePacketStatus
} from './types';

export { contentGaps, sourcePackets };

export const competencyIdFor = (blueprintAreaId: string, zeroBasedIndex: number) =>
  `${blueprintAreaId}:c${String(zeroBasedIndex + 1).padStart(2, '0')}`;

export const blueprintCompetencyCatalog = examBlueprint.flatMap((domain) =>
  domain.areas.flatMap((area) =>
    area.competencies.map((label, index) => ({
      id: competencyIdFor(area.id, index),
      domainId: domain.id,
      domainTitle: domain.title,
      blueprintAreaId: area.id,
      blueprintAreaLabel: area.label,
      index,
      label,
      evidenceStatus: area.evidenceStatus
    }))
  )
);

export const plannedModules = [
  ...obstetricsModules,
  ...infantProvisionModules,
  ...infantFeedingModules,
  ...infantIllnessModules,
  ...professionalEthicsModules,
  ...professionalLawModules,
  ...fundamentalsPrenatalModules,
  ...fundamentalsLaborModules,
  ...fundamentalsPostpartumModules,
  ...fundamentalsPendingModules,
  ...phcCommunityModules,
  ...phcMaternalChildModules,
  ...phcDiseaseControlModules
];

export const initialImplementationSequence = [
  'OBS-ANTENATAL-ASSESSMENT',
  'OBS-ANTENATAL-TEACHING',
  'OBS-PREGNANCY-FOUNDATIONS',
  'OBS-NORMAL-LABOR',
  'OBS-POSTPARTUM-CARE',
  'ICF-IMMEDIATE-NEWBORN',
  'ICF-ASSESSMENT',
  'ICF-BREASTFEEDING'
] as const;

export const getPlannedModule = (moduleId: string) =>
  plannedModules.find((module) => module.id === moduleId);

export const getSourcePacket = (packetId: string) =>
  sourcePackets.find((packet) => packet.id === packetId);
