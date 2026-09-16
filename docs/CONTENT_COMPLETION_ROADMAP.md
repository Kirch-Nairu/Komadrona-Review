# Komadrona Review — Content Completion Roadmap

Status: Working control document  
Owner: Kirch Ivan A. Balite  
Initial version: 4 August 2026

## 1. Purpose

This roadmap defines how Komadrona Review moves from a legal and architectural foundation into a complete, source-based midwifery reviewer.

The project must not confuse the existence of pages with completeness. A subject is not complete merely because articles have been drafted. It is complete only when the official scope has been mapped, the necessary sources have been acquired, every competency has learning coverage, the material has passed the required review, and practice questions proportionally test the same scope.

## 2. Definition of “complete”

Komadrona Review Version 1 is content-complete only when all of the following are true.

### 2.1 Examination blueprint completeness

- Every principal subject in the current referenced PRC examination program is represented.
- Every competency and weighted area in the currently published PRC Table of Specifications is mapped to at least one internal topic.
- Exact official headings are distinguished from normalized Komadrona labels.
- Missing or unreadable official source sections are not inferred or invented.
- Each subject’s mapped weights total exactly 100 percent.
- The current examination program and Table of Specifications are rechecked before each public exam-cycle release.

### 2.2 Source completeness

- Every lesson cites at least one accepted primary source.
- Every clinical, procedural, legal, scheduling, dosage, eligibility, or referral claim points to the exact page, article, section, recommendation, or table that supports it.
- Philippine law and current Philippine policy control Philippine-specific practice.
- WHO or peer-reviewed references are used to supplement, not silently replace, current Philippine rules.
- Superseded sources are marked and removed from current study paths.
- No final lesson relies on AI output, anonymous notes, social-media posts, commercial reviewer scans, or recalled board questions as its authority.

### 2.3 Learning coverage completeness

- Every blueprint competency maps to one or more lessons.
- Every lesson has learning objectives, prerequisites, key concepts, explanation, source notes, review checkpoints, and a clear scope boundary.
- Integrated disciplines are attached to the clinical or professional topic where they are needed.
- No important concept exists only as a practice-question answer without a corresponding lesson or explanation.
- No lesson exists as an orphan page with no blueprint, curriculum, law, or source relationship.

### 2.4 Assessment completeness

- Every blueprint competency has at least two original practice questions before the subject is marked complete.
- Each principal subject has a minimum 100-question validated bank distributed according to the official subject weights.
- Every question has one best answer, a rationale, a source, a difficulty level, and a competency identifier.
- High-risk questions involving emergency care, procedures, medication, referral, law, or professional scope receive the same review level as their lesson.
- Practice sets do not contain actual, leaked, recalled, reconstructed, or proprietary examination questions.

### 2.5 Review completeness

- Source checking is complete for every published lesson and question.
- Clinical and procedural content is reviewed by a qualified professional before the project describes it as clinically reviewed.
- Legal and regulatory content is checked against the current official text and receives legal-professional review where interpretation goes beyond direct summary.
- Corrections and reviewer decisions are recorded.
- Each page displays its current status, last verification date, and next review date.

### 2.6 Product completeness

- Review navigation, search, bookmarks, progress, attempts, and export/import work across supported mobile and desktop widths.
- Local-progress limitations are visible.
- Every external Google Form is privacy-checked and clearly labeled.
- Pages pass keyboard, contrast, responsive-layout, link, and build validation.
- A correction-reporting route exists before substantial clinical content launches.

## 3. Content architecture

The content hierarchy is:

```text
Domain
└── Blueprint area
    └── Module
        └── Lesson
            ├── Source notes
            ├── Review checkpoints
            ├── Related questions
            └── Correction history
```

### 3.1 Domain

One of the five principal examination subjects:

1. Obstetrics
2. Fundamentals of Health Care
3. Infant Care and Feeding
4. Primary Health Care
5. Professional Growth and Development

### 3.2 Blueprint area

A weighted competency group from the PRC Table of Specifications. A blueprint area controls study priority and proportional question allocation.

### 3.3 Module

A coherent study unit containing several closely related lessons. A module should normally be completable in one to three study sessions.

