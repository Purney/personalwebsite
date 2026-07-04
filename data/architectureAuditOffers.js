// @ts-check

/**
 * @typedef {Object} OfferSummary
 * @property {string} label
 * @property {string} value
 */

/**
 * @typedef {Object} ArchitectureAuditOffer
 * @property {string} slug
 * @property {string} name
 * @property {string} shortName
 * @property {string} price
 * @property {string} duration
 * @property {string} timeline
 * @property {string} scope
 * @property {string} positioning
 * @property {string} decision
 * @property {string} bestFor
 * @property {string} mainOutcome
 * @property {string} stakeholderEngagement
 * @property {string} fileReview
 * @property {string} prototype
 * @property {OfferSummary[]} facts
 * @property {Array<{stage: string, title: string, copy: string}>} stages
 * @property {string[]} clientInputs
 * @property {Array<{title: string, copy: string}>} included
 * @property {string[]} finalHandover
 * @property {string[]} exclusions
 * @property {string[]} successLooksLike
 * @property {string[]} faqs
 * @property {string} paymentTerms
 */

export const architectureAuditBasePath = "/services/architecture-ai-automation-audit";

export const architectureAuditBookingUrl =
  process.env.NEXT_PUBLIC_ARCHITECTURE_AUDIT_BOOKING_URL ||
  process.env.NEXT_PUBLIC_BOOKING_URL ||
  "https://calendly.com/hello-william-purnell/initial-call";

export const architectureAuditContactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@william-purnell.com";

export const parentProcessSteps = [
  {
    title: "Understand the workflow",
    copy: "Review repetitive tasks, bottlenecks, handovers, manual checking and process frustrations.",
  },
  {
    title: "Review the evidence",
    copy: "Assess representative drawings, files, systems, standards and available information.",
  },
  {
    title: "Prioritise the opportunities",
    copy: "Compare likely impact, effort, risk, readiness and dependencies.",
  },
  {
    title: "Create a decision-ready roadmap",
    copy: "Recommend the most practical next actions, with a clear delivery sequence.",
  },
];

export const architectureProblems = [
  "Teams spend too much time recreating, formatting or checking drawing information.",
  "Technical details, previous drawings and project knowledge are difficult to find and reuse.",
  "Planning packs, presentation material and document submissions involve repetitive manual preparation.",
  "Drawing colourisation, file organisation or QA checks rely on inconsistent manual effort.",
  "Information is repeatedly copied between folders, software and teams.",
  "The practice wants to explore AI but does not know which workflows are worth improving first.",
  "Leadership wants a clear plan before investing in off-the-shelf tools or custom development.",
];

export const parentDeliverables = [
  "Workflow findings",
  "Evidence and readiness observations",
  "Prioritised automation opportunities",
  "Recommended quick wins",
  "Practical next steps",
  "A phased roadmap",
  "A leadership readout",
  "Clear implementation direction where appropriate",
];

export const parentFaqs = [
  {
    question: "Is this suitable for practices using AutoCAD, Revit, ArchiCAD, Adobe or a mixture of systems?",
    answer:
      "Yes. The audit is based on your current workflows, files and standards rather than a single software platform. The depth of file review depends on the package selected.",
  },
  {
    question: "Do we need to replace our current software?",
    answer:
      "Usually no. The audit is designed to understand where existing tools, standards and processes can be improved before recommending new software or custom development.",
  },
  {
    question: "Will AI replace design or technical judgement?",
    answer:
      "No. The focus is on repetitive preparation, search, checking, formatting and workflow support. Human review and quality-control checkpoints remain central to the recommendations.",
  },
  {
    question: "What drawings, documents or files will you need?",
    answer:
      "Each package defines a representative evidence limit, from up to 10 files in the Essential Audit to up to 50 samples in the Validation Programme.",
  },
  {
    question: "Can the audit lead to a custom automation project?",
    answer:
      "Yes, where the evidence supports it. Any implementation proposal follows only after scope, dependencies and acceptance criteria are agreed.",
  },
  {
    question: "What is the difference between the three audit options?",
    answer:
      "The packages increase in depth: Essential gives a focused diagnostic, Discovery Sprint provides deeper operational assessment, and Validation Programme adds one limited non-production proof of concept.",
  },
  {
    question: "Is the Validation Programme prototype production-ready?",
    answer:
      "No. The prototype is a limited feasibility exercise. It does not include live integrations, deployment, user support, monitoring, data migration, security certification or guaranteed production outcomes.",
  },
];

