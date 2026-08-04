import { defineModule, type PlannedModule } from '../types';

export const obstetricsModules: PlannedModule[] = [
  defineModule(
    "OBS-ANATOMY",
    "obstetrics",
    "ob-anatomy-physiology",
    "Reproductive anatomy and obstetric structures",
    [
  0,
  1
],
    7,
    "ob-foundations",
    [
  "External and internal reproductive structures",
  "Functions of the reproductive organs",
  "Pelvic structures and obstetric relevance"
],
    "core",
    "standard",
    "source-acquisition"
  ),
  defineModule(
    "OBS-PHYSIOLOGY",
    "obstetrics",
    "ob-anatomy-physiology",
    "Reproductive physiology and hormonal control",
    [
  2
],
    5,
    "ob-foundations",
    [
  "Menstrual-cycle phases",
  "Female reproductive hormones",
  "Fertilization, implantation, and placental foundations"
],
    "core",
    "standard",
    "source-acquisition"
  ),
  defineModule(
    "OBS-PREGNANCY-FOUNDATIONS",
    "obstetrics",
    "ob-prenatal-labor-postpartum",
    "Pregnancy foundations",
    [
  1,
  3
],
    8,
    "antenatal-care",
    [
  "Signs and confirmation concepts of pregnancy",
  "Physiologic changes during pregnancy",
  "Normal fetal development by broad stage",
  "Gestational-age and expected-date foundations"
],
    "highest",
    "high",
    "source-acquisition"
  ),
  defineModule(
    "OBS-ANTENATAL-ASSESSMENT",
    "obstetrics",
    "ob-prenatal-labor-postpartum",
    "Antenatal assessment and risk identification",
    [
  0,
  2,
  3
],
    12,
    "antenatal-care",
    [
  "Purpose and sequence of antenatal assessment",
  "Maternal history and risk assessment",
  "General physical assessment",
  "Abdominal and obstetric examination",
  "Leopold maneuvers",
  "Fetal assessment concepts",
  "Documentation and continuity of care"
],
    "highest",
    "high",
    "source-acquisition"
  ),
  defineModule(
    "OBS-ANTENATAL-TEACHING",
    "obstetrics",
    "ob-prenatal-labor-postpartum",
    "Antenatal health teaching and prevention",
    [
  0,
  1,
  3
],
    8,
    "antenatal-care",
    [
  "Pregnancy nutrition and healthy activity",
  "Hygiene, rest, and minor discomforts",
  "Medication and substance-safety concepts",
  "Birth preparedness and complication readiness",
  "Pregnancy danger signs and referral",
  "Breastfeeding preparation and family participation"
],
    "highest",
    "high",
    "source-acquisition"
  ),
  defineModule(
    "OBS-NORMAL-LABOR",
    "obstetrics",
    "ob-prenatal-labor-postpartum",
    "Normal labor and childbirth",
    [
  4
],
    16,
    "labor-childbirth",
    [
  "Physiology and signs of labor",
  "Stages of labor",
  "Maternal and fetal assessment during labor",
  "Progress of labor",
  "Partograph and Labour Care Guide concepts",
  "Respectful and supportive labor care",
  "Normal birth sequence concepts",
  "Immediate maternal care and documentation"
],
    "highest",
    "critical",
    "source-acquisition"
  ),
  defineModule(
    "OBS-LABOR-DEVIATIONS",
    "obstetrics",
    "ob-prenatal-labor-postpartum",
    "Deviations from normal labor",
    [
  5
],
    7,
    "labor-childbirth",
    [
  "Prolonged and obstructed labor concepts",
  "Abnormal labor progress",
  "Fetal malpresentation concepts",
  "Maternal and fetal warning signs",
  "Referral, transport, and stabilization boundaries"
],
    "highest",
    "critical",
    "source-acquisition"
  ),
  defineModule(
    "OBS-POSTPARTUM-CARE",
    "obstetrics",
    "ob-prenatal-labor-postpartum",
    "Routine postpartum care and follow-up",
    [
  6
],
    7,
    "postpartum-care",
    [
  "Normal postpartum physiologic changes",
  "Routine postpartum assessment",
  "Uterine involution and lochia",
  "Comfort, perineal, and hygiene care",
  "Breastfeeding and nutrition support",
  "Postpartum home visits",
  "Warning signs, emotional well-being, and referral"
],
    "highest",
    "high",
    "source-acquisition"
  ),
  defineModule(
    "OBS-MATERNAL-RISK",
    "obstetrics",
    "ob-complications",
    "Maternal mortality, morbidity, and risk",
    [
  0
],
    3,
    "maternal-complications",
    [
  "Major causes of maternal death and disability",
  "Risk recognition across pregnancy, labor, and postpartum",
  "Prevention, escalation, and referral principles"
],
    "high",
    "high",
    "source-acquisition"
  ),
  defineModule(
    "OBS-HEMORRHAGE-HYPERTENSION",
    "obstetrics",
    "ob-complications",
    "Hemorrhage and hypertensive disorders",
    [
  1
],
    5,
    "maternal-complications",
    [
  "Antepartum and postpartum hemorrhage concepts",
  "Preeclampsia and eclampsia recognition",
  "Initial response and referral boundaries",
  "Documentation and handover in maternal emergencies"
],
    "high",
    "critical",
    "source-acquisition"
  ),
  defineModule(
    "OBS-INFECTION-MALPRESENTATION",
    "obstetrics",
    "ob-complications",
    "Obstetric infection and malpresentation",
    [
  2
],
    3,
    "maternal-complications",
    [
  "Obstetric infection and sepsis concepts",
  "Fetal malpresentation recognition",
  "Referral and infection-prevention boundaries"
],
    "high",
    "critical",
    "source-acquisition"
  ),
  defineModule(
    "OBS-EMERGENCY-REFERRAL",
    "obstetrics",
    "ob-complications",
    "Emergency recognition and referral",
    [
  3
],
    3,
    "maternal-complications",
    [
  "Structured emergency recognition",
  "First-response and stabilization concepts",
  "Referral communication, transport, and continuity"
],
    "high",
    "critical",
    "source-acquisition"
  ),
  defineModule(
    "OBS-ABNORMAL-PREGNANCY",
    "obstetrics",
    "ob-complications",
    "Abnormal pregnancy conditions",
    [
  4
],
    2,
    "maternal-complications",
    [
  "Abortion-related complications and referral",
  "Ectopic pregnancy concepts",
  "Maternal medical conditions affecting pregnancy"
],
    "high",
    "critical",
    "source-acquisition"
  ),
  defineModule(
    "OBS-GYNECOLOGY",
    "obstetrics",
    "ob-gynecology-family-planning",
    "Common gynecologic concerns",
    [
  0,
  1
],
    5,
    "reproductive-health",
    [
  "Common gynecologic complaints",
  "Vaginal discharge and infection concepts",
  "Menstrual concerns",
  "Health information, limits, and referral indications"
],
    "high",
    "high",
    "source-acquisition"
  ),
  defineModule(
    "OBS-FAMILY-PLANNING",
    "obstetrics",
    "ob-gynecology-family-planning",
    "Family planning and informed choice",
    [
  2
],
    5,
    "reproductive-health",
    [
  "Rights-based family-planning counseling",
  "Method categories, effectiveness, and limitations",
  "Eligibility and referral concepts",
  "Postpartum family planning",
  "Follow-up, records, and confidentiality"
],
    "high",
    "high",
    "source-acquisition"
  ),
  defineModule(
    "OBS-REPRODUCTIVE-HEALTH",
    "obstetrics",
    "ob-gynecology-family-planning",
    "Reproductive health and rights",
    [
  3
],
    4,
    "reproductive-health",
    [
  "Elements of reproductive health",
  "Sexual and reproductive rights in Philippine law",
  "Respectful counseling and confidentiality",
  "Program referral and continuity"
],
    "high",
    "high",
    "source-acquisition"
  )
];
