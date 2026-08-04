import { defineModule, type PlannedModule } from '../types';

export const professionalLawModules: PlannedModule[] = [
  defineModule(
    'PGD-LAW-SOCIETY',
    'professional-growth',
    'pg-law',
    'Law, society, rights, and professional liability',
    [0, 1],
    30,
    'professional-law-ethics',
    ['RA 7392 foundations', 'Rights and responsibilities of midwives', 'Scope and regulatory structure', 'Negligence and standards of care', 'Civil and criminal liability concepts', 'Family Code concepts', 'Documentation and duty to refer'],
    'highest',
    'critical'
  ),
  defineModule(
    'PGD-CIVIL-CODE',
    'professional-growth',
    'pg-law',
    'Civil Code concepts relevant to practice',
    [2],
    6,
    'professional-law-ethics',
    ['Contracts at the required blueprint level', 'Wills at the required blueprint level', 'Professional documentation and referral for legal advice'],
    'highest',
    'high'
  ),
  defineModule(
    'PGD-EMPLOYMENT',
    'professional-growth',
    'pg-law',
    'Employment practice and professional adjustment',
    [3],
    4,
    'professional-law-ethics',
    ['Employment-practice foundations', 'Workplace rights and responsibilities', 'Professional adjustment and conflict', 'Public-health-worker concepts'],
    'highest',
    'high'
  ),
  defineModule(
    'PGD-CURRENT-DEVELOPMENTS',
    'professional-growth',
    'pg-law',
    'Current developments affecting practice',
    [4],
    10,
    'professional-law-ethics',
    ['Current PRC and Board issuances', 'Current DOH and CHED developments', 'Data privacy and digital documentation', 'Emerging maternal-child priorities', 'Responsible use of technology and AI'],
    'highest',
    'high'
  )
];
