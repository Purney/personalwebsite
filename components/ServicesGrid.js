import { FaCode, FaReact, FaRobot, FaBriefcase } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";
import FadeInAndOutWrapper from "./AnimationWrappers/FadeInAndOutWrapper";

export default function ServicesGrid() {
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive, high-performance websites tailored to your needs. Improve existing website performance. Help with software bugs",
      icon: <FaCode size={40} className="text-blue-600" />,
    },
    {
      title: "React.js Development",
      description:
        "Specializing in creating modern, interactive front-end applications with React.js.",
      icon: <FaReact size={40} className="text-cyan-500" />,
    },
    {
      title: "Generative AI Integration",
      description:
        "Incorporating cutting-edge AI technologies to enhance your applications.",
      icon: <FaRobot size={40} className="text-purple-600" />,
    },
    {
      title: "Consulting",
      description:
        "Providing expert advice on web architecture, tech stacks, and scaling your solutions.",
      icon: <FaBriefcase size={40} className="text-yellow-500" />,
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-light-background">
      <FadeInAndOutWrapper className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center  mb-8">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className=" rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold  mb-2">
                {service.title}
              </h3>
              <p className="">{service.description}</p>
            </div>
          ))}
        </div>
      </FadeInAndOutWrapper>
      <div className="mt-12 text-center">
        <PrimaryButton buttonLink="/services" buttonText="View All Services" />
      </div>
    </section>
  );
}
