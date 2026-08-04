import { defineModule, type PlannedModule } from '../types';

export const fundamentalsPrenatalModules: PlannedModule[] = [
  defineModule(
    'FHC-PRENATAL-ASSESSMENT',
    'fundamentals-health-care',
    'fh-prenatal',
    'Prenatal examination procedures',
    [0, 1, 2],
    7,
    'fundamentals-prenatal',
    ['General physical examination', 'Gestational-age and expected-date computation', 'Leopold maneuvers', 'Fetal-auscultation concepts'],
    'high',
    'high'
  ),
  defineModule(
    'FHC-PRENATAL-PREVENTION',
    'fundamentals-health-care',
    'fh-prenatal',
    'Prenatal prevention and health teaching',
    [3, 4],
    4,
    'fundamentals-prenatal',
    ['Preventive-care administration concepts', 'Hygiene, diet, and exercise teaching', 'Medication-safety and scope boundaries'],
    'high',
    'critical'
  ),
  defineModule(
    'FHC-PRENATAL-PLANNING',
    'fundamentals-health-care',
    'fh-prenatal',
    'Birth planning, laboratory referral, and home visits',
    [5],
    4,
    'fundamentals-prenatal',
    ['Birth planning', 'Laboratory-referral concepts', 'Prenatal home visits', 'Documentation and follow-up'],
    'high',
    'high'
  )
];
