import { defineModule, type PlannedModule } from '../types';

export const fundamentalsPendingModules: PlannedModule[] = [
  defineModule(
    'FHC-PENDING-OFFICIAL-SCOPE',
    'fundamentals-health-care',
    'fh-pending',
    'Remaining official Fundamentals scope',
    [0],
    60,
    'fundamentals-pending',
    ['Pending exact official transcription before module and lesson allocation'],
    'pending',
    'critical',
    'blocked',
    'No detailed content allocation will be invented until MAP-FHC-001 is closed.'
  )
];