### 3.4 Lesson

The smallest publishable review article. A lesson should answer a focused study need and avoid becoming a full textbook chapter.

## 4. Required lesson metadata

Every lesson must contain structured metadata equivalent to:

```yaml
id: OBS-ANC-ASSESSMENT-001
title: Foundations of Antenatal Assessment
domain: Obstetrics
blueprintArea: ob-prenatal-labor-postpartum
module: Antenatal Care
priority: highest
status: draft
riskLevel: high
learningObjectives:
  - Explain the purpose and sequence of routine antenatal assessment.
prerequisites:
  - OBS-FOUND-PREGNANCY-001
sources:
  - referenceId: prc-midwifery-tos-2013
    locator: Obstetrics and Gynecology table, Prenatal Care competency
  - referenceId: who-anc-2016
    locator: exact recommendation or section required
lastVerified: null
nextReview: null
sourceChecker: null
clinicalReviewer: null
estimatedMinutes: 15
questionIds: []
keywords: []
```

The build must reject a public lesson when required metadata is absent.

## 5. Risk levels and review requirements

### Critical

Examples:

- obstetric and newborn emergencies;
- medication names, doses, routes, contraindications, or administration;
- referral thresholds;
- emergency stabilization;
- invasive procedures;
- professional-scope and legal-liability claims.

Required before release:

- exact primary-source citation;
- source check;
- qualified clinical or legal review as applicable;
- explicit scope and referral language;
- question review by a second person.

### High

Examples:

- antenatal, labor, postpartum, and newborn assessment;
- infection prevention;
- screening and immunization schedules;
- family-planning counseling;
- breastfeeding problems;
- community case classification.

Required before release:

- exact primary-source citation;
- source check;
- qualified review before the `Clinically reviewed` label;
- question-rationale review.

### Standard

Examples:

- stable anatomy and physiology;
- terminology;
- history and basic concepts;
- communication and general study explanations.

Required before release:

- accepted source;
- source check;
- editorial review.

## 6. Complete content map

The following map is the planned minimum Version 1 syllabus. It may expand when a current official source identifies additional competencies, but it must not contract below the verified examination and legal scope.

# Domain 1 — Obstetrics

## O1. Reproductive anatomy and physiology

Planned lessons:

- Female reproductive tract: external and internal structures
- Functions of the reproductive organs
- Pelvic structure and obstetric relevance
- Menstrual cycle
- Female reproductive hormones
- Fertilization, implantation, and placental development
- Fetal development by broad stage

Integrated disciplines:

- anatomy and physiology;
- embryology concepts;
- endocrinology and pharmacology where directly relevant.

## O2. Pregnancy foundations

Planned lessons:

- Signs and confirmation concepts of pregnancy
- Physiologic changes during pregnancy
- Gravidity, parity, and obstetric-history terminology
- Estimating gestational age and expected date of birth
- Normal fetal growth and development
- Minor discomforts of pregnancy and safe health teaching

## O3. Antenatal assessment and care

Planned lessons:

- Purpose and structure of antenatal care
- Maternal history and risk assessment
- General physical assessment
- Abdominal and obstetric examination
- Leopold maneuvers
- Fetal-heart assessment concepts
- Laboratory and screening referral concepts
- Birth preparedness and complication readiness
- Documentation and continuity of care
- Home and community follow-up

## O4. Antenatal health teaching and prevention

Planned lessons:

- Nutrition during pregnancy
- Hygiene, rest, activity, and exercise
- Substance and medication safety concepts
- Immunization and preventive-care concepts
- Breastfeeding preparation
- Family participation and respectful care
- Pregnancy danger signs and referral

## O5. Normal labor and childbirth

Planned lessons:

- Physiology and signs of labor
- Stages of labor
- Maternal and fetal assessment during labor
- Progress of labor
- Partograph and Labour Care Guide concepts
- Supportive and respectful labor care
- Infection prevention during childbirth
- Normal birth sequence concepts
- Immediate maternal care after birth
- Documentation and handover

## O6. Deviations from normal labor

Planned lessons:

