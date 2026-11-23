# Komadrona Review — G0 Requirements Traceability Matrix

As of: 23 November 2026 (Asia/Manila)
Status: **WORKING RECONCILIATION, not an accepted PRD**
Source documents: [Online Evidence Report](Komadrona-Online-Evidence-Report.md), [Working PRD](Komadrona-Research-and-PRD-Draft.md), [Owner Decisions](OWNER_DECISIONS.md)

**Vocabulary**: APPROVED = explicitly accepted by owner; CONFIRMED-DIRECTION = explicit earlier user instruction; SOURCE-REPORTED = supported by the uploaded research report but not independently revalidated in this task; PROPOSED = working requirement awaiting acceptance; OPEN = unresolved; SUPERSEDED = known erroneous older planning claim.

## Requirement register

| ID | Requirement or boundary | Authority status | Evidence / constraint | Acceptance test at product level |
|---|---|---|---|---|
| AUD-001 | Serve BISU Calape midwifery board examinees first; other Philippine examinees second | CONFIRMED-DIRECTION | User handoff; BISU program offerings in Evidence Report | First-use copy identifies actual target users without asserting university sponsorship |
| REL-001 | Present all five PRC subject headings at first public release | **APPROVED OD-001** | OWNER_DECISIONS.md; PRC November 2026 program in Evidence Report | Each subject has a navigable area, with truthful available/planned states |
| REL-002 | Progressively publish verified starter material across all five subjects | **APPROVED OD-001** | OWNER_DECISIONS.md | A publish operation cannot mark absent/unverified material as completed exam coverage |
| REL-003 | Do not convert 60 modules, 261 lessons, or 500 targets into first-release quotas | CONFIRMED-DIRECTION / OD-001 exclusion | Existing inventory counts in Evidence Report | Dashboard and PRD identify actual published records separately from targets |
| EXAM-001 | Bind exam alignment to an exact named PRC document and date | PROPOSED, source-supported | PRC 2013 TOS and November 2026 program in Evidence Report | Each displayed alignment indicates document ID/date and verified locator |
| EXAM-002 | Represent unrecoverable competency detail explicitly | PROPOSED, source-supported | Fundamentals unaccounted 14 procedure items; PHC missing A.1–A.11 | No fabricated rows and no blanket 'fully transcribed' label |
| EXAM-003 | Correct Professional Growth and Development third Ethics subgroup | PROPOSED, source-supported | Evidence Report section 'Corrections to inherited knowledge' | Content map reflects profession/scope/skills/examination qualifications; does not substitute professional image/organizations |
| CUR-001 | Keep CHED national BSM curriculum relationship separate from exam alignment | PROPOSED, source-supported | CHED CMO 3 s.2023; no public current BISU detailed syllabus established | No unverified BISU term/course sequencing or equivalency claim |
| SRC-001 | Maintain source metadata: publisher, title, edition, date, authority class, URL, retrieval/check date, applicability | PROPOSED | Working PRD content-management requirements | Each published item links to at least one stored, resolvable source record |
| CLM-001 | Link substantive claims to exact primary-source page/section and support scope | PROPOSED | Working PRD acceptance; Evidence Report per-lesson mapping | Fail publication if a factual clinical claim is unsupported or citation is only a generic URL |
| CLM-002 | Track conflicting guidelines and resolve them before publishing affected claims | PROPOSED | OHG folate-unit conflict example; old PCPNC caution | Conflict decision records competing locator, applicability, resolution and disposition |
| VER-001 | Source verification, not mandatory clinical review, gates publication | CONFIRMED-DIRECTION | Owner handoff | Verify authority/currency/PH applicability/exact support; record who checked and when; only label clinically reviewed if actually performed |
| LES-001 | Each lesson has stable ID, competency map, content version, references, review date and publication status | PROPOSED | Working PRD | Versioned lesson remains traceable through corrections/withdrawal |
| QUE-001 | Each original question has a stable ID, version, correct answer, rationale, distractor explanations and exact evidence | PROPOSED | Working PRD | Publication blocked if answer or rationale lacks supporting evidence; no copied copyrighted exam items |
| PUB-001 | Store publication approvals, revisions, withdrawals and rollback references | PROPOSED | Working PRD | Every published version has durable provenance and a reversible release record |
| ERR-001 | Learners can report a specific problematic lesson/question | PROPOSED | Working PRD | Report identifies item/version/locator; correction route preserves public audit history |
| LRN-001 | Learner can browse and study available lessons across five subjects | PROPOSED | Working PRD | Phone/keyboard flow opens only published content, distinguishes unverified/planned |
| LRN-002 | Learner can practice and read answer/distractor rationales | PROPOSED | Working PRD | Questions use approved versions; submitted answers show supported rationale |
| LRN-003 | Learner can revisit wrong/uncertain answers | PROPOSED | Working PRD learning evidence | Retry path retains question-version provenance and visible availability status |
| LRN-004 | State where progress is stored and how it can be resumed/recovered | PROPOSED | Working PRD | Recovery scenario specified before selecting local/cloud mechanism |
| LEG-001 | Do not imply PRC approval, BISU endorsement, clinical review or pass-rate improvement | CONFIRMED-DIRECTION | Owner handoff | User-facing language has no unsubstantiated approval or efficacy assertions |
| CODE-001 | Do not reuse old application implementation code as rebuild foundation | CONFIRMED-DIRECTION | Owner handoff | Architecture provenance documents new implementation; extracted research records permitted |
| OPS-001 | Interviews, institutional contact, pilot, and clinical reviewer are not mandatory delivery dependencies | CONFIRMED-DIRECTION | Owner handoff | Task plan does not block content drafting or publication on those activities |

