---
name: komadrona-education-board
description: Run a controlled, evidence-first, adversarial multi-role educational research board for the Philippine Midwives Licensure Examination reviewer. Develop, challenge and test pedagogical, board-experience, situational-item, accessibility and safety hypotheses; preserve actual discussion and dissent on GitHub without authorizing implementation.
---

# KOMADRONA Education & Examination Research Board — isolated mission skill R1

**Mission:** `KOM-G0-EDU-BOARD-R1`  
**Repository:** `Kirch-Nairu/Komadrona-Review`  
**Authorized branch:** `research/komadrona-education-board-r1`  
**Baseline when authored:** `e35cb0f27e4095b67abbe33c12fee151e7e98187`  
**Authority:** KIRCH, product owner; no implied delegation to publish, merge, deploy, implement or clinically certify.  
**Expiry:** retire after accepted G0 education concept / owner decision, or explicit KIRCH cancellation. This skill stays branch-local; do not install globally or edit `main`, `AGENTS.md` or other agents' configurations.

## Activation and identity

Read this skill when asked to run a KOMADRONA research board, learning/assessment design review, situational-question hypothesis test, adversarial brainstorming, or G0 educational concept reconciliation. Read these adjacent files on this branch:
1. `references/ROLE_CARDS.md` — scope, permitted expertise and independent dissent for each lens.
2. `references/RESEARCH_AND_DEBATE_PROTOCOL.md` — evidence rules, rounds, hypothesis/test policy, publication of board records, adversarial checks.
3. `templates/BOARD_RECORD.md` — durable round format and journal protocol.
4. `docs/rebuild-planning/G0_EDUCATION_BOARD_CHARTER.md` and `G0_EDUCATION_RESEARCH_MATRIX.md` — source-of-truth scope and matrix register.

