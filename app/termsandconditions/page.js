import Breadcrumbs from "@/components/Breadcrumbs";
import { getBreadcrumbSchema, getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Terms and Conditions | William Purnell",
  description: "Terms and conditions for using william-purnell.com.",
  canonicalUrlRelative: "/termsandconditions",
});

export default function TermsAndConditions() {
  const sections = [
    ["1. Use of the Website", "You agree to use this website solely for lawful purposes and in a way that does not infringe upon the rights of, restrict, or inhibit anyone else's use of the website."],
    ["2. Contact Form Submissions", "When using the contact form, you provide your name, email address, service needed, and message. This information is forwarded to our email inbox and used solely to respond to your enquiry."],
    ["3. Analytics", "We use Vercel Analytics to track anonymised data about website performance and visitor behaviour. This data is aggregated and does not include personally identifiable information."],
    ["4. Intellectual Property", "Unless otherwise stated, all content on this website, including text, images, and portfolio items, is owned by William Purnell and may not be reproduced without permission."],
    ["5. Third-Party Services and Links", "This website uses third-party services such as Vercel and Mailgun, and may include links to external websites. Accessing third-party websites is at your own risk."],
    ["6. Limitation of Liability", "We make every effort to ensure the accuracy of information on this website, but we do not guarantee that it will be error-free or uninterrupted."],
    ["7. Changes to the Terms and Conditions", "We may update or modify these terms at any time. Continued use of the website after changes have been made constitutes acceptance of the updated terms."],
    ["8. Governing Law", "These Terms and Conditions are governed by the laws of England and Wales."],
    ["9. Contact Information", "If you have questions or concerns about these Terms and Conditions, please contact us via the contact page."],
  ];

  return (
    <main className="min-h-screen bg-background-dark px-5 py-12 text-slate-100 sm:px-10">
      {getBreadcrumbSchema([
        { name: "Home", url: "https://www.william-purnell.com/" },
        { name: "Terms and Conditions", url: "https://www.william-purnell.com/termsandconditions" },
      ])}
      <article className="mx-auto max-w-4xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
        <Breadcrumbs
          className="mb-8"
          items={[
            { href: "/", label: "Home" },
            { href: "/termsandconditions", label: "Terms and Conditions" },
          ]}
        />
        <h1 className="text-3xl font-semibold text-white">Terms and Conditions</h1>
        <p className="mb-6 mt-3 text-sm text-slate-300"><strong className="text-white">Last Updated:</strong> 20/01/2025</p>
        <p className="mb-8 max-w-3xl text-slate-300">
          Welcome to the website of William Purnell. By accessing or using this website, you agree to be bound by these Terms and Conditions.
        </p>

        <div className="space-y-8 text-slate-300">
          {sections.map(([title, copy], index) => (
            <section key={title} className={index % 2 === 0 ? "max-w-3xl" : "ml-auto max-w-3xl lg:text-right"}>
              <h2 className="mb-3 text-2xl font-semibold text-white">{title}</h2>
              <p>{copy}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
