# Komadrona Review Research and PRD Draft

23 November 2026 • Working product requirements draft

Komadrona Review will help BISU Calape midwifery students prepare for the Philippine Midwives Licensure Examination through a trustworthy knowledge base and evidence-informed study activities. Philippine midwifery students nationally are the secondary audience. The rebuild will retain useful knowledge and source discoveries from the existing repository; its code and architecture are not requirements.

## Confirmed direction

- Primary audience: BISU Calape midwifery students preparing for licensure.
- Secondary audience: Philippine midwifery students and examinees nationally.
- Product: an independent educational website with research-backed reviewers and traceable sources.
- Immediate deliverable: a product requirements document, with architecture and content management planned before implementation.
- Existing research baseline: Kirch-Nairu/Komadrona-Review, branch feature/learner-workflow.
- **Owner Decision 001 (approved 23 November 2026):** The initial public release represents all five Midwives Licensure Examination subjects and progressively publishes verified starter lessons and original questions across them. Incomplete and unsupported areas must be labeled honestly. This approves breadth, not a numerical lesson/question quota, a particular module sequence, or a technology stack.
- This is an open-source contribution for BISU Calape board examinees. Idea validation, demand research, and a learner pilot are not prerequisites for planning or delivery. Mandatory clinical review is not a publication requirement; documented source verification is.

## Pedagogy and learning-experience readiness — NOT YET APPROVED

**Owner direction, 23 November 2026:** Do not proceed to a UI/technical build merely because five subjects, a publication contract, and source materials exist. The learner's method of study, how concepts are explained, how knowledge is retrieved and revisited, how reasoning is practised, and how assessment meaning is communicated require deliberate educational design.

The companion [Learning Science & Instructional Experience Concept](G0_LEARNING_EXPERIENCE_RESEARCH_CONCEPT.md) records an evidence-informed **PROPOSED** model: **Explain → Recall → Reason → Revisit → Reflect**. It cites retrieval and spaced-practice research, instructional guidance/worked examples, case-based reasoning evidence, feedback, confidence calibration and inclusive design, with applicability limitations.

**Current status:** `PEDAGOGY_CONCEPT_DRAFTED / OWNER_REVIEW_PENDING / CODE_START_ON_HOLD`. None of the proposed lesson templates, study schedules, question modes, metrics, confidence prompts, user flows, accessibility targets or stack choices is owner-accepted simply because a document exists.

Source verification is necessary for clinical accuracy but does not by itself make a lesson educationally sound. Accordingly, the concept proposes **separate instructional-quality criteria** (objective alignment, explanation, recall, case appropriateness, feedback, later review, accessibility, truthful scoring) to deliberate **before implementation**. This does not create a mandatory clinical reviewer, learner interview or pilot, nor change OD-001.

A digital reviewer is not supervised clinical practice; question correctness and website engagement must never be represented as clinical competence or a predicted licensure passing probability.

## Research findings

### BISU Calape context

BISU's official program-offerings page lists a College of Midwifery and Bachelor of Science in Midwifery in the Calape sequence. This supports a BSM audience, but does not establish the current campus syllabus, year-level needs, review practices, device access, language preferences, or faculty participation. A campus-specific course map must be confirmed against current authorized campus material before claiming curriculum alignment. [BISU program offerings](https://bisu.edu.ph/program-offerings/)

### Examination framework

