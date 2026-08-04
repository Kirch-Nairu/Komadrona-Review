import { defineModule, type PlannedModule } from '../types';

export const phcMaternalChildModules: PlannedModule[] = [
  defineModule(
    'PHC-FAMILY-ASSESSMENT',
    'primary-health-care',
    'ph-maternal-child',
    'Family-health assessment and community planning',
    [0],
    8,
    'phc-maternal-child',
    ['Family assessment', 'Maternal-child risk identification', 'Care planning and referral networks', 'Community follow-up'],
    'highest',
    'high'
  ),
  defineModule(
    'PHC-MATERNAL-COMMUNITY-CARE',
    'primary-health-care',
    'ph-maternal-child',
    'Community prenatal and postnatal care',
    [1, 2],
    12,
    'phc-maternal-child',
    ['Community antenatal care', 'Community postnatal care', 'Birth preparedness', 'Risk identification and referral', 'Maternal program records'],
    'highest',
    'high'
  ),
  defineModule(
    'PHC-CHILD-HEALTH',
    'primary-health-care',
    'ph-maternal-child',
    'Community newborn and child health',
    [1, 3],
    10,
    'phc-maternal-child',
    ['Newborn and infant follow-up', 'Growth monitoring', 'Neonatal immunization concepts', 'Integrated-management concepts', 'Caregiver counseling'],
    'highest',
    'high'
  ),
  defineModule(
    'PHC-HEALTH-EDUCATION',
    'primary-health-care',
    'ph-maternal-child',
    'Health education, mothers’ classes, and school health',
    [4],
    7,
    'phc-maternal-child',
    ['Learning-needs assessment', 'Counseling and teaching methods', 'Mothers’ classes', 'School-health activities', 'Evaluation of teaching'],
    'highest',
    'standard'
  ),
  defineModule(
    'PHC-HOME-VISITS',
    'primary-health-care',
    'ph-maternal-child',
    'Maternal, newborn, and infant home visits',
    [5],
    8,
    'phc-maternal-child',
    ['Home-visit planning and safety', 'Bag-technique concepts', 'Maternal, newborn, and infant assessment', 'Family counseling', 'Referral and documentation'],
    'highest',
    'high'
  ),
  defineModule(
    'PHC-DOMICILIARY-SERVICES',
    'primary-health-care',
    'ph-maternal-child',
    'Domiciliary obstetric-service procedures',
    [6],
    10,
    'phc-maternal-child',
    ['Scope and prerequisites', 'Home and environmental safety', 'Infection prevention', 'Emergency readiness and referral', 'Documentation and continuity'],
    'highest',
    'critical'
  )
];