/** @type {ArchitectureAuditOffer[]} */
export const architectureAuditOffers = [
  {
    slug: "essential-audit",
    name: "Essential AI & Automation Audit",
    shortName: "Essential Audit",
    price: "£1,495 + VAT",
    duration: "2 delivery days + report and readout",
    timeline: "Usually completed within 7-10 working days",
    scope: "Up to 3 workflows, 10 representative files and 5 opportunities",
    positioning:
      "A focused two-day diagnostic for practices that need a practical view of where AI and automation could create value.",
    decision:
      "Where should we focus first, and what should we avoid spending time or money on?",
    bestFor:
      "Practices that know repetitive work is consuming time but need an independent view before committing budget.",
    mainOutcome: "A clear starting point, top recommendations and a 30 / 60 / 90-day action plan.",
    stakeholderEngagement: "One two-hour workshop plus up to three 30-minute interviews.",
    fileReview: "Lightweight review of up to 10 representative files, screenshots or process examples.",
    prototype: "Not included",
    facts: [
      { label: "Investment", value: "£1,495 + VAT" },
      { label: "Delivery", value: "2 delivery days + report and readout" },
      { label: "Timeline", value: "Usually 7-10 working days" },
      { label: "Scope", value: "Up to 3 workflows, 10 files and 5 opportunities" },
    ],
    stages: [
      { stage: "01", title: "Prepare", copy: "We collect a short questionnaire and a small, representative evidence pack before the audit begins." },
      { stage: "02", title: "Discover", copy: "We run a focused workshop and short stakeholder interviews to understand the work behind the visible process." },
      { stage: "03", title: "Prioritise", copy: "We compare opportunities by business value, effort, data readiness and implementation risk." },
      { stage: "04", title: "Recommend", copy: "We present the top three actions and a practical 30 / 60 / 90-day plan." },
    ],
    clientInputs: [
      "One executive sponsor who can set priorities and attend the readout",
      "A nominated coordinator to arrange contributors and evidence",
      "Up to three contributors for interviews",
      "Up to ten representative files, screenshots or process examples",
      "Completed pre-audit questionnaire",
    ],
    included: [
      { title: "Kick-off and evidence review", copy: "A concise pre-audit questionnaire, up to ten representative files or process examples, and a focused audit brief." },
      { title: "Stakeholder input", copy: "One two-hour workshop plus up to three 30-minute interviews with relevant process owners or team members." },
      { title: "Workflow snapshot", copy: "A lightweight view of up to three priority workflows, including key people, tools, bottlenecks and manual handovers." },
      { title: "Opportunity assessment", copy: "A prioritised matrix covering up to five practical AI and automation opportunities." },
      { title: "Roadmap and readout", copy: "An 8-12 page report, 30 / 60 / 90-day roadmap, indicative next-step ranges and a 60-minute leadership readout." },
    ],
    finalHandover: [
      "Executive summary with the decision required",
      "Snapshot of up to three priority workflows",
      "Prioritised opportunity matrix - up to five opportunities",
      "Top three recommended actions with constraints and prerequisites",
      "30 / 60 / 90-day roadmap",
      "Indicative implementation effort and budget ranges",
      "60-minute leadership readout",
    ],
    exclusions: [
      "No prototype, custom software, configuration, system integration or deployment",
      "No full archive, drawing-library or BIM-model audit",
      "No detailed ROI model, fixed build quote or formal technical design",
      "No legal, cyber-security, data-protection or regulatory assurance",
      "Additional scope is agreed in writing before work begins",
    ],
    successLooksLike: [
      "A shared view of where the practice is losing time",
      "A short, realistic list of high-value opportunities",
      "A clear first action that can be taken with confidence",
    ],
    faqs: [
      "Does this include prototype development? No. This package is diagnostic only.",
      "How many workflows are reviewed? Up to three priority workflows.",
      "Is the implementation budget fixed? No. Any ranges are indicative planning ranges until scope and dependencies are agreed.",
    ],
    paymentTerms:
      "50% booking payment to confirm dates; 50% due before the final readout. Remote delivery is included. On-site delivery can be quoted separately, subject to travel time and expenses.",
  },
  {
    slug: "discovery-sprint",
    name: "AI & Automation Discovery Sprint",
    shortName: "Discovery Sprint",
    price: "£4,595 + VAT",
    duration: "2-week discovery sprint",
    timeline: "Usually completed within 10-15 working days",
    scope: "Up to 3 workflows, 30 representative files and 8 opportunities",
    positioning:
      "A deeper operational assessment for practices that need stronger evidence and a prioritised implementation plan.",
    decision:
      "Which automation opportunities are worth investing in, in what order, and what needs to happen before implementation?",
    bestFor:
      "Practices with more than one potential automation opportunity, workflow variation across teams, or standards that need to be understood before implementation.",
    mainOutcome: "A prioritised six-month roadmap and feasibility direction for the strongest opportunities.",
    stakeholderEngagement: "Up to six 45-minute interviews across relevant roles.",
    fileReview: "Deeper review of up to 30 representative drawings, documents or technical-detail samples.",
    prototype: "Not included",
    facts: [
      { label: "Investment", value: "£4,595 + VAT" },
      { label: "Delivery", value: "2-week discovery sprint" },
      { label: "Timeline", value: "Usually 10-15 working days" },
      { label: "Scope", value: "Up to 3 workflows, 30 files and 8 opportunities" },
    ],
    stages: [
      { stage: "01", title: "Mobilise", copy: "We agree the business question, success criteria, contributors and evidence plan." },
      { stage: "02", title: "Discover and map", copy: "We interview the people closest to the work and document the current workflow, including exceptions and quality checks." },
      { stage: "03", title: "Assess readiness", copy: "We review representative drawings, documents and data to identify what is ready now and what needs improvement." },
      { stage: "04", title: "Prioritise and plan", copy: "We assess the opportunity portfolio, outline the top two use cases, and provide a six-month roadmap." },
    ],
    clientInputs: [
      "Executive sponsor and day-to-day client coordinator",
      "Up to six relevant stakeholders for interviews",
      "Up to 30 representative examples across selected workflows",
      "Relevant practice standards, templates or process notes where available",
      "Timely review of workflow maps and findings",
    ],
    included: [
      { title: "Kick-off and evidence plan", copy: "A 60-90 minute kick-off, agreed success criteria, secure evidence request and a defined assessment plan." },
      { title: "Stakeholder discovery", copy: "Up to six 45-minute interviews across relevant roles, supported by structured interview notes and findings synthesis." },
      { title: "Workflow analysis", copy: "Detailed current-state maps for up to three priority workflows, including inputs, systems, handoffs, decision points, rework and quality control." },
      { title: "Readiness assessment", copy: "Review of up to 30 representative drawings, documents or technical-detail samples to assess file, data and standards readiness." },
      { title: "Opportunity and feasibility review", copy: "A ranked matrix of up to eight opportunities, with feasibility and delivery outlines for the top two candidates." },
      { title: "Roadmap and leadership readout", copy: "A 15-20 page report, capacity-release ranges, a prioritised six-month roadmap and a 90-minute readout." },
    ],
    finalHandover: [
      "Executive summary and decision recommendation",
      "Three current-state workflow maps",
      "Drawing, file and data-readiness assessment",
      "Opportunity matrix - up to eight opportunities",
      "Feasibility and delivery outline for the top two opportunities",
      "Capacity-release / ROI ranges with assumptions stated",
      "Prioritised six-month roadmap",
      "90-minute leadership readout",
    ],
    exclusions: [
      "No production software, integration, deployment, support or training",
      "No working proof of concept; this package provides feasibility and delivery guidance only",
      "No full historic drawing-library remediation, BIM standards overhaul or document migration",
      "No formal legal, cyber-security, data-protection or procurement assurance",
      "Any work beyond agreed volume limits is separately scoped",
    ],
    successLooksLike: [
      "Reliable evidence for where to invest first",
      "A roadmap that distinguishes quick wins from prerequisites",
      "A defensible brief for the next implementation or validation phase",
    ],
    faqs: [
      "Does this include a working proof of concept? No. It provides feasibility and delivery guidance only.",
      "How many opportunities are assessed? Up to eight opportunities.",
      "What is the roadmap horizon? The final handover includes a prioritised six-month roadmap.",
    ],
    paymentTerms:
      "50% booking payment to confirm mobilisation; 50% due before the final leadership readout. Remote delivery is included. On-site workshops or additional departments can be quoted separately.",
  },
  {
    slug: "validation-programme",
    name: "AI & Automation Validation Programme",
    shortName: "Validation Programme",
    price: "£6,950 + VAT",
    duration: "3-week validation programme",
    timeline: "Usually completed within 15-20 working days",
    scope: "Up to 4 workflows, 50 samples, 10 opportunities and 1 prototype use case",
    positioning:
      "A prototype-led programme for practices that want evidence before committing to a larger automation project.",
    decision:
      "Can this priority workflow be automated reliably enough to justify a production implementation?",
    bestFor:
      "Practices ready to investigate a meaningful automation initiative but needing evidence that a proposed use case will work with real drawings, files and operating constraints.",
    mainOutcome: "A limited non-production proof of concept, validation evidence and a recommended production-phase scope.",
    stakeholderEngagement: "Up to eight 45-minute interviews plus prototype selection, test review and final workshop.",
    fileReview: "Broad review of up to 50 representative, approved samples for assessment and testing.",
    prototype: "One limited non-production proof of concept",
    facts: [
      { label: "Investment", value: "£6,950 + VAT" },
      { label: "Delivery", value: "3-week validation programme" },
      { label: "Timeline", value: "Usually 15-20 working days" },
      { label: "Scope", value: "Up to 4 workflows, 50 samples, 10 opportunities and 1 prototype use case" },
    ],
    stages: [
      { stage: "01", title: "Mobilise around a test", copy: "We set a decision question, success measures, representative evidence set and data-handling approach." },
      { stage: "02", title: "Discover and assess", copy: "We map the most relevant workflows, audit the underlying evidence and rank the opportunity portfolio." },
      { stage: "03", title: "Select and validate", copy: "We choose one evidence-led use case and build a limited, non-production proof of concept against agreed criteria." },
      { stage: "04", title: "Decide and plan", copy: "We present validation findings, constraints, capacity-release scenarios and a 12-month roadmap with a recommended next phase." },
    ],
    clientInputs: [
      "Executive sponsor, process owner and client-side coordinator",
      "Up to eight relevant contributors and appropriate reviewers",
      "Up to 50 representative, approved samples for assessment and testing",
      "A secure method for sharing evidence and agreed data-handling expectations",
      "Timely participation in prototype selection, test review and final workshop",
    ],
    included: [
      { title: "Kick-off and validation design", copy: "A 90-minute kick-off, evidence and data-handling plan, initial prototype success criteria and defined decision gates." },
      { title: "Cross-team discovery", copy: "Up to eight 45-minute interviews to capture operational needs, exceptions, quality safeguards and implementation constraints." },
      { title: "Workflow and readiness assessment", copy: "Current-state maps for up to four workflows and an evidence-based audit of up to 50 representative files or samples." },
      { title: "Opportunity portfolio", copy: "A prioritised matrix of up to ten automation opportunities, with a documented decision to select one prototype candidate." },
      { title: "Proof-of-concept validation", copy: "One limited, non-production proof of concept using representative inputs, agreed test cases, recorded results and reviewer feedback." },
      { title: "Business case and roadmap", copy: "A 20-30 page report, capacity-release scenarios, target-state outline, 12-month roadmap and 90-minute leadership workshop." },
    ],
    finalHandover: [
      "Executive summary and investment recommendation",
      "Up to four current-state workflow maps",
      "Drawing, file and data-readiness assessment",
      "Opportunity matrix - up to ten opportunities",
      "Prototype brief, test plan and validation evidence",
      "Prototype demonstration with known constraints and review requirements",
      "Conservative, expected and optimistic capacity-release scenarios",
      "Target-state solution outline and 12-month roadmap",
      "Recommended production-phase scope and next steps",
    ],
    exclusions: [
      "The prototype is non-production: no deployment, integration, support, service-level commitment or user training",
      "One prototype use case only; additional use cases are separately scoped",
      "No guarantee of accuracy, savings or automation rate; findings are based on representative evidence",
      "No complete historic drawing or BIM remediation",
      "No formal legal, cyber-security, data-protection or procurement assurance",
    ],
    successLooksLike: [
      "A validated answer to a practical automation question",
      "Clear evidence of what works, what does not and where human review remains necessary",
      "A scoped, lower-risk route into production implementation",
    ],
    faqs: [
      "Is the prototype production software? No. It is a limited feasibility exercise.",
      "How many prototype use cases are included? One prototype use case.",
      "Does this guarantee accuracy or savings? No. Findings are based on representative evidence and review observations.",
    ],
    paymentTerms:
      "50% booking payment to confirm mobilisation; 30% due at prototype selection; 20% due before the final leadership workshop. Remote delivery is included. On-site sessions can be quoted separately.",
  },
];

export function getArchitectureAuditOffer(slug) {
  return architectureAuditOffers.find((offer) => offer.slug === slug);
}
