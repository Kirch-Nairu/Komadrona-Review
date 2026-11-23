# Scientific board operation — research, falsification, documentation

## A. Research question pre-registration

Each question gets: matrix ID, source of concern (student, exam, verified research, or inference), population, construct, expected benefit/harm, practical decision affected, evidence admissibility and a stopping criterion. Distinguish content validity, instructional usability, delayed retention, transfer and actual professional practice—none of these proxies equals the others.

## B. Evidence ledger format

`EID | precise proposition | journal/official source | authors/year | DOI/URL | method/population/sample | intervention and comparator | measure/time horizon | results/effect/CI where inspected | applicability to PH MLE | limitations | checked-by/date | status (READ_FULL / READ_ABSTRACT / SOURCE_REPORTED / NOT_CHECKED)`.

Read original source where possible. Verify dates, location and whether the outcome is perceived confidence vs measured knowledge vs observed clinical skill. Never promote a 2026 study to "established globally" from a single abstract. Official PRC documents regulate claimed exam mapping; pedagogy studies inform learning design and do not replace regulation.

## C. Hypothesis / comparator card

`HYP-###`: falsifiable proposition; learner level; precise outcome; conditions/inputs; proposed variants A and B plus minimally credible baseline; predicted directional difference; confounds (time-on-task, source quality, item exposure, difficulty, novelty, test-retest), measures (immediate vs delayed recall, case transfer, ambiguity, engagement, accessible task success), measurement limitations, safety/fairness, feasible **paper** tests vs future real tests, reversal/failure rule, decision consequence.

**Paper-only tests** may establish logical coherence, validity defects, accessibility gaps or unsupported claims. They **cannot** prove the educational intervention raises scores in actual learners.

## D. Round cadence

1. **Kickoff evidence truth:** verify branches/SHA and source graph; cite the exact decision and identify missing artifacts.
2. **Independent positions:** one argument per lens (or real agent) before a shared synthesis; if simulated, label it.
3. **Cross-examination:** each proposal gets at least 2 rival mechanisms and one adversarial scenario. Seek counterexamples on official alignment, clinical-source role, multiple answer possibility, novice cognitive burden, item-retest memorization, source staleness, accessibility and older withdrawn versions.
4. **Paper experiments:** assess *one nonclinical* worked lesson and one constructed situational-item specification; annotate what was actually checked; don't fill a real clinical stem without verified sources.
5. **Dissent/synthesis:** record minority view verbatim if offered by a real participant. State tradeoffs, evidence quality, recommendations, owner-only decisions and new research needed. A "consensus" needs an actual agreement record.

## E. Required durable full-discussion record

**Canonical:** one GitHub issue for board discussion; each actual contribution is posted as an issue comment **under the authenticated account actually participating**. Each post should contain: `BOARD-R# / TIME / ACTOR / ROLE_OR_LENS / MATRIX/HYP / PROPOSITION / EVIDENCE WITH LOCATORS / COUNTERARGUMENT / FALSIFIER / OUTCOME / NEXT`. Full **written reasoning and dialogue** relevant to the decision may be recorded; never claim access to hidden model private chain of thought. Store verbatim user/agent-visible argument texts as supplied, not invented transcripts.

**Source branch:** `docs/rebuild-planning/G0_EDUCATION_BOARD_*.md` records curated source ledger/hypotheses, decisions, and permanent conclusions. Preserve dissent and prior exact refs; don't silently edit the historical original conversation; amendments are new comments or explicitly dated changes.

No ChatGPT or Antigravity process is continuously running merely because an issue or skill exists. For continuous activity someone must start an actual configured Antigravity/agent session with GitHub access; no assumed unattended scheduling.

## F. Acceptance and red-team rules

Claims receive `SUPPORTED`, `CONTESTED`, `INCONCLUSIVE`, `DISPROVEN`, `NOT_TESTED` based on **actual** inspection, not expected outputs. A proposed case and an unexecuted test are **SPECIFICATION_ONLY**. Each board conclusion states population/transfer limit and whether it is a source statement, inference or project choice.

Fault-injection challenges:
- PRC TOS detail absent → decline "official exact competency" claim.
- High-authority wrong-purpose document → evidence ineligible for clinical procedure.
- Ambiguous single-best-answer vignette → revision, not scored/published.
- Learner chooses correct answer by guessing → don't infer durable mastery.
- Old withdrawn question returns through historical manifest → reject per proposed R2 contract.
- Two alleged independent agents use one GitHub author → identity is not independently verified.
- A board member writes clinical dose without locators → hold the affected claim.
- Evidence absent yet board reports PASS → report BLOCKED/NOT_TESTED.

## G. Stop and report

Output after each round: `repo@SHA`, question IDs, sources *actually read*, evidentiary claims, alternatives, dissent, paper checks executed/not run, blockers, independent-review boundaries, owner decision requested. Stop on permission ambiguity or scope drift; never force-push/merge/publish/deploy.

### Forge controls adopted, not copied blindly

The board borrows from `Kirjane/Operation-FORGE.kirion` (read at `main` during drafting): `AGENTS.md` core laws, `protocols/role-call.md`, `roles/reviewer.md`, `protocols/writer-execution.md`, `protocols/sandbox-isolation.md`, and `second-brain/research/RESEARCH_PROTOCOL.md`. The role of the board is **educational R&D**, not an integration/engineering release pipeline. Avoid inventing more layers.
