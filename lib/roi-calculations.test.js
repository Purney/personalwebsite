import { describe, expect, it } from "vitest";
import { calculateTotals, calculateWorkflow } from "./roi-calculations";

describe("ROI calculations", () => {
  it("calculates annual capacity consistently", () => {
    expect(calculateWorkflow({ hoursPerOccurrence: 6, occurrencesPerMonth: 4, people: 1, hourlyCost: 45, reductionPercent: 35, confidence: 0.65 })).toEqual({
      annualHours: 288,
      currentAnnualCost: 12960,
      possibleReleasedHours: 100.8,
      possibleAnnualCapacityValue: 4536,
      confidenceAdjustedPlanningValue: 2948.4,
    });
  });

  it("clamps unsafe inputs and totals workflows", () => {
    const first = calculateWorkflow({ hoursPerOccurrence: -1, occurrencesPerMonth: 2, people: 0, hourlyCost: 10, reductionPercent: 120, confidence: 2 });
    expect(first.annualHours).toBe(0);
    expect(calculateTotals([{ results: first }, { results: { ...first, annualHours: 12 } }]).annualHours).toBe(12);
  });
});
