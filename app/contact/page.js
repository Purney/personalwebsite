import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getSEOTags, getContactSchema, getLocalBusinessSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Book an AI Automation Consultation | William Purnell",
  description:
    "Book an AI automation consultation and discuss where custom AI workflows, internal tools, and OpenAI integrations could reduce manual work.",
  canonicalUrlRelative: "/contact",
});

export default function Contact() {
  return (<>
  {getContactSchema()}
  {getLocalBusinessSchema()}
  {getBreadcrumbSchema([
    { name: "Home", url: "https://www.william-purnell.com/" },
    { name: "Contact", url: "https://www.william-purnell.com/contact" },
  ])}
  <main className="bg-background-dark text-slate-100">
    <div className="mx-auto max-w-7xl px-6 pt-10 md:px-8">
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact" },
        ]}
      />
    </div>
    <ContactForm
      headingLevel="h1"
      title="Book an AI automation consultation."
      subHeading="Tell me which process is slow, repetitive, or hard to scale. We can discuss where automation could save time, connect tools, and reduce manual work."
    />
  </main>
  </>);
}
