import {
  FaCode,
  FaCog,
  FaComment,
  FaGlobe,
  FaPeopleCarry,
  FaReact,
  FaRobot,
  FaSearch,
  FaClock,
} from "react-icons/fa";

const iconClassName = "h-6 w-6";

const serviceSeoContent = {
  "ai-workflow-automation": {
    heroTitle: "AI Workflow Automation Developer for London Businesses",
    bodySections: [
      {
        heading: "Turn repeated admin into a reliable workflow",
        copy: "AI workflow automation is most useful when it starts with a real operational bottleneck: enquiries waiting in an inbox, customer details being copied between tools, reports being rebuilt every week, or team members chasing approvals manually. I help identify where automation will actually save time, then build the workflow around your existing tools, data, and team responsibilities.",
      },
      {
        heading: "Built around control, not black-box automation",
        copy: "The goal is not to remove people from important decisions. The goal is to remove low-value manual handling and give your team cleaner data, faster routing, and better visibility. AI can classify, summarise, draft, and route work, while human approval points keep the process safe for customer-facing or business-critical actions.",
      },
      {
        heading: "Common examples",
        copy: "Typical projects include lead intake automation, support ticket triage, spreadsheet-to-dashboard workflows, form-to-CRM updates, internal approval flows, email summarisation, and automated reporting. These systems can connect CRMs, inboxes, databases, forms, spreadsheets, dashboards, and internal tools.",
      },
    ],
    faqs: [
      {
        question: "What is AI workflow automation?",
        answer: "AI workflow automation uses software, integrations, and AI models to handle repeated steps such as classifying requests, summarising information, updating systems, routing tasks, and producing reports.",
      },
      {
        question: "Do I need to replace my existing tools?",
        answer: "Usually no. The best first automation often connects the tools you already use, such as forms, CRMs, inboxes, spreadsheets, and dashboards.",
      },
      {
        question: "How do you keep AI workflow automation reliable?",
        answer: "I use structured inputs and outputs, clear guardrails, fallbacks, logging, and human approval points for sensitive or high-impact decisions.",
      },
    ],
  },
  "ai-agent-integration": {
    heroTitle: "OpenAI and AI Agent Integration for Business Workflows",
    bodySections: [
      {
        heading: "Add AI agents where they have a job to do",
        copy: "AI agents are most valuable when they sit inside a defined business process. Instead of adding a generic chatbot, I design AI integrations that help with specific tasks such as document analysis, knowledge retrieval, email triage, customer response drafting, lead qualification, internal search, or structured data extraction.",
      },
      {
        heading: "Practical OpenAI integration",
        copy: "A strong AI integration needs more than an API call. It needs the right context, prompts, structured outputs, safety checks, retries, and monitoring. I build systems that use OpenAI and related AI tools in a controlled way, so outputs can be reviewed, stored, reused, and improved over time.",
      },
      {
        heading: "Use cases for SMEs and operations teams",
        copy: "Common use cases include summarising customer messages, extracting key details from documents, searching internal knowledge bases, drafting replies, enriching CRM records, and supporting staff with repeatable decision workflows. The focus is always on usefulness, governance, and maintainability.",
      },
    ],
    faqs: [
      {
        question: "Can you integrate OpenAI with my current software?",
        answer: "Yes. OpenAI can often be integrated with websites, CRMs, databases, internal tools, documents, and workflow systems through APIs and custom software.",
      },
      {
        question: "Is an AI agent the same as a chatbot?",
        answer: "Not necessarily. A chatbot is conversational, while an AI agent can perform defined workflow tasks such as retrieval, classification, extraction, routing, and drafting.",
      },
      {
        question: "Can sensitive business data be protected?",
        answer: "Yes. The implementation should define what data is sent to AI services, where outputs are stored, and when human review is required.",
      },
    ],
  },
  "custom-internal-tools": {
    heroTitle: "Custom Internal Tools for Operations Teams",
    bodySections: [
      {
        heading: "Replace fragile spreadsheets and manual dashboards",
        copy: "Custom internal tools are useful when your team has outgrown spreadsheets, shared inboxes, or rigid SaaS workflows. I build internal dashboards, portals, admin panels, and workflow tools that match how your business actually operates.",
      },
      {
        heading: "Designed for real users and repeated work",
        copy: "Internal tools need to be fast, clear, and easy to use every day. I focus on the screens, data models, permissions, and automations that help teams complete work with fewer mistakes and less context switching.",
      },
      {
        heading: "Modern engineering foundations",
        copy: "Projects can use Next.js, React, Tailwind, .NET, APIs, MongoDB, Azure, Vercel, Stripe, and OpenAI where appropriate. The aim is a maintainable system that can grow into deeper automation over time.",
      },
    ],
    faqs: [
      {
        question: "When should I build a custom internal tool?",
        answer: "A custom tool is worth considering when your current software creates repeated work, poor visibility, data duplication, or workflows that do not fit your business.",
      },
      {
        question: "Can internal tools include AI automation?",
        answer: "Yes. Internal tools are often the best place to add AI-assisted search, summaries, routing, reporting, and data extraction.",
      },
      {
        question: "Can you connect to our existing database or CRM?",
        answer: "Yes. Internal tools can usually be built around existing APIs, databases, CRMs, forms, payment systems, and reporting tools.",
      },
    ],
  },
  "crm-email-automation": {
    heroTitle: "CRM and Email Automation for Faster Customer Operations",
    bodySections: [
      {
        heading: "Stop losing time between enquiry and response",
        copy: "CRM and email automation helps teams respond faster, reduce missed follow-ups, and keep customer records accurate. I build workflows that capture leads, classify requests, update systems, trigger emails, assign tasks, and surface the next action.",
      },
      {
        heading: "AI-assisted triage and follow-up",
        copy: "AI can help summarise enquiries, detect intent, suggest replies, prioritise leads, and categorise requests before they reach the team. The workflow can still include review points, templates, and rules so customer communication stays controlled.",
      },
      {
        heading: "Connect forms, inboxes, CRMs, and dashboards",
        copy: "A typical automation might take a website form submission, analyse the request, create or update a CRM record, send a tailored acknowledgement, assign an owner, and update a reporting dashboard. The result is faster handling and fewer dropped balls.",
      },
    ],
    faqs: [
      {
        question: "Can CRM automation work with my existing CRM?",
        answer: "In most cases yes, provided the CRM has an API or integration pathway. The workflow can also use email, forms, databases, and internal tools.",
      },
      {
        question: "Can AI write customer emails automatically?",
        answer: "AI can draft or personalise responses, but I usually recommend approval points for important customer-facing messages until the workflow is proven.",
      },
      {
        question: "What results can CRM automation improve?",
        answer: "It can improve response times, lead routing, data quality, follow-up consistency, onboarding speed, and sales or support visibility.",
      },
    ],
  },
  "business-process-automation": {
    heroTitle: "Business Process Automation Developer for SMEs",
    bodySections: [
      {
        heading: "Make repeatable work easier to run and measure",
        copy: "Business process automation starts by understanding how work moves through your company. I help map the process, remove unnecessary steps, define triggers, and build software or integrations that make the process easier to run consistently.",
      },
      {
        heading: "From messy process to maintainable system",
        copy: "Many teams know where the pain is, but not how to turn it into a practical system. I translate the workflow into clear stages, data requirements, rules, approvals, notifications, and dashboards before building automation around it.",
      },
      {
        heading: "Designed for operational visibility",
        copy: "Good automation should make the business easier to manage. That means tracking status, exceptions, response times, volume, bottlenecks, and outcomes. The result is less manual chasing and more confidence in how work is progressing.",
      },
    ],
    faqs: [
      {
        question: "What business processes can be automated?",
        answer: "Common examples include onboarding, approvals, reporting, lead handling, document processing, customer updates, task assignment, and operational dashboards.",
      },
      {
        question: "How do you decide what to automate first?",
        answer: "I look for repeated workflows with clear triggers, measurable outcomes, high manual effort, and manageable risk.",
      },
      {
        question: "Does business process automation require AI?",
        answer: "No. Some workflows need straightforward rules and integrations. AI is useful when the process involves language, classification, summarisation, extraction, or decision support.",
      },
    ],
  },
  "automation-implementation": {
    heroTitle: "Automation Developer London for Practical AI Builds",
    bodySections: [
      {
        heading: "Find the right automation before building",
        copy: "Automation implementation starts with understanding the manual work costing your team time. I review your current workflows, tools, data, risks, and goals, then turn the strongest opportunity into a practical automation build.",
      },
      {
        heading: "Avoid expensive AI experiments",
        copy: "Not every process needs AI, and not every AI idea is worth building. A focused consultation helps separate quick wins from complex projects, identify dependencies, and define what a useful first version should actually do.",
      },
      {
        heading: "A build plan your team can act on",
        copy: "The outcome is a clear view of what to automate, what to leave alone, which tools to connect, where custom software is needed, and how to phase delivery so value appears early without disrupting operations.",
      },
    ],
    faqs: [
      {
        question: "What happens in an AI workflow automation consultation?",
        answer: "We discuss your current process, tools, manual effort, data flow, and goals, then identify automation opportunities and prioritise the highest-value starting point.",
      },
      {
        question: "Do you only recommend AI automation?",
        answer: "No. I recommend the simplest reliable approach. Sometimes that is AI, sometimes it is API integration, workflow software, better data structure, or an internal tool.",
      },
      {
        question: "Can the audit lead into implementation?",
        answer: "Yes. The audit can become the implementation plan for a prototype, workflow automation, internal tool, or AI integration build.",
      },
    ],
  },
};

