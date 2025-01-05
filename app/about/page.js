import ContactForm from "@/components/ContactForm";
import { Data } from "@/data/servicesData";
import headshot from "../../assets/images/william-purnell-headshot.png";
import Image from "next/image";

export const metadata = {
  title: "William Purnell - About ",
  description:
    "Will is a software developer with 5 years experience based in Bournemouth",
};

const image = {
  src: headshot,
  alt: "William Purnell headshot",
};

export default function About() {
  const skills = Data;

  return (
    <>
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-0 md:px-9">
          <div className="flex max-w-7xl mx-auto px-8 py-24 items-center flex-col md:flex-row">
            <div className="w-full pr-0 md:pr-8 md:w-1/2 items-center md:justify-normal pb-8 md:pb-0">
              <Image
                className="object-cover w-full"
                src={image.src}
                alt={image.alt}
              />
            </div>
            <div className="w-full pl-0 md:pl-8 md:w-1/2 items-center md:justify-normal text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
              <div className="text-lg">
                Hello! I'm Will, <br /> I'm a Software Developer from
                Bournemouth with over 5 years of experience working with local
                agencies and startups. <br />I have created and maintained a
                wide range of projects in .NET Framework / Core (C#) and Next.js
                (React) within a variety of industries from education to
                manufacturing and 3D printing.
                <br />
                Whether you're looking for your first website, or looking to
                improve your companies efficiency with custom software, I'm
                confident I can help you achieve your goals.
              </div>
            </div>
          </div>
          {/* Bournemouth Focus Section */}
          <div className="flex max-w-7xl mx-auto px-8 py-24 items-center bg-gray-200 flex-col mb-16 md:flex-row">
            <div className="w-full pr-0 md:pr-8 md:w-1/2 items-center md:justify-normal pb-8 md:pb-0">
              <h2 className="text-3xl font-bold text-center mb-8">
                Why Choose a Local Software Developer in Bournemouth?
              </h2>
            </div>
            <div className="w-full pl-0 md:pl-8 md:w-1/2 items-center md:justify-normal text-center md:text-left">
              <p className="text-center text-gray-700 max-w-2xl mx-auto">
                Being based in Bournemouth allows me to understand the unique
                challenges and opportunities local businesses face. Whether
                you&apos;re a startup, small business, or established
                enterprise, I provide personalized solutions that make a
                difference.
              </p>
              <p className="text-center text-gray-700 max-w-2xl mx-auto pt-2">
                From Poole to Christchurch, I’m dedicated to serving the Dorset
                community with reliable, high-quality software development
                services.
              </p>
            </div>
          </div>
          <div className="px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Expertise and Approach
            </h2>
            <p className="text-center text-gray-700 max-w-2xl mx-auto pt-2 mb-8">
              I bring a collaborative approach to every project, ensuring your
              vision is brought to life efficiently and effectively. With a
              strong focus on clean code, scalability, and performance, I’m
              committed to delivering results that exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {skills.splice(0, 3).map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="mb-4 flex justify-center">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
