# KOMADRONA Education Board — R2 Remediation Report

**MISSION:** `KOM-G0-EDU-BOARD-R2-EVIDENCE-REPAIR`  
**STATUS:** REMEDIATION COMPLETE / SUBMITTED FOR NON-AUTHOR RE-REVIEW / NO OWNER APPROVAL YET  
**BRANCH:** `research/komadrona-edu-board-r2-repair`  
**BASE FROZEN SHA:** `d3031d5b3de297a40368d49b4f73e3de7e7fd4fd`  
**ADVERSARIAL AUDIT BASELINE:** `08b8487500f9d2a970895e21f1e85156a8aca508` ([G0_EDUCATION_BOARD_R1_ADVERSARIAL_REVIEW.md](https://github.com/Kirch-Nairu/Komadrona-Review/blob/08b8487500f9d2a970895e21f1e85156a8aca508/docs/rebuild-planning/G0_EDUCATION_BOARD_R1_ADVERSARIAL_REVIEW.md))  
**CANONICAL DISCUSSION:** [GitHub Issue #6](https://github.com/Kirch-Nairu/Komadrona-Review/issues/6)  
**IMPLEMENTATION HOLD STATUS:** [GitHub Issue #5](https://github.com/Kirch-Nairu/Komadrona-Review/issues/5) remains **STRICTLY ACTIVE**  
**EXECUTION DISCLOSURE:** `SINGLE_SESSION_MULTI_LENS` via Google Antigravity. Seven specialist analytical seats (`B1`–`B7`) and convener (`B8`) operating under single authenticated account `Kirch-Nairu`.

---

## 1. Executive Remediation Overview

This report documents the finding-by-finding remediation of the nine material defects (`F-01` through `F-09`) identified during the maintainer-side adversarial audit of the R1 Education Board synthesis. 

The board does not conceal uncertainty or defend past overclaims. Every finding has been evaluated against primary statutory, regulatory, and peer-reviewed scientific sources. The R1 historical record is preserved unchanged; this document establishes the corrected factual and methodological baseline for R2.

---

## 2. Finding-by-Finding Remediation (`F-01` to `F-09`)

### F-01 — HIGH: Midwifery Law & Clinical-Scope Interpretation (DEC-005)

**Defect in R1:** R1 compressed Republic Act No. 7392 Section 23 into a universal rule that *"in any complication or abnormal finding, the statutory duty is emergency first aid and urgent physician referral,"* designating this a "supreme legal ceiling."

**Primary Statutory Inspection:** Official Republic Act No. 7392 (The Philippine Midwifery Act of 1992), approved April 10, 1992, Section 23 (*Practice of Midwifery Defined*), retrieved from official PRC and Lawphil repositories.

**Statutory Clause-by-Clause Analysis:**

| Statutory Clause / Provision | Statutory Scope & Activity | Statutory Conditions & Limitations | Governing Category |
|---|---|---|---|
| **Sec. 23, Clause 1** | Supervision and care of women during pregnancy, labor, and puerperium. | Applies to normal obstetrical course. Requires understanding of principles and application of procedures. | **Routine Independent Practice** |
| **Sec. 23, Clause 2** | Management of normal deliveries, including performance of internal examination (IE) during labor. | **EXPRESS STATUTORY PROHIBITION:** Internal examination is prohibited *when patient is with antenatal bleeding*. | **Routine Independent Practice (with explicit statutory prohibition)** |
| **Sec. 23, Clause 3** | Health education of the patient, family, and community. | Within professional competence. | **Routine Independent Practice** |
| **Sec. 23, Clause 4** | Primary health care services in the community, including nutrition and family planning. | Standard community-based primary health care delivery. | **Routine Independent Practice** |
| **Sec. 23, Clause 5** | Carrying out the written order of physicians with regard to antenatal, intra-natal, and post-natal care of the normal pregnant mother. | **EXPRESS CONDITION:** Requires a *written order of a physician*. Limited by statutory text to normal pregnant mothers. | **Conditional Practice (Physician Order Required)** |
| **Sec. 23, Clause 6** | Giving immunization, including oral and parenteral dispensing of oxytocic drug. | **EXPRESS CONDITION:** Dispensing of oxytocic drug is statutorily permitted *after delivery of placenta* (active management / postpartum hemorrhage prevention). | **Conditional Practice (Specific Timing Condition)** |
| **Sec. 23, Clause 7** | Suturing perineal lacerations to control bleeding. | Authorized to control postpartum bleeding from perineal tears. | **Routine Independent Practice** |
| **Sec. 23, Clause 8** | Giving intravenous fluid during obstetrical emergencies. | **EXPRESS STATUTORY PREREQUISITE:** *Provided they have been trained for that purpose*. | **Conditional Practice (Certified Emergency Training Required)** |
| **Sec. 23, Clause 9** | Injecting Vitamin K to the newborn. | Newborn prophylaxis. | **Routine Independent Practice** |
| **Sec. 23, Proviso 1** | Services rendered by students in midwifery schools. | **EXEMPTION:** Provisions do not apply when performed *under the supervision of instructors*. | **Educational Exemption** |
| **Sec. 23, Proviso 2** | Emergency cases. | **EXEMPTION:** Standard scope restrictions do not apply in bona fide emergency life-saving situations. | **Emergency Exemption** |

**Remediation & Boundary Separation:**
1. **Statutory vs. Clinical Separation:** RA 7392 Section 23 establishes criminal and professional licensure boundaries (what a midwife is legally authorized or prohibited from doing). It does *not* specify clinical disease definitions, diagnostic thresholds, drug dosages, or detailed clinical management protocols.
2. **Clinical Standards Authority:** Clinical triage, emergency algorithms, and referral protocols derive from Department of Health (DOH) clinical practice guidelines (e.g. BEmONC Manual, Omnibus Health Guidelines), WHO guidelines, and professional clinical standards—not by inferring clinical protocols directly from statutory text.
3. **Correction:** Removed all claims that Section 23 is fully summarized by "first aid and referral." Future curriculum items must cite specific statutory clauses for legal scope questions, and separate DOH/WHO clinical guidelines for clinical action questions.

---

### F-02 — HIGH: Unverified Clinical Situational Question (DEC-003, DEC-005, DEC-006)

**Defect in R1/R3:** `PAPER-002` introduced a clinical emergency vignette (24-year-old primigravida at 34 weeks, BP 150/100 mmHg, 2+ proteinuria, frontal headache), labeled it "preeclampsia with severe features," asserted one exclusive correct answer (immediate stabilization and transport, rejecting oral nifedipine), and claimed distractors represented "documented errors from maternal death review audits" without source citations.

**Remediation Actions:**
1. **Quarantine:** The existing `PAPER-002` clinical vignette is formally designated:  
   **`UNVERIFIED CLINICAL EXAMPLE / QUARANTINED FROM EDUCATIONAL PUBLICATION`**.  
   It must never be released to students or included in published question banks.
2. **Diagnostic & Clinical Ambiguity Audit:**
   - Under current clinical guidelines (DOH / WHO / ACOG / FIGO), a blood pressure of 150/100 mmHg is elevated but does *not* meet the severe-range blood pressure threshold ($\ge 160/110\text{ mmHg}$).
   - Classification of "severe features" based solely on headache requires careful clinical characterization (persistent, severe, unremitting, unresponsive to analgesics) and exclusion of alternative etiologies.
   - Clinical pharmacology protocols (such as whether oral nifedipine or labetalol or magnesium sulfate is indicated at specific blood pressure thresholds) require claim-level citations to current DOH clinical guidelines, which were missing from the rationale.
3. **Fabricated Audit Claim Withdrawal:** The claim that distractors reproduced "documented errors from maternal death review audits" was unsourced and is formally withdrawn.
4. **Methodological Shift:** For initial item-writing methodology experiments and paper walkthroughs, the board will use **non-clinical source-literacy and statutory-interpretation scenarios** (see `G0_EDUCATION_BOARD_R2_ITEM_VALIDITY.md`). No clinical situational item will be published without prior claim-level medical source verification under `F-01` and `F-02` of the publication contract.

---

### F-03 — HIGH: Invalid Board-Coverage Mathematics (DEC-008)

**Defect in R1:** R1 defined "PRC Blueprint Domain Coverage" as:
$$\text{Coverage} = \frac{N_{\text{published, verified}}}{100 \text{ items per official subject}}$$
This formula is mathematically invalid. 100 is the number of test questions on one subject examination, *not* the count of distinct competencies, objectives, or curricular domains. An item bank could contain 100 questions testing a single competency, yet this formula would misleadingly report "100% coverage."

**Remediation Actions:**
1. **Formula Retired:** The `published_questions / 100` formula is permanently eliminated.
2. **Mathematical Separation of Metrics:** KOMADRONA reports must distinguish four completely separate metrics:

| Metric Name | Mathematical Definition | Valid Denominator | Meaning & Limitations |
|---|---|---|---|
| **Learner Sample Accuracy** | $\frac{N_{\text{correct, unique}}}{N_{\text{attempted, unique}}}$ | Unique verified items attempted by learner. | Measures performance on the *specific sample of questions attempted*. Never predicts board examination passing probability. |
| **Question-Bank Inventory** | Count of unique published items in subject bank. | Total item count (integer). | Simple volume inventory of verified practice items available on the platform. |
| **Source-Verified Objective Coverage** | $\frac{M_{\text{mapped, unique}}}{M_{\text{total\_known\_objectives}}}$ | Total *known, verified* official competency objectives in subject. | Measures curriculum coverage across verified syllabus topics. **Valid only where official competencies are documented.** |
| **Official PRC Examination Scope** | **NOT COMPUTABLE AS PERCENTAGE** | Unknown total for subjects with missing TOS rows. | When scanned TOS pages omit rows (e.g. Fundamentals procedures or PHC A.1–A.11), the true official denominator is unknown. Must be reported as *partially documented inventory*, never a completed percentage. |

3. **Mandatory Disclaimer:** All progress displays must explicitly state: *"Practice accuracy reflects performance on KOMADRONA's verified sample only. It does not predict official PRC licensure examination results."*

---

### F-04 — HIGH: Official Examination Blueprint Discrepancies (DEC-004)

**Defect in R1:** R1 presented subject weights (`Day 1: 45/25/30%`, `Day 2: 35/15%`) without clear denominators, listed inaccurate subgroup labels for Fundamentals of Health Care, and asserted without qualification that "zero official situational quota exists."

**Primary Source Verification:** Re-inspection of PRC Board Resolution No. 1, series of 2013 (16-page scanned PDF) and PRC November 2026 Midwives Licensure Examination Program.

**Reconciled Examination Blueprint:**

| Official Subject | Official Intra-Subject Structure (PRC Res. 1 s. 2013) | Scanned PDF Pages | Verified Item Count & Status |
|---|---|---|---|
| **Obstetrics & Gynecology** | Anatomy & Physiology (12%); Prenatal, Labor & Postpartum (58% [Prenatal 28%, Labor/Delivery 23%, Postpartum 7%]); Complications (16%); Gynecology & Family Planning (14%). | Pages 4–6 | **100 items.** Fully visible in scanned table. |
| **Infant Care & Feeding** | Infant Care (50%); Feeding & Nutrition (40%); Integrated Management of Infant Illness (10%). | Pages 7–8 | **100 items.** Fully visible in scanned table. |
| **Professional Growth & Development** | **Ethics (50%):** Fundamentals of Ethics (10%), Personality Development (20%), **Knowledge of the Midwifery Profession (scope, skills, qualifications, exam facts) (20%)**.<br>**Law (50%):** Midwifery law and related health jurisprudence. | Pages 9–11 | **100 items.** Fully visible in scanned table. *(Corrects R1's misplaced "organizations" label).* |
| **Fundamentals of Health Care** | Prenatal Care (15%); Labor & Delivery Care (15%); Postpartum Care (10%); **Midwifery Procedures (60%)**.<br>*Visible Subgroups under Procedures:*<br>1. **Health-care process** (6 items)<br>2. **Vital signs** (20 items)<br>3. **Preventive and comfort measures** (20 items)<br>*Subtotal visible: 46 items.* | Pages 12–14 | **100 items total table.**<br>**DISCREPANCY PRESERVED:** Exactly **14 items are missing/unaccounted** in the scanned photocopy under Midwifery Procedures. *(Corrects R1's hallucinated "Surgical Procedures" subgroup).* |
| **Primary Health Care** | Maternal & Child Health (55%); Communicable & Non-communicable Diseases (15%); Inferred Opening Cluster (30%). | Pages 15–16 | **100 items total table.**<br>**DISCREPANCY PRESERVED:** Scan begins at competency `A.12`. Competencies `A.1` to `A.11` are missing/unreadable. Inferred 30% cluster ($100 - 55 - 15 = 30$). |

**Clarifications on Weightings & Quotas:**
1. **Intra-Subject Allocations:** The percentages in Resolution No. 1 s. 2013 are allocations of items *within that specific 100-item examination subject*, not percentages of the whole two-day exam.
2. **Two-Day Examination Administration:** Under dated examination programs (e.g. November 2026), Day 1 administers Obstetrics (100 items), Fundamentals (100 items), and Infant Care (100 items); Day 2 administers Primary Health Care (100 items) and PGD (100 items). Total: 500 items. Passing requires a general average of $\ge 75\%$ with no grade $< 50\%$ in any subject (RA 7392 Sec. 16).
3. **Situational Question Quota Finding:** The board states the precise, verified finding: **No official quota or required percentage for situational versus direct recall questions was established by the public official PRC documents actually retrieved and inspected.** KOMADRONA's decision to author situational reasoning cases is an educational choice to foster clinical thinking, not a compliance requirement imposed by a published PRC quota.

---

### F-05 — HIGH: Scientific & Governance Vocabulary Normalization (DEC-001 to DEC-010)

**Defect in R1:** R1 employed overclaiming governance and scientific terminology (`APPROVED`, `DISPROVEN`, `GUARANTEED`, `ELIMINATES`), presenting author proposals as established facts or self-endorsed policies.

**Remediation Actions:**
1. **Banned Terminology:** All instances of `APPROVED` (for non-owner decisions), `DISPROVEN` (for generalized hypotheses), `GUARANTEED` (for content quality), and `ELIMINATES` (for theoretical design mitigations) are removed.
2. **Standardized Research Status Taxonomy:**

| Standard Status Term | Precise Operational Meaning |
|---|---|
| **`SUPPORTED_BY_LITERATURE`** | Peer-reviewed external research demonstrates the general cognitive or pedagogical principle, subject to documented population and transfer limits. |
| **`PROPOSED`** | A design, architecture, or workflow submitted by the board for critical analysis; not yet accepted. |
| **`PAPER_REVIEWED`** | A paper-only logic walkthrough, inspection, or counterexample check was executed on written artifacts without student participants. |
| **`INCONCLUSIVE`** | Available evidence is mixed, methodologically limited, or insufficient to draw a defensible directional conclusion. |
| **`NOT_EMPIRICALLY_TESTED`** | No experimental or empirical trial has been conducted with Philippine midwifery students or live software runtimes. |
| **`REVISE_REQUIRED`** | An independent or adversarial review has identified material defects requiring remediation before further consideration. |
| **`OWNER_DECISION_PENDING`** | A formal proposal submitted to KIRCH for review and decision; carries zero authority until explicitly authorized by the project owner. |

3. **Status Reclassification:**
   - `Variant B-Dual` is reclassified as **`PROPOSED / PAPER_REVIEWED / NOT_EMPIRICALLY_TESTED`**. It does *not* "eliminate" expertise reversal; it is a design hypothesis intended to mitigate cognitive burden.
   - Spaced review intervals are reclassified as **`SUPPORTED_BY_LITERATURE (General Principle) / PROPOSED (Queue Implementation)`**. Fixed calendar spacing was not "disproven"; rather, rigid fixed spacing of identical items is methodologically ungrounded in health education and risks surface cue recognition.
   - Content quality gates are reclassified as **`PROPOSED_SAFEGUARD`**, explicitly removing any claim of "guaranteeing zero clinical errata."
   - All ten owner decisions (`DEC-001` through `DEC-010`) are marked **`PROPOSED / OWNER_DECISION_PENDING`**.

---

### F-06 — MEDIUM: Scientific Citation Corrections

**Defect in R1:** Inaccurate confidence intervals, misclassified review methodologies, unverified flaw percentages, and conflated author attributions.

**Corrected Bibliographic Records:**

| Identifier | Corrected Primary Reference | Exact Portions Inspected & Verified Findings | Specific Limitations & Philippine MLE Applicability |
|---|---|---|---|
| **`E-01`** | **Trumble et al. (2023)**<br>`PMID 37615780`<br>*Med Educ* | **Classification: SYSTEMATIC REVIEW** (not a scoping review). Synthesized 56 studies across health professions education (medicine, nursing, dentistry, pharmacy). Found general benefits of retrieval practice across varied formats. | **No universal pooled effect size ($d \approx 0.5\text{--}0.7$) can be claimed as a global metric.** Included studies exhibited high methodological heterogeneity in interventions, delay intervals, and testing instruments. Most assessed short-term factual retention; transfer to complex clinical reasoning was inconsistent. |
| **`E-02`** | **Martinengo et al. (2024)**<br>`PMID 39388234`<br>*J Med Internet Res* | Systematic review and meta-analysis of spaced digital education in health professions (33 studies included; 18 RCTs in meta-analysis).<br>**Corrected Knowledge Outcome: $\text{SMD} = 0.32$, 95% CI [0.13, 0.51]** (corrects R1's erroneous `0.15–0.49`). High heterogeneity ($I^2 = 66\%$). | Modest knowledge advantage for spaced over massed digital instruction. High risk of bias in many included trials. Does **not** validate any specific fixed schedule (e.g. `1/3/7d`) or predict licensure exam pass rates. |
| **`E-05`** | **Naidoo (2023)**<br>`PMC10244925`<br>*S Afr Fam Pract* | Continuing Medical Education (CME) methodological review synthesizing National Board of Medical Examiners (NBME) guidelines for single-best-answer MCQs. Discusses technical item-writing flaws (IWFs) including window dressing, cueing, and negative stems. | **Clarification:** Naidoo (2023) is a methodological guide, **not an original empirical survey reporting that "46% of faculty-written MCQs contain flaws."** Empirical flaw prevalence figures in medical literature (ranging 30%–50%) derive from separate studies (e.g., Downing 2005, Tarrant et al. 2006) and cannot be cited without their specific primary denominators. |
| **`E-08`** | **Leppink & van den Heuvel (2015)**<br>`PMID 26016429`<br>*Perspect Med Educ* | Methodological evaluation of cognitive load measurement instruments in health professions education. | Corrects R1's inherited citation error in `G0_LEARNING_EXPERIENCE_RESEARCH_CONCEPT.md` which conflated Leppink & van den Heuvel with van Merriënboer & Sweller (2010, `PMID 20078759`). |
| **`E-09`** | **van Merriënboer & Sweller (2015)**<br>`PMC4456454` | Narrative synthesis of Cognitive Load Theory and the **Expertise Reversal Effect** in health professions education. | Theoretical and narrative synthesis, not an empirical RCT of KOMADRONA's proposed learning pathways. Supports designing alternative paths for novices vs repeaters, but does not prove runtime effectiveness. |

---

### F-07 — MEDIUM: Reclassification of Quantitative UX Thresholds (DEC-003, DEC-009, DEC-010)

**Defect in R1:** R1 presented specific quantitative thresholds (`< 80` vignette words, `±10%` option lengths, `< 50 KB` HTML/CSS payload, zero JavaScript, mandatory WCAG AAA contrast, `10–20` first-release items) as universal, mandatory scientific laws.

**Remediation & Analysis:**
1. **Stem Word Count (`< 80 words`):** A short vignette can still be clinically ambiguous; a longer vignette may be necessary to present realistic vital signs and clinical history without testing irrelevant reading speed. Converted to a **heuristic guideline**: *"Stems should be concise, focused on discriminating clinical features, and free of extraneous window dressing, without an arbitrary hard word ceiling."*
2. **Option Length (`±10%`):** Matching option length eliminates conspicuous length cueing, but does not eliminate grammatical, contextual, or semantic cues. Converted to a **candidate quality standard**: *"Options should be homogeneous in syntax, plausibility, and approximate length, evaluated through independent review rather than rigid character counting."*
3. **Payload Budget (`< 50 KB`) & Zero JS:** Low-bandwidth accessibility is an essential goal for rural Philippine mobile users, but declaring "zero JavaScript for all core interactions" restricts useful client-side accessibility enhancements (e.g. keyboard traps, ARIA live region announcements, offline cache managers). Converted to a **performance target**: *"Server-rendered or static semantic HTML core, functional without client-side scripts, with progressive enhancement where scripts improve accessibility."*
4. **Contrast Requirements:** WCAG 2.2 Level AA ($\ge 4.5:1$ for normal text, $\ge 3:1$ for large text/UI components) is the established, defensible international accessibility standard. Mandatory AAA ($\ge 7:1$) across all elements can severely restrict semantic color coding. Converted to: *"Strict WCAG 2.2 Level AA compliance across all views, with Level AAA contrast targeted as an aspirational enhancement."*
5. **Initial Release Volume (`10–20 items`):** Authoring 10–20 high-fidelity items is a pragmatic milestone for a starter slice, but does not mathematically guarantee quality or curriculum coverage. Converted to an **editorial workflow proposal** subject to owner authorization.

---

### F-08 — MEDIUM: Paper-Experiment Provenance & Reporting Accuracy

**Defect in R1/R3:** 
- The R1 synthesis and R3 comment misattributed the cueing defect in `PAPER-001` to an "Option C" containing the words *"always prioritize..."*, which do not appear in the original test file.
- R3 stated that score reporting *"misled students,"* implying that real students participated.
- Local character counts (550,000 characters) were cited as proven durable GitHub records.

**Remediation & Provenance Correction:**
1. **Accurate Item Provenance (`PAPER-001`):** In `G0_EDUCATION_BOARD_PAPER_TEST_001.md`, the tested item was a **non-clinical source-interpretation scenario** concerning PRC TOS gaps:
   - *Option 1:* "Treat A.1–A.11 as fully verified because Primary Health Care appears in the official exam program."
   - *Option 2 (Keyed):* "Keep Primary Health Care in the navigation and clearly mark the missing detailed competencies unverified until exact source evidence is found."
   - *Option 3:* "Remove Primary Health Care from the subject list until every detailed competency can be transcribed."
   - *Option 4:* "Replace the missing TOS wording with a general curriculum topic list and label it verbatim PRC TOS."
2. **True Defect Description:** The actual cueing defect in `PAPER-001` was that Option 2 used nuanced, defensible phrasing (*"clearly mark unverified"*), while Options 1 and 4 used absolutist language (*"fully verified"*, *"verbatim"*), and Option 3 presented an extreme, implausible administrative action (*"Remove Primary Health Care from the subject list"*). The misattributed "Option C / always prioritize" quotes are formally retracted.
3. **Clarification of Participant Evidence:** **Zero students were tested.** All findings in `PAPER-001` were analytical observations made during a paper-based walkthrough by the authoring session. Reporting is corrected to describe *analytical risks of learner misinterpretation*, not observed empirical outcomes.
4. **Transparency on GitHub Records:** Subagent scratch reports (over 500k characters locally) were session-level artifacts. The canonical, durable research record consists exclusively of the committed branch markdown files and posted GitHub Issue #6 comments.

---

### F-09 — MEDIUM: Complete Publication-Contract Aligned Revocation State Machine (DEC-007)

**Defect in R1:** R1's revisit predicate (`EligibleForReview(item) iff ClosureComplete(item.lesson) && !RevokedOrQuarantined(item.source)`) omitted essential dependencies from the proposed G0 Content Publication Contract (`G0_CONTENT_PUBLICATION_CONTRACT.md`), such as exact question versions, item-specific quarantines, and claim-to-source closures.

**Remediated Publication-Aligned Predicate:**
An item $q$ belonging to lesson $l$ with supporting sources $S$ is eligible to be served in an active study or review queue if and only if it satisfies the full conjunctive closure:

$$\begin{aligned}
\text{EligibleForReview}(q, l, S) \iff & \text{Status}(q) = \text{PUBLISHED\_VERIFIED} \\
& \land \text{Status}(l) = \text{PUBLISHED\_VERIFIED} \\
& \land \text{ExactVersionMatch}(q.\text{version}, l.\text{active\_version}) \\
& \land \text{ClaimClosureComplete}(q.\text{claims}, S) \\
& \land \neg \text{QuarantinedOrRevoked}(q) \\
& \land \neg \text{QuarantinedOrRevoked}(l) \\
& \land \forall s \in S : \left( \neg \text{Revoked}(s) \land \text{VersionCurrent}(s) \right)
\end{aligned}$$

**Four Tested Paper State Transitions:**

```
Scenario A: Clinical Source Revocation (e.g., DOH Guideline Erratum)
  Event: Source S_1 transitions to REVOKED.
  Effect: All lessons l referencing S_1 transition to BLOCKED_BY_DEPENDENCY.
          All questions q linked to S_1 or l transition to QUARANTINED.
          Review engine instantly removes q from active review queues.
          Historical attempt records retain q_v1 for audit, marked "Source Under Revision."

Scenario B: Item-Specific Defect (e.g., Distractor Cueing or Key Error)
  Event: Question q_1 identified as flawed; transitions to QUARANTINED.
  Effect: Parent lesson l remains PUBLISHED_VERIFIED.
          Other sibling questions {q_2, q_3} remain ELIGIBLE.
          Only q_1 is blocked from the review queue.

Scenario C: Lesson Rollback
  Event: Lesson l_v2 rolled back to l_v1 due to content defect.
  Effect: All questions q created against l_v2 are BLOCKED.
          Only questions validated against l_v1 remain ELIGIBLE.

Scenario D: Historical Attempt Audit
  Event: Learner reviews past test taken under q_v1 after q_v2 has been released.
  Effect: Historical log displays exact text of q_v1 attempted by learner.
          Notice displayed: "You completed Version 1. An updated Version 2 is now current."
          Review queue serves only q_v2.
```

---

## 3. Remediation Disposition Summary

| Finding | Severity | Status | Primary Action Taken |
|---|---|---|---|
| **F-01** | HIGH | **REMEDIATED** | Clause-by-clause statutory table constructed; legal scope separated from clinical guidelines. |
| **F-02** | HIGH | **REMEDIATED** | `PAPER-002` quarantined from publication; non-clinical methodology item adopted for R2. |
| **F-03** | HIGH | **REMEDIATED** | Invalid `/100` formula eliminated; four distinct sample/competency metrics defined. |
| **F-04** | HIGH | **REMEDIATED** | Scanned TOS pages re-inspected; Fundamentals/PHC gaps preserved; intra-subject denominators clarified. |
| **F-05** | HIGH | **REMEDIATED** | Vocabulary normalized; `APPROVED`/`DISPROVEN` removed; all owner decisions kept pending. |
| **F-06** | MEDIUM | **REMEDIATED** | Martinengo CI corrected to `[0.13, 0.51]`; Trumble reclassified as systematic review; Naidoo clarified. |
| **F-07** | MEDIUM | **REMEDIATED** | Fixed numeric rules converted to candidate heuristics with documented trade-offs. |
| **F-08** | MEDIUM | **REMEDIATED** | Original `PAPER-001` options 1–4 provenance restored; unobserved student harms retracted. |
| **F-09** | MEDIUM | **REMEDIATED** | Review predicate bound to full publication contract conjunctive closure across 4 transition states. |