const services = [
  {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation",
    seoTitle: "AI Workflow Automation Developer London | William Purnell",
    seoDescription:
      "AI workflow automation for London and UK businesses. Automate admin, connect tools, reduce manual handoffs, and build reliable AI-assisted operations.",
    keywords: [
      "AI workflow automation London",
      "AI automation developer London",
      "workflow automation UK",
      "business process automation",
    ],
    description:
      "Remove repetitive admin and connect the tools your team already uses.",
    icon: <FaCog className={iconClassName} aria-hidden="true" />,
    longDescription:
      "I map manual processes, identify the highest-value automation points, and build reliable flows across forms, CRMs, inboxes, spreadsheets, and internal systems.",
    outcome: "Fewer handoffs, faster delivery",
    audience: "Operations teams, agencies, SMEs, and founders with repetitive handoffs.",
    painPoints: [
      "Teams re-key the same information into multiple tools.",
      "New enquiries, tickets, or orders wait for manual triage.",
      "Reporting depends on spreadsheets that are always out of date.",
    ],
    workflow: [
      "Capture request",
      "Validate data",
      "AI classify",
      "Update CRM",
      "Notify team",
      "Track outcome",
    ],
    deliverables: [
      "Consultation and automation opportunity map",
      "API integrations between core tools",
      "AI-assisted routing, summaries, or decisions",
      "Monitoring, fallbacks, and human approval points",
    ],
  },
  {
    slug: "ai-agent-integration",
    title: "AI Agent Integration",
    seoTitle: "AI Agent Integration Developer London | OpenAI Automation",
    seoDescription:
      "OpenAI and AI agent integration for practical business workflows, knowledge retrieval, email triage, document handling, and internal tools.",
    keywords: [
      "AI agent integration London",
      "OpenAI integration developer",
      "custom AI integrations",
      "AI automation for small businesses",
    ],
    description:
      "Add practical AI where it improves decisions, routing, and content workflows.",
    icon: <FaRobot className={iconClassName} aria-hidden="true" />,
    longDescription:
      "From classification and summarisation to retrieval-augmented workflows, I integrate AI into real business processes with guardrails and review points.",
    outcome: "AI that supports operations",
    audience: "Teams that want AI in the workflow, not another disconnected chatbot.",
    painPoints: [
      "Staff use AI manually without repeatable prompts or governance.",
      "Knowledge is scattered across documents, inboxes, and systems.",
      "AI outputs need structure, approvals, and auditability.",
    ],
    workflow: [
      "Collect context",
      "Retrieve knowledge",
      "Run AI task",
      "Apply guardrails",
      "Human review",
      "Save result",
    ],
    deliverables: [
      "OpenAI or model provider integration",
      "Prompt and structured output design",
      "Knowledge retrieval or RAG workflow",
      "Review, logging, and operational safeguards",
    ],
  },
  {
    slug: "custom-internal-tools",
    title: "Custom Internal Tools",
    seoTitle: "Custom Internal Tools Developer London | Next.js and .NET",
    seoDescription:
      "Custom internal tools, dashboards, portals, and workflow software for London and UK businesses using Next.js, React, .NET, APIs, and databases.",
    keywords: [
      "custom internal tools London",
      "internal dashboard developer",
      "Next.js developer London",
      ".NET developer London",
    ],
    description:
      "Build fast, maintainable software tailored to your business goals.",
    icon: <FaReact className={iconClassName} aria-hidden="true" />,
    longDescription:
      "I create modern Next.js and .NET applications for customer portals, internal tools, dashboards, and commerce workflows that need more flexibility than off-the-shelf software.",
    outcome: "Software that fits the workflow",
    audience: "Businesses that have outgrown spreadsheets, templates, or rigid SaaS tools.",
    painPoints: [
      "Important operational data lives in disconnected systems.",
      "Teams bend their process around software that does not fit.",
      "Managers lack a reliable view of work, customers, or revenue.",
    ],
    workflow: [
      "Import data",
      "Centralise records",
      "Assign actions",
      "Automate updates",
      "Visualise status",
      "Improve process",
    ],
    deliverables: [
      "Next.js, React, or .NET internal applications",
      "Role-aware dashboards and workflow screens",
      "Database and API integrations",
      "Maintainable codebase ready for future automation",
    ],
  },
  {
    slug: "crm-email-automation",
    title: "CRM & Email Automation",
    seoTitle: "CRM and Email Automation Developer London | AI Workflows",
    seoDescription:
      "CRM and email automation for lead routing, follow-ups, customer onboarding, inbox triage, and sales operations across London and the UK.",
    keywords: [
      "CRM automation London",
      "email automation developer",
      "lead routing automation",
      "sales workflow automation",
    ],
    description:
      "Automate lead handling, follow-ups, onboarding, and inbox workflows.",
    icon: <FaCode className={iconClassName} aria-hidden="true" />,
    longDescription:
      "I connect websites, forms, CRMs, inboxes, and notification tools so new opportunities move through the business without manual copying or missed follow-ups.",
    outcome: "Faster response, fewer missed leads",
    audience: "Sales, customer service, and operations teams handling repeatable requests.",
    painPoints: [
      "Leads arrive in forms or inboxes and wait for manual action.",
      "Follow-ups depend on memory instead of reliable triggers.",
      "Customer onboarding feels slow or inconsistent.",
    ],
    workflow: [
      "New enquiry",
      "AI triage",
      "CRM create",
      "Email response",
      "Task assign",
      "Dashboard update",
    ],
    deliverables: [
      "Lead capture and CRM integration",
      "Automated email and notification workflows",
      "AI-assisted categorisation or prioritisation",
      "Reporting on response times and pipeline movement",
    ],
  },
  {
    slug: "business-process-automation",
    title: "Business Process Automation",
    seoTitle: "Business Process Automation Developer London | SME Automation",
    seoDescription:
      "Business process automation for SMEs and growing teams. Streamline operations, reporting, approvals, onboarding, and internal workflows.",
    keywords: [
      "business process automation London",
      "SME automation developer",
      "operations automation UK",
      "workflow automation developer London",
    ],
    description:
      "Turn repeated business processes into measurable, maintainable systems.",
    icon: <FaSearch className={iconClassName} aria-hidden="true" />,
    longDescription:
      "I break down messy processes into clear workflow stages, then automate the right parts with custom software, integrations, dashboards, and AI where it is genuinely useful.",
    outcome: "Clearer operations, less manual work",
    audience: "SMEs and growing teams that need structure before they scale.",
    painPoints: [
      "Processes rely on individual knowledge instead of shared systems.",
      "Approvals and status updates are hard to track.",
      "Manual reporting slows decisions and hides bottlenecks.",
    ],
    workflow: [
      "Map process",
      "Remove waste",
      "Define triggers",
      "Automate steps",
      "Measure KPIs",
      "Optimise",
    ],
    deliverables: [
      "Process audit and automation build plan",
      "Workflow software or integration build",
      "Dashboards and operational reporting",
      "Documentation and handover for your team",
    ],
  },
  {
    slug: "automation-implementation",
    title: "Automation Implementation",
    seoTitle: "Automation Implementation Developer London | AI Automation Builds",
    seoDescription:
      "Automation implementation for London and UK businesses that want a focused consultation before building AI automation, internal tools, or integrations.",
    keywords: [
      "automation developer London",
      "AI automation implementation",
      "workflow automation developer",
      "AI strategy for small business",
    ],
    description:
      "Start with a consultation, then turn the strongest opportunity into a working automation system.",
    icon: <FaComment className={iconClassName} aria-hidden="true" />,
    longDescription:
      "I help you choose the right stack, scope the useful first version, and pressure-test automation ideas before they become expensive projects.",
    outcome: "Sharper decisions upfront",
    audience: "Owners and leaders who know automation matters but need a clear starting point.",
    painPoints: [
      "There are too many AI tools and no clear implementation plan.",
      "Automation ideas feel promising but hard to prioritise.",
      "Teams need confidence before changing business-critical workflows.",
    ],
    workflow: [
      "Discovery call",
      "Tool review",
      "Opportunity score",
      "Roadmap",
      "Prototype plan",
      "Next build",
    ],
    deliverables: [
      "Automation opportunity consultation",
      "Prioritised build plan with risk and value",
      "Recommended stack and integration approach",
      "Prototype scope for the first practical automation",
    ],
  },
];