- Prolonged and obstructed labor
- Abnormal progress of labor
- Fetal malpresentation concepts
- Maternal and fetal warning signs
- Timely referral and transport principles
- Stabilization boundaries within lawful scope

## O7. Postpartum care

Planned lessons:

- Normal postpartum physiologic changes
- Routine postpartum assessment
- Uterine involution and lochia concepts
- Perineal and general comfort care
- Breastfeeding support
- Nutrition, hygiene, activity, and family planning
- Postpartum home visits
- Postpartum warning signs and referral
- Mental and emotional well-being after birth

## O8. Pregnancy and postpartum complications

Planned lessons:

- Major causes of maternal death and disability
- Hypertensive disorders of pregnancy
- Antepartum, intrapartum, and postpartum hemorrhage concepts
- Obstetric infection and sepsis concepts
- Abortion-related complications and referral
- Ectopic pregnancy concepts
- Maternal medical conditions affecting pregnancy
- Emergency recognition, first response, and referral boundaries

## O9. Gynecology and reproductive health

Planned lessons:

- Common gynecologic complaints
- Vaginal discharge and infection concepts
- Menstrual concerns
- Reproductive-health counseling
- Sexual and reproductive rights within Philippine law
- Referral indications

## O10. Family planning

Planned lessons:

- Principles of informed choice and rights-based counseling
- Effectiveness, use, advantages, limitations, and warning signs of methods
- Medical-eligibility and referral concepts
- Postpartum family planning
- Recordkeeping, follow-up, and confidentiality

# Domain 2 — Fundamentals of Health Care

This domain remains the first blueprint-transcription gap to close. The known official portions total 40 percent: Prenatal 15 percent, Labor and Delivery 15 percent, and Postpartum 10 percent. The remaining 60 percent must be independently transcribed from a readable official source before weight labels are published.

The following modules are required by the known procedures, integrated disciplines, statutory scope, and curriculum framework. Their final official weight mapping remains pending where the source page is unreadable.

## F1. Health-care process and clinical reasoning

- Assessment, problem identification, planning, implementation, and evaluation
- Prioritization and escalation
- Documentation and continuity of care
- Therapeutic communication
- Respect, consent, privacy, and dignity

## F2. Basic assessment and patient safety

- General physical assessment
- Vital signs
- Pain and comfort assessment
- Safe positioning and mobility
- Environmental and equipment safety
- Recognition of deterioration

## F3. Infection prevention and control

- Chain of infection
- Hand hygiene
- Personal protective equipment
- Standard and transmission-based precautions
- Aseptic technique
- Cleaning, disinfection, and sterilization concepts
- Sharps and health-care waste
- Exposure response and reporting

## F4. Medication and pharmacology foundations

- Medication-safety principles
- Routes of administration
- Rights and checks of medication administration
- Adverse-reaction recognition
- Storage and documentation
- Scope boundaries and referral
- Maternal, newborn, and infant pharmacology concepts only where supported

## F5. Laboratory and specimen foundations

- Laboratory-referral purpose
- Specimen collection and labeling concepts
- Infection-prevention requirements
- Result communication and follow-up
- Limits of interpretation

## F6. Nutrition and dietetics foundations

- Macronutrients and micronutrients
- Nutrition across pregnancy, postpartum, infancy, and community care
- Deficiency and excess concepts
- Counseling and referral

## F7. Microbiology, bacteriology, and parasitology

- Microorganism classifications relevant to maternal and child health
- Transmission and prevention
- Common maternal, newborn, infant, and community infections
- Antimicrobial-stewardship concepts
- Parasite prevention and referral concepts

## F8. First aid and emergency foundations

- Scene and personal safety
- Initial assessment and activation of help
- Bleeding, shock, burns, and common emergencies
- Transport and referral principles
- Scope limits

## F9. Prenatal procedures — official 15 percent

- General physical examination
- Gestational-age and expected-date computation
- Leopold maneuvers
- Fetal auscultation concepts
- Preventive-care administration concepts
- Health teaching, birth planning, referral, and home visits

## F10. Labor and delivery procedures — official 15 percent

- Monitoring progress of labor
- Internal-examination concepts and scope
- Hand preparation, gloving, and positioning
- Catheterization concepts
- Intravenous-fluid and medication-administration concepts
- Perineal and laceration-care concepts within lawful scope
- Recognition and referral of complications