## Disputed / superseded inherited assertions

| Prior statement | Current disposition | Authority |
|---|---|---|
| Primary Health Care detailed blueprint is 100% transcribed | SUPERSEDED as unsupported; scan starts at A.12 | Evidence Report |
| Fundamentals remaining 60 items completely unknown | SUPERSEDED: official heading identified; only 46/60 subitems recoverable | Evidence Report |
| Professional Growth third Ethics subgroup covers professional image / organizations | SUPERSEDED: subgroup covers knowledge of midwifery profession and licensure scope | Evidence Report |
| No usable recent Philippine antenatal source exists | SUPERSEDED: DOH OHG 2025 and form now acquired | Evidence Report |
| Current Philippine PCPNC manual must be obtained before any ANC drafting | SUPERSEDED as universal dependency; claim-level source sufficiency governs | Evidence Report |
| CI/learner fixture implementation proves clinical content readiness | REJECTED: 0 completed clinical lessons and 0 exam questions in research inventory | Evidence Report |

## Open decisions — NOT approved

1. Exact quantities of complete starter lessons/questions per subject, topic sequence and target release cadence.
2. Editorial contributor roles and editing experience (Git templates / CMS / hybrid).
3. Whether learners require accounts, multi-device sync, offline reading/practice and local data export/import.
4. Language choices, accessibility/localization priorities, and recurring hosting/maintenance budget.
5. Technical stack, CMS and infrastructure — these follow product contracts, not precede them.

## Source custody blocker (non-global)

The handoff names two extracted JSON artifacts which have not yet been supplied to this branch:
- `Komadrona-Content-Inventory.json`
- `Komadrona-Source-Packets-and-Gaps.json`

Until those are recovered, all 60-module/261-unit/500-target crosswalks are **NOT_VERIFIED in this Forge execution**. That limits detailed ID-level reconciliation but does **not** block OD-001, designing the logical content model, or source-backed lesson drafting.

## G0 gate disposition

**G0 IN PROGRESS.** OD-001 is recorded and an initial requirement crosswalk exists. Formal PRD acceptance, full source-map integrity, and implementation authority remain ungranted.

**Next bounded work:** prepare a draft logical content/publication contract from SRC/CLM/LES/QUE/PUB/ERR requirements with explicitly proposed fields and acceptance conditions. No framework selection or implementation.
