export type ReferenceCategory =
  | 'Exam and education framework'
  | 'Philippine law and policy'
  | 'Philippine health programs'
  | 'International clinical guidance'
  | 'Privacy, copyright, and operations';

export type ReferencePriority = 'Core' | 'Supporting' | 'Operational';

export interface ReferenceRecord {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: ReferenceCategory;
  priority: ReferencePriority;
  url: string;
  appliesTo: string[];
  use: string;
  limitation?: string;
  verifiedOn: string;
}

const verifiedOn = '2026-08-04';

export const referenceRegistry: ReferenceRecord[] = [
  {
    id: 'prc-midwives-program-2026',
    title: 'Revised Program of the Midwives Licensure Examination — April 14 and 15, 2026',
    issuer: 'Professional Regulation Commission and Professional Regulatory Board of Midwifery',
    year: '2026',
    category: 'Exam and education framework',
    priority: 'Core',
    url: 'https://www.prc.gov.ph/sites/default/files/Revised%20Exam%20Program%20for%20Midwives.pdf',
    appliesTo: ['All review domains', 'Examination structure'],
    use: 'Defines the five examination subject headings and the integrated supporting disciplines used by the Version 1 study map.',
    limitation: 'It is an examination program for the stated April 2026 administration, not a permanent Table of Specifications or guarantee of future weighting.',
    verifiedOn
  },
  {
    id: 'prc-midwifery-tos-2013',
    title: 'Board Resolution No. 1, Series of 2013 — Tables of Specifications for the Board Licensure Examination for Midwives',
    issuer: 'Professional Regulation Commission and Professional Regulatory Board of Midwifery',
    year: '2013',
    category: 'Exam and education framework',
    priority: 'Core',
    url: 'https://www.prc.gov.ph/sites/default/files/PRBmidwifeResoNo1s2013.pdf',
    appliesTo: ['All review domains', 'Topic prioritization', 'Question-bank weighting'],
    use: 'Provides the competency groupings, percentage weights, item allocations, and difficulty classifications used to prioritize lessons and assessments.',
    limitation: 'This older table remains linked by PRC as of the verification date but must be rechecked for superseding Board issuances before each public exam-cycle release.',
    verifiedOn
  },
  {
    id: 'ra-7392',
    title: 'Republic Act No. 7392 — Philippine Midwifery Act of 1992',
    issuer: 'Congress of the Philippines, reproduced by Lawphil',
    year: '1992',
    category: 'Exam and education framework',
    priority: 'Core',
    url: 'https://lawphil.net/statutes/repacts/ra1992/ra_7392_1992.html',
    appliesTo: ['All review domains', 'Professional practice', 'Examination scope'],
    use: 'Provides the statutory examination scope, regulatory structure, professional-practice definition, and selected duties and restrictions relevant to Philippine midwifery.',
    limitation: 'Legal provisions must be read with later laws, regulations, Board issuances, and current clinical guidance.',
    verifiedOn
  },
  {
    id: 'ched-cmo-3-2023',
    title: 'CHED Memorandum Order No. 3, Series of 2023 — Policies, Standards, and Guidelines for the Bachelor of Science in Midwifery Program',
    issuer: 'Commission on Higher Education',
    year: '2023',
    category: 'Exam and education framework',
    priority: 'Core',
    url: 'https://legacy.ched.gov.ph/wp-content/uploads/CMO-No.-03-s.-2023.pdf',
    appliesTo: ['Curriculum alignment', 'Competency mapping', 'All review domains'],
    use: 'Used to map reviewer topics to recognized Bachelor of Science in Midwifery outcomes and curriculum expectations.',
    limitation: 'The complete PDF must be consulted before extracting any exact competency, course, or hour requirement.',
    verifiedOn
  },
  {
    id: 'prc-review-materials-advisory',
    title: 'Alleged PRC Review Materials for Licensure Examinations',
    issuer: 'Professional Regulation Commission',
    year: '2019',
    category: 'Exam and education framework',
    priority: 'Operational',
    url: 'https://www.prc.gov.ph/article/alleged-prc-review-materials-licensure-examinations/4079',
    appliesTo: ['Non-affiliation disclaimer', 'Marketing language'],
    use: 'Supports the rule that Komadrona Review must never claim to be PRC-produced, PRC-approved, or PRC-endorsed.',
    verifiedOn
  },
  {
    id: 'prc-memo-57',
    title: 'PRC Memorandum Order No. 57, Series of 2020 — Examination Measures on Cheating and Prohibited Acts',
    issuer: 'Professional Regulation Commission',
    year: '2020; reiterated 2025',
    category: 'Exam and education framework',
    priority: 'Operational',
    url: 'https://www.prc.gov.ph/index.php/memorandum-order-no-57-s-2020',
    appliesTo: ['Question-writing policy', 'Examination integrity'],
    use: 'Supports the prohibition on leaked, copied, recalled, reconstructed, or confidential licensure-examination content.',
    verifiedOn
  },
  {
    id: 'ra-10354',
    title: 'Republic Act No. 10354 — Responsible Parenthood and Reproductive Health Act of 2012',
    issuer: 'Congress of the Philippines, reproduced by Lawphil',
    year: '2012',
    category: 'Philippine law and policy',
    priority: 'Core',
    url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10354_2012.html',
    appliesTo: ['Primary Health Care', 'Family planning', 'Maternal and reproductive health'],
    use: 'Provides the Philippine legal and policy framework for reproductive-health information, family-planning services, maternal care, and skilled birth attendance.',
    limitation: 'Clinical method selection and counseling must follow current DOH guidance and applicable professional scope.',
    verifiedOn
  },
  {
    id: 'ra-11148',
    title: 'Republic Act No. 11148 — Kalusugan at Nutrisyon ng Mag-Nanay Act',
    issuer: 'Congress of the Philippines, reproduced by Lawphil',
    year: '2018',
    category: 'Philippine law and policy',
    priority: 'Core',
    url: 'https://lawphil.net/statutes/repacts/ra2018/ra_11148_2018.html',
    appliesTo: ['Obstetrics', 'Infant Care and Feeding', 'Primary Health Care', 'Nutrition'],
    use: 'Provides a national framework for maternal, newborn, infant, lactation, nutrition, first-1,000-days, and referral-related services.',
    verifiedOn
  },
  {
    id: 'ra-9288',
    title: 'Republic Act No. 9288 — Newborn Screening Act of 2004',
    issuer: 'Congress of the Philippines, reproduced by Lawphil',
    year: '2004',
    category: 'Philippine law and policy',
    priority: 'Core',
    url: 'https://lawphil.net/statutes/repacts/ra2004/ra_9288_2004.html',
    appliesTo: ['Infant Care and Feeding', 'Newborn screening', 'Parent education'],
    use: 'Defines the Philippine newborn-screening system, responsibilities to inform, timing framework, refusal documentation, and implementation responsibilities.',
    limitation: 'Current screening panels, operational procedures, and facility requirements must be checked against current DOH and Newborn Screening Reference Center issuances.',
    verifiedOn
  },
  {
    id: 'ra-10028',
    title: 'Republic Act No. 10028 — Expanded Breastfeeding Promotion Act of 2009',
    issuer: 'Congress of the Philippines, reproduced by Lawphil',
    year: '2010',
    category: 'Philippine law and policy',
    priority: 'Core',
    url: 'https://lawphil.net/statutes/repacts/ra2010/ra_10028_2010.html',
    appliesTo: ['Infant Care and Feeding', 'Breastfeeding', 'Maternal support'],
    use: 'Provides the legal framework for rooming-in, breastfeeding promotion, lactation support, education, and workplace-related protections.',
    verifiedOn
  },
  {
    id: 'doh-safe-motherhood',
    title: 'National Safe Motherhood Program',
    issuer: 'Department of Health — Center for Health Development',
    year: 'Current program page',
    category: 'Philippine health programs',
    priority: 'Core',
    url: 'https://ro11.doh.gov.ph/929-2/',
    appliesTo: ['Obstetrics', 'Primary Health Care', 'Maternal and newborn referral'],
    use: 'Identifies current program direction, maternal and newborn service priorities, BEmONC training, and implementation materials including PCPNC and BEmONC modules.',
    limitation: 'The program page identifies materials; individual manuals must be version-checked before clinical statements are published.',
    verifiedOn
  },
  {
    id: 'doh-public-health-programs',
    title: 'Department of Health Public Health Programs Inventory',
    issuer: 'Department of Health — Center for Health Development',
    year: 'Current program inventory',
    category: 'Philippine health programs',
    priority: 'Supporting',
    url: 'https://ro11.doh.gov.ph/programs-and-projects/',
    appliesTo: ['Primary Health Care', 'Infant Care and Feeding', 'Immunization', 'Family planning', 'Newborn screening'],
    use: 'Provides official program entry points for family planning, immunization, newborn screening, safe motherhood, and early-childhood services.',
    limitation: 'Operational details must be sourced from the current program-specific issuance or manual rather than from a short overview alone.',
    verifiedOn
  },
  {
    id: 'who-anc-2016',
    title: 'WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience',
    issuer: 'World Health Organization',
    year: '2016, with linked updates',
    category: 'International clinical guidance',
    priority: 'Core',
    url: 'https://www.who.int/publications/i/item/9789241549912',
    appliesTo: ['Obstetrics', 'Antenatal care', 'Maternal and fetal assessment', 'Nutrition'],
    use: 'Evidence-informed baseline for routine antenatal care and linked topic updates.',
    limitation: 'Philippine DOH policy, local protocols, professional scope, and newer WHO updates take precedence where applicable.',
    verifiedOn
  },
  {
    id: 'who-intrapartum-2018',
    title: 'WHO Recommendations: Intrapartum Care for a Positive Childbirth Experience',
    issuer: 'World Health Organization',
    year: '2018',
    category: 'International clinical guidance',
    priority: 'Core',
    url: 'https://www.who.int/publications/i/item/9789241550215',
    appliesTo: ['Obstetrics', 'Labour and childbirth', 'Respectful maternity care'],
    use: 'Evidence-informed reference for labour and childbirth care, monitoring, supportive care, and positive birth experience.',
    limitation: 'Local adoption, referral rules, and facility protocols must be checked before converting recommendations into reviewer instructions.',
    verifiedOn
  },
  {
    id: 'who-labour-care-guide-2025',
    title: 'WHO Labour Care Guide: Implementation Resource Package',
    issuer: 'World Health Organization',
    year: '2025',
    category: 'International clinical guidance',
    priority: 'Supporting',
    url: 'https://www.who.int/publications/i/item/9789240109346',
    appliesTo: ['Obstetrics', 'Labour monitoring', 'Quality improvement'],
    use: 'Current implementation resource supporting evidence-based and person-centred labour monitoring and use of the WHO Labour Care Guide.',
    limitation: 'Use as an implementation reference; local DOH adoption and facility policy must be confirmed.',
    verifiedOn
  },
  {
    id: 'who-postnatal-2022',
    title: 'WHO Recommendations on Maternal and Newborn Care for a Positive Postnatal Experience',
    issuer: 'World Health Organization',
    year: '2022',
    category: 'International clinical guidance',
    priority: 'Core',
    url: 'https://www.who.int/publications/i/item/9789240045989',
    appliesTo: ['Obstetrics', 'Infant Care and Feeding', 'Postpartum care', 'Postnatal care'],
    use: 'Current consolidated WHO baseline for routine care of women and newborns during the first six weeks after birth.',
    limitation: 'Must be reconciled with current Philippine policies and facility protocols.',
    verifiedOn
  },
  {
    id: 'who-preterm-lbw-2022',
    title: 'WHO Recommendations for Care of the Preterm or Low-Birth-Weight Infant',
    issuer: 'World Health Organization',
    year: '2022',
    category: 'International clinical guidance',
    priority: 'Core',
    url: 'https://www.who.int/publications/i/item/9789240058262',
    appliesTo: ['Infant Care and Feeding', 'Preterm care', 'Low birth weight', 'Kangaroo mother care'],
    use: 'Evidence-informed guidance for preventive and promotive care, complications, family involvement, and facility- or community-based care of preterm and low-birth-weight infants.',
    limitation: 'Referral thresholds, scope of practice, and treatment instructions must be aligned with Philippine and facility guidance.',
    verifiedOn
  },
  {
    id: 'who-pcpnc-2015',
    title: 'Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice, Third Edition',
    issuer: 'World Health Organization',
    year: '2015',
    category: 'International clinical guidance',
    priority: 'Supporting',
    url: 'https://www.who.int/publications/i/item/9789241549356',
    appliesTo: ['Obstetrics', 'Fundamentals of Health Care', 'Infant Care and Feeding'],
    use: 'Structured reference for the continuum of pregnancy, childbirth, postpartum, newborn, and referral care.',
    limitation: 'Use only as a supporting manual because several recommendations have been updated in newer topic-specific WHO guidelines.',
    verifiedOn
  },
  {
    id: 'npc-dpa-irr',
    title: 'Implementing Rules and Regulations of the Data Privacy Act of 2012',
    issuer: 'National Privacy Commission',
    year: '2016',
    category: 'Privacy, copyright, and operations',
    priority: 'Operational',
    url: 'https://privacy.gov.ph/implementing-rules-regulations-data-privacy-act-2012/',
    appliesTo: ['Privacy notice', 'Browser-local learner data', 'Future communication features'],
    use: 'Supports transparency, declared purpose, proportionality, data minimization, security, and data-subject rights in any personal-data processing.',
    verifiedOn
  },
  {
    id: 'ipophil-fair-use-2024',
    title: 'Statutory Fair Use Guidelines on Copyright Exceptions',
    issuer: 'Intellectual Property Office of the Philippines',
    year: '2024',
    category: 'Privacy, copyright, and operations',
    priority: 'Operational',
    url: 'https://www.ipophil.gov.ph/news/ipophl-releases-statutory-fair-use-guidelines-to-clarify-rules-on-copyright-exceptions/',
    appliesTo: ['Copyright policy', 'Question writing', 'Quotations and educational adaptation'],
    use: 'Supports the rule that educational purpose does not create unlimited permission to copy protected books, diagrams, tables, or question banks.',
    verifiedOn
  },
  {
    id: 'dswd-public-solicitation',
    title: 'Public Solicitation Frequently Asked Questions',
    issuer: 'Department of Social Welfare and Development',
    year: 'As of 2 May 2024',
    category: 'Privacy, copyright, and operations',
    priority: 'Operational',
    url: 'https://helps.dswd.gov.ph/Home/PubSolFAQ/',
    appliesTo: ['Future donations', 'Maya QR', 'Funding disclosures'],
    use: 'Supports the current exclusion of donation buttons, visible wallet details, and public fundraising until permit and compliance requirements are separately resolved.',
    verifiedOn
  }
];

