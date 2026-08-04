# Komadrona Review Version 1 — Product and Architecture Specification

## Product purpose

Komadrona Review is an independent, source-based study and practice website for aspiring Philippine midwives. Version 1 is designed to be useful without user accounts, a server-side learner database, or paid infrastructure.

The project combines:

- structured review lessons;
- an official-weight examination blueprint;
- traceable content references;
- original practice questions;
- browser-local learner progress; and
- visible content and review status.

## Release boundaries

Version 1 includes:

- a legal-first landing page;
- five review-domain hubs based on the current referenced PRC examination program;
- an examination blueprint based on the currently published PRC Table of Specifications;
- source and content-status disclosures;
- structured source-checked review lessons;
- external Google Forms practice quizzes;
- unlimited practice retries;
- browser-local progress, bookmarks, and self-recorded scores;
- progress export and import;
- search;
- a correction-reporting route; and
- static deployment through Vercel.

Version 1 excludes:

- accounts, authentication, and cloud syncing;
- server-side learner profiles or scores;
- screenshot, certificate, or proof-of-completion submission;
- first-party analytics, advertising, and behavioral tracking;
- embedded patient or student records;
- paid access, advertisements, donation QR codes, and payment processing;
- confidential, leaked, recalled, reconstructed, or proprietary examinations; and
- claims of institutional or government endorsement.

## Technical architecture

- Framework: Astro
- Language: TypeScript
- Rendering: static output
- Styling: local CSS with system fonts
- Content model: Astro content collections with strict schemas
- Hosting target: Vercel static deployment
- Practice provider: external Google Forms links
- Learner state: browser `localStorage`
- Build validation: GitHub Actions

No server adapter is required for Version 1.

## Planned local-storage keys

- `komadrona:v1:notice-acknowledged`
- `komadrona:v1:progress`
- `komadrona:v1:bookmarks`
- `komadrona:v1:attempts`
- `komadrona:v1:settings`

Stored progress must never be described as secure, official, verified, or recoverable by the maintainer.

## Route structure

- `/` — legal-first landing page
- `/review` — official-domain review map
- `/exam-blueprint` — official-weight study-priority map
- `/practice` — external quiz center
- `/sources` — source registry, hierarchy, and content statuses
- `/about` — project purpose, personal origin, and principal credits
- `/credits` — formal contribution and attribution record
- `/disclaimer` — full educational and affiliation disclaimer
- `/privacy` — privacy and local-storage notice
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

Current implementation and blockers are recorded in `docs/PROJECT_STATUS.md`.

## Google Forms contract

Before a practice form is linked publicly, verify that it:

- is configured as a quiz;
- does not request a name, school, phone number, or email address;
- does not limit the learner to one response;
- contains an answer key and rationale;
- identifies the source and competency for each answer in the internal question record;
- allows repeated practice;
- does not use file-upload questions; and
- displays a confirmation message explaining how to return to Komadrona Review.

The site must label Google Forms as an external service and open it in a separate tab.

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
- plausible but unambiguous distractors;
- a source-backed rationale;
- domain, blueprint-area, lesson, difficulty, and cognitive-level metadata;
- source checking;
- required qualified review; and
- confirmation that it was not copied or recalled from an examination or proprietary test bank.

## Donation and monetization boundary

No donation QR code, payment link, paid access, or advertising is included in the initial Vercel Hobby release. Any later funding feature requires a separate legal, hosting, privacy, accounting, and public-solicitation review before implementation.

## Release sequence

1. `M1 — Foundation and Examination Blueprint`
2. `M2 — Content Engine and Coverage Ledger`
3. `M3 — Obstetrics: Prenatal Assessment and Health Teaching`
4. `M4 — Obstetrics: Labor, Childbirth, and Postpartum`
5. `M5 — Infant Care and Feeding`
6. `M6 — Primary Health Care`
7. `M7 — Professional Growth and Development`
8. `M8 — Fundamentals of Health Care`
9. `M9 — Minimum 500-Question Validated Practice Bank`
10. `M10 — Progress, Search, Export/Import, and Correction Workflow`
11. `M11 — Accessibility, Mobile, Source-Freshness, and Release Hardening`
12. `V1 — Public Complete Release`

Research to close the remaining Fundamentals Table of Specifications gap runs in parallel with `M2`.