# Komadrona Review — Project Status

Status date: 4 August 2026  
Current stage: Foundation and examination blueprint  
Current pull request: `#1 Establish legal-first Version 1 foundation`  
Current branch: `agent/legal-first-foundation`

## Status language

Komadrona Review uses the following terms consistently:

- `Planned` — documented but not implemented.
- `Implemented` — code or content exists in the branch.
- `Build verified` — automated checks pass.
- `Visually verified` — inspected at defined mobile and desktop widths.
- `Source checked` — factual claims were compared with cited primary sources.
- `Clinically reviewed` — a qualified reviewer completed a documented review.
- `Released` — merged, deployed, and available through the public release route.
- `Blocked` — an unresolved dependency prevents responsible completion.

## Current delivery status

### Foundation and governance — implemented

- Static Astro and TypeScript frontend
- Legal-first landing page and acknowledgment
- Educational and non-affiliation disclaimer
- Privacy notice and local-storage warning
- Source registry and source-policy page
- Copyright and content-license boundaries
- Contribution and examination-integrity rules
- About and credits pages
- Responsive desktop and mobile navigation
- Baseline Vercel security headers
- GitHub Actions type-check, build, route, and artifact workflow

Status: `Implemented`, `Build verified`, and visually tested during foundation QA.

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
- Privacy, copyright, Google Forms, and public-solicitation operational references

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

### Content engine — planned, not implemented

Required:

- Astro content collections
- Strict lesson schema
- Strict question schema
- Build-time metadata validation
- Competency-to-lesson coverage ledger
- Reusable lesson layout
- Source-note component
- Status and review-date component
- Correction-history support

Status: `Planned`.

### Reviewer lessons — not started

Current published clinical lessons: 0  
Current source-checked lessons: 0  
Current clinically reviewed lessons: 0

The first planned module is `Obstetrics — Prenatal Assessment and Health Teaching`, but drafting will not begin until its source packet and schema exist.

Status: `Not started` by design.

### Practice bank — not started

Current original validated questions: 0  
Current public Google Forms: 0  
Minimum Version 1 completion target: 500 original validated questions

Status: `Not started`.

### Learner tools — mostly planned

Implemented:

- Local acknowledgment state

Not implemented:

- Topic completion
- Bookmarks
- Self-recorded quiz attempts
- Progress dashboard
- Export and import backup
- Search
- Correction report route

Status: `Planned` except for acknowledgment state.

### Deployment — not released

- Local development: available
- Ubuntu static build: verified through GitHub Actions
- Public Vercel deployment: not completed
- Main branch release: not completed

Status: `Not released`.

## Current blockers

### Blocker 1 — Fundamentals blueprint gap

ID: `MAP-FHC-001`

Impact:

- prevents final Fundamentals topic weighting;
- prevents proportional Fundamentals question allocation;
- prevents 100 percent blueprint-completeness claim.

Exit criteria:

- readable official evidence obtained;
- two-pass transcription completed;
- exact headings and weights recorded;
- total equals 100 percent;
- page evidence and verification date attached.

### Blocker 2 — Philippine clinical source packets

ID: `SRC-CLINICAL-001`

Impact:

- prevents responsible clinical drafting;
- prevents exact Philippine schedules, procedures, referral rules, or treatment claims.

Exit criteria:

- required current manuals acquired;
- versions and issuing bodies verified;
- source records and exact locators prepared per module.

### Blocker 3 — Qualified clinical review

ID: `REV-CLINICAL-001`

Impact:

- content can reach `Source checked` but not `Clinically reviewed`;
- high-risk clinical content cannot be declared complete.

Exit criteria:

- qualified reviewer identified;
- review scope and process documented;
- consent to attribution or anonymous internal review terms recorded;
- corrections and approvals logged.

### Blocker 4 — Content engine

ID: `UX-CONTENT-ENGINE-001`

Impact:

- articles could otherwise become inconsistent and difficult to audit;
- coverage and source gaps would be hidden.

Exit criteria:

- schemas implemented;
- invalid content fails the build;
- coverage report generated;
- reusable lesson template visually verified.

## Branch and pull-request workflow

The project will avoid one permanent branch containing every stage.

### Pull Request 1 — Foundation

Branch: `agent/legal-first-foundation`

Scope:

- legal, privacy, source, licensing, and governance foundation;
- interface shell and responsive design;
- examination blueprint;
- content-completion roadmap and current status.

Exit criteria before readiness:

- CI green;
- no unresolved foundation blocker;
- roadmap and status synchronized;
- PR description updated to reflect the final foundation scope;
- final mobile and desktop visual check.

This PR remains draft until those checks are intentionally accepted. It should not absorb full lesson content.

### Pull Request 2 — Content engine

Planned branch: `feature/content-engine`

Scope:

- content collections;
- schemas;
- build-time validation;
- lesson layout;
- coverage ledger;
- correction metadata.

No clinical lesson prose should be merged through this PR except a clearly labeled fixture used to validate the engine.

### Pull Request 3 — Fundamentals blueprint completion

Planned branch: `research/fundamentals-tos-completion`

Scope:

- close `MAP-FHC-001`;
- replace the pending 60-percent placeholder;
- update proportional question allocations;
- attach source evidence and verification notes.

This may run in parallel with the content-engine branch because it changes blueprint research rather than lesson rendering.

### Content pull requests

Each major module uses a focused branch, for example:

- `content/obstetrics-antenatal-foundations`
- `content/obstetrics-labor-childbirth`
- `content/infant-immediate-newborn-care`
- `content/phc-maternal-child-health`
- `content/pgd-ethics-law`
- `content/fundamentals-core-care`

Each content PR must include:

- module brief;
- lesson metadata;
- source packet and exact locators;
- original lesson text;
- coverage-ledger updates;
- review status;
- original questions when the lesson is ready;
- successful build and visual QA.

### Review-state rule

A pull request may merge a `Draft` or `Source checked` lesson into a non-public development path, but the production study path must not represent it as clinically reviewed or complete until the required review has occurred.

## Standard module workflow

1. Select weighted competency.
2. Create or update gap records.
3. Acquire exact sources.
4. Approve module brief.
5. Draft lesson.
6. Source-check every material claim.
7. Obtain required qualified review.
8. Write and validate original questions.
9. Run automated checks.
10. Perform mobile and desktop visual QA.
11. Merge through a focused PR.
12. Publish status and review dates.
13. Monitor for corrections and source updates.

## Immediate next milestone

Milestone name: `M2 — Content Engine and Coverage Ledger`

Deliverables:

- strict lesson schema;
- strict question schema;
- competency and source relationships;
- build-time rejection of incomplete public content;
- generated coverage summary;
- reusable lesson interface;
- one non-clinical fixture page for QA;
- updated CI checks.

Parallel research task:

- close `MAP-FHC-001`.

Following milestone:

- `M3 — Obstetrics: Prenatal Assessment and Health Teaching`.

## Current judgment

The project has a strong foundation and a defensible priority map, but it is not yet a usable reviewer. The responsible next step is infrastructure for auditable content, followed by source acquisition and focused module production. Writing many articles before those controls exist would create the appearance of completeness while preserving hidden gaps.