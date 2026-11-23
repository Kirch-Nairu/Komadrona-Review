# Komadrona Review — G1 Materials, Resources & Build Readiness Register

**Artifact:** KOM-G1-MATERIALS-R1  
**Audit date:** 23 November 2026 (Asia/Manila)  
**Status:** RESOURCE_AUDIT_RECORDED / G1_PREPARATION_ALLOWED / IMPLEMENTATION_NOT_YET_AUTHORIZED  
**Source repository:** `Kirch-Nairu/Komadrona-Review`  
**Frozen audit baseline:** `1b7229ce2b34bf3f801da7a3011554a159fad0b8` (102 repository tree entries, Git API reported `truncated:false`)  
**Purpose:** A single, inspectable answer to **what materials exist, where they reside, what they support, what is missing, and what actually blocks first engineering work**.

This inventory does not imply that linked PDFs were copied into GitHub, that historical source registers are current, that planned lessons are completed, or that Nox's R2 review has accepted the contract. It is a preparation artifact, not a new owner decision. The source audit looked at GitHub's tree and named files. It did **not** re-download or independently revalidate the external documents or run an application build.

## 1. Readiness summary — the operational answer

| Domain | Current state | What is usable now | What's missing for a public clinical reviewer |
|---|---|---|---|
| **Product direction** | APPROVED OD-001 | Five subjects visibly represented; progressive source-verified starter coverage; no fictitious completion quota | Exact first content release order/counts and separately approved implementation cut |
| **Exam and curriculum basis** | RESEARCH DOCUMENTED / SOURCE-REPORTED | PRC 2013 TOS and November 2026 exam program links; CHED national BSM framework; BISU Calape program listing | Missing TOS detail; specific BISU current syllabus unverified |
| **Evidence map** | PARTIAL | Source/locator pointers for seven antenatal research lessons; referenced official clinical materials | Claim-level verified/approved lesson prose and question rationales; source conflict resolution by topic |
| **Content corpus** | NOT YET BOARD-READY | 60 planning modules / 261 lesson titles / 500 *targets* in inherited implementation; 1 nonclinical lesson + 3 question fixtures | 0 finished clinical lessons and 0 real MLE questions in inspected source collections |
| **Governance / rights** | REPOSITORY RECORDS PRESENT | MIT code license; CC BY-NC-SA 4.0 stated for original educational content; disclaimer/contributor/rights guidance | Reconcile stale inherited review mandates; verify rights of any newly copied third-party assets; decide future asset license |
| **Design assets / UI references** | NO APPROVED NEW ASSET KIT | Inherited Astro/CSS UI can be inspected as research only | New approved UI direction, media/illustration sources and licenses; no image/font/media library observed in repository tree |
| **Engineering environment** | EXISTING LEGACY TOOLS ONLY | Private GitHub repository, issues, planning docs, an inherited Astro 7/TS package and GitHub Actions workflow | G1 greenfield stack choice, branch/source writer authority, acceptance baseline, actual runnable clean code |
| **Knowledge graph** | CREATED IN NOTION (prior verified snapshot) | 49 nodes / 82 typed relationships at last recorded verification; source, requirement, gap and contract navigation | Full historic IDs, claim-publication graph and real clinical approval not present; Notion is not the publisher |
| **Review control** | R2 REVIEW REQUESTED | Nox R1 completed; F-01/F-02 corrected in a document-only R2 commit | New Nox R2 independent verdict; explicit KIRCH contract and implementation authorization |

**Conclusion:** Sufficient materials exist to prepare the first vertical slice **now**. Materials are **not** sufficient to market a complete clinical examination reviewer or claim a ready 500-question bank. The two absent JSON exports do **not** block starting an independently designed greenfield interface.

## 2. Custody and evidence-status vocabulary

- **REPO_PRESENT:** named file observed in GitHub's frozen audit tree. The file exists, but any contents may be old or superseded.
- **RESEARCH_REPORTED_ACQUIRED:** 23 November online evidence report says a full document was obtained/inspected and provides source links and precise locators. **It is not a version-controlled PDF inside this repository.**
- **REFERENCE_ONLY:** source is listed/discovered but no verified complete current text/edition is in planning custody.
- **PROPOSED:** design, schema, contract or scope not explicitly owner accepted.
- **UNKNOWN / MISSING:** not verified or absent from checked tree. Never silently promote to verified.
- **SUPERSEDED_IN_PLANNING:** legacy note contradicts later dated evidence or owner direction; retain historically, do not follow as operative instruction.

## 3. Authority / source-of-truth materials (REPO_PRESENT)

