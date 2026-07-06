import Breadcrumbs from "@/components/Breadcrumbs";
import { getBreadcrumbSchema, getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Privacy Policy | William Purnell",
  description: "Privacy policy for william-purnell.com and contact form enquiries.",
  canonicalUrlRelative: "/privacy",
});

export default function Privacy() {
  return (
    <main className="min-h-screen bg-background-dark px-5 py-12 text-slate-100 sm:px-10">
      {getBreadcrumbSchema([
        { name: "Home", url: "https://www.william-purnell.com/" },
        { name: "Privacy Policy", url: "https://www.william-purnell.com/privacy" },
      ])}
      <article className="mx-auto max-w-4xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
        <Breadcrumbs
          className="mb-8"
          items={[
            { href: "/", label: "Home" },
            { href: "/privacy", label: "Privacy Policy" },
          ]}
        />
        <h1 className="text-3xl font-semibold text-white">Privacy Policy</h1>
        <p className="mb-6 mt-3 text-sm text-slate-300"><strong className="text-white">Last Updated:</strong> 20/01/2025</p>

        <div className="space-y-8 text-slate-300">
          <section>
            <p>
              At William Purnell, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you use this website.
            </p>
          </section>

          {[
            ["1. Information We Collect", "When you use the contact form, we collect your name, email address, the service you require, and your message. This information is forwarded to our email inbox and is not stored on the website or shared with third parties."],
            ["2. How We Use Your Information", "The information you provide through the contact form is used solely to respond to your enquiry and schedule follow-up or discovery meetings. We do not use your information for marketing purposes."],
            ["3. Analytics", "We use Vercel Analytics to collect anonymised data such as page views, device types, and general location. This information is aggregated and does not include personally identifiable information."],
            ["4. Third-Party Services", "We use Vercel for hosting and analytics, and Mailgun for sending emails via the contact form. These services may process your data solely for the purposes outlined here."],
            ["5. Data Security", "We implement appropriate measures to keep your data secure. No method of transmission over the internet or electronic storage is completely secure, so absolute security cannot be guaranteed."],
            ["6. Your Rights", "You can request access to the personal data we hold about you or ask us to delete your personal data by contacting us through the contact page."],
            ["7. Changes to This Privacy Policy", "We may update this policy from time to time. Changes will be posted on this page with an updated date."],
            ["8. Contact Us", "If you have questions or concerns about this Privacy Policy, please contact us via the contact page."],
          ].map(([title, copy], index) => (
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
