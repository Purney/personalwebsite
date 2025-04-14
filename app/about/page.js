import ContactForm from "@/components/ContactForm";
import { Data } from "@/data/servicesData";
import headshot from "../../assets/images/william-purnell-headshot.png";
import Image from "next/image";
import { getSEOTags, getPersonSchema, getLocalBusinessSchema } from "@/lib/seo";

export const metadata = getSEOTags({title: "Who is William Purnell?", description: "Will is a software developer with 5 years experience based in Bournemouth"});

const image = {
  src: headshot,
  alt: "William Purnell headshot",
};

export default async function About() {
  let skills = (await Data).splice(0, 3);

  return (
    <>
      {getPersonSchema()}
      {getLocalBusinessSchema()}
      <section className="bg-light-background">
        <div className="max-w-7xl mx-auto px-0 md:px-9">
          <div className="flex max-w-7xl mx-auto px-8 py-32 items-center flex-col md:flex-row">
            <div className="w-full pr-0 md:pr-8 md:w-1/2 items-center md:justify-normal pb-8 md:pb-0">
              <Image
                className="object-cover w-full"
                src={image.src}
                alt={image.alt}
              />
            </div>
            <div className="w-full pl-0 md:pl-8 md:w-1/2 items-center md:justify-normal text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[4rem] md:leading-[5rem]">Who is <br/><span className="bg-dark-section text-cta-text p-2">William Purnell</span> ?</h1>
              <div className="text-lg">
                Hello! I&apos;m Will, <br /> I&apos;m a Software Developer from
                Bournemouth with over 5 years of experience working with local
                agencies and startups. <br />I have created and maintained a
                wide range of projects in .NET Framework / Core (C#) and Next.js
                (React) within a variety of industries from education to
                manufacturing and 3D printing.
                <br />
                Whether you&apos;re looking for your first website, or looking to
                improve your company&apos;s efficiency with custom software, I&apos;m
                confident I can help you achieve your goals.
              </div>
            </div>
          </div>
          {/* Bournemouth Focus Section */}
          <div className="flex max-w-7xl mx-auto px-8 py-32 items-center bg-dark-section text-cta-text flex-col md:flex-row">
            <div className="w-full pr-0 md:pr-8 md:w-1/2 items-center md:justify-normal pb-8 md:pb-0">
              <h2 className="text-3xl font-bold text-center mb-8">
                Why Choose William Purnell as your Local Bournemouth Software Developer ?
              </h2>
            </div>
            <div className="w-full pl-0 md:pl-8 md:w-1/2 items-center md:justify-normal text-center md:text-left">
              <p className="text-center  max-w-2xl mx-auto">
                Being based in Bournemouth allows me to understand the unique
                challenges and opportunities local businesses face. Whether
                you&apos;re a startup, small business, or established
                enterprise, I provide personalized solutions that make a
                difference.
              </p>
              <p className="text-center  max-w-2xl mx-auto pt-2">
                From Poole to Christchurch, I&apos;m dedicated to serving the Dorset
                community with reliable, high-quality software development
                services.
              </p>
            </div>
          </div>
          <div className="pt-32 px-8">
            <h3 className="text-3xl font-bold text-center  mb-8">
              Expertise and Approach
            </h3>
            <p className="text-center  max-w-2xl mx-auto pt-2 mb-8">
              I bring a collaborative approach to every project, ensuring your
              vision is brought to life efficiently and effectively. With a
              strong focus on clean code, scalability, and performance, I&apos;m
              committed to delivering results that exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pb-32">
            {skills.map((skill, index) => (
              <div
                key={index}
                className=" rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="mb-4 flex justify-center">{skill.icon}</div>
                <h3 className="text-xl font-semibold  mb-2">
                  {skill.title}
                </h3>
                <p className="">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
