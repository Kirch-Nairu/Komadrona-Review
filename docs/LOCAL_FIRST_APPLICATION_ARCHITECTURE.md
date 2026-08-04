# Komadrona Review — Local-First Application Architecture

Decision date: 4 August 2026  
Status: Accepted for Version 1 implementation  
Owner: Kirch Ivan A. Balite

## Decision

Komadrona Review will not use Google Forms or another external quiz provider for Version 1.

Lessons, question banks, answer keys, rationales, attempts, bookmarks, scores, progress, and weak-area analysis will exist inside the Komadrona application. Learner records will remain on the learner's device unless a future architecture decision explicitly introduces an optional synchronization service.

This document supersedes earlier planning references to external Google Forms.

## Product position

Komadrona Review is an offline-first Philippine midwifery study and examination application.

The hosted website is a distribution, installation, and update channel. It is not a server-side learner platform.

## System boundaries

### Static application content

The production build contains:

- review lessons;
- source notes;
- examination blueprint data;
- question bank records;
- choices and answer keys;
- rationales;
- status and verification metadata;
- application interface files.

These files are versioned in the repository and validated during the build.

### Browser-local learner records

IndexedDB stores:

- lesson progress;
- completed and incomplete quiz attempts;
- exact question versions used in each attempt;
- selected answers;
- correctness results;
- scores;
- confidence levels;
- flagged questions;
- question bookmarks;
- weak-area aggregates;
- backup metadata;
- schema-migration metadata.

### Small application preferences

`localStorage` is limited to small key-value preferences and onboarding state:

- `komadrona:v1:notice-acknowledged`
- `komadrona:v1:theme`
- `komadrona:v1:text-size`
- `komadrona:v1:last-route`
- `komadrona:v1:onboarding-complete`

Large attempt, answer, progress, or question records must not be stored in local storage.

### Offline application assets

The PWA milestone will use a service worker and Cache Storage for:

- application shell files;
- route HTML;
- CSS and JavaScript;
- validated lesson content;
- validated question content;
- icons and manifest assets;
- controlled update and cache-version behavior.

Normal browser cache behavior is not sufficient to claim offline-first support.

## Initial IndexedDB contract

Database name: `komadrona-review`  
Database version: `1`

Initial stores:

- `attempts` — key path `id`
- `bookmarks` — key path `questionId`
- `lessonProgress` — key path `lessonId`
- `metadata` — key path `key`

Every future database-version change requires:

1. a forward migration;
2. validation after migration;
3. failure handling;
4. a rollback or pre-migration export path for destructive changes; and
5. documentation in release notes.

## Question record contract

Every question contains:

- stable question ID;
- positive version number;
- domain ID;
- blueprint-area ID;
- linked lesson IDs;
- original stem;
- exactly four Version 1 choices;
- correct choice ID;
- answer rationale;
- one rationale for every distractor;
- difficulty;
- cognitive level;
- risk level;
- exact source records and locators;
- content status;
- publication state;
- source-check metadata;
- qualified-review metadata where required.

The build rejects questions with invalid source references, missing lessons, invalid answer keys, duplicate choice IDs, incomplete distractor rationales, non-publishable statuses, or insufficient review for their risk level.

## Attempt record contract

Every attempt preserves:

- unique attempt ID;
- data version;
- quiz ID and quiz type;
- start time;
- completion time or incomplete state;
- exact question ID and version list;
- selected answer for each question;
- correctness result;
- confidence;
- flagged state;
- score;
- total questions;
- elapsed time.

An older attempt must continue to identify the question version that the learner actually answered after the question bank changes.

## Assessment modes

### Topic practice

- one lesson or focused competency;
- normally 5–20 questions;
- immediate or end-of-set feedback;
- unlimited retries;
- incorrect-answer retry;
- bookmark and confidence controls.

### Weighted domain test

- one principal examination subject;
- selection distributed according to the verified official blueprint;
- timed or untimed;
- domain and blueprint-area breakdown.

### Mixed mock examination

- questions from all five principal domains;
- configurable size;
- pause and resume;
- question navigator;
- flagging;
- submission confirmation;
- final domain and competency analysis.

### Weak-area practice

Locally generated from:

