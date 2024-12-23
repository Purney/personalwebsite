import PrimaryButton from "@/components/PrimaryButton";
import { Data, HireReasonsData } from "@/data/servicesData";

export const metadata = {
  title: "William Purnell - Professional Software Development Services in Bournemouth",
  description: "Looking for expert software development services in Bournemouth? You’re in the right place. With years of experience in .NET, React, and AI technologies, I provide end-to-end solutions that help businesses thrive in today’s digital landscape.",
};

export default function Services() {
  const services = Data;
  const reasons = HireReasonsData;

  return (
    <>
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Professional Software Develoment Services in Bournemouth
          </h1>
          <p className="text-gray-600 text-center mb-12">
          Looking for expert software development services in Bournemouth? 
          You&apos;re in the right place. With years of experience in .NET, React, 
          and AI technologies, I provide end-to-end solutions that help businesses 
          thrive in today&apos;s digital landscape.
          </p>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
           Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 mt-12">
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

          <div className="mt-12 text-center">
            <PrimaryButton buttonLink="/contact" buttonText="Get in Touch" />
          </div>
        </div>
      </section>
    </>
  );
}
