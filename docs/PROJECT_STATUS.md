# Komadrona Review — Project Status

Status date: 4 August 2026  
Current stage: Machine-validated content mapping and source acquisition  
Foundation pull request: `#1 Establish legal-first Version 1 foundation`  
Active stacked pull request: `#2 Build in-app content and practice engine foundation`  
Current branch: `feature/content-engine`

## Status language

- `Planned` — documented but not implemented.
- `Mapped` — assigned to a domain, weighted area, module, lesson boundary, source packet, and assessment target.
- `Implemented` — code or content exists in the branch.
- `Build verified` — automated checks pass for the identified commit.
- `Visually verified` — inspected at defined mobile and desktop widths.
- `Interaction verified` — client behavior and local persistence were exercised in a browser.
- `Source ready` — the module's primary-source packet is complete, version-checked, and has exact locators.
- `Source checked` — factual claims were compared with cited primary sources.
- `Clinically reviewed` — a qualified reviewer completed a documented review.
- `Released` — merged, deployed, and available through the public release route.
- `Blocked` — an unresolved dependency prevents responsible completion.

## Pull-request state

### PR #1 — Foundation

Branch: `agent/legal-first-foundation`  
Base: `main`  
State: open draft

Scope: governance, legal and privacy boundaries, responsive shell, source registry, examination blueprint, and roadmap.

### PR #2 — Content and local-practice engine

Branch: `feature/content-engine`  
Base: `agent/legal-first-foundation`  
State: open stacked draft

Scope now includes:

- strict lesson and question collections;
- cross-collection publication validation;
- in-app fixture practice and IndexedDB persistence;
- live implementation ledger;
- machine-readable Version 1 content map;
- source-packet and blocker model;
- exact 500-question internal allocation;
- mapping-first production workflow.

No clinical lesson or board-style question is represented as ready.

## Current delivery status

### Foundation and governance — implemented

Implemented:

- Astro and TypeScript static application;
- legal acknowledgment and educational disclaimer;
- browser-local privacy notice;
- source registry and source policy;
- copyright, contribution, and examination-integrity rules;
- About and Credits pages;
- responsive navigation;
- Vercel security headers; and
- GitHub Actions type-check, build, route, content, and artifact workflow.

Status: `Implemented` and `Build verified`.

### Examination blueprint — implemented with one controlled gap

Current official-table transcription:

- Obstetrics: 100%;
- Infant Care and Feeding: 100%;
- Primary Health Care: 100%, including a disclosed normalized heading;
- Professional Growth and Development: 100%;
- Fundamentals of Health Care: 40% exact, 60% blocked.

Aggregate weighted-table transcription: 440 of 500 items, or 88%.

Open blocker: `MAP-FHC-001`.

### Version 1 content map — implemented and build verified

Implemented:

- 77 of 77 currently transcribed competency statements assigned to modules;
- 60 planned modules;
- 261 planned lesson units;
- 16 weighted areas represented;
- 500-question internal allocation;
- per-area question totals that exactly match the official area weights;
- stable module and planned-lesson IDs;
- module priority and risk classification;
- 17 source packets;
- 18 explicit mapping and source gaps;
- ordered initial implementation queue; and
- `/content-map` generated from the same data used by the build validator.

The map validator fails the build when:

- a competency has no planned module;
- a module references an unknown domain, area, source packet, or competency index;
- a source packet references an unknown source or gap;
- module or lesson IDs are duplicated;
- a module claims readiness while its packet is not ready;
- an area's internal question targets do not equal its official weight; or
- the complete plan does not total 500 questions.

Status: `Mapped`, `Implemented`, and `Build verified`.

Important limitation: mapping the currently transcribed competency statements does not close the unresolved Fundamentals source gap and does not mean clinical content is complete.

### Source acquisition — active and blocking clinical drafting

Current source-packet state:

- source packets: 17;
- source-ready packets: 0;
- packets in acquisition: 16;
- blocked packets: 1;
- open mapping/source gaps: 18.

Highest-priority unresolved source needs include:

- current Philippine antenatal-care guidance;
- complete current PCPNC manual;
- current BEmONC material;
- current EINC or Unang Yakap guidance;
- current Philippine family-planning standards;
- current newborn-screening and immunization guidance;
- current breastfeeding, Milk Code, and infant-feeding guidance;
- current IMCI or sick-young-infant guidance;
- current infection-prevention standards;
- current RA 7392 implementing rules and Midwifery Code of Ethics; and
- current PHC and disease-control operational guidance.

Status: `Started`; no clinical module is source ready.

### First real module — mapped, not ready to draft

Module: `OBS-ANTENATAL-ASSESSMENT`  
Title: Antenatal Assessment and Risk Identification  
Priority: Highest  
Risk: High  
Planned lessons: 7  
Internal question target: 12  
Source packet: `antenatal-care`

