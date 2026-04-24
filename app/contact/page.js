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
  <ContactForm />
  </>);
}
