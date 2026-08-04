import { defineModule, type PlannedModule } from '../types';

export const fundamentalsPostpartumModules: PlannedModule[] = [
  defineModule(
    'FHC-POSTPARTUM-ASSESSMENT',
    'fundamentals-health-care',
    'fh-postpartum',
    'Postpartum monitoring and procedures',
    [0, 1],
    4,
    'fundamentals-postpartum',
    ['Maternal monitoring and evaluation', 'Routine postpartum procedures', 'Documentation and continuity'],
    'high',
    'critical'
  ),
  defineModule(
    'FHC-POSTPARTUM-COUNSELING',
    'fundamentals-health-care',
    'fh-postpartum',
    'Postpartum counseling',
    [2],
    2,
    'fundamentals-postpartum',
    ['Breastfeeding counseling', 'Diet, exercise, and hygiene', 'Family-planning counseling', 'Respectful communication'],
    'high',
    'high'
  ),
  defineModule(
    'FHC-POSTPARTUM-HOME-VISITS',
    'fundamentals-health-care',
    'fh-postpartum',
    'Protocol-based postpartum home visits',
    [3],
    2,
    'fundamentals-postpartum',
    ['Home-visit preparation', 'Maternal and environmental assessment', 'Documentation and follow-up'],
    'high',
    'high'
  ),
  defineModule(
    'FHC-POSTPARTUM-REFERRAL',
    'fundamentals-health-care',
    'fh-postpartum',
    'Recognition and referral of postpartum complications',
    [4],
    2,
    'fundamentals-postpartum',
    ['Postpartum warning signs', 'Initial-response boundaries', 'Referral and handover'],
    'high',
    'critical'
  )
];
