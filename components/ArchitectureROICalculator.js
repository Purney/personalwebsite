"use client";

import { useMemo, useRef, useState } from "react";
import { calculateTotals, calculateWorkflow, clamp, toNumber } from "@/lib/roi-calculations";

const consultationUrl = "https://calendly.com/hello-william-purnell/initial-call";

const confidenceOptions = [
  { label: "Low", value: 0.4 },
  { label: "Medium", value: 0.65 },
  { label: "High", value: 0.85 },
];

const suggestedWorkflowNames = [
  "Technical detail search",
  "Drawing QA checks",
];

const currencyFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat("en-GB", {
  maximumFractionDigits: 1,
});

const createWorkflow = (id, name) => ({
  id,
  name,
  hoursPerOccurrence: 6,
  occurrencesPerMonth: 4,
  people: 1,
  hourlyCost: 45,
  reductionPercent: 35,
  confidence: 0.65,
});

export default function ArchitectureROICalculator() {
  const nextWorkflowNumber = useRef(2);
  const [workflows, setWorkflows] = useState([
    createWorkflow("workflow-1", "Planning pack preparation"),
  ]);

  const workflowResults = useMemo(
    () =>
      workflows.map((workflow) => ({
        ...workflow,
        results: calculateWorkflow(workflow),
      })),
    [workflows]
  );

  const totals = useMemo(() => calculateTotals(workflowResults), [workflowResults]);

  const updateWorkflow = (id, field, value) => {
    setWorkflows((currentWorkflows) =>
      currentWorkflows.map((workflow) =>
        workflow.id === id ? { ...workflow, [field]: value } : workflow
      )
    );
  };

  const handleNumberChange = (id, field, options = {}) => (event) => {
    const value = toNumber(event.target.value, options.min ?? 0);
    const min = options.min ?? 0;
    const max = options.max ?? Number.POSITIVE_INFINITY;
    updateWorkflow(id, field, clamp(value, min, max));
  };

  const addWorkflow = () => {
    const workflowNumber = nextWorkflowNumber.current;
    const suggestedName =
      suggestedWorkflowNames[workflowNumber - 2] || `Workflow ${workflowNumber}`;

    nextWorkflowNumber.current += 1;
    setWorkflows((currentWorkflows) => [
      ...currentWorkflows,
      createWorkflow(`workflow-${workflowNumber}`, suggestedName),
    ]);
  };

  const removeWorkflow = (id) => {
    setWorkflows((currentWorkflows) =>
      currentWorkflows.length === 1
        ? currentWorkflows
        : currentWorkflows.filter((workflow) => workflow.id !== id)
    );
  };

  return (
    <section className="bg-background-dark py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="border border-white/10 bg-slate-950/80 p-5 shadow-panel md:p-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-kicker">
              Estimated capacity
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl">
              Estimate the capacity across repeated workflows.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Use this simple model to estimate how much time repeated drawing,
              document, planning or project-information workflows may be consuming
              each year. The result is a directional planning estimate to help
              identify which workflows are worth reviewing in an audit.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            {workflowResults.map((workflow, index) => (
              <div
                key={workflow.id}
                className="border border-white/10 bg-slate-950/80 p-5 md:p-6"
              >
                <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-kicker">
                      Workflow {index + 1}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {workflow.name || "Untitled workflow"}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeWorkflow(workflow.id)}
                    disabled={workflows.length === 1}
                    className="btn-secondary px-4 py-2 text-xs disabled:cursor-not-allowed disabled:border-white/5 disabled:text-slate-600 disabled:hover:text-slate-600"
                  >
                    Remove
                  </button>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <Field
                    label="Workflow name"
                    htmlFor={`${workflow.id}-name`}
                    className="md:col-span-2"
                  >
                    <input
                      id={`${workflow.id}-name`}
                      type="text"
                      value={workflow.name}
                      onChange={(event) =>
                        updateWorkflow(workflow.id, "name", event.target.value)
                      }
                      className="mt-2 w-full border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent-cyan"
                    />
                  </Field>

                  <Field
                    label="Time per occurrence"
                    htmlFor={`${workflow.id}-hours`}
                    suffix="hours"
                  >
                    <input
                      id={`${workflow.id}-hours`}
                      type="number"
                      min="0"
                      step="0.5"
                      value={workflow.hoursPerOccurrence}
                      onChange={handleNumberChange(
                        workflow.id,
                        "hoursPerOccurrence"
                      )}
                      className="mt-2 w-full border border-white/10 bg-white/5 py-3 pl-4 pr-16 text-white outline-none transition focus:border-accent-cyan"
                    />
                  </Field>

                  <Field
                    label="Occurrences per month"
                    htmlFor={`${workflow.id}-occurrences`}
                  >
                    <input
                      id={`${workflow.id}-occurrences`}
                      type="number"
                      min="0"
                      step="1"
                      value={workflow.occurrencesPerMonth}
                      onChange={handleNumberChange(
                        workflow.id,
                        "occurrencesPerMonth"
                      )}
                      className="mt-2 w-full border border-white/10 bg-white/5 py-3 pl-4 pr-16 text-white outline-none transition focus:border-accent-cyan"
                    />
                  </Field>

                  <Field label="People involved" htmlFor={`${workflow.id}-people`}>
                    <input
                      id={`${workflow.id}-people`}
                      type="number"
                      min="1"
                      step="1"
                      value={workflow.people}
                      onChange={handleNumberChange(workflow.id, "people", {
                        min: 1,
                      })}
                      className="mt-2 w-full border border-white/10 bg-white/5 py-3 pl-4 pr-16 text-white outline-none transition focus:border-accent-cyan"
                    />
                  </Field>

                  <Field
                    label="Average loaded hourly cost"
                    htmlFor={`${workflow.id}-cost`}
                    suffix="GBP"
                  >
                    <input
                      id={`${workflow.id}-cost`}
                      type="number"
                      min="0"
                      step="5"
                      value={workflow.hourlyCost}
                      onChange={handleNumberChange(workflow.id, "hourlyCost")}
                      className="mt-2 w-full border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent-cyan"
                    />
                  </Field>

                  <Field
                    label="Estimated reduction"
                    htmlFor={`${workflow.id}-reduction`}
                    suffix="%"
                  >
                    <input
                      id={`${workflow.id}-reduction`}
                      type="number"
                      min="0"
                      max="90"
                      step="5"
                      value={workflow.reductionPercent}
                      onChange={handleNumberChange(
                        workflow.id,
                        "reductionPercent",
                        { min: 0, max: 90 }
                      )}
                      className="mt-2 w-full border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent-cyan"
                    />
                  </Field>

                  <Field
                    label="Confidence level"
                    htmlFor={`${workflow.id}-confidence`}
                    hint="This discounts the estimate based on how reliable the current workflow data is."
                  >
                    <select
                      id={`${workflow.id}-confidence`}
                      value={workflow.confidence}
                      onChange={(event) =>
                        updateWorkflow(
                          workflow.id,
                          "confidence",
                          toNumber(event.target.value, 0.65)
                        )
                      }
                      className="mt-2 w-full border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-accent-cyan"
                    >
                      {confidenceOptions.map((option) => (
                        <option key={option.label} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

              </div>
            ))}

            <button
              type="button"
              onClick={addWorkflow}
              className="btn-primary w-full sm:w-auto"
            >
              Add workflow
            </button>
          </div>

          <div className="space-y-5">
            <div className="border border-accent-amber/25 bg-accent-amber/10 p-5 md:p-6">
              <p className="text-kicker">
                Combined estimate
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Possible annual capacity value
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <ResultCard
                  label="Total current annual hours"
                  value={`${numberFormatter.format(totals.annualHours)} hrs`}
                />
                <ResultCard
                  label="Total current annual capacity cost"
                  value={currencyFormatter.format(totals.currentAnnualCost)}
                />
                <ResultCard
                  label="Total possible released hours"
                  value={`${numberFormatter.format(
                    totals.possibleReleasedHours
                  )} hrs`}
                />
                <ResultCard
                  label="Combined possible annual capacity value"
                  value={currencyFormatter.format(
                    totals.possibleAnnualCapacityValue
                  )}
                />
                <ResultCard
                  label="Combined confidence-adjusted planning value"
                  value={currencyFormatter.format(
                    totals.confidenceAdjustedPlanningValue
                  )}
                />
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                This is a directional estimate to help decide what is worth
                auditing first.
              </p>
            </div>

            <div className="border border-white/10 bg-background-dark/70 p-5 md:p-6">
              <h4 className="text-xl font-semibold text-white">
                Want to prioritise these workflows properly?
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                If several workflows show meaningful capacity tied up, an initial
                call can help decide whether an audit should map the process,
                review representative files and prioritise the best next step.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={consultationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book a Consultation
                </a>
                <a
                  href="#compare"
                  className="btn-secondary"
                >
                  Compare Audit Options
                </a>
              </div>
            </div>

            <p className="text-xs leading-6 text-slate-400">
              The audit helps identify where time is being lost and which
              workflows should be prioritised. It does not itself implement
              changes or guarantee savings.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

function Field({ label, htmlFor, suffix, hint, className = "", children }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="text-sm font-semibold text-slate-200">
        {label}
      </label>
      <div className="relative">
        {children}
        {suffix && (
          <span className="pointer-events-none absolute right-4 top-1/2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">
            {suffix}
          </span>
        )}
      </div>
      {hint && <p className="mt-2 text-xs leading-5 text-slate-400">{hint}</p>}
    </div>
  );
}

function ResultCard({ label, value }) {
  return (
    <div className="border border-white/10 bg-background-dark/70 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}