The official revised April 2026 examination program identifies Obstetrics, Fundamentals of Health Care, Infant Care and Feeding, Primary Health Care, and Professional Growth and Development. Its schedule is specific to that administration; it is not a permanent competency or weighting specification. [PRC April 2026 program](https://www.prc.gov.ph/sites/default/files/Revised%20Exam%20Program%20for%20Midwives.pdf)

The complete 16-page PRC-hosted file for Resolution No. 1, series of 2013 was retrieved and visually inspected. Major subject weights are readable, but the scan is missing detailed content: Fundamentals has 14 items unaccounted for in its visible 60-item procedures section, and Primary Health Care begins at A.12. Do not label the detailed blueprint fully transcribed. No promulgated replacement was located in the targeted search; an October 2026 TOS-enhancement workshop notice is a change signal, not a replacement issuance. [PRC Board page](https://www.prc.gov.ph/Pages/PRBv4/Midwiferyv2.htm)

CHED lists CMO No. 3, series of 2023 as the BSM policies, standards, and guidelines. It supplies an education framework, distinct from the exam blueprint. The full official 61-page PDF was subsequently retrieved, and curriculum Sections 8–11 were visually checked. National curriculum alignment is separate from a current BISU-specific syllabus, which was not located on an authorized public campus page. [CHED memorandum index](https://ched.e.gov.ph/2023-ched-memorandum-orders)

### Learning evidence

A systematic review covering 56 studies found benefits from retrieval and distributed practice in many health-professions education experiments, with heterogeneous interventions and assessments. A separate meta-analysis found a modest knowledge advantage for spaced online education over massed online education, with moderate certainty; most included studies had unclear or high risk of bias. These findings support testing practice with feedback and repeated review over time. They do not prove this website will improve Philippine licensure pass rates. [Trumble and colleagues](https://pubmed.ncbi.nlm.nih.gov/37615780/), [Martinengo and colleagues](https://pubmed.ncbi.nlm.nih.gov/39388234/)

## Existing knowledge worth preserving

The branch contains a source registry, content reference register, planned competency and module maps, source packets, gap tracking, and review policies. Preserve useful identifiers, source discoveries, documented uncertainties, and mapping rationale as research records, subject to rechecking. Do not copy implementation files into the rebuild.

The source register distinguishes PRC exam documents, Philippine laws, CHED standards, DOH program pages, and WHO guidance. Its important existing insight is that a program overview or source listing cannot substantiate every clinical statement. A published lesson needs exact supporting sections and the appropriate version. [Content reference register](https://github.com/Kirch-Nairu/Komadrona-Review/blob/feature/learner-workflow/docs/CONTENT_REFERENCE_REGISTER.md)

Direct inventory confirms one non-clinical fixture lesson and three non-clinical fixture questions, all excluded from exam coverage. The plan contains 60 modules, 261 lesson titles, 500 question targets, 17 source packets, and 18 gaps. Subsequent online research acquired DOH OHG for Adults third edition (2025), the DOH antenatal examination form v1.2024, DC 2021-0005, PhilHealth Circular 2026-0006, and a complete historical Philippine-adapted PCPNC manual. The new evidence report records exact support and remaining gaps. [Project status](https://github.com/Kirch-Nairu/Komadrona-Review/blob/feature/learner-workflow/docs/PROJECT_STATUS.md)

The README describes external Google Forms and localStorage, while the project specification describes in-app questions and IndexedDB. The roadmap also retains external-form references. The rebuild needs one authoritative product specification and explicit decisions when plans change. [README](https://github.com/Kirch-Nairu/Komadrona-Review/blob/feature/learner-workflow/README.md), [project specification](https://github.com/Kirch-Nairu/Komadrona-Review/blob/feature/learner-workflow/docs/PROJECT_SPEC.md)

## Proposed product scope

The product will connect exam scope, understandable explanations, original practice, rationales, and review of weak topics for BISU Calape midwifery students studying for the board exam. Planning proceeds as an open-source educational contribution without an idea-validation phase.

**Owner Decision 001 — APPROVED (23 November 2026):** All five examination subjects will be represented in the initial public release, with verified starter content progressively populated across the subjects. Unverified topics must not be presented as completed coverage. Source availability and claim-level verification govern publication. The 500-question target is inherited planning ambition, **not** an approved first-release quota. Exact initial lesson/question counts remain undecided.

### Learner requirements

1. Browse the five exam domains and search available lessons.
2. See which topics are available, incomplete, or awaiting verification.
3. Read concise lessons with objectives, explanations, references, and review dates.
4. Answer original questions linked to lesson objectives, then inspect answer and distractor explanations.
5. Revisit incorrect or uncertain concepts over time.
6. Resume study and understand how progress is stored and recovered.
7. Report a content error from the affected lesson or question.

### Content management requirements

Maintain distinct records for sources, competency mappings, lessons, questions, review decisions, corrections, and releases. Each lesson or question must link to exact source locators and a stable version. A source update must identify dependent content for re-verification.

The publication workflow is proposed as draft, source verification, editorial approval, published, and subsequently revised or withdrawn. Record the verification method, responsible contributor, exact source locators, and date. Check authority, currency, Philippine applicability, and whether each explanation, answer, and distractor rationale follows from the cited material. Resolve conflicting guidance explicitly; unresolved claims remain unpublished. A clinical reviewer is not mandatory. Use the label clinically reviewed only when that review actually occurred.

Authors need structured templates and previews. Reviewers need a queue with changes and supporting evidence. Publishers need an explicit approval record and rollback. Whether those tasks use Git-based editing, a CMS, or both depends on contributor skills and capacity; a vendor is not chosen yet.

### Architecture principles

Separate the editorial system, published content, learner interface, and learner progress. Deliver approved content to the learner application through a versioned publication boundary. Store references as data rather than scattering them through pages. Validate broken mappings, missing citations, incompatible versions, and publication status before release.

Design for mobile use and accessible reading. Offline access, accounts, cloud syncing, analytics, and a specific framework remain decisions to resolve. If offline content is included, specify version visibility, update handling, and withdrawal behavior. If progress is device-local, recovery must be designed alongside persistence.

## Content trust and release acceptance

- Every published factual learning unit has traceable supporting sources and locators.
- Clinical claims, thresholds, doses, procedures, and legal scope statements require exact support from applicable authoritative sources and explicit version checking; unsupported interpretation is not published.
- Every published practice item has an approved answer and rationale, stable ID, version, and competency link.
- Exam alignment claims identify the exact official document and verification date.
- Unverified weights and draft lessons cannot appear as completed exam coverage.
- Content corrections identify affected versions and attempts where relevant.
- Learners can complete the read, practice, feedback, and revisit flow on a phone and with keyboard navigation.
- Original questions and explanations are used; public availability of a source is not assumed to grant republication rights.
- The product describes alignment with identified PRC materials without claiming PRC approval, institutional endorsement, or guaranteed results.

## Maintenance and feedback

Provide a correction route and maintain a public change history. Student feedback may inform later improvements, but interviews, pilots, and impact studies are not delivery gates. Do not claim demonstrated pass-rate improvements without supporting evidence.

## Learning-concept decisions to resolve before technical implementation

This is an unresolved **educational design** dimension, not a product launch authorization. Critique the linked proposed learning cycle, a paper-only sample lesson/assessment presentation, question feedback and spaced-review assumptions, health-professions reasoning boundaries, and how learner progress is interpreted. Select or revise those pedagogical choices explicitly before selecting frameworks or starting the new G1 UI branch.

The [G1 materials inventory](G1_MATERIALS_AND_RESOURCES.md) remains evidence custody/readiness, **not** an approved instruction design. [GitHub Issue #5](https://github.com/Kirch-Nairu/Komadrona-Review/issues/5) is the implementation-control record and should remain **ON HOLD** pending educational concept review.

## Decisions still needed

1. Who will author, source-check, and approve content, and what editing workflow will support them?
2. What initial number and selection of verified lessons/questions per subject are feasible without compromising source verification? (Owner Decision 001 settles five-subject breadth only.)
3. What editing experience do intended contributors need?
4. Which storage, offline, language, and operating-cost requirements matter for the first release?
5. Which source-ready module can be responsibly completed first?

## Online research results and remaining work

The companion Komadrona Online Evidence Report records the PRC scan inspection, later issuance search, direct repository inventory, current Philippine antenatal sources, seven-lesson source map, WHO updates, and public BISU findings. Source packets can be rebuilt from that evidence without copying the application code.

Proceed with public online sources. No interviews, campus contact, internal documents, or mandatory clinical reviewer are delivery prerequisites. Supported lessons can proceed independently of unrelated source gaps. Remaining research is specific: missing official TOS detail, a complete technique source for Leopold maneuvers, unresolved source conflicts, and any later published issuances. A current BISU syllabus was not publicly verified; this does not change the confirmed target audience or block the national board-review plan.
