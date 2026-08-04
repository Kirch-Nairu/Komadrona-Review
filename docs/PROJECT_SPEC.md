# Komadrona Review Version 1 — Product and Architecture Specification

## Product purpose

Komadrona Review is an independent, source-based midwifery study and examination application for aspiring Philippine midwives. Version 1 is designed to be useful without user accounts, a server-side learner database, an external quiz provider, or paid infrastructure.

The project combines:

- structured review lessons;
- an official-weight examination blueprint;
- traceable content references;
- original in-app practice questions;
- browser-local learner progress and attempts; and
- visible content and review status.

Vercel is a static distribution and update origin, not the product identity. The long-term product is an installable offline-first application.

## Release boundaries

Version 1 includes:

- a legal-first landing page;
- five review-domain hubs based on the current referenced PRC examination program;
- an examination blueprint based on the currently published PRC Table of Specifications;
- source and content-status disclosures;
- structured source-checked review lessons;
- an in-app question and rationale engine;
- topic practice, weighted domain tests, mixed tests, and weak-area practice;
- browser-local attempts, answers, scores, bookmarks, confidence, and progress;
- progress export and import;
- an installable offline-capable PWA release;
- search;
- a correction-reporting route; and
- static distribution through Vercel.

Version 1 excludes:

- accounts, authentication, and cloud syncing;
- server-side learner profiles, attempts, answers, or scores;
- screenshot, certificate, or proof-of-completion submission;
- first-party analytics, advertising, and behavioral tracking;
- embedded patient or student records;
- paid access, advertisements, donation QR codes, and payment processing;
- confidential, leaked, recalled, reconstructed, or proprietary examinations;
- proctoring, identity verification, secure examination delivery, or credential issuance; and
- claims of institutional or government endorsement.

## Technical architecture

- Framework: Astro
- Language: TypeScript
- Rendering: static output
- Styling: local CSS with system fonts
- Lesson and question content: Astro content collections with strict schemas
- Learner records: IndexedDB
- Small preferences and acknowledgment: browser `localStorage`
- Offline application files: service worker and Cache Storage, planned for the PWA milestone
- Hosting and update origin: Vercel static deployment
- Build validation: GitHub Actions

No server adapter or learner API is required for Version 1.

## Browser-local data contract

### IndexedDB

Structured learner records belong in IndexedDB:

- lesson progress;
- quiz attempts;
- selected answers;
- scores and best scores;
- bookmarks;
- confidence and flagged-question state;
- weak-area statistics;
- exam sessions; and
- backup and schema-migration metadata.

Initial database name: `komadrona-review`  
Initial data version: `1`

Version 1 object stores begin with:

- `attempts`
- `bookmarks`
- `lessonProgress`
- `metadata`

### localStorage

Only small key-value settings belong in local storage:

- `komadrona:v1:notice-acknowledged`
- `komadrona:v1:theme`
- `komadrona:v1:text-size`
- `komadrona:v1:last-route`
- `komadrona:v1:onboarding-complete`

### Local-data limitation

Stored progress must never be described as secure, official, server-backed, or recoverable by the maintainer. Clearing site data, using private browsing, removing the browser or application, resetting the device, or changing browsers or devices can remove local records.

The application may request persistent storage, but browser approval does not replace export and import.

## In-app assessment contract

All Version 1 questions run inside Komadrona Review.

The assessment engine must support:

- focused topic practice;
- official-weight domain tests;
- mixed mock tests;
- weak-area, incorrect-answer, bookmarked, and low-confidence practice;
- immediate or end-of-test feedback;
- source-backed rationales;
- pause and resume;
- question navigation and flags;
- attempt history;
- domain and competency breakdowns; and
- retries without score submission.

The application must not describe these activities as secure, proctored, cheat-resistant, or official examinations. Question content and answer keys are delivered to the learner's device and may be technically inspectable.

## Attempt record

Each stored attempt must preserve:

- a unique attempt ID;
- application data version;
- quiz ID and quiz type;
- start and completion times;
- exact question IDs and versions;
- selected answers;
- correctness result;
- confidence and flagged state;
- score and total questions; and
- elapsed time.

Question versions must be retained so a later correction does not silently rewrite what an earlier learner attempted.

## Backup and reset contract

