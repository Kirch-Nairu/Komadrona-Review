import type { SourcePacket } from './types';

export const sourcePackets: SourcePacket[] = [
  {
    id: 'ob-foundations',
    title: 'Obstetrics foundational sciences',
    status: 'acquiring',
    referenceIds: ['prc-midwifery-tos-2013', 'ched-cmo-3-2023'],
    openGapIds: ['SRC-FOUNDATIONAL-SCIENCES-001']
  },
  {
    id: 'antenatal-care',
    title: 'Antenatal care source packet',
    status: 'acquiring',
    referenceIds: ['prc-midwifery-tos-2013', 'doh-safe-motherhood', 'who-anc-2016', 'ra-11148'],
    openGapIds: ['SRC-PH-ANC-001', 'SRC-PH-PCPNC-001']
  },
  {
    id: 'labor-childbirth',
    title: 'Labor and childbirth source packet',
    status: 'acquiring',
    referenceIds: [
      'prc-midwifery-tos-2013',
      'doh-safe-motherhood',
      'who-intrapartum-2018',
      'who-labour-care-guide-2025'
    ],
    openGapIds: ['SRC-PH-BEMONC-001', 'SRC-PH-EINC-001', 'SRC-PH-IPC-001']
  },
  {
    id: 'postpartum-care',
    title: 'Postpartum-care source packet',
    status: 'acquiring',
    referenceIds: ['prc-midwifery-tos-2013', 'doh-safe-motherhood', 'who-postnatal-2022', 'ra-11148'],
    openGapIds: ['SRC-PH-PCPNC-001']
  },
  {
    id: 'maternal-complications',
    title: 'Maternal complications and emergency source packet',
    status: 'acquiring',
    referenceIds: [
      'prc-midwifery-tos-2013',
      'doh-safe-motherhood',
      'who-intrapartum-2018',
      'who-postnatal-2022'
    ],
    openGapIds: ['SRC-PH-BEMONC-001', 'SRC-PH-IPC-001']
  },
  {
    id: 'reproductive-health',
    title: 'Gynecology, reproductive-health, and family-planning source packet',
    status: 'acquiring',
    referenceIds: ['prc-midwifery-tos-2013', 'ra-10354'],
    openGapIds: ['SRC-PH-FP-CLINICAL-001']
  },
  {
    id: 'newborn-care',
    title: 'Newborn and infant-care source packet',
    status: 'acquiring',
    referenceIds: [
      'prc-midwifery-tos-2013',
      'who-postnatal-2022',
      'who-preterm-lbw-2022',
      'ra-9288',
      'ra-11148'
    ],
    openGapIds: ['SRC-PH-EINC-001', 'SRC-PH-NBS-OPERATIONS-001', 'SRC-PH-NIP-001', 'SRC-PH-IPC-001']
  },
  {
    id: 'feeding-nutrition',
    title: 'Breastfeeding and infant-nutrition source packet',
    status: 'acquiring',
    referenceIds: ['prc-midwifery-tos-2013', 'ra-10028', 'ra-11148', 'who-postnatal-2022'],
    openGapIds: ['SRC-PH-BREASTFEEDING-001', 'SRC-PH-IYCF-001']
  },
  {
    id: 'sick-infant',
    title: 'Sick-young-infant source packet',
    status: 'acquiring',
    referenceIds: ['prc-midwifery-tos-2013', 'who-preterm-lbw-2022'],
    openGapIds: ['SRC-PH-IMCI-001']
  },
  {
    id: 'professional-law-ethics',
    title: 'Professional law, ethics, and development source packet',
    status: 'acquiring',
    referenceIds: ['prc-midwifery-tos-2013', 'ra-7392', 'ched-cmo-3-2023'],
    openGapIds: ['SRC-RA7392-IRR-001', 'SRC-MIDWIFERY-ETHICS-001', 'SRC-CURRENT-BOARD-ISSUANCES-001']
  },
  {
    id: 'fundamentals-prenatal',
    title: 'Fundamentals prenatal-procedure source packet',
    status: 'acquiring',
    referenceIds: ['prc-midwifery-tos-2013', 'who-anc-2016', 'doh-safe-motherhood'],
    openGapIds: ['SRC-PH-ANC-001', 'SRC-PH-PCPNC-001', 'SRC-PH-IPC-001']
  },
  {
    id: 'fundamentals-labor',
    title: 'Fundamentals labor and delivery source packet',
    status: 'acquiring',
    referenceIds: ['prc-midwifery-tos-2013', 'who-intrapartum-2018', 'doh-safe-motherhood'],
    openGapIds: ['SRC-PH-BEMONC-001', 'SRC-PH-EINC-001', 'SRC-PH-IPC-001']
  },
  {
    id: 'fundamentals-postpartum',
    title: 'Fundamentals postpartum source packet',
    status: 'acquiring',
    referenceIds: ['prc-midwifery-tos-2013', 'who-postnatal-2022', 'doh-safe-motherhood'],
    openGapIds: ['SRC-PH-PCPNC-001', 'SRC-PH-IPC-001']
  },
  {
    id: 'fundamentals-pending',
    title: 'Remaining Fundamentals official-scope packet',
    status: 'blocked',
    referenceIds: ['prc-midwifery-tos-2013'],
    openGapIds: ['MAP-FHC-001']
  },
  {
    id: 'phc-community',
    title: 'Community and public-health foundations source packet',
    status: 'acquiring',
    referenceIds: ['prc-midwifery-tos-2013', 'doh-public-health-programs', 'ra-11148'],
    openGapIds: ['SRC-PH-PHC-OPERATIONS-001']
  },
  {
    id: 'phc-maternal-child',
    title: 'Community maternal and child health source packet',
    status: 'acquiring',
    referenceIds: [
      'prc-midwifery-tos-2013',
      'doh-safe-motherhood',
      'doh-public-health-programs',
      'ra-11148',
      'ra-9288'
    ],
    openGapIds: ['SRC-PH-PCPNC-001', 'SRC-PH-NIP-001', 'SRC-PH-IMCI-001', 'SRC-PH-PHC-OPERATIONS-001']
  },
  {
    id: 'phc-disease-control',
    title: 'Communicable and noncommunicable disease source packet',
    status: 'acquiring',
    referenceIds: ['prc-midwifery-tos-2013', 'doh-public-health-programs'],
    openGapIds: ['SRC-PH-DISEASE-CONTROL-001']
  }
];
