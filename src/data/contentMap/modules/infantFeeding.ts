import { defineModule, type PlannedModule } from '../types';

export const infantFeedingModules: PlannedModule[] = [
  defineModule(
    'ICF-BREASTFEEDING',
    'infant-care-feeding',
    'ic-feeding-nutrition',
    'Breastfeeding foundations and support',
    [0, 1],
    16,
    'feeding-nutrition',
    ['Lactation physiology', 'Positioning and attachment', 'Signs of effective feeding', 'Milk-transfer concepts', 'Expressing and storing breast milk', 'Respectful counseling'],
    'highest',
    'high'
  ),
  defineModule(
    'ICF-INFANT-NUTRITION',
    'infant-care-feeding',
    'ic-feeding-nutrition',
    'Infant feeding and nutrition',
    [0, 1],
    16,
    'feeding-nutrition',
    ['Exclusive-feeding concepts', 'Complementary-feeding foundations', 'Age-appropriate consistency and frequency', 'Micronutrient concepts', 'Safe food preparation', 'Growth-faltering recognition'],
    'highest',
    'high'
  ),
  defineModule(
    'ICF-FEEDING-PROBLEMS',
    'infant-care-feeding',
    'ic-feeding-nutrition',
    'Feeding and nutrition problems',
    [2],
    8,
    'feeding-nutrition',
    ['Common feeding concerns', 'Poor intake and feeding difficulty', 'Nutrition-related warning signs', 'Counseling, follow-up, and referral'],
    'highest',
    'high'
  )
];
