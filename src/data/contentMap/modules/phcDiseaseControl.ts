import { defineModule, type PlannedModule } from '../types';

export const phcDiseaseControlModules: PlannedModule[] = [
  defineModule(
    'PHC-COMMUNICABLE-DISEASE',
    'primary-health-care',
    'ph-disease-control',
    'Communicable-disease prevention and control',
    [0, 1, 2, 3],
    9,
    'phc-disease-control',
    ['Communicable-disease concepts', 'Modes of transmission', 'Identification and surveillance concepts', 'Prevention and control', 'Maternal-child implications and referral'],
    'high',
    'high'
  ),
  defineModule(
    'PHC-NONCOMMUNICABLE-DISEASE',
    'primary-health-care',
    'ph-disease-control',
    'Noncommunicable-disease prevention and referral',
    [0, 4],
    6,
    'phc-disease-control',
    ['Major NCD concepts and risk factors', 'Pregnancy and family-health implications', 'Prevention and screening', 'Referral and follow-up'],
    'high',
    'high'
  )
];
