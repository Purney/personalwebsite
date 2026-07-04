import ContactForm from "@/components/ContactForm";
import { getSEOTags, getContactSchema, getLocalBusinessSchema } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Book an AI Automation Consultation | William Purnell",
  description:
    "Book an AI automation consultation and discuss where custom AI workflows, internal tools, and OpenAI integrations could reduce manual work.",
});

export default function Contact() {
  return (<>
  {getContactSchema()}
  {getLocalBusinessSchema()}
  <main className="bg-background-dark text-slate-100">
    <ContactForm
      headingLevel="h1"
      title="Book an AI automation consultation."
      subHeading="Tell me which process is slow, repetitive, or hard to scale. We can discuss where automation could save time, connect tools, and reduce manual work."
    />
  </main>
  </>);
}
