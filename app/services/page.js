import { FaCode, FaReact, FaRobot, FaWrench, FaDesktop } from "react-icons/fa";
import PrimaryButton from "@/components/PrimaryButton";

export const metadata = {
  title: "William Purnell - Services",
  description: "All the services available for Hire",
};

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Creating responsive, scalable, and performant websites tailored to your needs.",
      icon: <FaCode size={40} className="text-blue-600" />,
    },
    {
      title: ".NET Development",
      description:
        "Specializing in robust and scalable solutions with over 5 years of .NET experience.",
      icon: <FaWrench size={40} className="text-green-600" />,
    },
    {
      title: "React.js Development",
      description:
        "Building modern, interactive user interfaces using React.js.",
      icon: <FaReact size={40} className="text-cyan-500" />,
    },
    {
      title: "Generative AI Integration",
      description:
        "Incorporating AI-driven solutions to enhance application functionality.",
      icon: <FaRobot size={40} className="text-purple-600" />,
    },
    {
      title: "Consulting",
      description:
        "Providing expert advice on web architecture, scaling strategies, and tech stacks.",
      icon: <FaDesktop size={40} className="text-yellow-500" />,
    },
  ];

  return (
    <>
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Services
          </h1>
          <p className="text-gray-600 text-center mb-12">
            Explore the wide range of services I offer, from web development to
            cutting-edge AI integration.
          </p>
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
          <div className="mt-12 text-center">
            <PrimaryButton buttonLink="/contact" buttonText="Get in Touch" />
          </div>
        </div>
      </section>
    </>
  );
}
