import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import ServicesGrid from "@/components/ServicesGrid";
import TestimonalComponent from "@/components/TestimonalComponent";
import placeholder from "../assets/images/placeholder.jpg";
import ImageWithTextComponent from "@/components/ImageWithTextComponent";
import ShowcaseComponent from "@/components/ShowcaseComponent";
import { FaCode, FaReact, FaRobot } from "react-icons/fa";

export const metadata = {
  title: "William Purnell - Software Developer from Bournemouth",
  description:
    "Will is a software developer with 5 years experience based in Bournemouth",
};

export default function Home() {
  const image = {
    src: placeholder,
    alt: "About us Image"
  };

  const placeholderText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.";

  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive, high-performance websites tailored to your needs.",
      icon: <FaCode size={80} className="text-blue-600" />,
    },
    {
      title: "React.js Development",
      description:
        "Specializing in creating modern, interactive front-end applications with React.js.",
      icon: <FaReact size={80} className="text-cyan-500" />,
    },
    {
      title: "Generative AI Integration",
      description:
        "Incorporating cutting-edge AI technologies to enhance your applications.",
      icon: <FaRobot size={80} className="text-purple-600" />,
    },
  ];

  return (
    <>
      <Hero
        title="Freelance Software Engineer in Bournemouth"
        description="Hi, I’m Will, a developer specializing in .NET, React, and Generative AI solutions.
              Let’s build something great together!"
        buttonLink="#contact"
        buttonText="Get in Touch"
      />
      <ImageWithTextComponent image={image} title="About Us" text={placeholderText} buttonLink="/about" buttonText="Get Started" />
      <ShowcaseComponent title="Services" text={placeholderText} buttonLink="/services" buttonText="Learn More" services={services} />
      <PortfolioGrid />
      {/* Bournemouth Focus Section */}
      <section className="py-24 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Hire a Bournemouth-Based Software Engineer?
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          Based in Bournemouth, I provide local expertise with a deep
          understanding of the needs of businesses in the area. Whether you're a
          startup or a web agency, I can help you build exceptional software
          solutions.
        </p>
      </section>
      <ContactForm />
      <TestimonalComponent />
    </>
  );
}