const serviceRelationships = {
  "ai-workflow-automation": { relatedServiceSlugs: ["business-process-automation", "crm-email-automation", "automation-implementation"], relatedProjectIds: ["text-2-quiz", "filament-gifts"] },
  "ai-agent-integration": { relatedServiceSlugs: ["ai-workflow-automation", "custom-internal-tools", "automation-implementation"], relatedProjectIds: ["text-2-quiz"] },
  "custom-internal-tools": { relatedServiceSlugs: ["business-process-automation", "ai-agent-integration", "crm-email-automation"], relatedProjectIds: ["filament-gifts", "sonia-kenny-art"] },
  "crm-email-automation": { relatedServiceSlugs: ["ai-workflow-automation", "business-process-automation", "custom-internal-tools"], relatedProjectIds: ["filament-gifts"] },
  "business-process-automation": { relatedServiceSlugs: ["ai-workflow-automation", "custom-internal-tools", "automation-implementation"], relatedProjectIds: ["filament-gifts", "sonia-kenny-art"] },
  "automation-implementation": { relatedServiceSlugs: ["ai-workflow-automation", "ai-agent-integration", "business-process-automation"], relatedProjectIds: ["text-2-quiz"] },
};

export const Data = services.map((service) => ({
  ...service,
  ...serviceSeoContent[service.slug],
  ...serviceRelationships[service.slug],
  dateUpdated: "2026-07-06T00:00:00.000Z",
}));

export const HireReasonsData = [
  {
    title: "London-based, UK-wide",
    description:
      "Supporting London companies and remote UK teams with practical automation builds.",
    icon: <FaGlobe className="h-12 w-12 text-accent-cyan" aria-hidden="true" />,
  },
  {
    title: "Reliable Results",
    description: "Committed to clear communication, staged delivery, and maintainable systems.",
    icon: <FaClock className="h-12 w-12 text-accent-cyan" aria-hidden="true" />,
  },
  {
    title: "Proven Experience",
    description: "Backed by real software engineering experience across .NET, React, Next.js, APIs, and AI.",
    icon: <FaPeopleCarry className="h-12 w-12 text-accent-cyan" aria-hidden="true" />,
  },
];

export function getServiceBySlug(slug) {
  return Data.find((service) => service.slug === slug);
}
