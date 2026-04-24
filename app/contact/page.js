import ContactForm from "@/components/ContactForm";
import { getSEOTags, getContactSchema, getLocalBusinessSchema } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Free AI Workflow Automation Audit | William Purnell",
  description:
    "Request a free AI workflow automation audit and discover where custom AI workflows, internal tools, and OpenAI integrations could reduce manual work.",
});

export default function Contact() {
  return (<>
  {getContactSchema()}
  {getLocalBusinessSchema()}
  <main className="bg-background-dark text-slate-100">
    <ContactForm
      headingLevel="h1"
      title="Get a free AI workflow automation audit."
      subHeading="Tell me which process is slow, repetitive, or hard to scale. I will review it and show where AI automation could save time, connect tools, and reduce manual work."
    />
  </main>
  </>);
}
