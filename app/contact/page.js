import ContactForm from "@/components/ContactForm";
import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({title: "William Purnell - Contact Us", description:"Need a freelance software developer with experience? Contact Us"});

export default function Contact() {
  return <ContactForm />;
}
