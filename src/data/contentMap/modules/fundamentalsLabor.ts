import { defineModule, type PlannedModule } from '../types';

export const fundamentalsLaborModules: PlannedModule[] = [
  defineModule(
    'FHC-LABOR-MONITORING',
    'fundamentals-health-care',
    'fh-labor-delivery',
    'Labor-monitoring procedures',
    [0],
    4,
    'fundamentals-labor',
    ['Monitoring labor progress', 'Maternal and fetal observation', 'Documentation and escalation'],
    'high',
    'critical'
  ),
  defineModule(
    'FHC-ASEPSIS-PROCEDURES',
    'fundamentals-health-care',
    'fh-labor-delivery',
    'Asepsis and selected procedure foundations',
    [1, 2],
    4,
    'fundamentals-labor',
    ['Hand hygiene and surgical preparation', 'Gloving and positioning', 'Catheterization concepts', 'Internal-examination concepts and scope'],
    'high',
    'critical'
  ),
  defineModule(
    'FHC-DELIVERY-SCOPE',
    'fundamentals-health-care',
    'fh-labor-delivery',
    'Delivery-procedure and medication-safety boundaries',
    [3, 4],
    4,
    'fundamentals-labor',
    ['Perineal and laceration-care concepts', 'Intravenous-fluid concepts', 'Medication-administration concepts', 'Lawful scope, checks, and documentation'],
    'high',
    'critical'
  ),
  defineModule(
    'FHC-LABOR-REFERRAL',
    'fundamentals-health-care',
    'fh-labor-delivery',
    'Recognition and referral of labor complications',
    [5],
    3,
    'fundamentals-labor',
    ['Recognition of complications', 'Initial-response concepts', 'Referral communication and transport'],
    'high',
    'critical'
  )
];
