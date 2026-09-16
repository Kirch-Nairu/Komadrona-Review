# Komadrona Review

Komadrona Review is an independent, source-based review and practice platform for aspiring Philippine midwives.

## Foundation status

Version 1 is being built as a static frontend with a legal-first landing page, local browser progress, and external Google Forms practice quizzes.

Implemented in the foundation branch:

- legal acknowledgment landing page;
- full educational and non-affiliation disclaimer;
- privacy notice and browser-storage warning;
- source hierarchy and content-status policy;
- five-domain review map based on the revised April 2026 PRC examination program;
- privacy-light practice-center structure;
- credits, licensing, contribution rules, and internal governance documents;
- responsive plum, rose, sage, and ivory design system;
- baseline Vercel security headers; and
- automated Astro type-check and build workflow.

## Version 1 boundaries

- No user accounts
- No server-side learner database
- No first-party analytics or advertising trackers
- No collection of names or email addresses through the website
- Progress and self-recorded scores remain in the user's browser
- Practice quizzes open through external Google Forms
- No score screenshot or proof-of-completion submission
- Unlimited retries for practice activities
- No claim of affiliation, approval, or endorsement by PRC, the Professional Regulatory Board of Midwifery, DOH, CHED, any school, or any review center
- No actual, leaked, recalled, reconstructed, or confidential licensure-examination questions
- No donation, payment, advertising, or sponsorship facility in the initial Hobby-hosted release

## Educational limitation

Komadrona Review is for independent study only. It is not an official reviewer, clinical protocol, professional consultation, substitute for formal instruction, or substitute for supervised clinical training. Examination programs, laws, and clinical guidance may change; users must verify current official information.

## Stack

- Astro 7
- TypeScript
- Static HTML output
- Local CSS and system fonts
- Browser `localStorage`
- Google Forms for external practice quizzes
- Vercel for deployment
- GitHub Actions for validation

## Local development

Astro 7 requires Node.js 22.12.0 or later.

```bash
npm install
npm run dev
```

Validate a production build with:

```bash
npm run build
```

## Governance

- Product architecture: `docs/PROJECT_SPEC.md`
- Legal and content controls: `docs/LEGAL_AND_CONTENT_GOVERNANCE.md`
- Contribution requirements: `CONTRIBUTING.md`
- Source-code license: `LICENSE`
- Educational-content license: `CONTENT_LICENSE.md`

## Maintainer

Created and maintained by **Kirch Ivan A. Balite** as an independent educational project based in Bohol, Philippines.

## Development workflow

Implementation work is developed through focused branches and reviewed before integration into `main`. Medical content is not considered published merely because a page or draft exists in the repository.
