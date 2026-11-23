# Komadrona Review — G0 Content, Evidence & Publication Contract

**Artifact:** `KOM-G0-CONTENT-CONTRACT-R2` (bounded F-01/F-02 repair of R1; original remains immutable at `463f79d1d5202bc82e7dfdf8434d87ed0c18b797`)  
**Date:** 23 November 2026 (Asia/Manila)  
**Disposition:** **PROPOSED / NOT OWNER-ACCEPTED**. This is a logical product and editorial contract, **not a code schema, CMS selection, application implementation, clinical review, or publishing authorization**.  
**Authority:** OD-001 alone is approved: all five examination subjects are represented in the first public release, with verified starter lessons/questions populated progressively. See [Owner Decisions](OWNER_DECISIONS.md).  
**Evidence baseline:** [Working PRD](Komadrona-Research-and-PRD-Draft.md), [Online Evidence Report](Komadrona-Online-Evidence-Report.md), [G0 Requirements Matrix](G0_REQUIREMENTS_TRACEABILITY.md), [G0 Reconciliation](G0_FORGE_RECONCILIATION.md).  
**Independent R1 finding:** [Kirion-Nox F-01 / F-02 `REVISE_REQUIRED`](https://github.com/Kirch-Nairu/Komadrona-Review/issues/4#issuecomment-7100582023). This R2 revision is **NOT independently accepted** and remains a proposed contract.

## 1. Outcome, boundaries and precedence

The desired learner experience is **find a subject → see honestly available material → study a sourced explanation → answer an original question → read supported rationales → revisit or report an error**, without mistaking planned coverage for released coverage.

- **APPROVED OD-001:** all five subjects (Obstetrics, Fundamentals of Health Care, Infant Care and Feeding, Primary Health Care, Professional Growth and Development); publish only sufficiently source-verified starter content; label unfinished coverage.
- **CONFIRMED project direction:** an independent open-source educational reviewer for BISU Calape students, nationally usable; no PRC/BISU endorsement claims; no reuse of old application code; no interviews, campus approval, or mandatory human clinical reviewer required for delivery.
- **PROPOSED in this artifact:** the following records, statuses, integrity constraints, verification procedure, correction/withdrawal path, and release gate. They require product-contract acceptance before becoming binding implementation requirements.
- **UNDECIDED:** first-release counts, content order, editor/contributor staffing, platform/CMS, offline behavior, user accounts, progress synchronization, languages, hosting and specific stack.

Versioned GitHub planning documents are the durable owner-decision record; the Notion graph is a research/traceability **index**, not a substitute for explicit owner approval. The system that eventually publishes learning content has **not** been selected.

## 2. Logical graph — required link semantics (PROPOSED)

```text
ExamPublication (PRC program or examination blueprint)
       │ identifies version of
       ▼
ExamSubject ── HAS_COMPETENCY ──▶ Competency
                                       ▲
Clinical / legal / curricular Source   │ mapped to
        │    (versioned)                 │
        ▼                                │
SourceLocator ── SUPPORTS / CONTRADICTS ─▶ Claim
        │                                  ▲
        │                        has factual statements
        │                                  │
        ├────────────────────── LessonVersion / QuestionVersion
        │                                  │
        ▼                                  ▼
VerificationDecision ─────────▶ PublicationManifest
                                     │
                           Published Item Version
                                     │
                           Correction / Withdrawal
```

**Edges are scoped claims, not endorsements.** `ALIGNS_TO` an exam subject does not mean a particular clinical action is medically justified. `PARTIALLY_SUPPORTED_BY` an official form does not certify procedural instructions. A publisher or national institution is not presumed to endorse Komadrona.

### Entity register

| Record | Required logical fields (proposed) | Boundary |
|---|---|---|
| **ExamPublication** | stable ID; issuing body; exact title/resolution/program; publication date; administration/effective scope; source URL; verified-on date; version/snapshot reference | The 2013 PRC TOS, 2026 examination program, CHED curriculum and institutional pages are **different** kinds of documents; only exam publications define claimed examination alignment |
| **ExamSubject** | stable subject key; exact public subject name; exam-publication link; published-count from actual release manifest; planned-count separately | Five subjects must exist in first-release navigation under OD-001 even when some contents remain unverified |
| **Competency** | stable key; exact source text/locator if recoverable; subject; versioned exam-publication link; transcription status `exact / normalized / omitted-in-scan / disputed`; provenance note | Never synthesize missing PRC subitems or claim complete transcription when scan content is absent |
| **SourceDocumentVersion** | stable source ID and immutable revision ID; publisher; title; authority class; edition/date; primary URL; retrieved/check timestamps; version fingerprint/snapshot pointer if lawful; intended Philippine and topic applicability; rights/reuse assessment | An authoritative document can be historical or limited to benefits/records, not universal clinical procedure authority |
| **SourceLocator** | stable locator ID; source-version ID; printed page and/or PDF page index; section/table/paragraph anchors; excerpt reference or concise paraphrase; scope description | A generic homepage URL is not a sufficient clinical claim citation |
| **ClaimVersion** | claim ID and revision; exact proposed statement; kind `clinical / legal-scope / examination-alignment / curriculum / administrative`; PH context/population; explicit evidence edges; conflict status; editorial disposition | New claims begin **unverified**; evidence must support the specific statement and scope |
| **EvidenceEdge** | immutable edge ID/revision (or immutable full edge snapshot); claim-version ID; source-locator + source-document version IDs; exact relationship `supports / limits / contradicts / contextual-only`; support scope and applicability; verifier/date and rationale | Changing the relationship, locator, scope or source revision creates a distinct dependency revision; a contextual-only edge never becomes direct support by citation count |
| **LessonVersion** | stable lesson ID and revision; title; objectives; exam-subject + competency links (or explicit unknown); ordered claim-version references; authorship; source-check state; editorial state; reviewed/updated dates | No complete lesson label merely because its title is mapped or its source packet exists |
| **QuestionVersion** | stable question ID and revision; original stem; options; exact correct response; objective/competency link; explanation of correct response **and** each distractor; supporting claim-version/evidence links; author; state | No copied protected exam items; question's correct key **and** clinical rationale must both be independently supported |
| **VerificationDecision** | immutable decision ID; exact item version; complete frozen dependency-closure reference/fingerprint (claim revisions, evidence edge IDs/revisions and support scope, source locators and source-document versions, exam map and PH applicability); outcomes for authority, currency, exact support, conflicts and rights; named checker, date, notes | A prior `verified` decision is ineligible for a changed dependency closure. Not necessarily a licensed clinical reviewer; label `clinically reviewed` only if that review happened |
| **PublicationManifest** | immutable release ID/date; exact item versions plus the verified dependency-closure reference/fingerprint and supporting verification/editorial decision IDs; subjects; publishing actor; rollback pointer | Historical manifest membership alone cannot authorize current serving: current withdrawal/revocation status overrides all old manifests and rollbacks. Coverage counts derive only from currently eligible published items |
| **CorrectionRecord / RevocationEvent** | report and immutable event IDs; affected exact item version; evidence/reason; dated triage outcome; dependencies and released manifests; withdrawal effective status; replacement version if any; affected learner attempts; recorded actor | Append-only revocation applies across releases and persists through rollback; history remains visible but an unsafe version is never automatically served again |

**Identifier principle:** stable IDs identify a conceptual entity; versions identify the historical content that existed when a learner encountered it. Proposed example ID shapes `SRC-...`, `LOC-...`, `CLM-...`, `COMP-...`, `LES-...`, `QUE-...`, `REL-...`; do **not** replace confirmed historical IDs with guessed identifiers. The two extracted JSON inventories are still missing from planning custody.

### F-01 — immutable dependency closure and approval binding (PROPOSED)

A `VerificationDecision` and its subsequent `EDITORIALLY_APPROVED` decision are valid **only** for an explicitly pinned **item content version plus a reproducible immutable evidence-dependency closure**. That closure includes: exact lesson/question text (including keyed answer and every distractor rationale); linked `ClaimVersion` revisions; **all applicable evidence edge identities and revisions, including supporting, limiting, contradictory and contextual edges and their stated scope**; exact `SourceLocator` versions and parent `SourceDocumentVersion` revisions; versioned `ExamPublication`/subject/competency mapping; Philippine jurisdiction, population and professional-role applicability; and recorded rights/conflict dispositions. Closure membership and relationships must be reproducible by immutable snapshot or a canonical dependency fingerprint, with the underlying references retrievable for audit. Hashing or listing references alone does not establish source validity.

**Fail closed:** duplicate, dangling, orphaned, unresolvable or cross-version references, or a mismatch between a decision's pinned closure and the actual candidate closure, make the old decision **ineligible for any new publication or rollback**. Editing, deleting, retargeting, reclassifying or substituting an evidence edge/locator/source revision, claim, answer key, rationale, applicable exam mapping or scope **cannot silently mutate an already approved version**. Such a material change creates new versioned dependencies and requires recorded source re-verification **and new editorial approval** for the affected item before a subsequent release. Unaffected items are not invalidated by unrelated source changes. An item already in an earlier immutable manifest remains historically auditable; newly discovered safety concerns are handled by the withdrawal rule below.


## 3. Source assessment and evidence precision (PROPOSED)

For a candidate source, the source checker records:

1. **Authority and purpose:** PRC examination requirement vs CHED national education standard vs DOH clinical document vs PhilHealth service/payment rule vs WHO guideline vs historical manual. Do not let one class substitute for another.
2. **Version and currency:** title, edition, issuance/effective date, retrieval date, superseding topic updates, and whether historical material is being quoted as history.
3. **Philippine applicability:** population, clinical setting, professional role/scope, jurisdiction, topic-specific adaptation, and whether an international guideline is adopted locally. Unknown adoption is recorded as unknown.
4. **Locator and support:** exact page/section/table **and the limited proposition it supports**; distinguish printed vs PDF page number; keep third-party material's reuse rights separate from ability to cite it.
5. **Conflicts or red flags:** source contradictions, ambiguous dosage units, older visit schedules, doctor-only form sections, missing full procedure descriptions, unrecoverable PRC scan rows. Record resolution and any undecided portion.
6. **Dependent-impact map:** when a source changes or a conflict emerges, enumerate affected claims, lesson versions, question versions, and public releases. Do not automatically retract unrelated, adequately supported content.

### Support classification

- `supports`: source locator directly substantiates the scoped proposition.
- `limits`: source describes only part of the proposition, or sets conditions not yet represented.
- `contradicts`: materially inconsistent guidance or internal discrepancy, pending documented reconciliation.
- `contextual-only`: useful background or administrative reference, **not** sufficient evidence for the claimed procedure or threshold.

A clinical claim may be marked `verified` only when its specific clinical content is supported by applicable authoritative locators, there is no unresolved material conflict affecting that claim, and the verification decision is actually recorded. This does **not** assert independent clinical peer review.

## 4. Draft-to-publication workflow (PROPOSED)

**Content states** (independent of Notion's current planning-status labels):

```text
DRAFT
  → AWAITING_SOURCE_CHECK
  → SOURCE_VERIFIED
  → EDITORIALLY_APPROVED
  → PUBLISHED(version pinned in release manifest)
                    ├── SUPERSEDED (replacement published)
                    └── WITHDRAWN  (unsafe, erroneous, obsolete, or unsupported)
```

- `BLOCKED` is a **reason** at any draft/check point, not a mechanism for publishing unsupported content.
- A source check is a documented evidence decision. It need not use a new mandatory licensed-reviewer role, interview process, or campus gate.
- Editorial approval is an accountable, recorded **publication decision**; a separate human reviewer is not implicitly required. Contributor separation and tooling remain undecided.
- The initial graph may label a lesson `Partially Supported` or `Blocked`, but that is **research status**, not `SOURCE_VERIFIED`, `EDITORIALLY_APPROVED`, or `PUBLISHED`.
- A withdrawn item's public page should give a safe non-deceptive withdrawal state with a correction notice and version reference, not quietly serve disputed instructions.
- New exam publications or guideline versions trigger targeted re-verification of dependent items; a previous published version/quiz attempt retains its historical version link.

### F-02 — global current-serving withdrawal precedence (PROPOSED)

A withdrawal for safety, materially unsupported claims, or another documented disqualifying defect creates an **append-only authoritative revocation event** keyed to the **exact item version**, with reason, effective date and affected dependency/release references. The **current revocation state** applies to all historical and future manifests, release switches, backups, cached manifest selections, rollback and republish operations. It is not overwritten by restoring an older manifest. `SUPERSEDED` describes replacement chronology; an already superseded historical version may also become `WITHDRAWN` later.

**Current-serving eligibility (logical predicate):** an item version may be served as active learning content only when it is included in the selected valid release, its exact frozen dependency closure matches an eligible verification/editorial decision, its references and source support remain valid under applicable publication rules, **and no authoritative current revocation prohibits that version**. This is a conjunctive decision: a historical release's former validity never overrides a later withdrawal. When the authoritative eligibility/revocation status for a proposed serve or rollback cannot be established, **do not activate the item**; display a safe unavailable/withdrawn state rather than the disputed instruction. Restoration of a withdrawn version by an old manifest or rollback is forbidden; any corrected return requires a distinct new content version, re-verification and explicit new editorial release approval. Immutable historical attempts and manifests stay readable as historical records with correction/withdrawal notices, **not** as authorization to answer or teach from revoked material.

The future platform's handling of already downloaded, disconnected/offline copies remains **undecided**; this contract does not claim remote instantaneous deletion of inaccessible cached copies. Any serving or rollback performed by the future publisher must honor current revocations and cannot use offline staleness as authorization to republish a withdrawn item.


### Publication eligibility — conjunctive checks

Publish an item **only if all applicable checks pass**:

| Gate | Required proof | Negative case |
|---|---|---|
| G-P01 Identity/version | Unique item ID, immutable version, author/change record, valid distinct references | Orphaned/duplicate/dangling IDs, cross-version substitution or silent replacement |
| G-P02 Exam relation | Subject, named PRC program/TOS version and competency mapping (or clear `unmapped due to missing scan` note without claiming exact match) | Invented competency or claimed official weight from unrecoverable scan |
| G-P03 Source support and frozen dependency closure | Each substantive claim has directly applicable locators; entire item/claim/edge/locator/source/exam-map dependency closure pinned in verification and editorial decisions and rechecked for the candidate release | Generic lesson-footer link, tampered evidence relation or previously approved but stale closure |
| G-P04 Clinical-sensitive precision | Thresholds, doses, procedural steps, referral triggers and legal scope claims have exact support and applicability | DOH form's data fields presented as full Leopold hand-placement instructions |
| G-P05 Contradiction handling | No unresolved material conflicting source guidance touching the content being published; signed-off scoped disposition recorded | OHG folate discrepancy copied into dosage question without resolution |
| G-P06 Question completeness | Original stem/options, single defensible keyed answer as applicable, correct-answer rationale, **every distractor's** rationale and supporting evidence | Correct option supported but distractor explanation invented |
| G-P07 Reuse and claims | Copyright/reuse check; non-endorsement copy and clinical-review labels accurate | Copying protected test bank or implying PRC/BISU approval |
| G-P08 Explicit publication record | Recorded source-check and editorial decisions for the **exact current pinned closure**, immutable release manifest, applicable current withdrawal/rollback checks | Publish based on a draft, Notion row, or stale approval for a changed evidence graph |
| G-P09 Learner truthfulness | Counts/coverage describe only currently eligible manifested published items; unavailable/withdrawn content shown honestly | Planned 500 questions or withdrawn historical questions counted as available |
| G-P10 Revocation precedence | Current authoritative append-only revocation check blocks an exact withdrawn item version, independent of selected manifest/rollback; correction history retained | Revert to old release to resurrect revoked question or lesson version |
| G-P11 Referential integrity | Source/claim/edge/locator/decision/manifest references resolve uniquely to the pinned versions and are rechecked on publication and rollback | Dangling/duplicate/cross-version reference or changed answer rationale passes old approval |

A publisher's check is a **future** product behavior specified here, not a claim that such a system currently exists.

## 5. Learner-facing and correction consequences (PROPOSED)

- Every subject landing entry distinguishes `published`, `planned`, and `under verification` topics. OD-001 covers presence of all five subject entries, **not** a percentage of filled content.
- Each lesson/question displays its item version, last source-checked date, relevant references and correction/report action. Expose useful readable citations without assuming copyright permits full-source republication.
- A submitted answer/result references the **exact QuestionVersion** and, where possible, publication manifest. Never change what a historical attempt answered when a question is fixed; show a later correction notice instead.
- A content issue captures item ID, item version, location/claim, suspected error, received time and status. Triage links to affected claims, lessons, questions and released versions; record replacement/withdrawal decisions. A withdrawal revokes **active serving** across all prior release manifests; historic attempts and citations are retained with correction notices, never rewritten or reactivated by rollback.
- Releasing an updated content set must not depend on already deciding whether learner history is stored in an account, on a device, or both. The logical version contract holds for any chosen storage implementation.
- Avoid recording real patient data; use fictional or de-identified teaching examples only under appropriately verified policies. This is a design constraint, not a retrospective claim of data protection compliance.

## 6. Worked research-only trace: antenatal assessment (NOT a published lesson)

This example shows why exact support edges matter. It is **source mapping**, not medical advice or a completed clinical guide.

```text
Exam subject: Obstetrics
    → planned lesson: Leopold maneuvers (title only)
    → DOH antenatal form v1.2024, Section C p.9, L1–L4
         relationship = contextual / partial: form fields record findings
    → PRC 2013 TOS pp.4,12
         relationship = exam-topic alignment only
    → GAP: full hand placement / sequence / timing / interpretation
         disposition = BLOCKED for unsupported procedural instructions
    → manifest publication = NOT ELIGIBLE until exact technique evidence exists
```

Other lessons may proceed independently when their own claim-level support is adequate. The historical PCPNC source is context, not automatic proof of current antenatal guidance. The 2025 OHG folate-unit discrepancy remains a source reconciliation item and **must not** be converted into an unverified dosing question.

## 7. Contract acceptance cases (PROPOSED, NOT EXECUTED)

| Case | Input situation | Expected product outcome |
|---|---|---|
| C-01 | Lesson claims exact DOH-supported record fields, with correct edition, applicability and locators, all checks passed | May advance to an explicit editorial release decision |
| C-02 | One clinical claim has only an unspecific source URL | Source check fails; lesson cannot publish with that claim |
| C-03 | Leopold procedure authored using form p.9 alone | Procedural claim blocked; fields alone are not technique |
| C-04 | Dosage question uses internally inconsistent folate unit | Question blocked until source conflict resolved |
| C-05 | PRC TOS detail absent in scan but topic exists | Topic can display as unverified/missing exact competency; invented subitem rejected |
| C-06 | A question has a keyed answer but one distractor rationale lacks evidence | Question cannot publish |
| C-07 | PRC examination program changes; published lesson still cites older program | Targeted alignment recheck; preserve older historic release record |
| C-08 | Clinical source newer revision affects one claim | List dependent claims/questions/releases; unaffected lessons stay eligible |
| C-09 | Released item found materially wrong | Withdraw the exact affected version across all active/historical release selections; corrected version requires new checks; historical attempts preserved |
| C-10 | Published subject has zero lessons | Clearly display empty/planned coverage; do not invent available count |
| C-11 | Draft lesson in Notion graph is mislabeled `Verified` | Notion status alone cannot satisfy source-check and manifest gates |
| C-12 | A clinical-review badge is requested without actual review evidence | Badge rejected; source verification label retained only if supported |
| C-13 | After approval, change/delete/retarget a supporting edge, locator or source version, including reclassifying `supports` to `contextual-only` | Prior source-check/editorial decisions no longer match the exact closure; affected item cannot publish without new recorded verification and editorial approval |
| C-14 | Withdraw an unsafe published question version, then roll back to a manifest previously containing it | Current global revocation blocks its serving despite valid historical manifest; keep historical attempt and show correction notice |
| C-15 | Claim/locator reference orphaned or duplicated, or a locator targets the wrong source revision | Fail-closed reference-integrity validation; reject publication/rollback for the affected item |
| C-16 | High-authority source offered as evidence for wrong jurisdiction, population, role or document purpose | Reject the claim under PH applicability/scope checks despite reputation of publisher |
| C-17 | Internal non-clinical fixture included in an otherwise valid manifest | Exclude fixture from actual examination content and coverage counts; no falsely published question claim |
| C-18 | Change lesson claim text, answer key or one distractor rationale after editorial approval without a new immutable item version | Stale decision/closure mismatch; reject publish, require version bump and renewed evidence/editorial decisions |

These are acceptance **specifications**, not passing test results. No application tests, runtime behavior, publishing integration or clinical review were performed for this planning artifact.

## 8. Traceability, status and next bounded gate

- OD-001 (APPROVED): five subjects and progressive verified publication.
- Confirmed direction: independent, open-source, no endorsement/clinical-review mandate, clean rebuild.
- G0 requirements impacted (PROPOSED unless explicitly approved): `EXAM-001/002/003`, `CUR-001`, `SRC-001`, `CLM-001/002`, `VER-001` (confirmed direction), `LES-001`, `QUE-001`, `PUB-001`, `ERR-001`, `LRN-001/002/003/004`, `LEG-001`.
- No additional first-release numeric quota is established. No author/checker headcount, vendor, hosting pattern, or runtime choice is prescribed.
- Two referenced source packets remain unavailable to this G0 working copy: `Komadrona-Content-Inventory.json` and `Komadrona-Source-Packets-and-Gaps.json`. Exact inherited module/competency ID crosswalk is therefore **NOT VERIFIED**.

**G0 disposition:** R2_BOUNDED_REWORK / INDEPENDENT_REREVIEW_PENDING / OWNER_ACCEPTANCE_PENDING. This file is a **proposed** logical publication contract amended after Nox R1 review F-01/F-02. **Next permitted work:** record the new exact-SHA evidence, request a fresh independent Nox read-only review, and seek explicit owner acceptance only after review disposition is resolved. The 2013 TOS scan gaps and two missing legacy inventories remain unresolved but do not inherently block review of this logical contract. This is **not** permission to implement, merge, release or self-accept.

**GitHub source path:** `docs/rebuild-planning/G0_CONTENT_PUBLICATION_CONTRACT.md`.
