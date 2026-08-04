import { defineModule, type PlannedModule } from '../types';

export const infantProvisionModules: PlannedModule[] = [
  defineModule(
    'ICF-IMMEDIATE-NEWBORN',
    'infant-care-feeding',
    'ic-provision-care',
    'Immediate newborn care',
    [0],
    10,
    'newborn-care',
    ['Transition after birth', 'Thermal protection', 'Immediate care sequence', 'Skin-to-skin and early feeding', 'Cord care and infection prevention'],
    'highest',
    'critical'
  ),
  defineModule(
    'ICF-ASSESSMENT',
    'infant-care-feeding',
    'ic-provision-care',
    'Newborn and infant assessment',
    [1, 2],
    10,
    'newborn-care',
    ['Initial assessment', 'Normal physical findings', 'Growth measurements', 'Maturity concepts', 'Recognition of deviations', 'Documentation and observation'],
    'highest',
    'high'
  ),
  defineModule(
    'ICF-EMERGENCY-REFERRAL',
    'infant-care-feeding',
    'ic-provision-care',
    'Emergency recognition and referral',
    [3],
    6,
    'newborn-care',
    ['Danger-sign recognition', 'Initial-response concepts', 'Referral and transport boundaries', 'Caregiver return precautions'],
    'highest',
    'critical'
  ),
  defineModule(
    'ICF-GROWTH-DEVELOPMENT',
    'infant-care-feeding',
    'ic-provision-care',
    'Growth and development monitoring',
    [4],
    7,
    'newborn-care',
    ['Normal growth patterns', 'Developmental milestones', 'Growth monitoring', 'Developmental warning signs', 'Family support and referral'],
    'highest',
    'high'
  ),
  defineModule(
    'ICF-PREVENTIVE-CARE',
    'infant-care-feeding',
    'ic-provision-care',
    'Promotive and preventive infant care',
    [5],
    7,
    'newborn-care',
    ['Routine general care', 'Newborn screening concepts', 'Hearing-screening concepts', 'Immunization concepts', 'Safe sleep and injury prevention', 'Follow-up education'],
    'highest',
    'high'
  ),
  defineModule(
    'ICF-COMMON-PROBLEMS',
    'infant-care-feeding',
    'ic-provision-care',
    'Common newborn and infant concerns',
    [6],
    6,
    'newborn-care',
    ['Common minor concerns', 'Feeding and hydration concerns', 'Recognition of deterioration', 'Scope boundaries and referral'],
    'highest',
    'high'
  ),
  defineModule(
    'ICF-EVALUATION',
    'infant-care-feeding',
    'ic-provision-care',
    'Evaluation and continuity of infant care',
    [7],
    4,
    'newborn-care',
    ['Evaluating response to care', 'Documentation and handover', 'Follow-up planning', 'Caregiver understanding'],
    'highest',
    'high'
  )
];
