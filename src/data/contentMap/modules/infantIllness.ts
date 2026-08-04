import { defineModule, type PlannedModule } from '../types';

export const infantIllnessModules: PlannedModule[] = [
  defineModule(
    'ICF-SICK-INFANT-ASSESSMENT',
    'infant-care-feeding',
    'ic-illness',
    'Assessment and classification of the sick young infant',
    [0],
    4,
    'sick-infant',
    ['Structured assessment concepts', 'Classification and danger-sign recognition', 'Urgent referral decisions', 'Documentation'],
    'high',
    'critical'
  ),
  defineModule(
    'ICF-SICK-INFANT-CARE',
    'infant-care-feeding',
    'ic-illness',
    'Care of the sick young infant',
    [1],
    3,
    'sick-infant',
    ['Prescribed-care boundaries', 'Supportive-care concepts', 'Monitoring response and deterioration', 'Referral and follow-up'],
    'high',
    'critical'
  ),
  defineModule(
    'ICF-SICK-INFANT-COUNSELING',
    'infant-care-feeding',
    'ic-illness',
    'Caregiver counseling for infant illness',
    [2],
    3,
    'sick-infant',
    ['Home-care counseling', 'Feeding support during illness', 'Return precautions', 'Follow-up and referral communication'],
    'high',
    'high'
  )
];
