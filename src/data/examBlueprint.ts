export type BlueprintEvidenceStatus =
  | 'Exact official transcription'
  | 'Normalized competency cluster'
  | 'Partial transcription';

export type ReleasePriority = 'Highest' | 'High' | 'Core' | 'Pending verification';

export interface BlueprintArea {
  id: string;
  label: string;
  officialLabel?: string;
  weightPercent: number;
  itemCount?: number;
  evidenceStatus: BlueprintEvidenceStatus;
  releasePriority: ReleasePriority;
  competencies: string[];
  notes?: string;
}

export interface ExamDomainBlueprint {
  id: string;
  title: string;
  sourceSubjectLabel: string;
  transcriptionCoveragePercent: number;
  areas: BlueprintArea[];
  firstReleaseTopics: string[];
  notes?: string;
}

export const blueprintSource = {
  id: 'prc-midwifery-tos-2013',
  title:
    'Board Resolution No. 1, Series of 2013 — Tables of Specifications for the Board Licensure Examination for Midwives',
  issuer: 'Professional Regulation Commission and Professional Regulatory Board of Midwifery',
  year: '2013',
  url: 'https://www.prc.gov.ph/sites/default/files/PRBmidwifeResoNo1s2013.pdf',
  boardPageUrl: 'https://www.prc.gov.ph/Pages/PRBv4/Midwifery.htm',
  verifiedOn: '2026-08-04',
  use:
    'Provides the official competency groupings, relative percentage weights, item allocations, and difficulty classifications used to prioritize the reviewer.',
  limitation:
    'This is a 2013 Table of Specifications that remains linked on the current PRC Midwifery page as of the verification date. It is not a guarantee of exact future questions and must be rechecked for later superseding Board issuances.'
} as const;