- previously incorrect questions;
- low-confidence correct answers;
- lowest-performing domain;
- lowest-performing blueprint area;
- unanswered questions;
- bookmarked questions;
- questions not attempted recently;
- high-priority competencies with insufficient practice.

## Local-data privacy claim

The permitted claim is:

> Komadrona Review does not intentionally transmit learner answers, scores, bookmarks, or progress to a Komadrona learner server. These records are designed to remain in browser storage on the learner's device.

The project must not claim that no technical data exists anywhere. Static hosting providers may process ordinary request, network, security, and diagnostic logs.

## Local-data limitations

Learner records may be lost when the user:

- clears site data;
- clears browser storage;
- uses private browsing;
- removes the browser or installed PWA;
- resets the device;
- changes browsers;
- changes devices;
- encounters browser-managed storage eviction.

The application may request persistent storage, but the browser decides whether to grant it. A grant does not prevent manual deletion.

## Export and import requirement

Export and import are mandatory before learner progress can be described as recoverable.

### Export

A backup contains:

- backup format version;
- application data version;
- export timestamp;
- lesson progress;
- attempts;
- bookmarks;
- preferences approved for export;
- integrity metadata.

Suggested filename:

```text
komadrona-backup-YYYY-MM-DD.json
```

### Import

Before mutation, import must:

1. parse safely;
2. validate the backup format;
3. validate the data version;
4. show record counts;
5. identify incompatible or unknown records;
6. offer merge or replace;
7. require explicit confirmation; and
8. create a pre-import rollback backup.

### Reset

Separate controls are required for:

- deleting one attempt;
- resetting one domain;
- resetting progress while preserving preferences;
- deleting every Komadrona learner record.

The final destructive action should require explicit typed confirmation.

## Offline and update behavior

After the PWA milestone:

1. the learner opens the application while online at least once;
2. the service worker installs and caches the approved application shell and content pack;
3. lessons and questions remain available offline;
4. IndexedDB records attempts and progress offline;
5. the application checks for a newer version when connectivity returns;
6. an update is staged without silently corrupting an active attempt;
7. the learner is notified when a restart is needed; and
8. database and content migrations run under explicit version controls.

The application must not claim full offline behavior before the service worker, cache strategy, and offline QA are implemented.

## Security and examination boundary

Questions and answer keys are delivered to the learner's device. A technically knowledgeable user may inspect application files and discover answers.

This is accepted because Komadrona Review is:

- a study reviewer;
- an open-source project;
- not a controlled official examination;
- not proctored;
- not issuing credentials;
- not validating identity.

The product must never present local tests as secure, cheat-resistant, or suitable for official certification.

## Current implementation slice

Implemented in `feature/content-engine`:

- strict Astro lesson and question collections;
- cross-collection validation;
- one isolated non-clinical lesson fixture;
- three isolated non-clinical question fixtures;
- in-app choice selection and answer checking;
- answer and distractor rationales;
- question source display;
- confidence and flagged-answer capture;
- IndexedDB completed-attempt storage;
- IndexedDB bookmark storage;
- local attempt history;
- persistent-storage status and request control;
- live coverage ledger excluding fixture content.

Not yet implemented:

- incomplete-attempt saving and resume;
- weighted selection;
- real domain and mixed test configuration;
- weak-area aggregation;
- lesson progress interface;
- export, import, rollback, and reset;
- service worker and Cache Storage;
- installable PWA behavior;
- real source-checked midwifery lessons and questions.

## Milestone sequence

1. `M2 — Content and Question Schemas`
2. `M3 — IndexedDB Storage Engine`
3. `M4 — In-App Quiz Engine`
4. `M5 — Progress, Bookmarks, and Weak-Area Analysis`
5. `M6 — PWA and Offline Caching`
6. `M7 — Export, Import, Migration, and Recovery`
7. `M8 — First Source-Checked Lesson and Question Set`
8. `M9 — Domain-by-Domain Completion`
9. `M10 — Minimum 500-Question Validated Bank`
10. `M11 — Release Hardening`
11. `V1 — Public Offline-First Release`

The current vertical slice intentionally crosses M2, M3, and M4 at fixture scale. Each milestone remains incomplete until its full exit criteria are satisfied.
