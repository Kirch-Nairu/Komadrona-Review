import type { ContentGap } from './types';

export const contentGaps: ContentGap[] = [
  {
    id: 'MAP-FHC-001',
    category: 'mapping',
    severity: 'blocker',
    title: 'Verify the remaining 60% of the Fundamentals Table of Specifications',
    blocks: ['Final Fundamentals module allocation', 'Fundamentals proportional question allocation']
  },
  {
    id: 'SRC-FOUNDATIONAL-SCIENCES-001',
    category: 'source',
    severity: 'high',
    title: 'Acquire authoritative foundational-science references',
    blocks: ['Anatomy, physiology, microbiology, pharmacology, and nutrition lessons']
  },
  {
    id: 'SRC-PH-ANC-001',
    category: 'source',
    severity: 'blocker',
    title: 'Current Philippine antenatal-care source is unavailable to the project',
    blocks: ['Antenatal assessment and teaching modules'],
    availability: 'currently-unavailable',
    availabilityNote:
      'No complete, current, officially controlled Philippine antenatal-care source has been located and verified for Komadrona Review. Keep the affected modules blocked until a qualifying source exists, can be obtained, and passes version and applicability checks.'
  },
  {
    id: 'SRC-PH-PCPNC-001',
    category: 'source',
    severity: 'blocker',
    title: 'Complete current Philippine PCPNC manual is unavailable to the project',
    blocks: ['Antenatal, postpartum, newborn, and home-care modules'],
    availability: 'currently-unavailable',
    availabilityNote:
      'No complete, current, officially controlled PCPNC manual has been located and verified for Komadrona Review. Keep the affected modules blocked until a qualifying edition exists, can be obtained, and passes supersession and locator checks.'
  },
  {
    id: 'SRC-PH-BEMONC-001',
    category: 'source',
    severity: 'blocker',
    title: 'Acquire and version-check current Philippine BEmONC material',
    blocks: ['Labor, complication, emergency, and referral modules']
  },
  {
    id: 'SRC-PH-EINC-001',
    category: 'source',
    severity: 'blocker',
    title: 'Acquire current Philippine EINC or Unang Yakap guidance',
    blocks: ['Labor, childbirth, and immediate-newborn modules']
  },
  {
    id: 'SRC-PH-FP-CLINICAL-001',
    category: 'source',
    severity: 'blocker',
    title: 'Acquire current Philippine family-planning clinical standards',
    blocks: ['Family-planning and reproductive-health modules']
  },
  {
    id: 'SRC-PH-NBS-OPERATIONS-001',
    category: 'source',
    severity: 'high',
    title: 'Acquire current newborn-screening operational guidance',
    blocks: ['Preventive newborn-care modules']
  },
  {
    id: 'SRC-PH-NIP-001',
    category: 'source',
    severity: 'high',
    title: 'Acquire current National Immunization Program guidance',
    blocks: ['Preventive infant and community child-health modules']
  },
  {
    id: 'SRC-PH-BREASTFEEDING-001',
    category: 'source',
    severity: 'blocker',
    title: 'Acquire current Philippine breastfeeding and Milk Code guidance',
    blocks: ['Breastfeeding-support modules']
  },
  {
    id: 'SRC-PH-IYCF-001',
    category: 'source',
    severity: 'blocker',
    title: 'Acquire current infant and young child feeding guidance',
    blocks: ['Infant-nutrition modules']
  },
  {
    id: 'SRC-PH-IMCI-001',
    category: 'source',
    severity: 'blocker',
    title: 'Acquire current IMCI or sick-young-infant guidance',
    blocks: ['Sick-infant assessment, care, and counseling modules']
  },
  {
    id: 'SRC-PH-IPC-001',
    category: 'source',
    severity: 'blocker',
    title: 'Acquire current Philippine infection-prevention standards',
    blocks: ['Labor, delivery, newborn, and home-care procedure modules']
  },
  {
    id: 'SRC-RA7392-IRR-001',
    category: 'source',
    severity: 'high',
    title: 'Acquire the current implementing rules of RA 7392',
    blocks: ['Professional law and scope modules']
  },
  {
    id: 'SRC-MIDWIFERY-ETHICS-001',
    category: 'source',
    severity: 'high',
    title: 'Acquire the current official Code of Ethics for midwives',
    blocks: ['Ethics and professional-formation modules']
  },
  {
    id: 'SRC-CURRENT-BOARD-ISSUANCES-001',
    category: 'source',
    severity: 'high',
    title: 'Inventory current PRC and Board of Midwifery issuances',
    blocks: ['Current developments and regulatory modules']
  },
  {
    id: 'SRC-PH-PHC-OPERATIONS-001',
    category: 'source',
    severity: 'high',
    title: 'Acquire current Philippine primary-health-care operational guidance',
    blocks: ['Community assessment, records, home visits, and program modules']
  },
  {
    id: 'SRC-PH-DISEASE-CONTROL-001',
    category: 'source',
    severity: 'high',
    title: 'Acquire current Philippine disease-control guidance',
    blocks: ['Communicable and noncommunicable disease modules']
  }
];