export const examBlueprint: ExamDomainBlueprint[] = [
  {
    id: 'obstetrics',
    title: 'Obstetrics',
    sourceSubjectLabel: 'Obstetrics and Gynecology',
    transcriptionCoveragePercent: 100,
    areas: [
      {
        id: 'ob-anatomy-physiology',
        label: 'Reproductive anatomy and physiology',
        officialLabel: 'Anatomy and Physiology',
        weightPercent: 12,
        itemCount: 12,
        evidenceStatus: 'Exact official transcription',
        releasePriority: 'Core',
        competencies: [
          'Parts of the female reproductive tract',
          'Functions of the female reproductive tract',
          'Menstrual cycle and female hormones'
        ]
      },
      {
        id: 'ob-prenatal-labor-postpartum',
        label: 'Prenatal, labor, childbirth, and postpartum care',
        officialLabel: 'Prenatal, Labor and Postpartum Care',
        weightPercent: 58,
        itemCount: 58,
        evidenceStatus: 'Exact official transcription',
        releasePriority: 'Highest',
        competencies: [
          'Prenatal care and health teaching — 28 items',
          'Signs and physiologic changes of pregnancy',
          'Obstetric examination including Leopold maneuvers',
          'Pregnancy danger signs, minor discomforts, and fetal development',
          'Labor and childbirth assessment and progress — 23 items',
          'Prolonged or obstructed labor, deviations from normal, and referral',
          'Postpartum assessment, teaching, complication recognition, and referral — 7 items'
        ],
        notes:
          'The official table allocates 28 items to prenatal care, 23 to labor and childbirth, and 7 to postpartum care.'
      },
      {
        id: 'ob-complications',
        label: 'Pregnancy complications and emergencies',
        officialLabel: 'Complications in Pregnancy',
        weightPercent: 16,
        itemCount: 16,
        evidenceStatus: 'Exact official transcription',
        releasePriority: 'High',
        competencies: [
          'Causes of maternal death and disability',
          'Pregnancy complications including hemorrhage and preeclampsia/eclampsia',
          'Obstetric infections and fetal malpresentations',
          'Emergency aid, stabilization concepts, and timely referral',
          'Abnormal pregnancy conditions and ectopic pregnancy'
        ]
      },
      {
        id: 'ob-gynecology-family-planning',
        label: 'Gynecology, family planning, and reproductive health',
        officialLabel: 'Gynecology and Family Planning',
        weightPercent: 14,
        itemCount: 14,
        evidenceStatus: 'Exact official transcription',
        releasePriority: 'High',
        competencies: [
          'Common causes of vaginal discharge',
          'Common gynecologic complaints and health information',
          'Family-planning counseling and education',
          'Elements of reproductive health'
        ]
      }
    ],
    firstReleaseTopics: [
      'Prenatal assessment and health teaching',
      'Normal labor and childbirth',
      'Monitoring progress of labor',
      'Pregnancy danger signs and referral',
      'Immediate postpartum assessment',
      'Major pregnancy complications'
    ]
  },
  {
    id: 'infant-care-feeding',
    title: 'Infant Care and Feeding',
    sourceSubjectLabel: 'Infant Care and Feeding',
    transcriptionCoveragePercent: 100,
    areas: [
      {
        id: 'ic-provision-care',
        label: 'Provision of infant care',
        officialLabel: 'Provision of Infant Care',
        weightPercent: 50,
        itemCount: 50,
        evidenceStatus: 'Exact official transcription',
        releasePriority: 'Highest',
        competencies: [
          'Immediate care of the newborn',
          'Assessment of the newborn or infant',
          'Recognition of minor and serious disorders or deviations from normal',
          'Emergency care, stabilization concepts, and referral',
          'Growth and development monitoring',
          'Promotive and preventive care',
          'Management of common newborn and infant health problems',
          'Evaluation of care provided'
        ]
      },
      {
        id: 'ic-feeding-nutrition',
        label: 'Infant feeding and nutrition',
        officialLabel: 'Infant Feeding and Nutrition',
        weightPercent: 40,
        itemCount: 40,
        evidenceStatus: 'Exact official transcription',
        releasePriority: 'Highest',
        competencies: [
          'Principles and concepts of infant feeding and nutrition',
          'Education and counseling on infant feeding',
          'Management measures for health problems associated with feeding and nutrition'
        ]
      },
      {
        id: 'ic-illness',
        label: 'Integrated management of illnesses affecting infants',
        officialLabel: 'Integrated Management of Illness Affecting Infants',
        weightPercent: 10,
        itemCount: 10,
        evidenceStatus: 'Exact official transcription',
        releasePriority: 'High',
        competencies: [
          'Assessment, classification, and treatment concepts for sick infants',
          'Care of sick infants according to prescribed treatment procedures',
          'Health education and counseling'
        ]
      }
    ],
    firstReleaseTopics: [
      'Immediate newborn care',
      'Newborn assessment and warning signs',
      'Breastfeeding foundations',
      'Infant nutrition and feeding counseling',
      'Growth and development monitoring',
      'Preterm and low-birth-weight infant care'
    ]
  },
  {
    id: 'professional-growth',
    title: 'Professional Growth and Development',
    sourceSubjectLabel: 'Professional Growth and Development',
    transcriptionCoveragePercent: 100,
    areas: [
      {
        id: 'pg-ethics',
        label: 'Ethics and professional formation',
        officialLabel: 'Ethics',
        weightPercent: 50,
        itemCount: 50,
        evidenceStatus: 'Exact official transcription',
        releasePriority: 'Highest',
        competencies: [
          'Fundamentals and application of ethics — 10 items',
          'Personality development and self-directed learning — 20 items',
          'Professional image, organizations, attitudes, and response to change — 20 items'
        ]
      },
      {
        id: 'pg-law',
        label: 'Law, society, and professional practice',
        officialLabel: 'Law',
        weightPercent: 50,
        itemCount: 50,
        evidenceStatus: 'Exact official transcription',
        releasePriority: 'Highest',
        competencies: [
          'Importance of law and society — 30 items',
          'Legal rights, responsibilities, liabilities, negligence, and the Family Code',
          'Civil Code concepts relevant to contracts and wills — 6 items',
          'Professional adjustments and employment practices — 4 items',
          'Current developments affecting practice — 10 items'
        ]
      }
    ],
    firstReleaseTopics: [
      'Republic Act No. 7392 and its implementing rules',
      'Professional ethics and boundaries',
      'Negligence, civil liability, and criminal liability',
      'Rights and responsibilities of midwives',
      'Documentation and confidentiality',
      'Current issues affecting midwifery practice'
    ]
  },
  {
    id: 'fundamentals-health-care',
    title: 'Fundamentals of Health Care',
    sourceSubjectLabel: 'Fundamentals of Health Care',
    transcriptionCoveragePercent: 40,
    areas: [
      {
        id: 'fh-prenatal',
        label: 'Prenatal procedures and health teaching',
        officialLabel: 'Prenatal',
        weightPercent: 15,
        itemCount: 15,
        evidenceStatus: 'Exact official transcription',
        releasePriority: 'High',
        competencies: [
          'General physical examination',
          'Computation of age of gestation and expected date of confinement',
          'Leopold maneuvers and fetal auscultation',
          'Tetanus toxoid administration concepts',
          'Health teaching on hygiene, diet, and exercise',
          'Birth planning, laboratory referral, and home visits'
        ]
      },
      {
        id: 'fh-labor-delivery',
        label: 'Labor and delivery procedures',
        officialLabel: 'Labor and Delivery',
        weightPercent: 15,
        itemCount: 15,
        evidenceStatus: 'Exact official transcription',
        releasePriority: 'High',
        competencies: [
          'Monitoring progress of labor',
          'Catheterization and internal examination concepts',
          'Handwashing, surgical hand preparation, gloving, and positioning',
          'Episiotomy and repair-of-laceration concepts within lawful scope',
          'Intravenous-fluid and oxytocin-administration concepts',
          'Recognition and referral of complications'
        ]
      },
      {
        id: 'fh-postpartum',
        label: 'Postpartum procedures and follow-up',
        officialLabel: 'Post Partum',
        weightPercent: 10,
        itemCount: 10,
        evidenceStatus: 'Exact official transcription',
        releasePriority: 'High',
        competencies: [
          'Monitoring and evaluating the mother’s condition',
          'Postpartum care procedures',
          'Counseling on breastfeeding, diet, exercise, hygiene, and family planning',
          'Protocol-based home visits',
          'Recognition and referral of complications'
        ]
      },
      {
        id: 'fh-pending',
        label: 'Remaining Fundamentals competencies',
        weightPercent: 60,
        evidenceStatus: 'Partial transcription',
        releasePriority: 'Pending verification',
        competencies: [
          'The remaining source page requires a second-pass visual transcription before topic weights are published.'
        ],
        notes:
          'Komadrona Review will not invent or infer the missing official headings. The page remains intentionally incomplete until the source is independently rechecked.'
      }
    ],
    firstReleaseTopics: [
      'Prenatal examination procedures',
      'Labor-monitoring procedures',
      'Infection-prevention foundations',
      'Postpartum care and home follow-up'
    ],
    notes:
      'Only 40 percent of this subject has completed exact transcription in the current pass. The remaining official source page is queued for independent verification.'
  },
  {
    id: 'primary-health-care',
    title: 'Primary Health Care',
    sourceSubjectLabel: 'Primary Health Care',
    transcriptionCoveragePercent: 100,
    areas: [
      {
        id: 'ph-community-foundations',
        label: 'Community and public-health foundations',
        weightPercent: 30,
        itemCount: 30,
        evidenceStatus: 'Normalized competency cluster',
        releasePriority: 'High',
        competencies: [
          'Health statistics and epidemiology',
          'Health indicators and vital events',
          'Functions and responsibilities of health workers',
          'Conflict management',
          'Family-health assessment and community surveys',
          'Community programs, family records, and evaluation'
        ],
        notes:
          'The 30 percent weight is derived from the official 100-item total after the exact 55 percent maternal-and-child-health and 15 percent disease-control sections. The display label is normalized from the visible competencies pending a cleaner scan of the section heading.'
      },
      {
        id: 'ph-maternal-child',
        label: 'Maternal and child health care',
        officialLabel: 'Maternal and Child Health Care',
        weightPercent: 55,
        itemCount: 55,
        evidenceStatus: 'Exact official transcription',
        releasePriority: 'Highest',
        competencies: [
          'Family-health assessment and community planning',
          'Prenatal and postnatal care including neonatal immunization',
          'Risk identification and referral',
          'Integrated management of childhood illness concepts',
          'School-health activities and mothers’ classes',
          'Home visits including neonatal and infant care',
          'Handling answering domiciliary obstetric-service procedures'
        ]
      },
      {
        id: 'ph-disease-control',
        label: 'Communicable and non-communicable diseases',
        officialLabel: 'Communicable & Non-Communicable Diseases',
        weightPercent: 15,
        itemCount: 15,
        evidenceStatus: 'Exact official transcription',
        releasePriority: 'High',
        competencies: [
          'Definition and differentiation of communicable and non-communicable disease',
          'Modes of transmission and prevention',
          'Identification of infectious disease',
          'Prevention and control of infectious disease',
          'Identification of non-communicable disease'
        ]
      }
    ],
    firstReleaseTopics: [
      'Maternal and child health programs',
      'Community assessment and family health records',
      'Home visits and referral pathways',
      'Health statistics and epidemiology foundations',
      'Communicable-disease prevention and control',
      'Family planning and reproductive-health programs'
    ]
  }
];

export const getBlueprintDomain = (id: string) =>
  examBlueprint.find((domain) => domain.id === id);

export const highestPriorityAreas = examBlueprint.flatMap((domain) =>
  domain.areas
    .filter((area) => area.releasePriority === 'Highest')
    .map((area) => ({ domain: domain.title, ...area }))
);