| Material | Exact repository location | Operational use |
|---|---|---|
| OD-001 approved owner direction | [OWNER_DECISIONS.md](OWNER_DECISIONS.md) | Actual product breadth authority; not authority for technology or implementation |
| Evidence acquisition + exam scan corrections | [Komadrona-Online-Evidence-Report.md](Komadrona-Online-Evidence-Report.md) | Source-reported findings, PDF locations, contradictions and updated evidence trail |
| Research and PRD draft | [Komadrona-Research-and-PRD-Draft.md](Komadrona-Research-and-PRD-Draft.md) | Product requirements draft; proposals not already approved |
| G0 requirements matrix | [G0_REQUIREMENTS_TRACEABILITY.md](G0_REQUIREMENTS_TRACEABILITY.md) | Cross-reference APPROVED vs CONFIRMED-DIRECTION vs PROPOSED vs OPEN |
| G0 Forge reconciliation | [G0_FORGE_RECONCILIATION.md](G0_FORGE_RECONCILIATION.md) | Evidence custody and project gate status (historical snapshot) |
| Content/publication R2 draft | [G0_CONTENT_PUBLICATION_CONTRACT.md](G0_CONTENT_PUBLICATION_CONTRACT.md) | Repaired evidence-version and revocation logical contract, pending independent R2 review |
| First build-kickoff control | [GitHub Issue #5](https://github.com/Kirch-Nairu/Komadrona-Review/issues/5) | Preparation vs source-code start conditions; no silent framework choice |
| Independent review | [GitHub Issue #4](https://github.com/Kirch-Nairu/Komadrona-Review/issues/4) | R1 review complete, R2 exact SHA handed to Nox; do not infer R2 verdict |
| Knowledge graph navigation | [Notion Komadrona Research & Forge](https://app.notion.com/p/42129cbe9a938113b933eb003f57ff52) | Relational research index and proposed model, not original research source or owner decision |

**Important:** The legacy README, module brief, local-first architecture and source packet statuses are inherited planning records; they are **not** silent overrides of OD-001 or the newer research report.

## 4. Core examination and education sources

| Source | Reported custody / evidence | Use and limitation |
|---|---|---|
| [PRC Board Resolution No. 1 s.2013, 16-page scanned TOS](https://prc.gov.ph/sites/default/files/PRBmidwifeResoNo1s2013.pdf) | RESEARCH_REPORTED_ACQUIRED; visually inspected PDF pp.4–16 | Five-subject detailed blueprint basis; **Fundamentals 14 detailed items unrecoverable**, PHC missing A.1–A.11; never invent |
| [PRC November 2026 Midwifery Examination Program](https://prc.gov.ph/sites/default/files/Midwifery%20Exam%20Program%20November%202026.pdf) | RESEARCH_REPORTED_ACQUIRED | Confirms five headings for that administration; not a replacement complete TOS |
| [CHED CMO No. 3 s.2023](https://legacy.ched.gov.ph/wp-content/uploads/CMO-No.-03-s.-2023.pdf) | RESEARCH_REPORTED_ACQUIRED, 61 pages | National BSM framework, **not** exact BISU Calape semester schedule |
| [BISU official program offerings](https://bisu.edu.ph/program-offerings/) | Public official listing reviewed in evidence report | BISU Calape midwifery audience established; **no** sponsorship or endorsement |
| Professional laws, PRC ethics/IRR and Philippine maternal/newborn statutes | REFERENCE_ONLY or partially retrieved, mixed dates in [legacy reference register](../CONTENT_REFERENCE_REGISTER.md) and research report | Need exact current issuance, jurisdiction and scope **per claim**; do not imply whole packet is release-ready |

**Direct G1 UI permission under OD-001:** represent these five headings, with honest available/planned/unverified status: **Obstetrics**, **Fundamentals of Health Care**, **Infant Care and Feeding**, **Primary Health Care**, **Professional Growth and Development**. Any public detailed subtopic alignment requires actual source locators.

## 5. Philippine antenatal research source pack (REPORTED ACQUIRED, NOT ARCHIVED AS PDF IN REPO)

The online evidence report records full downloads/inspection of these documents in the prior research pass. The frozen Git tree does **not** include PDF copies of them. Links are source-reported retrieval locations, **not new availability checks**.

| Document / reported acquisition | Exact useful locators in research | Legitimate content scope |
|---|---|---|
| [DOH Omnibus Health Guidelines for Adults, 3rd ed. 2025](https://drive.google.com/file/d/1krIievgouavv22n5bRoQ03wAna38qup6/view), 366 pp. | Printed pp.111–114; Table 11 pp.117–118; printed-to-PDF page offset +1 | Philippine antenatal assessment context; **folate weekly unit conflict** on p.113 is unresolved for dosing questions |
| [DOH Antenatal Health Examination Form v1.2024](https://drive.google.com/file/d/1vAzuLqdH7M-cPwUAWcNilGSHZxs6kZH-/view), 17 pp. | A pp.2–3, B.1 pp.4–8, C pp.9–10, D p.11, E p.12, annexes pp.13–17 | Records and exam findings; form Section C lists doctor role, **not** proof of independent midwife clinical procedural scope |
| [DOH Department Circular 2021-0005](https://drive.google.com/file/d/1QrmaDw_a1eBw-i8XyqyASRRnOBuRO0mV/view), 3 pp. | Part I p.1; Part II pp.2–3 | Maternal low-/high-risk definitions and reassessment |
| [PhilHealth Circular 2026-0006](https://www.philhealth.gov.ph/circulars/2026/PC2026-0006.pdf), 29 pp. | V.E.1 pp.8–12; Table 2 pp.8–9; Annex C PDF pp.23–24; Annex D p.25 | Benefits, covered services, records and referral administration; **not** universal clinical technique guidance |
| [Philippine-adapted PCPNC manual, JICA historical copy](https://www.jica.go.jp/Resource/project/philippines/0600894/04/pdf/pcpnc_philippines.pdf), 173 pp. | ANC C1–C18, PDF pp.42–60 | Historical explanation; current edition/replacement **unverified**, older 4-visit model must not be published as current |

**Topic-update resources** (discovery/index, **not** claim approval): [WHO 2022 ultrasound ANC update](https://www.who.int/publications/i/item/9789240046009), [WHO 2025 maternal overview](https://www.who.int/publications/i/item/9789240080591), [WHO 2025 ANC/PNC adaptation toolkit](https://www.who.int/publications/i/item/9789240105164), and linked topic-specific updates in the [Evidence Report](Komadrona-Online-Evidence-Report.md).

### Seven planned antenatal lessons — research support, not finished content

The inherited [module brief](../modules/OBS-ANTENATAL-ASSESSMENT.md) contains the exact original **planned** IDs `OBS-ANTENATAL-ASSESSMENT-L01` … `-L07`; the online evidence report adds a source-support map. These IDs are visible in the repo and can be provisionally preserved; full content-wide legacy crosswalk remains missing.

| Planned lesson | Available source pointer | Release-ready? |
|---|---|---|
| L01 — Purpose and sequence | OHG pp.111–113; DOH form A/B.1/C–E | **NO**; sequence not proven as mandatory |
| L02 — Maternal history/risk | OHG p.111; DOH form pp.2–3/11; DC 2021-0005 Parts I–II | **NO**; still requires claim-level written/checked lesson |
| L03 — General physical assessment | OHG pp.112–113; DOH form pp.4–8/10 | **NO**; specific techniques need separate evidence |
| L04 — Abdominal/obstetric examination | DOH form C p.9; PhilHealth Annex C p.23 | **NO**; doctor-assigned section cannot prove midwife scope |
| L05 — Leopold maneuvers | DOH form p.9 L1–L4; PRC TOS pp.4/12 | **BLOCKED** for unsupported detailed technique/interpretation |
| L06 — Fetal assessment concepts | DOH form p.9; OHG pp.111/117–118; PhilHealth Table 2 | **NO**; topic-specific indication checks still necessary |
| L07 — Documentation/continuity | DOH form pp.1–17; PhilHealth V.E.1 and Annex C | **NO**; potential first draft candidate, not approved/published |

This is the first **research-supported editorial work queue**, not a launch quota or an instruction to publish unverified medical content.

## 6. Legacy content and code records (REPO_PRESENT, RESEARCH ONLY)

| Asset | File/path | Treatment |
|---|---|---|
| Existing source reference registry | `src/data/referenceRegistry.ts`; `docs/CONTENT_REFERENCE_REGISTER.md` | Extract IDs, publisher links and historic intent; recheck dates/links |
| Existing exam blueprint | `src/data/examBlueprint.ts` | Extract known PRC subject structure only where later evidence confirms it; never treat missing detail as official |
| Planned module/title map | `src/data/contentMap/modules/*.ts`; `src/data/contentMap/index.ts` | 60 modules / 261 titles are planning records only; do not copy TS implementation into new app |
| Source packets | `src/data/contentMap/sourcePackets.ts` | 17 packet definitions, **16 marked acquiring / 1 blocked in legacy snapshot**; statuses predate newer source acquisition |
| Recorded gaps | `src/data/contentMap/gaps.ts` | 18 gaps, **1 mapping / 17 source**; some descriptions outdated by 23-Nov research |
| Detailed module brief | `docs/modules/OBS-ANTENATAL-ASSESSMENT.md` | Seven planned antenatal lessons, original intended IDs; legacy clinical-review and source-acquisition mandates need reconciliation |
| Fixture lesson/question files | `src/content/lessons/system/`, `src/content/questions/system/` | 1 nonclinical lesson, 3 nonclinical questions; **not** a clinical exam bank or exam coverage |
| Inherited web implementation | `src/pages/`, `src/scripts/`, `src/styles/`, `package.json`, `astro.config.mjs` | Inspectable UI/engineering **reference only**; **do not adopt old implementation by default** |

**Critical historic-policy differences requiring explicit nonreuse:**

1. Legacy `docs/modules/OBS-ANTENATAL-ASSESSMENT.md` makes qualified clinical review a mandatory path and a complete current PCPNC a blanket prerequisite. Current owner direction requires **documented source verification**, not a mandatory hired clinical reviewer or universal PCPNC dependency. Mark these sections **SUPERSEDED_IN_PLANNING**; do not claim the legacy file was already amended.
2. Legacy `src/data/contentMap/gaps.ts` states no current Philippine antenatal source exists, while the newer evidence report records acquired DOH OHG 2025 and form v1.2024. **Do not mistake the old gap literal for current acquisition state.**
3. Legacy `README.md` and `docs/LEGAL_AND_CONTENT_GOVERNANCE.md` describe localStorage, Google Forms, Astro/Vercel and privacy decisions as Version 1 architecture; those are inherited application choices **not approved automatically for the greenfield rebuild**.
4. Older `docs/CONTENT_REFERENCE_REGISTER.md` still centers the April 2026 PRC program; later research checked the **November 2026** exam program.

Do not erase those conflicting artifacts in the brownfield history; tag their planning disposition and selectively migrate verified knowledge only.

## 7. Design, code, tool and asset inventory

- **Existing GitHub controls:** private repository, Issue #4 independent Nox review, Issue #5 kickoff; `.github/workflows/quality.yml` exists in the inherited repository. No evidence of a *new greenfield branch with working product code* as of this audit.
- **Inherited developer stack only:** `package.json` specifies `Astro ^7.1.4`, `TypeScript ^6.0.3`, `Node >=22.12.0`; `astro check && astro build` scripts. This is **not** a new stack decision.
- **Existing UI references:** historic CSS, landing/subject/practice pages in `src/`; review for content hierarchy and constraints but do not claim a newly accepted design system.
- **Images/illustrations/fonts/media:** no SVG/PNG/JPG/WebP/media or bundled font files in the frozen 102-entry Git tree; `public/robots.txt` is the sole `public/` file. No licensed third-party asset collection or Figma design link was established in the audited resources. This does **not** mean future design must use no images; licensed asset provenance remains to be acquired if needed.
- **Licensing:** repository `LICENSE` is **MIT** for code; `CONTENT_LICENSE.md` states **CC BY-NC-SA 4.0** by default for original articles, questions and illustrations, with exclusions for third-party sources, seals and personal information. Check compatibility before assuming all assets or future contributions may be copied/relicensed.
- **Notion:** graph navigation, a research index. Its earlier 49 nodes and 82 relationships are historical verified figures, not a fresh Notion query in this audit; neither database is a clinical publication source of truth.
- **Deployment:** existing `vercel.json` belongs to prior app. New hosting/environment, automated source-validation pipeline and release process remain **undecided**.

## 8. Practical source-acquisition queue — not a blocker for all G1 work

| Priority | Source/mapping package | Needed before |
|---|---|---|
| P0 content-specific | Claim-level verification for the *selected* first real lesson and its question rationales, with exact document versions/locators | Publishing that item; **not** the initial five-subject UI shell |
| P0 content-specific | Folate unit conflict, Leopold technique documentation, and scope-of-practice check where those topics occur | Publishing those affected claims; can defer those topics and progress elsewhere |
| P1 | Current BEmONC, EINC/Unang Yakap and infection-prevention guidance | Labor / emergency / immediate newborn procedural content |
| P1 | Family-planning clinical standards, infant-feeding, newborn screening, NIP/IMCI guidance | Publishing corresponding specialized question banks |
| P1 | Current PRC midwifery IRR / ethics / board issuances with exact locators | Professional-law, rights, scope and ethics claims |
| P1 | Official PHC disease-control and community program implementation sources | Operational community-health content |
| P2 reconciliation | Missing `Komadrona-Content-Inventory.json`, `Komadrona-Source-Packets-and-Gaps.json` | Complete legacy planned ID and packet crosswalk only |
| P2 optional | Current BISU Calape syllabus/prospectus | *Claiming campus-specific* semester/course equivalence, **not** public MLE subject navigation |

**No blanket source-library completion gate.** Acquire and verify evidence **per proposed claim**. Preserve source ownership and rights; an external download is not permission to redistribute a full PDF.

## 9. First development slice — exact materials package to hand a builder

A source writer can implement **after the owner approves the code-start scope** using this bounded package:

| Work material | Current state | First slice acceptance intent |
|---|---|---|
| Five-subject list and naming | **AVAILABLE** under OD-001 and PRC program | Five subject areas, no fictitious topic completion |
| Content status vocabulary | **PROPOSED** contract + approved truthfulness principle | Honest `published / planned / unverified / withdrawn` presentation |
| Sample content data | **NOT PROVIDED as clinically verified** | Fictional, clearly marked *nonclinical* fixtures only; zero examination coverage |
| Source link/readability | **AVAILABLE as research links** | On visible lesson shells, cited source metadata/locator display as applicable, not fake clinical approval |
| Design treatment | **NOT SELECTED** | Simple mobile/keyboard accessible hierarchy; visual design direction remains an owner choice |
| Stack/framework/deployment | **NOT SELECTED** | Choose minimal reversible implementation after owner decision; don't silently inherit Astro/Vercel |
| Source-verification enforcement | **R2 CONTRACT PROPOSED** | Never publish material from Notion status alone; exact dependency version and current revocation checked before serving |
| QA targets | **SPECIFIED, NOT EXECUTED** | Five headings, zero-content states, fixture exclusion, no endorsement, keyboard and mobile flows; negative stale approval and withdrawn rollback tests when implementing content publisher |

**First UI slice pass/fail illustrations:**

- Five headings can be opened on phone and keyboard; subject with no verified lessons says **no verified lessons available yet**.
- Any planned total is visibly distinguished from actually published records. Zero completed clinical lessons is not displayed as exam coverage.
- No patient data, medical dosage or procedure example is invented to make pages look full.
- A fixture question cannot enter a released exam bank or add to subject completion.
- The application cannot activate a later-withdrawn question by loading a previous release; this is a future publisher behavior to test once implemented, not evidence of current enforcement.
- No PRC, CHED, DOH or BISU logo/endorsement is implied.

## 10. One short critical path — no indefinite planning

**Already usable right now:** OD-001, the five-subject labels, a source registry with caveats, status/rights controls and a bounded G1 UI acceptance map.

**For actual greenfield product-code start:** (a) Nox exact-R2 re-review of `1b7229ce...` and any blocking fixes, (b) KIRCH explicit contract acceptance, (c) KIRCH approval of the first slice + reversible stack/branch/source writer. These are concrete decisions, **not** full-source-acquisition or legacy-JSON prerequisites.

**For first *clinical content* publication:** each actual claim and each question rationale requires evidence/rights checks, a publication decision and the contract's current revocation control. Do not equate a demonstrated UI with publishable clinical material.

**No ETA is claimed for Nox or external document availability.** The new UI foundation is a bounded start point rather than a months-long syllabus acquisition program.

## 11. Audit trace, permissions and nonactions

- Source tree: GitHub authenticated KIRCH account, `git/trees/1b7229ce2b34bf3f801da7a3011554a159fad0b8?recursive=1`, **102 entries**, `truncated:false`. This reflects repository content, not all resources once downloaded outside GitHub.
- Sources read at the frozen audit SHA: `CONTENT_LICENSE.md`, `LICENSE`, `CONTRIBUTING.md`, `README.md`, `package.json`, `docs/CONTENT_REFERENCE_REGISTER.md`, `docs/LEGAL_AND_CONTENT_GOVERNANCE.md`, `docs/modules/OBS-ANTENATAL-ASSESSMENT.md`, `src/data/contentMap/sourcePackets.ts`, `src/data/contentMap/gaps.ts`, and the G0 planning docs.
- Earlier acquired-PDF claims are attributed to `Komadrona-Online-Evidence-Report.md`; **no new web download, clinical accuracy review or repository PDF archival occurred in this material audit**.
- No inherited app code copied, no clinical content written, no framework selected, no application tests run, no merge or deployment performed.
- This artifact is authored as a resource and preparation handoff on a **separate preparation branch** so the Nox R2 exact-SHA contract review remains frozen and unaffected.
