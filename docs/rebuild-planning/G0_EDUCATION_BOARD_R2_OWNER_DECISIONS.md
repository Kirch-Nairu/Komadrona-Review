# KOMADRONA Education Board — R2 Owner Decision Register

**MISSION:** `KOM-G0-EDU-BOARD-R2-EVIDENCE-REPAIR`  
**STATUS:** ALL DECISIONS PROPOSED / PENDING REVIEW AND EXPLICIT AUTHORIZATION BY KIRCH  
**BRANCH:** `research/komadrona-edu-board-r2-repair`  
**BASE FROZEN SHA:** `d3031d5b3de297a40368d49b4f73e3de7e7fd4fd`  
**CANONICAL DISCUSSION:** [GitHub Issue #6](https://github.com/Kirch-Nairu/Komadrona-Review/issues/6)  
**BUILD HOLD STATUS:** [GitHub Issue #5](https://github.com/Kirch-Nairu/Komadrona-Review/issues/5) implementation hold remains **STRICTLY ACTIVE**  
**GOVERNANCE RULE:** Resolves `F-05`. No member of the research board, subagent, or assistant may self-approve these proposals. Every decision carries the explicit status:  
**`PROPOSED / OWNER_DECISION_PENDING`**.

---

## 1. Governance Protocol & Owner Authority

Pursuant to Operation Forge protocols and the mission charter:
1. **Exclusive Authority:** Only `KIRCH` (technical and product authority) can convert a proposed recommendation into an approved owner decision (`OD-002` onwards).
2. **Implementation Prerequisite:** The implementation hold on [GitHub Issue #5](https://github.com/Kirch-Nairu/Komadrona-Review/issues/5) cannot be lifted until KIRCH explicitly acts upon this register.
3. **No Unstated Acceptance:** Favorable board consensus or non-author review recommendations do not constitute owner adoption.

---

## 2. Prioritized Decision Cards (`DEC-001` to `DEC-010`)

### DEC-001: Instructional Architecture & Learning Pathway Selection
* **Core Problem:** How should learning sequences be structured to accommodate diverse examinee cohorts (diploma graduates, BSM graduates, repeaters) without causing unguided novice frustration or repeater expertise reversal?
* **Board Recommendation:** **`PROPOSED / OWNER_DECISION_PENDING`**  
  Adopt **Pathway C (Flexible Hybrid)**: An open learner journey providing suggested guided instruction (worked breakdown + faded steps) for novices/complex topics, while allowing experienced reviewees to enter directly into practice questions, with optional scaffold re-entry triggered after consecutive errors on a competency.
* **Alternatives Evaluated & Rejected:**
  - *Pathway A (Pure Guided Funnel for All):* Rejected due to the Expertise Reversal Effect (`DEF-004`, `E-09`); imposes redundant cognitive load on repeaters.
  - *Pathway B (Pure Direct Question Practice Only):* Rejected because unguided trial-and-error induces high anxiety and risk of encoding flawed rationales among novices.
* **Trade-Offs & Residual Risks:** Pathway C introduces slight interface navigation choices. Requires examinee metacognition; novices might prematurely bypass scaffolding unless diagnostic prompts are well-designed.
* **Governing Matrices:** `M-04`, `M-05`. **Addressed Finding:** `F-05`.

---

### DEC-002: Spaced Review Scheduling & Isomorphic Variant Policy
* **Core Problem:** How should spaced retrieval be implemented to avoid the trap of superficial question-stem cue recognition?
* **Board Recommendation:** **`PROPOSED / OWNER_DECISION_PENDING`**  
  Ban rigid fixed calendar repetition (e.g. `1/3/7d`) of identical items. Authorize a queue-based review system utilizing **isomorphic case variants** (altered patient vignettes testing identical underlying statutory/clinical principles). Classify immediate post-lesson items strictly as formative checks, requiring evaluative transfer items to be delayed and interleaved.
* **Alternatives Evaluated & Rejected:**
  - *Fixed 1/3/7-Day Identical-Item Repetition:* Rejected because the medical meta-analytic evidence (Martinengo et al. 2024, `E-02`) does not support rigid intervals, and identical-stem repetition measures superficial recognition rather than durable transfer.
  - *Pure Learner-Initiated Manual Review:* Rejected because learners typically suffer from poor metacognitive calibration, under-reviewing difficult or confusable topics.
* **Trade-Offs & Residual Risks:** Authoring isomorphic variants requires higher initial editorial effort (creating 2–3 vignettes per core competency).
* **Governing Matrices:** `M-06`, `M-10`. **Addressed Finding:** `F-05`, `F-06`.

---

### DEC-003: Item Quality Standards & Four-Way Evidentiary Rationales
* **Core Problem:** How do we prevent construct-irrelevant cueing and ensure high assessment validity across practice questions?
* **Board Recommendation:** **`PROPOSED / OWNER_DECISION_PENDING`**  
  Adopt the **12-Dimension Item Construction Rubric** (`G0_EDUCATION_BOARD_R2_ITEM_VALIDITY.md`). Mandate focused stems passable under the "Cover-the-Options" test, homogeneous options, and **mandatory four-way evidentiary rationales** (citing statutory or clinical authorities for the correct key AND all three distractors).
* **Alternatives Evaluated & Rejected:**
  - *Traditional Single-Sentence Feedback ("B is correct"):* Rejected because examinees learn primarily by understanding *why* their specific chosen misconception is invalid (`E-06`, `E-07`).
  - *Rigid Word-Count Ceilings (< 80 words):* Converted to qualitative conciseness guidelines (`F-07`), recognizing that necessary clinical context must not be arbitrarily truncated.
* **Trade-Offs & Residual Risks:** Substantially higher editorial time per question; requires claim-level citation for every option.
* **Governing Matrices:** `M-07`, `M-08`, `M-09`. **Addressed Finding:** `F-02`, `F-07`.

---

### DEC-004: PRC Examination Blueprint Fidelity & Gap Transparency
* **Core Problem:** How should KOMADRONA represent official examination requirements given incomplete scanned public copies of the 2013 Table of Specifications?
* **Board Recommendation:** **`PROPOSED / OWNER_DECISION_PENDING`**  
  Formally document and preserve known public scan gaps: exactly **14 unrecovered items** under Fundamentals of Health Care (*Midwifery Procedures*) and **competencies `A.1–A.11`** under Primary Health Care. Explicitly disclose that no official quota for situational questions was established by inspected public sources.
* **Alternatives Evaluated & Rejected:**
  - *Claiming 100% Transcription:* Rejected as false representation (`F-04`).
  - *Inventing Missing Competencies from General Textbooks:* Rejected to preserve regulatory integrity.
* **Trade-Offs & Residual Risks:** Transparently admitting scan gaps may initially surprise examinees, but firmly establishes KOMADRONA's reputation for absolute truth-in-advertising.
* **Governing Matrices:** `M-01`, `M-02`, `M-03`. **Addressed Finding:** `F-04`.

---

### DEC-005: Midwifery Statutory Scope Ceiling (Republic Act No. 7392 Sec. 23)
* **Core Problem:** What is the legal boundary governing clinical actions portrayed in KOMADRONA practice scenarios?
* **Board Recommendation:** **`PROPOSED / OWNER_DECISION_PENDING`**  
  Enforce Republic Act No. 7392 Section 23 as the statutory ceiling: routine practice is normal pregnancy/labor/delivery. In any obstetric complication, the statutory standard is emergency first aid, stabilization, and urgent physician referral. Expressly prohibit any scenario where the correct answer portrays an independent midwife performing unauthorized surgeries (e.g. manual placenta removal) or independent medical titrations.
* **Alternatives Evaluated & Rejected:**
  - *Treating Section 23 as a Universal Single Rule:* Rejected in R2 (`F-01`); replaced with a detailed statutory clause-by-clause classification (identifying emergency training prerequisites, physician written order conditions, oxytocics timing, and student exemptions).
* **Trade-Offs & Residual Risks:** Ensures platform content cannot be misconstrued as encouraging medical malpractice.
* **Governing Matrices:** `M-08`, `M-11`. **Addressed Finding:** `F-01`.

---

### DEC-006: Evidence Hierarchy & Authority Separation
* **Core Problem:** How do we prevent administrative, logistical, or physician-assigned forms from being misused as clinical practice guidelines?
* **Board Recommendation:** **`PROPOSED / OWNER_DECISION_PENDING`**  
  Enforce a strict Three-Tier Authority Hierarchy:
  - *Tier 1:* Philippine Statutory Law (RA 7392).
  - *Tier 2:* National Clinical Practice Guidelines (DOH BEmONC, OHG 2025, WHO).
  - *Tier 3:* Administrative & Billing Records (PhilHealth, DOH Facility Checklists, DOH Antenatal Form v1.2024).  
  **Expressly disallow Tier 3 sources as authority for midwife clinical procedural steps.**
* **Alternatives Evaluated & Rejected:**
  - *Allowing Any Government-Branded Publication as Clinical Authority:* Rejected because administrative documentation forms (e.g. DOH Antenatal Form Section C p.9) explicitly designate abdominal exams to physicians, confusing midwife scope.
* **Trade-Offs & Residual Risks:** Requires strict editorial source categorization; prevents regulatory and legal confusion.
* **Governing Matrices:** `M-11`. **Addressed Finding:** `F-01`, `F-02`.

---

### DEC-007: End-to-End Revocation Integration in Study Queues
* **Core Problem:** How do we prevent students from studying or reviewing outdated, revoked, or flawed practice items?
* **Board Recommendation:** **`PROPOSED / OWNER_DECISION_PENDING`**  
  Bind learner review eligibility to the full conjunctive closure of the G0 Content Publication Contract (`PAPER-003-R2`). Any revocation or erratum in an underlying clinical source, lesson version, or question immediately transitions dependent items to `QUARANTINED`, freezing them from active review queues while preserving immutable audit logs for past attempts.
* **Alternatives Evaluated & Rejected:**
  - *Simplified Source-Only Check:* Rejected in R2 (`F-09`) because it failed to account for question-specific defects, version rollbacks, or claim-level closures.
* **Trade-Offs & Residual Risks:** May temporarily reduce available review queue size if a primary guideline undergoes revision, but completely prevents clinical misinformation.
* **Governing Matrices:** `M-06`, `M-10`, `M-11`. **Addressed Finding:** `F-09`.

---

### DEC-008: Psychometric Score Semantics & Honest Reporting Standards
* **Core Problem:** How should mock-exam and practice performance be reported to eliminate false security and invalid readiness claims?
* **Board Recommendation:** **`PROPOSED / OWNER_DECISION_PENDING`**  
  Permanently eliminate the mathematically invalid `verified_questions / 100` formula (`F-03`). Mandate the Four-Metric Reporting Standard (Attempted Accuracy, Bank Inventory, Objective Coverage, and Partial Blueprint Disclosures). Enforce a mandatory non-prediction disclaimer banning all commercial "X% chance of passing" claims.
* **Alternatives Evaluated & Rejected:**
  - *Single Aggregate Percentage Score:* Rejected because it invites unwarranted inferences of board readiness and conceals whether the learner attempted 10 or 100 unique questions.
  - *Predictive Pass Probability Claims:* Rejected as psychometrically invalid and legally indefensible.
* **Trade-Offs & Residual Risks:** Rejects commercial marketing gamification in favor of ethical, truthful educational reporting.
* **Governing Matrices:** `M-03`, `M-09`, `M-12`. **Addressed Finding:** `F-03`.

---

### DEC-009: Technical Equity, Accessibility & Bandwidth Standards
* **Core Problem:** How do we guarantee usability on constrained mobile devices and spotty prepaid rural networks without imposing unvalidated rigid engineering rules?
* **Board Recommendation:** **`PROPOSED / OWNER_DECISION_PENDING`**  
  Adopt **WCAG 2.2 Level AA** as the mandatory baseline standard (with Level AAA contrast targeted as an aspirational goal). Enforce a $\le 50\text{ KB}$ initial HTML/CSS payload target, functional core reading/answering without client-side scripts, plain Philippine English, and zero streak shaming or loss-aversion gamification.
* **Alternatives Evaluated & Rejected:**
  - *Mandatory Universal WCAG AAA Across All Elements:* Converted to aspirational enhancement (`F-07`) because rigid AAA limits visual hierarchy and semantic status indicators.
  - *Strict Zero-JS Prohibition:* Converted to progressive enhancement (`F-07`), permitting lightweight scripts for offline caching and assistive technology enhancements.
* **Trade-Offs & Residual Risks:** Requires clean, semantic server-rendered HTML architecture; ensures equitable reach across rural Philippine midwifery schools.
* **Governing Matrices:** `M-05`, `M-12`. **Addressed Finding:** `F-07`.

---

### DEC-010: Initial Release Scope & Quality-First Prioritization
* **Core Problem:** What should constitute the release criteria for the initial G0 starter content slice?
* **Board Recommendation:** **`PROPOSED / OWNER_DECISION_PENDING`**  
  Reaffirm that initial G0 release priority must be a small, fully verified starter slice of source-audited anchor lessons and non-clinical/statutory items, rejecting ungrounded bulk generation (e.g. 500 questions). No clinical item may be released without claim-level primary source verification under the G0 publication contract.
* **Alternatives Evaluated & Rejected:**
  - *Rushing 500 LLM-Generated Questions to Launch Fast:* Rejected because unverified volume guarantees construct-irrelevant flaws and potential clinical errata.
* **Trade-Offs & Residual Risks:** Prioritizes quality, legal safety, and institutional credibility over vanity question counts.
* **Governing Matrices:** `M-04`, `M-11`, `M-12`. **Addressed Finding:** `F-02`, `F-07`.

---

## 3. Decision Register Summary Table

| ID | Title / Domain | Recommendation Summary | Addressed Findings | Status |
|---|---|---|---|---|
| **DEC-001** | Instructional Architecture | Pathway C (Flexible Hybrid: Guided + Direct) | F-05 | `PROPOSED / OWNER_PENDING` |
| **DEC-002** | Spaced Review & Variants | Isomorphic variants; no fixed identical-stem spacing | F-05, F-06 | `PROPOSED / OWNER_PENDING` |
| **DEC-003** | Item Quality & Rationales | 12-dimension rubric; mandatory 4-way rationales | F-02, F-07 | `PROPOSED / OWNER_PENDING` |
| **DEC-004** | PRC Blueprint Fidelity | Transparently document 14 Fundamentals / A.1–A.11 PHC gaps | F-04 | `PROPOSED / OWNER_PENDING` |
| **DEC-005** | Statutory Scope Ceiling | RA 7392 Sec. 23 clause classification; referral standard | F-01 | `PROPOSED / OWNER_PENDING` |
| **DEC-006** | Evidence Hierarchy | Tier 1 Law > Tier 2 Clinical CPGs > Tier 3 Admin Forms | F-01, F-02 | `PROPOSED / OWNER_PENDING` |
| **DEC-007** | Revocation Integration | Full publication-contract conjunctive review eligibility | F-09 | `PROPOSED / OWNER_PENDING` |
| **DEC-008** | Psychometric Reporting | Four-metric reporting; ban pass-prediction claims | F-03 | `PROPOSED / OWNER_PENDING` |
| **DEC-009** | Technical Equity & A11y | WCAG 2.2 AA; $\le 50\text{ KB}$; progressive enhancement; zero streak guilt | F-07 | `PROPOSED / OWNER_PENDING` |
| **DEC-010** | Release Scope Alignment | Quality-first starter slice; reject unverified 500-question bulk | F-02, F-07 | `PROPOSED / OWNER_PENDING` |
