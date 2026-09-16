import type { ExamDomainBlueprint } from './examBlueprint';

export const assertBlueprintIntegrity = (domains: ExamDomainBlueprint[]) => {
  const ids = new Set<string>();

  for (const domain of domains) {
    if (ids.has(domain.id)) {
      throw new Error(`Duplicate examination blueprint domain id: ${domain.id}`);
    }
    ids.add(domain.id);

    const totalWeight = domain.areas.reduce((sum, area) => sum + area.weightPercent, 0);
    if (totalWeight !== 100) {
      throw new Error(
        `Examination blueprint weights for ${domain.title} total ${totalWeight}; expected 100.`
      );
    }

    const areaIds = new Set<string>();
    for (const area of domain.areas) {
      if (areaIds.has(area.id)) {
        throw new Error(`Duplicate area id ${area.id} in ${domain.title}.`);
      }
      areaIds.add(area.id);

      if (area.weightPercent <= 0 || area.weightPercent > 100) {
        throw new Error(`Invalid weight ${area.weightPercent} for ${area.label}.`);
      }

      if (area.competencies.length === 0) {
        throw new Error(`Blueprint area ${area.label} has no competencies.`);
      }
    }
  }
};