## F11. Postpartum procedures — official 10 percent

- Maternal monitoring and evaluation
- Routine postpartum procedures
- Breastfeeding, nutrition, exercise, hygiene, and family-planning counseling
- Protocol-based home visits
- Recognition and referral of complications

# Domain 3 — Infant Care and Feeding

## I1. Transition to extrauterine life

- Physiologic transition after birth
- Thermal protection
- Immediate newborn-care sequence
- Delayed cord-clamping concepts where applicable
- Skin-to-skin and early breastfeeding
- Infection prevention

## I2. Newborn and infant assessment

- Initial assessment
- Normal physical findings
- Growth measurements
- Gestational-age and maturity concepts
- Ongoing observation
- Documentation

## I3. Promotive and preventive care

- Cord, skin, eye, and general care
- Newborn screening
- Hearing-screening concepts
- Immunization concepts
- Follow-up and parent education
- Safe sleep and injury prevention

## I4. Growth and development

- Normal growth patterns
- Developmental milestones
- Growth monitoring
- Developmental warning signs
- Family support and referral

## I5. Breastfeeding

- Lactation physiology
- Positioning and attachment
- Signs of effective feeding
- Feeding frequency and milk transfer concepts
- Common breastfeeding concerns
- Expressing and storing breast milk
- Counseling and respectful support

## I6. Infant feeding and nutrition

- Exclusive breastfeeding concepts
- Complementary feeding
- Age-appropriate food consistency and frequency
- Micronutrient and nutrition concepts
- Growth faltering and referral
- Safe food preparation

## I7. Preterm and low-birth-weight care

- Risk identification
- Thermal care
- Kangaroo mother care
- Feeding support
- Infection prevention
- Family involvement
- Danger signs and referral

## I8. Newborn and infant danger signs

- Recognition of serious illness
- Respiratory, temperature, feeding, neurologic, color, hydration, and infection warning signs
- Initial response and referral
- Follow-up after referral

## I9. Integrated management of sick young infants

- Assessment and classification concepts
- Prescribed-treatment boundaries
- Counseling and return precautions
- Referral and documentation

# Domain 4 — Primary Health Care

## P1. Primary health-care principles and Philippine health system

- Principles and values of primary health care
- Levels of care and referral
- Roles of community and public-health workers
- Interprofessional coordination
- Equity, participation, and culturally responsive care

## P2. Epidemiology, statistics, and health indicators

- Basic epidemiologic terms
- Rates, ratios, and proportions
- Morbidity, mortality, and vital events
- Maternal and infant indicators
- Data interpretation limitations

## P3. Community assessment and planning

- Community and family assessment
- Surveys and data gathering
- Community diagnosis concepts
- Priority setting
- Planning, implementation, and evaluation
- Family and community records

## P4. Health education and communication

- Learning needs
- Counseling and teaching methods
- Mothers’ classes
- School-health activities
- Group facilitation and conflict management
- Evaluation of teaching

## P5. Maternal health in the community

- Community antenatal and postnatal care
- Risk identification
- Birth preparedness
- Referral systems
- Home visits
- Maternal program records

## P6. Newborn and child health in the community

- Essential follow-up
- Growth monitoring
- Neonatal and infant immunization concepts
- Integrated management concepts
- Parent and caregiver counseling

## P7. Family planning and reproductive health programs

- Program structure and legal framework
- Counseling and informed choice
- Referral and follow-up
- Community education
- Records and confidentiality

## P8. Nutrition and the first 1,000 days

- Maternal, newborn, infant, and young-child nutrition
- Growth monitoring
- Breastfeeding and complementary feeding support
- Nutrition-risk recognition and referral

## P9. Immunization and screening programs

- National immunization concepts
- Cold-chain awareness and role boundaries
- Newborn screening
- Other current maternal and child screening programs
- Counseling, records, and follow-up

## P10. Home visits and domiciliary obstetric services

- Planning a home visit
- Safety and infection prevention
- Family and environment assessment
- Prenatal, postpartum, newborn, and infant follow-up
- Bag technique concepts
- Referral and documentation