Formal brief: `docs/modules/OBS-ANTENATAL-ASSESSMENT.md`

Blocking gaps:

- `SRC-PH-ANC-001`;
- `SRC-PH-PCPNC-001`.

Status: `Mapped` and `source-acquisition`; not `ready-to-draft`.

### Content and question schemas — implemented first slice

Implemented:

- strict lesson and question metadata;
- stable IDs and question versions;
- source locators;
- lesson-question reciprocal links;
- four-choice question contract;
- answer and distractor rationales;
- risk, status, and publication fields;
- source-ID, domain, area, answer-key, and review-metadata validation; and
- public-content review gates.

Fixture proof:

- non-clinical fixture lessons: 1;
- non-clinical fixture questions: 3;
- official midwifery lessons: 0;
- official midwifery questions: 0.

Status: `Implemented`; fixtures remain excluded from official coverage.

### In-app practice and learner storage — implemented first slice

Implemented:

- in-app four-choice practice;
- immediate answer and distractor rationales;
- source-locator display;
- confidence and flag state;
- question bookmarks;
- local scores and recent-attempt history;
- exact question-version capture;
- IndexedDB stores for attempts, bookmarks, lesson progress, and metadata; and
- persistent-storage status/request handling.

Still required:

- incomplete-attempt persistence and resume;
- topic, weighted-domain, and mixed-test generation;
- question navigator;
- weak-area and competency aggregation;
- JSON export/import, validation, migration, rollback, and reset; and
- large-bank performance and randomization controls.

Status: `Implemented` as a controlled vertical slice; learner data is not yet recoverable.

### Released reviewer coverage — zero by design

- public clinical lessons: 0;
- source-checked clinical lessons: 0;
- clinically reviewed lessons: 0;
- validated midwifery questions: 0;
- weighted areas with both real lesson and question coverage: 0 of 16.

Status: `Not started` beyond mapping and source acquisition.

### PWA and offline delivery — planned

Not implemented:

- web app manifest and production icons;
- service worker and Cache Storage strategy;
- offline shell and content precaching;
- controlled update notification and rollback; and
- installation guidance.

Status: `Planned`. Komadrona must not yet claim complete offline-app behavior.

### Deployment — not released

- local development: available;
- Ubuntu static build: verified on completed heads;
- public Vercel release: not completed;
- main-branch release: not completed;
- installable PWA: not completed;
- Android packaging: deferred until browser application stability;
- iOS packaging: deferred.

## Current blockers

### MAP-FHC-001 — remaining Fundamentals table

Prevents final detailed allocation of 60 Fundamentals questions and a 100% official-table transcription claim.

### Source packet blockers

Prevent the mapped modules from moving to `ready-to-draft`. A packet closes only when current primary sources, versions, applicability, and exact locators are recorded.

### REV-CLINICAL-001 — qualified clinical review

High-risk and critical clinical material cannot be described as complete or clinically reviewed without a documented qualified reviewer process.

### UX-CONTENT-ENGINE-001 — reusable real lesson system

Mapping and fixture rendering exist. Real domain/module/topic routes, reusable source/status components, and correction history remain to be finalized.

### OPS-LOCAL-RECOVERY-001 — backup and migration

Local records remain vulnerable until export/import, schema migration, rollback, and reset controls are implemented and tested.

## Current workflow

1. Map official competency scope.
2. Assign modules, lesson boundaries, risk, and assessment targets.
3. Assign a source packet and record explicit gaps.
4. Acquire and version-check current Philippine primary sources.
5. Attach exact locators and reconcile conflicts.
6. Move the module to `ready-to-draft` only when its packet has no open gap.
7. Draft lessons from approved objectives.
8. Source-check each material claim.
9. Obtain required qualified review.
10. Write and validate original linked questions.
11. Run automated, responsive, accessibility, and interaction QA.
12. Publish with status, verification dates, and correction history.

## Immediate next actions

1. Finish content-map desktop and mobile QA.
2. Acquire and verify the `antenatal-care` source packet.
3. Finalize reusable real module and lesson routes.
4. Implement source-note, review-status, and correction-history components.
5. Add weighted question-selection utilities using the mapped question targets.
6. Add in-progress attempt saving and resume.
7. Close `MAP-FHC-001` in parallel.
8. Begin `OBS-ANTENATAL-ASSESSMENT` drafting only after its packet reaches `ready`.

## Current judgment

Mapping was the correct first move. Komadrona now has a complete internal production plan for the currently available official scope instead of a loose list of articles. The immediate bottleneck is no longer deciding what to write; it is acquiring the current Philippine sources needed to write the first high-risk module responsibly.
