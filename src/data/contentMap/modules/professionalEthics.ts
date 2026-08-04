import { defineModule, type PlannedModule } from '../types';

export const professionalEthicsModules: PlannedModule[] = [
  defineModule(
    'PGD-ETHICS',
    'professional-growth',
    'pg-ethics',
    'Ethics and bioethics',
    [0],
    10,
    'professional-law-ethics',
    ['Ethical principles', 'Midwifery ethics and bioethics', 'Consent, autonomy, confidentiality, and dignity', 'Ethical decision-making'],
    'highest',
    'high'
  ),
  defineModule(
    'PGD-PERSONAL-DEVELOPMENT',
    'professional-growth',
    'pg-ethics',
    'Personal development and self-directed learning',
    [1],
    20,
    'professional-law-ethics',
    ['Self-awareness and professional identity', 'Learning needs and reflective practice', 'Communication and emotional regulation', 'Resilience and professional boundaries', 'Continuing competence'],
    'highest',
    'standard'
  ),
  defineModule(
    'PGD-PROFESSIONAL-FORMATION',
    'professional-growth',
    'pg-ethics',
    'Professional image, organizations, and change',
    [2],
    20,
    'professional-law-ethics',
    ['Professional image and conduct', 'Professional and civic organizations', 'Interprofessional relationships', 'Response to criticism and change', 'Advocacy and social responsibility'],
    'highest',
    'standard'
  )
];