## P11. Communicable diseases

- Transmission, prevention, and control
- Maternal and child implications
- Community surveillance and reporting concepts
- Referral and health education

## P12. Noncommunicable diseases

- Major NCD risk factors
- Pregnancy and family-health implications
- Prevention, screening, referral, and follow-up

## P13. Environmental health and sanitation

- Water, food, sanitation, waste, and vector-control concepts
- Household and community risk assessment
- Health education and referral

# Domain 5 — Professional Growth and Development

## G1. Ethics and bioethics

- Ethical principles
- Code of Ethics
- Bioethics in maternal and child health
- Consent, autonomy, confidentiality, and dignity
- Ethical decision-making

## G2. Personal and professional development

- Learning needs and continuing development
- Professional identity and boundaries
- Emotional regulation and resilience
- Communication and conflict management
- Reflective practice

## G3. Professional organizations and social responsibility

- Professional and civic organizations
- Professional image
- Advocacy and responsible participation
- Change, criticism, and interprofessional relationships

## G4. Philippine Midwifery Act and implementing rules

- Qualification and regulation
- Scope and functions
- Registration and professional identification
- Grounds for discipline
- Prohibited acts and penalties

## G5. Legal rights, duties, and liabilities

- Rights and responsibilities of midwives
- Negligence and standards of care
- Civil and criminal liability concepts
- Documentation as a legal record
- Duty to refer and report

## G6. Family, civil, and employment law concepts

- Family Code concepts relevant to maternal and child care
- Contracts and wills at the level required by the blueprint
- Employment practices
- Magna Carta of Public Health Workers
- Labor and workplace concepts

## G7. Professional education and continuing competence

- CHED midwifery education policies
- Continuing professional development
- Evidence-informed practice
- Research literacy
- Quality improvement and patient safety

## G8. Current developments affecting practice

- Current PRC and Board issuances
- Current DOH and CHED policy changes
- Data privacy and digital documentation
- Emerging public-health and maternal-child priorities
- Technology and responsible use of AI in education and health information

## 7. Integrated-discipline coverage

The April 2026 examination program identifies integrated supporting disciplines. Komadrona Review will not isolate them as disconnected memorization dumps. They are embedded as follows:

- Anatomy and physiology: Obstetrics, Fundamentals, Infant Care
- Bacteriology and microbiology: infection prevention, maternal infection, newborn infection, communicable disease
- Parasitology: nutrition, pregnancy, community disease prevention
- Pharmacology: medication safety, antenatal prevention, labor/postpartum concepts, newborn and infant care
- Nutrition: pregnancy, postpartum, breastfeeding, infant feeding, community health
- Psychology: communication, pregnancy and postpartum adjustment, counseling, child development, professional growth
- Sociology: family, community, culture, social determinants, professional practice

A coverage report must prove that each integrated discipline appears in the relevant lessons and question bank.

## 8. Source-acquisition plan

No major clinical module should be drafted from overview pages alone. The following source queue must be completed.

### Tier 0 — Examination, law, and professional control

- Current PRC Midwives Licensure Examination program
- PRC Board Resolution No. 1, Series of 2013, including complete independent transcription
- Republic Act No. 7392
- Current implementing rules of RA 7392
- Current Code of Ethics and Board issuances
- CHED Memorandum Order No. 3, Series of 2023
- Current PRC examination-integrity rules

### Tier 1 — Philippine clinical and program manuals

- Current PCPNC manual
- Current BEmONC module and related implementing guidance
- Current Essential Intrapartum and Newborn Care or Unang Yakap guidance
- Current family-planning clinical standards
- Current National Immunization Program schedule and implementation guidance
- Current newborn-screening operational guidance
- Current IMCI or sick-young-infant guidance
- Current infection-prevention and control standards
- Current breastfeeding, Milk Code, and infant-and-young-child-feeding guidance
- Current maternal and child nutrition and first-1,000-days implementation guidance

### Tier 2 — International primary guidance

- WHO antenatal-care recommendations and updates
- WHO intrapartum-care recommendations
- WHO Labour Care Guide implementation resources
- WHO postnatal recommendations
- WHO preterm and low-birth-weight recommendations
- WHO family-planning guidance where relevant
- WHO newborn and infant guidance where Philippine material requires supplementation

