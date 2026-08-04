# Komadrona Review — Developer UI Notes

Status: Active Version 1 guidance  
Owner: Kirch Ivan A. Balite

## 1. Default interface rule

Use normal document flow first:

- heading;
- short explanation;
- list, table, form, or direct action;
- clear next step.

Do not place every paragraph inside a bordered card. A card must have a specific interaction or comparison purpose.

## 2. When cards are appropriate

Use cards only for:

- peer choices that the learner must compare, such as review domains;
- interactive units, such as quiz modes or module disclosures;
- compact repeated records with the same metadata structure;
- a single isolated action that must remain visually distinct.

Avoid cards for:

- ordinary explanatory text;
- one-off warnings;
- legal paragraphs;
- long lesson prose;
- status text that works as a list or table;
- content already inside another card.

No nested cards in Version 1.

## 3. Preferred alternatives

Use:

- plain sections for explanations;
- ordered lists for sequences;
- definition lists or aligned rows for metadata;
- notices for warnings;
- tables for dense comparisons;
- disclosure elements for long module details;
- one primary and one secondary action per decision point.

## 4. Page hierarchy

A normal learner-facing page should follow this order:

1. page purpose;
2. current status or limitation when material is incomplete;
3. primary task;
4. supporting details;
5. source and review information;
6. next action.

Do not lead with implementation internals unless the route is explicitly developer-facing.

## 5. First-load onboarding

The shared onboarding wizard appears once per browser profile unless local site data is cleared.

Required sequence:

1. what Komadrona is;
2. creator and role boundary;
3. educational disclaimer;
4. browser-local data warning;
5. explicit acknowledgment before completion.

Rules:

- keep it to four short screens;
- present one decision per screen;
- do not use decorative cards inside the wizard;
- block dismissal on first use until acknowledgment;
- allow the homepage control to reopen it later;
- store only completion and acknowledgment flags in `localStorage`;
- never store quiz attempts or learner history in `localStorage`.

Current keys:

- `komadrona:v1:onboarding-complete`
- `komadrona:v1:notice-acknowledged`

## 6. Status wording

Use these terms precisely:

- `Mapped` — linked to the examination blueprint and module plan.
- `Source acquisition` — required sources are not yet complete.
- `Currently unavailable` — no qualifying source is presently available to the project; this does not claim that no source exists anywhere.
- `Ready to draft` — the source packet and lesson boundaries are complete.
- `Source checked` — claims were checked against recorded sources.
- `Clinically reviewed` — a qualified reviewer completed documented review.
- `Released` — approved content is publicly available.

Do not replace these states with vague labels such as `done`, `mostly ready`, or `coming soon`.

## 7. Mobile behavior

At phone widths:

- use one content column;
- keep primary actions full-width when space is limited;
- avoid horizontal scrolling;
- keep touch targets at least approximately 44 pixels high;
- collapse dense module detail into disclosures;
- never hide source, risk, or status information solely to save space.

## 8. Developer-facing routes

Developer and transparency routes may show denser controls, but must remain readable:

- `/exam-blueprint`
- `/content-map`
- `/content-status`
- `/engine-preview`

Use cards only for repeated comparable records. Prefer summaries, disclosures, and tables for large datasets.

## 9. Copy style

Use direct product language.

Prefer:

> Practice inside Komadrona and keep attempts on this device.

Avoid:

> The system is designed within parameters that permit local persistence behavior.

State limitations where they affect a decision. Do not make limitations the identity of the product.
