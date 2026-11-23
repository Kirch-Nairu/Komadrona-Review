# Komadrona Review Online Evidence Report

Research checked 23 November 2026. Primary audience: BISU Calape midwifery students studying for the Philippine Midwives Licensure Examination. This work uses public online documents and the online repository. Interviews, institutional contact, demand validation, and mandatory clinical review are not prerequisites.

The research recovered substantive sources missing from the old plan, independently inspected the official PRC scan, and counted the actual repository records. Some source gaps remain because the available official scan is incomplete or a current campus document was not publicly located. Those limits do not prevent planning the product or drafting supported topics.

## PRC blueprint verification

The complete downloadable file linked by PRC is a 16-page scanned PDF of Board Resolution No. 1, series of 2013 and its attached tables. All 16 pages were rendered and visually inspected. The resolution is dated 25 January 2013 and supersedes Board Resolution No. 39, series of 1993. Its existence and text are verified; a claim that every detailed competency is recoverable from this scan is not supported. [Official PDF](https://prc.gov.ph/sites/default/files/PRBmidwifeResoNo1s2013.pdf), [PRC Board page](https://www.prc.gov.ph/Pages/PRBv4/Midwiferyv2.htm)

### Verified table structure

Page numbers below are one-based PDF pages. Each subject table describes a 100-item allocation; percentages in this table are within the subject, not automatically the weighting of the entire examination.

| Subject | Verified structure | PDF pages | Qualification |
|---|---|---|---|
| Obstetrics and Gynecology | Anatomy and physiology 12%; prenatal, labor and postpartum 58%; complications 16%; gynecology and family planning 14% | 4–6 | The 58% divides into prenatal 28%, labor and childbirth 23%, postpartum 7%. |
| Infant Care and Feeding | Infant care 50%; feeding and nutrition 40%; integrated management of infant illness 10% | 7–8 | All three major areas are visible. |
| Professional Growth and Development | Ethics 50%; law 50% | 9–11 | Ethics includes fundamentals 10%, personality development 20%, and knowledge of the midwifery profession 20%. |
| Fundamentals of Health Care | Prenatal 15%; labor and delivery 15%; postpartum 10%; midwifery procedures 60% | 12–14 | The fourth heading is readable; its displayed subgroups do not cover the full 60 items. |
| Primary Health Care | Maternal and child health 55%; communicable and noncommunicable disease 15%; remaining 30% only inferred from the total | 15–16 | The scan begins at competency A.12. The initial heading and preceding competencies are absent. |

### Corrections to inherited knowledge

1. The remaining Fundamentals area is named **Midwifery Procedures**, not an entirely unknown 60%. Its visible subgroups are health-care process (6 items), vital signs (20), and preventive and comfort measures (20). Those account for 46 of the 60 items. Do not invent the remaining 14 or claim a complete detailed transcription.
2. The repository's statement that Primary Health Care is fully transcribed is too strong. Its 30% opening cluster is a normalized inference, and A.1–A.11 are not present in the retrieved official scan.
3. The repository substitutes professional image and organizations for the third Ethics subgroup. The official third subgroup concerns the midwifery profession, including scope, skills, examination qualifications, and licensure examination facts. Organizations and professional image appear within personality development. The planned PGD map needs correction.
4. A list of topics grouped under a heading is a study map; it must not be labeled an exact verbatim transcription of every official competency.

### Later documents and changes

The November 2026 program was downloaded directly from PRC and checked. Its five examination subjects remain Obstetrics, Fundamentals of Health Care, Infant Care and Feeding, Primary Health Care, and Professional Growth and Development. Its first page also lists integrated supporting subjects. This updates the old repo's April-only program reference; it does not supply missing detailed TOS pages. [November 2026 program](https://prc.gov.ph/sites/default/files/Midwifery%20Exam%20Program%20November%202026.pdf)

The PRC Board page additionally links the 2017 implementing rules, 2019 documentary requirements, and Code of Ethics. These are separate source classes from the examination blueprint. The 15-page 2017 IRR PDF was retrieved, but its scanned substantive provisions have not been fully transcribed in this report. [PRC Board source index](https://www.prc.gov.ph/Pages/PRBv4/Midwiferyv2.htm)

An official October 2026 procurement notice concerns a workshop to enhance the midwifery TOS. No promulgated replacement TOS was located in the Board index and targeted searches during this pass. This is a bounded search result, not proof that no later issuance exists. The workshop is not itself a replacement blueprint. [PRC notice](https://prc.gov.ph/article/bid-opportunity-request-quotation-no-2026-123)

UNFPA reports adoption of a Midwifery Competency Framework at the June 2026 summit. The news confirms a development to track; it does not provide the complete framework or an exam implementation date. Do not silently replace the published exam tables with it. [UNFPA summit report](https://philippines.unfpa.org/en/news/unfpa-doh-prc-ched-advance-midwifery-strengthen-midwives%E2%80%99-role-universal-healthcare)

## Actual repository inventory

Branch inspected: `feature/learner-workflow`. These are direct counts of the listed lesson and question folders and the module, packet, and gap definitions, rather than copied project-status totals. No application code was copied into the rebuild.

| Record type | Actual count | Meaning |
|---|---:|---|
| Lesson files | 1 | Non-clinical system fixture; internal preview; excluded from exam coverage. |
| Question files | 3 | Non-clinical system fixtures; internal preview; excluded from exam coverage. |
| Clinical lesson files | 0 | No actual clinical reviewer articles in the inspected collection. |
| Midwifery practice question files | 0 | Planned targets are not an existing question bank. |
| Planned modules | 60 | Includes one blocked Fundamentals placeholder. |
| Planned lesson units | 261 | Includes the placeholder unit; these are titles, not completed lessons. |
| Question targets | 500 | Internally allocated targets, not validated questions or official quotas per module. |
| Source packets | 17 | 16 acquiring; 1 blocked. |
| Gap records | 18 | 1 mapping gap and 17 source gaps. |
| Detailed module briefs | 1 | Antenatal assessment. |

| Domain | Modules | Planned units | Question targets |
|---|---:|---:|---:|
| Obstetrics | 16 | 72 | 100 |
| Fundamentals | 12 | 39 | 100 |
| Infant Care and Feeding | 13 | 62 | 100 |
| Primary Health Care | 12 | 55 | 100 |
| Professional Growth and Development | 7 | 33 | 100 |

Actual lesson: `SYS-SOURCE-LABELS-001`. Actual questions: `SYS-Q-LOCAL-DATA-001`, `SYS-Q-SOURCE-AUTHORITY-001`, and `SYS-Q-STATUS-001`, all version 1, source-checked status, internal-preview publication state, and coverageEligible false.

The attached JSON inventories preserve every planned module's lesson titles, packet relationships, and question target, plus every source-packet and gap record. They contain extracted knowledge records, not the original TypeScript implementation. [Lesson collection](https://github.com/Kirch-Nairu/Komadrona-Review/tree/feature/learner-workflow/src/content/lessons), [question collection](https://github.com/Kirch-Nairu/Komadrona-Review/tree/feature/learner-workflow/src/content/questions), [content map](https://github.com/Kirch-Nairu/Komadrona-Review/tree/feature/learner-workflow/src/data/contentMap)

## Acquired Philippine antenatal sources

Antenatal assessment is the working research module because it already has a detailed brief. This is research sequencing, not a decision that the first public release must contain only this module.

| Source | Acquisition and applicability | Exact useful sections |
|---|---|---|
| DOH OHG for Adults, third edition, 2025 | Full 366-page PDF retrieved through a link in an official 2026 DOST assessment; publisher and edition confirmed in the document. Prefer this over the 2023 edition. | Printed pp.111–114: pregnancy assessment and maternal services; pp.117–118: Table 11; p.122 onward: source references. PDF page = printed page + 1. |
| DOH Antenatal Health Examination Form, v1.2024 | Full 17-page form retrieved from the link cited by OHG 2025. It is a documentation and examination aid, not a comprehensive technique manual. | Section A pp.2–3; B.1 pp.4–8; C pp.9–10; D p.11; E p.12; Annex A pp.13–14; Annex B pp.15–16; Annex C p.17. |
| DOH DC 2021-0005 | Full 3-page circular retrieved; number visually checked. Its definitions are expressly referenced in OHG 2025. | Part I p.1: low-risk definition and reassessment; Part II pp.2–3: high-risk classification. |
| PhilHealth Circular 2026-0006 | Full 29-page document with annexes retrieved. Supports the benefit package, associated services and records; it is not a universal clinical protocol. | Section V.E.1 pp.8–12; Table 2 pp.8–9; documentation and referral p.10; Annex C PDF pp.23–24; Annex D PDF p.25. |
| DOH-adapted PCPNC, Philippine setting | Complete 173-page manual retrieved from JICA. Based on WHO 2003; useful as a historical structured reference, not a verified current edition. | Antenatal section C1–C18, PDF pp.42–60; C2 at PDF p.44; C17 at PDF p.59. |

Source links: [OHG 2025 full document](https://drive.google.com/file/d/1krIievgouavv22n5bRoQ03wAna38qup6/view), [DOST provenance](https://hta.dost.gov.ph/wp-content/uploads/2026/05/Preliminary-HTA-Council-Recommendation-on-Ezetimibe-for-Hyperlipidemia.pdf), [DOH antenatal form](https://drive.google.com/file/d/1vAzuLqdH7M-cPwUAWcNilGSHZxs6kZH-/view), [DOH risk circular](https://drive.google.com/file/d/1QrmaDw_a1eBw-i8XyqyASRRnOBuRO0mV/view), [PhilHealth circular](https://www.philhealth.gov.ph/circulars/2026/PC2026-0006.pdf), [JICA-hosted Philippine PCPNC](https://www.jica.go.jp/Resource/project/philippines/0600894/04/pdf/pcpnc_philippines.pdf).

### Exact lesson support map

| Planned lesson | Philippine source locators | Support boundary |
|---|---|---|
| Purpose and sequence of antenatal assessment | OHG 2025 pp.111–113; form Sections A, B.1, C–E | Supports components and continuity. A single mandatory sequence should not be invented. |
| Maternal history and risk assessment | OHG p.111; form pp.2–3 and 11; DC 2021-0005 Parts I–II | Supports history domains, classification, and reassessment. |
| General physical assessment | OHG pp.112–113; form pp.4–8 and 10 | Supports observations and recording. Specific measurement technique needs additional claim-level support. |
| Abdominal and obstetric examination | Form Section C p.9; PhilHealth Annex C PDF p.23 | Supports recorded findings. The form assigns Section C to a doctor; it must not be repurposed as an independent statement of midwife procedural authority. |
| Leopold maneuvers | Form p.9, L1–L4; PRC TOS PDF pp.4 and 12 | Confirms relevance and finding fields. Full hand placement, sequence, timing, and interpretation need a suitable additional technique reference. |
| Fetal assessment concepts | Form p.9; OHG pp.111 and 117–118; PhilHealth Table 2 pp.8–9 | Supports recorded fetal findings, ultrasound context, and growth monitoring. Keep routine observations separate from specialist tests. |
| Documentation and continuity | Form pp.1–17, especially lab sheets and birth plan; PhilHealth V.E.1.a.6–a.10 p.10 and Annex C | Supports records and handover concepts. Use fictional examples rather than collecting patient data. |

### Resolved and remaining source issues

The old antenatal-source gap is materially reduced: a recent DOH guideline and its referenced form are now acquired. The old PCPNC gap changes from unavailable to **historical full copy acquired, current-edition status unresolved**. A complete current PCPNC edition is not a blanket prerequisite where newer documents adequately support a topic.

Do not publish the older PCPNC four-visit model as current ANC guidance. The newer OHG and 2026 PhilHealth document use an eight-contact/visit framework. A funding document's service rules and a clinical guideline's recommendations must retain their separate context.

Even authoritative sources can contain typographical or internal inconsistencies. For example, OHG 2025 p.113 prints a weekly folate unit inconsistently with the accompanying parenthetical conversion. Do not reproduce that line into a dose question without checking the underlying recommendation. This is a source-reconciliation task, not a requirement to recruit a clinical reviewer.

## WHO updates to track by topic

The 2016 ANC guideline is a baseline with updates, not a permanently frozen source. The following publisher records were checked; publication-page verification does not mean every full guideline recommendation has been extracted.

| Topic | Update or publication | Consequence for content |
|---|---|---|
| Ultrasound | [2022 update](https://www.who.int/publications/i/item/9789240046009) | Use this update for the corresponding fetal-assessment recommendation. |
| Zinc | [2021 update](https://www.who.int/publications/i/item/9789240030466) | Check topic-specific guidance when drafting supplementation content. |
| Multiple micronutrients | [2020 update](https://www.who.int/publications/i/item/9789240007789) | Reconcile with the current Philippine recommendation and its conditions. |
| Vitamin D | [2020 update](https://www.who.int/publications/i/item/9789240008120) | Avoid unsupported routine-supplementation claims. |
| Maternal guidance overview | [Second edition, 2025](https://www.who.int/publications/i/item/9789240080591) | Use as a discovery index, with topic-specific guidance for exact claims. |
| ANC and PNC adaptation | [2025 toolkit](https://www.who.int/publications/i/item/9789240105164) | Implementation/adaptation resource, not a replacement for every underlying guideline. |
| Diabetes during pregnancy | [2025 guideline](https://www.who.int/publications/i/item/9789240117044) | Add to the maternal-condition source map. |
| Hyperglycaemia screening and diagnosis | [September 2026 update announcement](https://www.who.int/news/item/25-09-2026-who-to-update-the-recommendations-on-criteria-and-diagnosis-of-hyperglycaemia-in-pregnancy) | Update work announced; no final replacement located in this pass. A meeting announcement is not a published threshold change. |
| Labour monitoring | [2025 implementation package](https://www.who.int/publications/i/item/9789240109346) | Review before reusing older partograph-only explanations. Philippine adoption remains a separate claim. |
| Postpartum haemorrhage | [2025 consolidated-guideline announcement](https://www.who.int/news/item/05-10-2025-global-health-agencies-issue-new-recommendations-to-help-end-deaths-from-postpartum-haemorrhage) | Add the consolidated guideline to the emergency-topic acquisition queue. |
| Contraception | [MEC sixth edition](https://www.who.int/publications/b/81082), [SPR fourth edition](https://www.who.int/publications/i/item/9789240115606), both 2025 | Older MEC fifth-edition references need topic-level reconciliation. |

## BISU and national curriculum

BISU's official program-offerings page places the College of Midwifery and BSM under Calape. The tab structure was checked in the original page, not inferred solely from flattened search text. Official university publications also discuss the midwifery program. [BISU program offerings](https://bisu.edu.ph/program-offerings/), [2025 university address](https://bisu.edu.ph/ang-pagpadayag-2025-state-of-the-university-address-suna/)

No current detailed BISU Calape syllabus or prospectus was located on an authorized public university page in the targeted searches. Older uploaded syllabi and third-party copies were discovered, but are not treated as proof of the current campus curriculum. No campus contact or internal access is required to proceed: use the verified exam structure and national curriculum, while describing the audience as BISU Calape board examinees.

The complete 61-page CHED CMO No. 3, s.2023 was retrieved. Visually checked curriculum sections include Section 8, p.12; Section 9, pp.12–14; Section 10, pp.14–15; and the prototype curriculum starting p.15. It specifies a 180-unit BSM framework and lists foundational sciences, foundations of midwifery, obstetrics and newborn care, infant and child care, family planning, high-risk maternal care, community health, and professional growth. These establish national curriculum relationships, not BISU-specific semester sequencing. [Official CHED PDF](https://legacy.ched.gov.ph/wp-content/uploads/CMO-No.-03-s.-2023.pdf)

## Requirements resulting from the evidence

1. Keep exam blueprint version, national curriculum version, clinical-source version, and campus relevance as separate records.
2. Model source support at claim or question level, including exact page/section and applicability; a source URL at the bottom of a lesson is insufficient.
3. Preserve explicit unknowns in the PRC scan while allowing supported lessons to proceed.
4. Replace the old blanket PCPNC dependency with a per-lesson source map.
5. Distinguish planned lesson titles and question targets from actual published content.
6. Track later issuances and recommendation changes by topic; do not overwrite old attempts or source versions silently.
7. Use source verification as the publication requirement. Do not make human interviews, campus access, clinical-review recruitment, or idea validation delivery gates.

This report does not select a technical stack, certify legal compliance, claim an official BISU partnership, or declare the entire clinical syllabus source-complete.
