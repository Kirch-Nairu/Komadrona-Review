import { defineModule, type PlannedModule } from '../types';

export const phcCommunityModules: PlannedModule[] = [
  defineModule(
    'PHC-EPIDEMIOLOGY-STATISTICS',
    'primary-health-care',
    'ph-community-foundations',
    'Epidemiology, statistics, and health indicators',
    [0, 1],
    8,
    'phc-community',
    ['Basic epidemiologic terms', 'Rates, ratios, and proportions', 'Morbidity, mortality, and vital events', 'Maternal and infant indicators', 'Limits of data interpretation'],
    'high',
    'standard'
  ),
  defineModule(
    'PHC-WORKFORCE-COMMUNICATION',
    'primary-health-care',
    'ph-community-foundations',
    'Health-worker roles, communication, and conflict',
    [2, 3],
    6,
    'phc-community',
    ['Functions and responsibilities of health workers', 'Interprofessional coordination', 'Conflict management', 'Culturally responsive communication'],
    'high',
    'standard'
  ),
  defineModule(
    'PHC-COMMUNITY-ASSESSMENT',
    'primary-health-care',
    'ph-community-foundations',
    'Family and community assessment',
    [4],
    8,
    'phc-community',
    ['Family-health assessment', 'Community surveys and data gathering', 'Community-diagnosis concepts', 'Priority setting and planning'],
    'high',
    'high'
  ),
  defineModule(
    'PHC-PROGRAMS-RECORDS',
    'primary-health-care',
    'ph-community-foundations',
    'Community programs, records, and evaluation',
    [5],
    8,
    'phc-community',
    ['Community-program planning', 'Family and community records', 'Implementation and monitoring', 'Program evaluation'],
    'high',
    'high'
  )
];