Before substantial learner progress is released, the application must provide:

- JSON export with data version and export timestamp;
- import validation before mutation;
- record-count preview;
- merge or replace behavior;
- automatic pre-import rollback backup;
- schema migration controls;
- reset by attempt or domain;
- reset all progress; and
- a final destructive confirmation for deleting all local learning data.

## Route structure

- `/` — legal-first landing page
- `/review` — official-domain review map
- `/exam-blueprint` — official-weight study-priority map
- `/practice` — in-app practice and assessment center
- `/content-status` — live schema, lesson, question, and coverage ledger
- `/sources` — source registry, hierarchy, and content statuses
- `/about` — project purpose, personal origin, and principal credits
- `/credits` — formal contribution and attribution record
- `/disclaimer` — full educational and affiliation disclaimer
- `/privacy` — privacy and browser-local-data notice
- `/report-an-error` — planned correction route

Topic routes live below `/review/<domain>/<topic>`.

## Examination-domain basis

The initial structure follows the revised April 2026 PRC Midwives Licensure Examination program:

1. Obstetrics
2. Fundamentals of Health Care
3. Infant Care and Feeding
4. Primary Health Care
5. Professional Growth and Development

The currently published PRC Board Resolution No. 1, Series of 2013 supplies detailed competency groupings, percentage weights, item allocations, and difficulty classifications. Its age and limitations must remain visible. The project must recheck for superseding Board issuances before each exam-cycle release.

The current program also identifies integrated supporting disciplines. They are attached to the relevant clinical or professional lesson instead of being published as disconnected memorization dumps.

## Content-completion control

The controlling content plan is `docs/CONTENT_COMPLETION_ROADMAP.md`.

A domain is not complete merely because article pages exist. Completion requires:

- 100 percent official competency mapping;
- accepted primary sources with exact locators;
- lesson coverage for every competency;
- required source, clinical, legal, and editorial review;
- proportional original question coverage;
- learner-tool and accessibility QA; and
- no open blocker affecting the domain.

Fixture content used to prove the engine is excluded from examination coverage and completion totals.

Current implementation and blockers are recorded in `docs/PROJECT_STATUS.md`.

## Content publication gate

A topic may be published to the study path only when it has:

- original wording;
- mapped examination or curriculum scope;
- traceable primary sources and exact locators;
- a source-check date;
- a visible content status;
- required qualified review for its risk level;
- no protected or confidential examination content; and
- no unsupported clinical, legal, or institutional claim.

Clinical review is required before using the label `Clinically reviewed`.

## Question publication gate

A question may enter a public practice set only when it has:

- original wording;
- one best answer;
- exactly four choices in Version 1;
- plausible but unambiguous distractors;
- a rationale for the answer and every distractor;
- exact source support;
- domain, blueprint-area, lesson, difficulty, cognitive-level, and risk metadata;
- a stable question ID and version;
- source checking;
- required qualified review; and
- confirmation that it was not copied or recalled from an examination or proprietary test bank.

Invalid cross-references, answer keys, source IDs, statuses, or required review metadata must fail the production build.

## Donation and monetization boundary

No donation QR code, payment link, paid access, or advertising is included in the initial Vercel Hobby release. Any later funding feature requires a separate legal, hosting, privacy, accounting, and public-solicitation review before implementation.

## Delivery sequence

1. `M1 — Foundation and Examination Blueprint`
2. `M2 — Content and Question Schemas`
3. `M3 — IndexedDB Storage Engine`
4. `M4 — In-App Quiz Engine`
5. `M5 — Progress, Bookmarks, and Weak-Area Analysis`
6. `M6 — PWA and Offline Caching`
7. `M7 — Export, Import, Migration, and Recovery`
8. `M8 — First Source-Checked Lesson and Question Set`
9. `M9 — Domain-by-Domain Content Completion`
10. `M10 — Minimum 500-Question Validated Practice Bank`
11. `M11 — Accessibility, Mobile, Source-Freshness, and Release Hardening`
12. `V1 — Public Complete Offline-First Release`

The current content-engine branch deliberately implements parts of M2, M3, and M4 as one vertical fixture slice so schema, rendering, local storage, and in-app assessment can be validated together before real clinical content is added.

Research to close the remaining Fundamentals Table of Specifications gap runs in parallel.