### Tier 3 — Supporting evidence

- Peer-reviewed systematic reviews
- Current recognized textbooks used only for stable explanation and cross-checking
- Properly licensed educational media

Tier 3 cannot override a current Philippine law, official program, or primary clinical guideline.

## 9. Question-bank plan

### 9.1 Minimum complete bank

Version 1 content completion requires at least:

- 100 validated questions for Obstetrics
- 100 validated questions for Fundamentals of Health Care
- 100 validated questions for Infant Care and Feeding
- 100 validated questions for Primary Health Care
- 100 validated questions for Professional Growth and Development

Total minimum: 500 original questions.

A later robustness target is 1,000 questions, allowing alternate forms and reduced memorization from repeated attempts.

### 9.2 Weight allocation

The first 100-question bank for each subject must mirror the verified Table of Specifications.

Known allocations include:

- Obstetrics: 12 anatomy and physiology; 58 prenatal/labor/postpartum; 16 complications; 14 gynecology/family planning
- Infant Care and Feeding: 50 provision of care; 40 feeding and nutrition; 10 illnesses affecting infants
- Primary Health Care: 30 community/public-health foundations; 55 maternal and child health; 15 communicable/noncommunicable disease
- Professional Growth and Development: 50 ethics/professional formation; 50 law and society
- Fundamentals of Health Care: final 100-item allocation remains blocked until the missing 60 percent of the official table is independently verified

### 9.3 Question metadata

Every question must include:

```yaml
id: Q-OBS-ANC-0001
lessonId: OBS-ANC-ASSESSMENT-001
blueprintArea: ob-prenatal-labor-postpartum
difficulty: moderate
cognitiveLevel: application
stem: original text
choices: []
correctChoice: A
rationale: original explanation
sources:
  - referenceId: who-anc-2016
    locator: exact recommendation or section
status: draft
sourceCheckedBy: null
reviewedBy: null
```

## 10. Content-production workflow

Every module follows this sequence.

### Gate 1 — Scope

1. Select a blueprint competency.
2. Assign domain, area, weight, priority, and risk level.
3. List prerequisites and intended learning outcomes.
4. Confirm that the module does not duplicate another lesson.

Exit condition: approved module brief.

### Gate 2 — Source acquisition

1. Collect the current Philippine primary sources.
2. Add international or supporting sources where necessary.
3. Record exact locators and publication/version dates.
4. Identify conflicts, superseded guidance, and missing documents.

Exit condition: source packet complete enough to draft without guessing.

### Gate 3 — Drafting

1. Write the explanation originally.
2. Separate normal findings, warning signs, emergency recognition, and referral boundaries.
3. Avoid unqualified procedural commands.
4. Add definitions, examples, checkpoints, and source notes.

Exit condition: complete draft with no unsupported factual claim.

### Gate 4 — Source check

1. Compare every material claim with its cited source.
2. Confirm that quotations and adaptations are limited and attributed.
3. Check dates, units, names, thresholds, schedules, and legal language.
4. Mark unresolved issues.

Exit condition: `Source checked` or returned to draft.

### Gate 5 — Qualified review

1. Route clinical and procedural content to a qualified reviewer.
2. Route legal interpretation beyond direct summary to an appropriate reviewer.
3. Record decisions, corrections, and review scope.

Exit condition: approved review status; no anonymous or implied reviewer credit.

### Gate 6 — Assessment

1. Write questions only from completed lesson objectives.
2. Allocate questions according to blueprint weight.
3. Review distractor quality and ambiguity.
4. Verify rationale and exact source.
5. Reject recall-based or proprietary items.

Exit condition: validated questions linked to the lesson.

### Gate 7 — Product QA

1. Build the static site.
2. Check mobile, tablet, and desktop layouts.
3. Test keyboard access, headings, links, and contrast.
4. Verify local progress and export/import behavior.
5. Inspect Google Forms privacy and retry settings.

Exit condition: release candidate.

### Gate 8 — Release and maintenance

