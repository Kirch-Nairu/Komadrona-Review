# Komadrona Review Version 1 — Product and Architecture Specification

## Product purpose

Komadrona Review is an independent, source-based study and practice website for aspiring Philippine midwives. Version 1 is designed to be useful without user accounts, a database, or paid infrastructure.

## Release boundaries

Version 1 includes:

- a legal-first landing page;
- five review-domain hubs based on the current referenced PRC examination program;
- source and content-status disclosures;
- external Google Forms practice quizzes;
- unlimited practice retries;
- browser-local progress and self-recorded scores when implemented; and
- static deployment through Vercel.

Version 1 excludes:

- accounts, authentication, and cloud syncing;
- server-side learner profiles or scores;
- screenshot, certificate, or proof-of-completion submission;
- first-party analytics, advertising, and behavioral tracking;
- embedded patient or student records;
- paid access, advertisements, donation QR codes, and payment processing;
- confidential, leaked, recalled, or proprietary examinations; and
- claims of institutional or government endorsement.

## Technical architecture

- Framework: Astro
- Language: TypeScript
- Rendering: static output
- Styling: local CSS with system fonts
- Hosting target: Vercel static deployment
- Practice provider: external Google Forms links
- State: browser `localStorage`
- Build validation: GitHub Actions

No server adapter is required for Version 1.

## Planned local-storage keys

- `komadrona:v1:notice-acknowledged`
- `komadrona:v1:progress`
- `komadrona:v1:bookmarks`
- `komadrona:v1:attempts`

Stored progress must never be described as secure, official, verified, or recoverable by the maintainer.

## Route structure

- `/` — legal-first landing page
- `/review` — official-domain review map
- `/practice` — external quiz center
- `/sources` — source hierarchy and content statuses
- `/disclaimer` — full educational and affiliation disclaimer
- `/privacy` — privacy and local-storage notice
- `/credits` — actual contribution and attribution record

Future topic routes will live below `/review/<domain>/<topic>`.

## Examination-domain basis

The initial structure follows the revised April 2026 PRC Midwives Licensure Examination program:

1. Obstetrics
2. Fundamentals of Health Care
3. Infant Care and Feeding
4. Primary Health Care
5. Professional Growth and Development

The program also identifies integrated supporting disciplines. The site must show the source date and must not imply that this structure is permanently fixed.

## Google Forms contract

Before a practice form is linked publicly, verify that it:

- is configured as a quiz;
- does not request a name, school, phone number, or email address;
- does not limit the learner to one response;
- contains an answer key and rationale;
- identifies the source for each answer in the internal question record;
- allows repeated practice;
- does not use file-upload questions; and
- displays a confirmation message explaining how to return to Komadrona Review.

The site must label Google Forms as an external service and open it in a separate tab.

## Content publication gate

A topic may be published only when it has:

- original wording;
- traceable primary sources;
- a source-check date;
- a visible content status;
- no protected or confidential examination content; and
- no unsupported clinical, legal, or institutional claim.

Clinical review is required before using the label `Clinically reviewed`.

## Donation and monetization boundary

No donation QR code, payment link, paid access, or advertising is included in the initial Vercel Hobby release. Any later funding feature requires a separate legal, hosting, privacy, and accounting review before implementation.

## Release sequence

1. Legal and architecture foundation
2. Content schema and topic template
3. Browser progress and export/import
4. First source-checked subject module
5. First reviewed Google Forms practice set
6. Accessibility and mobile QA
7. Public Version 1 release
