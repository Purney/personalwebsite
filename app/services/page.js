import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import ShowcaseComponent from "@/components/ShowcaseComponent";
import { Data, HireReasonsData } from "@/data/servicesData";
import { getSEOTags, getServicesSchema } from "@/lib/seo";

export const metadata = getSEOTags({title: "William Purnell - Professional Software Development Services in Bournemouth", description: "Looking for expert software development services in Bournemouth? You’re in the right place. With years of experience in .NET, React, and AI technologies, I provide end-to-end solutions that help businesses thrive in today’s digital landscape."});

export default async function Services() {
  let services = await Data;
  const reasons = await HireReasonsData;

  return (
    <>
      {getServicesSchema()}
      <section className="bg-gray-100">
        <Hero
          title="Professional Software Development Services in Bournemouth"
          description="<h2>Looking for expert software development services in Bournemouth? </h2>
          You're in the right place! <br> "
        />
        <div className="max-w-7xl mx-auto">
          <ShowcaseComponent title="Our Services" services={services} />
        </div>
        <div className="bg-gray-200 px-8 py-24 flex justify-center">
          <div className="max-w-7xl">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="mb-4 flex justify-center">{reason.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
