import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import { FAQGrid } from "@/components/ArchitectureAuditComponents";
import { absoluteUrl, getBreadcrumbSchema, getFAQSchema, getSEOTags } from "@/lib/seo";

const path = "/services/technical-detail-search";
const bookingUrl = "https://calendly.com/hello-william-purnell/initial-call";

export const metadata = getSEOTags({
  title: "Find Past Technical Details Faster | William Purnell",
  description: "Struggling to find construction details across past projects? See how your architecture practice could make its existing drawing archive searchable without moving or renaming files. Book a call.",
  canonicalUrlRelative: path,
});

const problems = [
  {
    title: "Time disappears into folders",
    copy: "Past details are spread across projects and inconsistent filenames. Finding one can mean opening folder after folder when there is already work to get on with.",
  },
  {
    title: "Knowledge stays with individuals",
    copy: "People ask whoever remembers the job. New team members can depend on a senior colleague’s memory just to find a useful starting point.",
  },
  {
    title: "Useful work is recreated",
    copy: "A relevant precedent may be missed because the team cannot locate it confidently. Work that could inform the next drawing can end up being drawn again.",
  },
];
const fitQuestions = [
  "Do you have years of construction details spread across project folders?",
  "Does finding a relevant past drawing depend on remembering the project or asking a colleague?",
  "Do you have issue sheets or drawing registers that list the details you have issued?",
];
const faqs = [
  {
    question: "Do we need to rename or move our drawings?",
    answer: "No. The aim is to make your existing drawing archive easier to find and use, without moving or renaming drawings.",
  },
  {
    question: "What if our issue sheets are inconsistent?",
    answer: "Book a call. A small sample will show what is possible and what needs attention before a delivery date is agreed.",
  },
  {
    question: "Will the search tell us whether an old detail is suitable today?",
    answer: "No. Your technical team remains responsible for checking the drawing’s suitability and currency before reuse.",
  },
  {
    question: "What does the six-week timeframe depend on?",
    answer: "The agreed records, drawing locations, access and any required IT approval being available at the start of delivery.",
  },
];

function BookingButton({ children = "Book a call", className = "" }) {
  return <a href={bookingUrl} className={"btn-primary " + className}>{children}</a>;
}

export default function TechnicalDetailSearch() {
  return (
    <main className="bg-background-dark text-slate-100">
      {getBreadcrumbSchema([
        { name: "Home", url: absoluteUrl("/") },
        { name: "Services", url: absoluteUrl("/services") },
        { name: "Technical Detail Search", url: absoluteUrl(path) },
      ])}
      {getFAQSchema(faqs)}
      <section className="relative overflow-hidden border-b border-white/10 bg-hero-glow py-20 md:py-28">
        <div className="absolute inset-0 bg-radial-grid bg-[size:28px_28px] opacity-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          <Breadcrumbs className="mb-8" items={[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: path, label: "Technical Detail Search" },
          ]} />
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <p className="mb-5 inline-flex border border-accent-amber/30 bg-white/5 px-3 py-2 text-kicker">
                Technical Detail Search for Architecture Practices
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
                Find the detail your team already drew.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Years of construction details are useful only when your team can find the right one.
                Turn scattered past details into a searchable library within six weeks, using your
                existing issue sheets and without moving or renaming drawings.
              </p>
              <div className="mt-8">
                <BookingButton />
                <p className="mt-3 text-sm leading-6 text-slate-300">See how this could work for your practice.</p>
              </div>
            </div>
            <aside className="border border-accent-amber/25 bg-slate-950/80 p-6 shadow-panel md:p-8">
              <p className="text-kicker">Sound familiar?</p>
              <p className="mt-5 text-2xl font-semibold leading-snug text-white md:text-3xl">
                The detail may already exist. Finding it is another task entirely.
              </p>
              <p className="mt-5 text-base leading-7 text-slate-300">
                A project nobody quite remembers. A filename that gives little away.
                A colleague interrupted to help track it down.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <SectionWrapper eyebrow="The familiar situation" title="“I know we drew that before. Which project was it on?”">
        <div className="max-w-3xl space-y-5 text-lg leading-8 text-slate-300">
          <p>
            Imagine a technologist needs a hipped bay window or an eaves detail.
            Someone remembers drawing one, but cannot recall the project or filename.
            The shared drive returns too much to inspect.
          </p>
          <p>
            The team spends time hunting, interrupts a senior colleague or starts drawing again.
            The practice may already have a useful precedent, but nobody can confidently find it
            when it is needed.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="The effect on your team" title="Your archive should save your team work, not create another search task." className="bg-slate-950">
        <div className="grid gap-5 md:grid-cols-3">
          {problems.map((problem) => (
            <article key={problem.title} className="border border-white/10 bg-white/[0.04] p-6">
              <span className="mb-5 block h-1 w-10 bg-accent-amber" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-white">{problem.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{problem.copy}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="A more useful archive" title="Search what your team has already produced.">
        <div className="max-w-3xl text-lg leading-8 text-slate-300">
          <p>
            Staff describe the detail they need, review relevant past drawing references and locate
            the original in your existing project folders. The search uses the drawing issue sheets
            your practice already has, without moving or renaming files.
          </p>
          <p className="mt-6 border-l-2 border-accent-amber pl-5 text-base leading-7 text-slate-200">
            Your technical team must still check each drawing’s suitability and currency before reuse.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="The offer" title="A searchable technical-detail library within six weeks." className="bg-slate-950">
        <div className="max-w-3xl">
          <p className="text-lg leading-8 text-slate-300">
            I work with architecture teams to make their existing technical details easier to find.
            We start by checking what issue sheets and drawing locations you have, then agree the
            scope for a search your team can use. The six-week delivery window is confirmed once
            the necessary records and access are available.
          </p>
          <BookingButton className="mt-8">Book a call to discuss your detail library</BookingButton>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="A quick fit check" title="Is this a problem in your practice?">
        <ol className="grid gap-5 md:grid-cols-3">
          {fitQuestions.map((question, index) => (
            <li key={question} className="border border-white/10 bg-white/[0.04] p-6">
              <span className="text-kicker" aria-hidden="true">0{index + 1}</span>
              <p className="mt-4 text-lg font-semibold leading-7 text-white">{question}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-slate-300">
          <p>If yes, a call can establish whether your records are suitable for this offer.</p>
          <p>
            If records are sparse or you are unsure which workflow to tackle first, explore the{" "}
            <Link href="/services/architecture-ai-automation-audit" className="font-semibold text-accent-amber hover:underline">
              Architecture AI & Automation Audit
            </Link>.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Questions" title="A few things to know before booking." className="bg-slate-950" headerAlign="center">
        <FAQGrid faqs={faqs} />
      </SectionWrapper>

      <SectionWrapper eyebrow="Let us talk about your archive" title="Your team may already have the detail it needs. Let us make it easier to find." className="border-y border-white/10 bg-white/[0.03]">
        <div className="max-w-3xl">
          <p className="text-lg leading-8 text-slate-300">
            Book a call and tell me how your team searches past projects today. I will ask a few
            questions about your archive, explain what could work for your practice and outline
            the next step. No drawing upload is required to book.
          </p>
          <BookingButton className="mt-8" />
        </div>
      </SectionWrapper>
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <Link href="/services" className="text-sm font-semibold text-accent-amber hover:underline">Explore all services</Link>
      </div>
    </main>
  );
}