export const legalReferenceIds = [
  'prc-midwives-program-2026',
  'prc-midwifery-tos-2013',
  'ra-7392',
  'prc-review-materials-advisory',
  'prc-memo-57',
  'npc-dpa-irr',
  'ipophil-fair-use-2024',
  'dswd-public-solicitation'
];

export const domainReferenceMap: Record<string, string[]> = {
  'Obstetrics': [
    'prc-midwives-program-2026',
    'prc-midwifery-tos-2013',
    'ra-7392',
    'doh-safe-motherhood',
    'who-anc-2016',
    'who-intrapartum-2018',
    'who-labour-care-guide-2025',
    'who-postnatal-2022',
    'who-pcpnc-2015'
  ],
  'Fundamentals of Health Care': [
    'prc-midwives-program-2026',
    'prc-midwifery-tos-2013',
    'ra-7392',
    'ched-cmo-3-2023',
    'doh-safe-motherhood',
    'who-pcpnc-2015'
  ],
  'Infant Care and Feeding': [
    'prc-midwives-program-2026',
    'prc-midwifery-tos-2013',
    'ra-9288',
    'ra-10028',
    'ra-11148',
    'doh-public-health-programs',
    'who-postnatal-2022',
    'who-preterm-lbw-2022'
  ],
  'Primary Health Care': [
    'prc-midwives-program-2026',
    'prc-midwifery-tos-2013',
    'ra-10354',
    'ra-11148',
    'doh-safe-motherhood',
    'doh-public-health-programs'
  ],
  'Professional Growth and Development': [
    'prc-midwives-program-2026',
    'prc-midwifery-tos-2013',
    'ra-7392',
    'ched-cmo-3-2023',
    'prc-review-materials-advisory',
    'prc-memo-57',
    'npc-dpa-irr'
  ]
};

export const getReferencesByIds = (ids: string[]) =>
  ids
    .map((id) => referenceRegistry.find((reference) => reference.id === id))
    .filter((reference): reference is ReferenceRecord => Boolean(reference));