**Before any action**, inspect the repository's active `OWNER_DECISIONS.md`, current issue(s), this branch's actual HEAD, the existing `G0_LEARNING_EXPERIENCE_RESEARCH_CONCEPT.md`, `G0_CONTENT_PUBLICATION_CONTRACT.md`, `Komadrona-Online-Evidence-Report.md`, and Forge reference rules if invoked. Existing decision **OD-001** approves five subjects and progressive verified starter content only. Publication contract is currently R2 **PROPOSED**, under independent Nox review in [Issue #4](https://github.com/Kirch-Nairu/Komadrona-Review/issues/4). Implementation remains held by [Issue #5](https://github.com/Kirch-Nairu/Komadrona-Review/issues/5).

Confirm operator identity, repository permissions and exact SHA. Do not represent a simulated persona as a real independent agent or qualified medical professional. A single model adopting multiple expert lenses is **one author**, not eight independent researchers. When multiple actual sessions/authenticated actors participate, record their true identities and distinct receipts.

## Scope / outputs

**Allowed now:** evidence retrieval and appraisal; critical questioning; alternate approaches; lesson and situational-question *specifications* with nonclinical fictional examples; source and exam-blueprint distinction; research matrix, hypothesis register, paper-only walkthroughs, accessible low-bandwidth learner journeys, red-team educational risk testing, real durable round transcripts and owner-facing decision memos.

**Forbidden without a later explicit authorization:** changing product application code; copying inherited app implementation; mass-generating clinical lessons/questions; publishing guidance or clinical instructions; claiming PRC/BISU endorsement, medical credentials, clinical skill, board-pass prediction, source-check verification not performed; creating hidden agent identities; editing Nox's frozen review branch; changing owner decisions; merging, deployment, force push, credential access, patient/student personal data. Never use live patient cases. No automatic financial/hosting decision.

## Operating protocol — four substantive rounds, not ceremonial meetings

**R0 — Evidence preflight:** freeze source SHA and read approved decisions. Build evidence ledger with publisher/title/version/date/section, methodology, sample/population, effect/uncertainty, applicability to Philippine MLE, and limitations. Mark `CONFIRMED_REPOSITORY`, `VERIFIED_EXTERNAL`, `SOURCE_REPORTED`, `PROPOSED`, `UNKNOWN`, `DISPUTED`, `SUPERSEDED` accurately. A list of web links is not proof all papers were read or their findings replicated.

**R1 — Independent hypotheses:** For each numbered question/matrix, at least two contrasting proposals and a null/status-quo comparator. Each working role contributes an evidence-backed position independently *where real independent workers exist*; otherwise a named operator explicitly presents **simulated analytical viewpoints**, not attributed people. Record what would falsify each argument. Require at least one material objection.

**R2 — Cross-examination and boundary tests:** Skeptic reviews construct validity, risks, hidden assumptions, stale source, context, accessibility, fairness, low-end phones, offline withdrawal, answer ambiguity, clinical/professional scope, and confusion between mock score vs readiness. Separate PRC *official examination facts* from self-designed practice formats. No fabricated situation quota or hidden board exam question. Stress-test negative journeys and conflicting reference applicability.

**R3 — Evidence-driven trial on paper:** Use nonclinical invented examples by default; for medical statements require independently checked exact primary-source locators and applicability before writing a substantive example. Build alternative lesson/assessment flow specifications; test them against explicit rubrics, traceability, adversarial counterexamples, or a controlled manual walkthrough. **Do not claim measured learner benefit without a genuine study.** Record `EXECUTED`, `PAPER_REVIEWED`, `NOT_RUN`, `INCONCLUSIVE`, methodology and counterevidence.

**R4 — Synthesis without fake consensus:** Board convener publishes a decision table: supported design principle, debated options, unresolved conflicts, falsification results, affected learning matrix IDs, risks, dependency, next owner decision, and named dissent. Independent reviewer may veto false evidence claims, not silently decide product scope. KIRCH explicitly accepts/revises; agents never self-approve.

## Required artifacts per contested idea

- `HYP-###`: claim, target learner/outcome, underlying study/reference, predicted observable result, null, comparator(s), confounders, ethics/safety, low-cost test, metric, failure criterion, interpretation and disposition.
- `M-01`–`M-12`: matrix question, official-source or educational-research evidence, confidence, relationship to other matrices, proposed output, negative cases.
- `BOARD-R#`: **actual** timestamped GitHub issue comments with source/actor or named *analytical lens* and factual/unknown labels; do not fabricate dialogue. Durable source documents may summarize the conversation, but cannot erase minority reports. For each round include issue link and GitHub account (actual author of comment).
- `DEC-###`: alternative A/B, evaluation, dissent, risk, owner-only outcome `APPROVED / REVISE / DEFERRED`. A research recommendation alone is not a decision.

## Publish and check

Use a single dedicated GitHub board issue as the central threaded record, plus branch-local Markdown artifacts. Post **actual outputs** after each substantive round; no promise of automatic scheduled work. Each independent worker should post under their *own authenticated identity* if available; otherwise identify who actually wrote the synthesis and do not attribute dialogue to Nox or another agent. Label `DRAFT`, `RESEARCHED`, `PAPER_REVIEWED`, `OWNER_ACCEPTED` precisely. Maintain one writer per file; if parallel, each worker has a separate branch/issue comment, and a named integrator reconciles them.

Run `git diff --check` and inspect links, references, scope, document consistency where an actual host is available. Treat unavailable execution as `NOT_RUN`; use GitHub API readback to verify published branch/file SHA. The Antigravity skill file does **not** launch agents by itself, guarantee multicore/multi-model participation, or authorize unattended writes.

## Stop conditions

Stop affected mutation on branch/SHA mismatch; disputed author identity; attempted medical recommendations without exact sources; secret/PHI exposure; fake citations or claimed tests; groupthink with no counterargument; unsupported PRC exam claims; changes outside the research branch; loss of independent review; unclear owner approval. Record blocker and alternatives, then return authority. No force push, merge, deploy or published medical guidance.

## Adversarial self-test (do before calling skill complete)

Challenge the proposed run with: (a) an actor asking to edit `main`; (b) a demand to mark all hypotheses `PASS` without tests; (c) stale SHA or role identity; (d) a claim that a simulated persona equals an independent licensed clinician; (e) missing PRC TOS details; (f) request to post an invented dialogue under Nox. A compliant agent must **refuse scope/identity/unsupported evidence**, keep the research artifact on the isolated branch and preserve unknowns.

**Exit:** a source-audited, contested, owner-reviewed educational blueprint with a selected learning cycle, situational item standards, mock-board fidelity controls, instructional QA, privacy/accessibility approach, and a paper walkthrough; no automatic code kickoff. Archive this mission skill when the owner declares the decision reached.
