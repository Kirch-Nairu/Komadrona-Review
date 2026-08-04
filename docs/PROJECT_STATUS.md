# Komadrona Review — Project Status

Status date: 4 August 2026  
Current stage: Content and in-app practice engine vertical slice  
Foundation pull request: `#1 Establish legal-first Version 1 foundation`  
Active stacked pull request: `#2 Build in-app content and practice engine foundation`  
Current branch: `feature/content-engine`

## Status language

Komadrona Review uses the following terms consistently:

- `Planned` — documented but not implemented.
- `Implemented` — code or content exists in the branch.
- `Build verified` — automated checks pass for the identified commit.
- `Visually verified` — inspected at defined mobile and desktop widths.
- `Interaction verified` — client behavior and local persistence were exercised in a browser.
- `Source checked` — factual claims were compared with cited primary sources.
- `Clinically reviewed` — a qualified reviewer completed a documented review.
- `Released` — merged, deployed, and available through the public release route.
- `Blocked` — an unresolved dependency prevents responsible completion.

## Pull-request state

### Pull Request 1 — Foundation

Branch: `agent/legal-first-foundation`  
Base: `main`  
State: open draft

Scope:

- legal, privacy, source, licensing, and governance foundation;
- responsive interface shell;
- official examination blueprint;
- content-completion roadmap and gap controls.

This PR remains isolated from full lesson and quiz implementation.

### Pull Request 2 — Content engine

Branch: `feature/content-engine`  
Base: `agent/legal-first-foundation`  
State: open stacked draft

Scope:

- strict lesson and question content collections;
- cross-collection validation;
- live coverage ledger;
- schema-rendered non-clinical fixture lesson;
- first in-app question engine;
- IndexedDB attempts and bookmarks;
- local-storage and privacy architecture changes.

The fixture content is explicitly excluded from official examination coverage and the 500-question release target.

## Current delivery status

### Foundation and governance — implemented

- Static Astro and TypeScript frontend
- Legal-first landing page and acknowledgment
- Educational and non-affiliation disclaimer
- Browser-local privacy notice
- Source registry and source-policy page
- Copyright and content-license boundaries
- Contribution and examination-integrity rules
- About and credits pages
- Responsive desktop and mobile navigation
- Baseline Vercel security headers
- GitHub Actions type-check, build, route, content, and artifact workflow

Status: `Implemented` and `Build verified` in the foundation branch.

### Examination blueprint — implemented with one controlled gap

Implemented:

- Five principal examination subjects
- Official percentage-weight display
- Official-source warning and limitations
- Proportional study-priority model
- Weight-total and duplicate-ID build validation
- Review-domain links to the blueprint
- Direct PRC Table of Specifications attribution

Mapping state:

- Obstetrics: 100 percent blueprint mapping
- Infant Care and Feeding: 100 percent blueprint mapping
- Primary Health Care: 100 percent blueprint mapping, including a clearly labeled normalized cluster
- Professional Growth and Development: 100 percent blueprint mapping
- Fundamentals of Health Care: 40 percent exact mapping; remaining 60 percent blocked pending independent verification

Aggregate mapped coverage across five 100-item subject tables: 440 of 500 weighted items, or 88 percent.

Blocker: `MAP-FHC-001` — verify the remaining Fundamentals of Health Care Table of Specifications page without inference.

### Source acquisition — started, not complete

Implemented:

- Versioned source registry
- Official PRC examination program and Table of Specifications
- RA 7392 and selected maternal, newborn, reproductive-health, nutrition, breastfeeding, and screening laws
- Initial DOH program references
- Initial WHO maternal and newborn guidance
- Privacy, copyright, and public-solicitation operational references

Removed from the active architecture:

- Google Forms as a quiz provider
- external score handling
- external form privacy and retry dependencies

Still required:

- Complete current PCPNC manual
- Complete current BEmONC material
- Current EINC or Unang Yakap guidance
- Current Philippine family-planning clinical standards
- Current National Immunization Program guidance
- Current newborn-screening operational guidance
- Current IMCI or sick-young-infant guidance
- Current infection-prevention and control standards
- Current breastfeeding, Milk Code, and infant-and-young-child-feeding guidance
- Complete CHED CMO No. 3 competency extraction

Status: `Started`; major clinical drafting remains blocked until the relevant source packet is complete.

### Content and question schemas — implemented first slice

Implemented:

- Astro `lessons` content collection
- Astro `questions` content collection
- Strict lesson metadata schema
- Strict question metadata schema
- Stable lesson and question IDs
- Question versioning
- Exact source locator requirements
- Four-choice Version 1 question contract
- Answer and distractor rationale requirements
- Risk, status, and publication-state fields
- Build-time source-ID validation
- Build-time domain and blueprint-area validation
- Build-time lesson-question reciprocal-link validation
- Build-time answer-key and choice-ID validation
- Build-time review-metadata and publication-gate validation

Fixture proof:

- Schema-valid non-clinical lessons: 1
- Schema-valid non-clinical questions: 3
- Official examination lessons: 0
- Official examination questions: 0

Status: `Implemented`; fixture content is isolated from official coverage.

### Live coverage ledger — implemented first slice

Implemented:

- `/content-status` route generated from lesson, question, source, and blueprint data
- Fixture and official content counted separately
- Domain and weighted-area lesson/question counts
- Build failure when integrity errors are present
- Zero official coverage displayed honestly until real modules exist

Current official area coverage: 0 of 16 represented weighted areas have both a real lesson and a real question.

Status: `Implemented`; complete competency-level reporting and export remain planned.

### In-app practice engine — implemented first vertical slice

Implemented:

