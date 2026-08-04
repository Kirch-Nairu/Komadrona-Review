---
contentId: SYS-SOURCE-LABELS-001
title: How Komadrona source and review labels work
summary: A non-clinical fixture lesson used to prove the content schema, source metadata, rendering, and in-app assessment engine.
contentKind: system-fixture
coverageEligible: false
domainId: system
blueprintAreaId: system-content-engine
module: Content Engine Orientation
priority: supporting
status: source-checked
riskLevel: low
publicationState: internal-preview
learningObjectives:
  - Distinguish draft, source-checked, and clinically reviewed content statuses.
  - Explain why a citation does not imply institutional endorsement.
  - Identify why learner progress stored in the browser still requires backups.
prerequisites: []
sources:
  - referenceId: prc-review-materials-advisory
    locator: Advisory on alleged PRC review materials and endorsement claims
  - referenceId: npc-dpa-irr
    locator: Transparency, declared purpose, proportionality, and data-minimization principles
  - referenceId: ipophil-fair-use-2024
    locator: Educational use and statutory fair-use limitations
lastVerified: '2026-08-04'
nextReview: '2027-02-04'
sourceChecker: Kirch Ivan A. Balite
clinicalReviewer: null
estimatedMinutes: 5
questionIds:
  - SYS-Q-STATUS-001
  - SYS-Q-LOCAL-DATA-001
  - SYS-Q-SOURCE-AUTHORITY-001
keywords:
  - source status
  - content governance
  - privacy
  - local progress
order: 1
---

## Why this fixture exists

This page is not a midwifery lesson. It is a controlled, low-risk sample used to prove that Komadrona Review can store structured lesson metadata, render content consistently, connect questions to a lesson, and reject malformed entries during the production build.

## Content statuses

**Draft** means the material is incomplete and must not be treated as relied-upon review content.

**Source checked** means the core statements and citations were compared with identified references. It does not mean a qualified clinician reviewed clinical accuracy.

**Clinically reviewed** may be used only when a qualified professional completed a documented review of the identified material.

**Needs re-verification** means a source or recommendation may have changed, or the scheduled review interval has expired.

**Archived** content remains available for correction history but is removed from current study paths.

## Citation and endorsement are different

Komadrona Review can cite PRC, DOH, CHED, WHO, Philippine laws, and other publishers without claiming that those organizations created, reviewed, approved, or endorsed the project. A citation identifies evidence; it does not transfer institutional authority to the website.

## Local progress is private but not indestructible

The application is being designed so lesson progress, attempts, bookmarks, and scores remain on the learner's device rather than in a Komadrona learner database. Browser storage can still be deleted by the user, removed with site data, lost during a device reset, or unavailable in private browsing. Export and import therefore remain required recovery features.

## Review checkpoint

Before relying on any lesson or question, check its visible status, source references, verification date, and any stated limitation. A polished interface is not evidence that content has completed source or clinical review.