1. Publish with visible status and verification dates.
2. Monitor official-source changes.
3. Accept correction reports.
4. Reverify high-risk content on schedule.
5. Archive rather than silently overwrite materially changed guidance.

## 11. Gap ledger

Every unresolved gap must use one of these classes:

- `MAP` — official blueprint or competency mapping gap
- `SRC` — missing, inaccessible, or outdated source
- `CNT` — missing lesson or explanation
- `REV` — source, clinical, legal, or editorial review missing
- `QST` — assessment coverage missing
- `UX` — navigation, accessibility, responsive, progress, or search gap
- `OPS` — privacy, correction, deployment, or maintenance gap

Each gap record requires:

```yaml
id: MAP-FHC-001
title: Verify remaining 60 percent of Fundamentals TOS
severity: blocker
owner: Kirch Ivan A. Balite
status: open
evidence: official PDF page requires independent readable transcription
blocks:
  - Fundamentals final weighting
  - Fundamentals proportional 100-question bank
exitCriteria:
  - two-pass transcription completed
  - weights total 100 percent
  - competencies linked to screenshot/page evidence
```

A domain cannot be marked complete while it has an open blocker.

## 12. Release waves

### Wave 0 — Foundation and governance

Includes:

- legal and privacy pages;
- source registry;
- licensing and contribution rules;
- responsive design;
- examination blueprint;
- automated build and route validation.

### Wave 1 — Content engine

Includes:

- Astro content collections;
- strict topic and question schemas;
- build-time completeness validation;
- generated coverage report;
- reusable lesson layout;
- correction metadata.

### Wave 2 — High-priority Obstetrics

Includes:

- pregnancy foundations;
- antenatal assessment and health teaching;
- normal labor and labor monitoring;
- postpartum assessment;
- danger signs and referral;
- initial Obstetrics practice bank.

### Wave 3 — Infant Care and Feeding

Includes:

- immediate newborn care;
- newborn assessment;
- breastfeeding and infant nutrition;
- preterm and low-birth-weight care;
- danger signs and sick-young-infant concepts;
- initial Infant Care practice bank.

### Wave 4 — Primary Health Care

Includes:

- community assessment;
- maternal and child programs;
- home visits;
- immunization and screening;
- communicable and noncommunicable disease;
- initial PHC practice bank.

### Wave 5 — Professional Growth and Development

Includes:

- ethics;
- RA 7392 and implementing rules;
- rights, responsibilities, negligence, and liability;
- employment and current professional developments;
- initial PGD practice bank.

### Wave 6 — Fundamentals of Health Care

This wave begins source acquisition immediately but cannot receive final proportional weighting until `MAP-FHC-001` is closed.

Includes:

- basic assessment and health-care process;
- infection prevention;
- medication and laboratory foundations;
- nutrition and integrated sciences;
- first aid;
- prenatal, labor, and postpartum procedures;
- final Fundamentals practice bank.

### Wave 7 — Completion and release hardening

Includes:

- 100 percent competency coverage;
- minimum 500 validated questions;
- progress, bookmarks, attempts, export/import, and search;
- accessibility and mobile QA;
- external-link and source freshness audit;
- correction route;
- release notes and public Version 1 declaration.

## 13. Completion metrics

The project status page should compute and display:

- blueprint mapping percentage;
- competencies mapped / total competencies;
- lessons planned / drafted / source checked / clinically reviewed / released;
- primary sources acquired / required;
- questions drafted / validated / released;
- high-risk lessons reviewed / total high-risk lessons;
- open blocker count by gap class;
- broken-link count;
- accessibility and build status.

No single overall percentage should hide critical blockers. A release may be numerically advanced while still blocked by one missing high-risk review or official source.

## 14. Immediate next actions

1. Close `MAP-FHC-001` by independently verifying the remaining Fundamentals table.
2. Build the strict content and question schemas.
3. Generate a machine-readable competency-to-lesson coverage ledger.
4. Acquire the complete Philippine source packet for antenatal care.
5. Create the first module brief for `Prenatal Assessment and Health Teaching`.
6. Draft only after the source packet is complete.
7. Add progress and correction workflows after the content engine is stable.

This order prevents the project from accumulating attractive but unsupported pages.