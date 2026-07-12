export function toNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function calculateWorkflow(workflow) {
  const hours = Math.max(0, toNumber(workflow.hoursPerOccurrence));
  const occurrences = Math.max(0, toNumber(workflow.occurrencesPerMonth));
  const people = Math.max(1, toNumber(workflow.people, 1));
  const hourlyCost = Math.max(0, toNumber(workflow.hourlyCost));
  const reduction = clamp(toNumber(workflow.reductionPercent), 0, 90) / 100;
  const confidence = clamp(toNumber(workflow.confidence, 0.65), 0, 1);
  const annualHours = hours * occurrences * people * 12;
  const currentAnnualCost = annualHours * hourlyCost;
  const possibleReleasedHours = annualHours * reduction;
  const possibleAnnualCapacityValue = possibleReleasedHours * hourlyCost;
  return {
    annualHours,
    currentAnnualCost,
    possibleReleasedHours,
    possibleAnnualCapacityValue,
    confidenceAdjustedPlanningValue: possibleAnnualCapacityValue * confidence,
  };
}

export function calculateTotals(workflows) {
  return workflows.reduce((totals, workflow) => {
    const result = workflow.results || calculateWorkflow(workflow);
    for (const key of Object.keys(totals)) totals[key] += result[key];
    return totals;
  }, {
    annualHours: 0,
    currentAnnualCost: 0,
    possibleReleasedHours: 0,
    possibleAnnualCapacityValue: 0,
    confidenceAdjustedPlanningValue: 0,
  });
}