- Questions delivered inside Komadrona
- Four-choice interaction
- Immediate answer checking
- Correct-answer rationale
- Selected-distractor rationale
- Source locator display
- Confidence selection
- Flag-for-review state in the attempt record
- Question bookmarks
- Local scoring
- Retake support
- Local recent-attempt history
- Question-version capture in attempts

Current bank:

- Non-clinical engine fixture questions: 3
- Validated midwifery questions: 0
- Minimum Version 1 target: 500 original validated midwifery questions

Not yet implemented:

- weighted question selection;
- topic and domain configuration;
- mixed mock examinations;
- question navigator;
- pause and resume;
- incomplete-attempt recovery;
- weak-area selection;
- competency result breakdown;
- large-bank performance and randomization controls.

Status: `Implemented` as a controlled fixture vertical slice, not yet a complete reviewer examination engine.

### Browser-local learner data — implemented first slice

Implemented:

- IndexedDB database `komadrona-review`
- Data version 1
- `attempts` object store
- `bookmarks` object store
- `lessonProgress` object store foundation
- `metadata` object store foundation
- Completed fixture-attempt persistence
- Bookmark persistence
- Persistent-storage status check and request control
- Small legal acknowledgment in local storage

Not yet implemented:

- lesson progress interface;
- in-progress attempt persistence and resume;
- score and weak-area aggregation;
- migrations beyond version 1;
- JSON export and import;
- pre-import rollback;
- merge and replace modes;
- destructive reset interface.

Status: `Implemented` first slice. Local data is not yet considered recoverable.

### Reviewer lessons — not started

Current published clinical lessons: 0  
Current source-checked clinical lessons: 0  
Current clinically reviewed lessons: 0

The first planned real module remains `Obstetrics — Prenatal Assessment and Health Teaching`. Drafting will not begin until its source packet is complete and the reusable real lesson route is finalized.

Status: `Not started` by design.

### PWA and offline delivery — planned

Not implemented:

- web app manifest;
- application icons;
- service worker;
- Cache Storage strategy;
- offline shell;
- offline lesson and question precaching;
- update notification;
- install guidance;
- cache-version rollback.

Status: `Planned`. Static pages may be browser-cached normally, but Komadrona must not yet claim full offline-app behavior.

### Deployment — not released

- Local development: available
- Ubuntu static build: verified through GitHub Actions for completed commits
- Public Vercel deployment: not completed
- Main branch release: not completed
- Installable PWA release: not completed
- Android package: deferred until the browser application is stable
- iOS packaging: explicitly deferred

Status: `Not released`.

## Current blockers

### MAP-FHC-001 — Fundamentals blueprint gap

Impact:

- prevents final Fundamentals topic weighting;
- prevents proportional Fundamentals question allocation;
- prevents a 100 percent blueprint-completeness claim.

Exit criteria:

- readable official evidence obtained;
- two-pass transcription completed;
- exact headings and weights recorded;
- total equals 100 percent;
- page evidence and verification date attached.

### SRC-CLINICAL-001 — Philippine clinical source packets

Impact:

- prevents responsible clinical drafting;
- prevents exact Philippine schedules, procedures, referral rules, or treatment claims.

Exit criteria:

- required current manuals acquired;
- versions and issuing bodies verified;
- source records and exact locators prepared per module.

### REV-CLINICAL-001 — Qualified clinical review

Impact:

- content can reach `Source checked` but not `Clinically reviewed`;
- high-risk clinical content cannot be declared complete or published through the clinical study path.

Exit criteria:

- qualified reviewer identified;
- review scope and process documented;
- consent to attribution or anonymous internal review terms recorded;
- corrections and approvals logged.

### UX-CONTENT-ENGINE-001 — Reusable real lesson system

Remaining impact:

- fixture rendering exists, but real domain/module/topic routes and reusable status/source components are not finalized;
- correction history and competency-level reporting remain incomplete.

Exit criteria:

- reusable lesson layout finalized;
- domain/module/topic routes implemented;
- source and review-status components implemented;
- correction history implemented;
- full coverage report generated.

### OPS-LOCAL-RECOVERY-001 — Local backup and migration

Impact:

- local learner records can be lost;
- users cannot move records between browsers or devices;
- schema updates cannot yet migrate or roll back safely.

Exit criteria:

- export and import implemented;
- schema validation and migration implemented;
- merge, replace, and rollback behavior tested;
- destructive reset controls implemented.

## Branch and module workflow

1. Foundation work remains in PR #1.
2. Content engine and local practice infrastructure remains in stacked PR #2.
3. Fundamentals blueprint research should use `research/fundamentals-tos-completion`.
4. Real reviewer modules use focused branches after the engine contract is stable.
5. Each real module PR includes sources, metadata, lesson text, coverage updates, question records, review status, CI, and visual QA.

## Immediate next actions

1. Finish PR #2 desktop, mobile, and interaction QA.
2. Finalize the reusable real lesson route and source/status components.
3. Add in-progress attempt saving and resume support.
4. Add question-selection utilities for topic, weighted-domain, and mixed modes.
5. Add competency-level result aggregation.
6. Implement JSON export, import, validation, migration, and rollback.
7. Implement the PWA manifest, service worker, and offline-cache strategy.
8. Close `MAP-FHC-001` in parallel.
9. Acquire the complete Philippine antenatal source packet.
10. Start the first real module only after the source packet and publication gates are ready.

## Current judgment

Komadrona now has more than a legal shell: the content schemas, validation model, local database, and in-app practice path exist as a working non-clinical fixture. It is still not a usable midwifery reviewer because official lessons and validated midwifery questions remain at zero. The next responsible work is to finish the reusable engine and recovery controls, then add source packets and focused reviewer modules without weakening the publication gates.
