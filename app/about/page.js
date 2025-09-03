import ContactForm from "@/components/ContactForm";
import { Data } from "@/data/servicesData";
import headshot from "../../assets/images/william-purnell-headshot.png";
import Image from "next/image";
import { getSEOTags, getPersonSchema, getLocalBusinessSchema } from "@/lib/seo";
import Link from "next/link";

export const metadata = getSEOTags({
  title: "Who is William Purnell?",
  description:
    "Will is a software developer with 5 years experience based in Bournemouth",
});

const image = {
  src: headshot,
  alt: "William Purnell headshot",
};



export default async function About() {
  return (
    <>
      {getPersonSchema()}
      {getLocalBusinessSchema()}
      <section className="bg-light-background">
        <div className="max-w-7xl mx-auto px-0 md:px-9">
          <div className="flex max-w-7xl mx-auto px-8 pt-16 items-center flex-col md:flex-row">
            <div className="w-full pr-0 md:pr-8 md:w-1/2 items-center md:justify-normal pb-8 md:pb-0">
              <Image
                className="object-cover w-full"
                src={image.src}
                alt={image.alt}
              />
            </div>
            <div className="w-full pl-0 md:pl-8 md:w-1/2 items-center md:justify-normal text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[4rem] md:leading-[5rem]">
                Who is <br />
                <span className="bg-dark-section text-cta-text p-2">
                  William Purnell
                </span>
                ?
              </h1>
              <div className="text-lg">
                Hi, I&apos;m Will, I&apos;m a Software Engineer from Bournemouth with
                5 years of experience building digital products for businesses
                of all shapes and sizes. My career started in the agency world,
                where I spent three years at a .NET development agency working
                on a wide range of client projects, from robust backends to
                fully integrated web platforms.
                <br />
                After sharpening my skills in agency life, I moved into the
                startup world as a Software Developer at Instanda, an InsurTech
                company focused on modernizing the insurance industry. This gave
                me hands-on experience working with real-world scale, tight
                deadlines, and product-driven thinking, all while expanding my
                toolkit beyond code.
              </div>
            </div>
          </div>
          <div className="blog-post-content mx-8 pb-16">
            <p className="text-center md:text-left mx-auto my-8 text-lg">
              These days alongside working at Instanda, I also work as a
              freelance Software Engineer and Full Stack Developer, using modern
              frameworks like .NET, React, Next.js, Tailwind, MongoDB, Azure,
              Vercel, and Stripe to help businesses launch, improve, or automate
              their online platforms. I&apos;ve also explored AI integration
              first-hand particularly using OpenAI to experiment with product
              ideas like <Link href="/projects/text-2-quiz" className="hover:underline text-bold text-cta-hover">Text2Quiz</Link>, a tool for generating study quizzes from
              lecture notes.
            </p>
          </div>
          {/* Bournemouth Focus Section */}
          <div className="flex max-w-7xl mx-auto px-8 py-16 items-center bg-dark-section text-cta-text flex-col md:flex-row">
            <div className="w-full pr-0 md:pr-8 md:w-1/2 items-center md:justify-normal pb-8 md:pb-0">
              <h2 className="text-3xl font-bold text-center mb-8">
                Why Choose William Purnell as your Local Bournemouth Software
                Developer ?
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
              <p className="text-center max-w-2xl mx-auto pt-2">
                From Poole to Christchurch, I&apos;m dedicated to serving the
                Dorset community with reliable, high-quality software
                development services.
              </p>
            </div>
          </div>
          <div className="pt-16 px-8">
            <h3 className="text-3xl font-bold text-center mb-8">
              Expertise and Approach
            </h3>
            <p className="text-center max-w-2xl mx-auto pt-2 mb-8">
              My approach is simple: I focus on clear communication, reliable
              delivery, and building solutions that are easy to maintain and
              scale. Whether it&apos;s a clean and effective brochure website
              for a local business or a full-stack application for a growing
              startup, I like working closely with clients to turn ideas into
              finished products that make a real impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pb-16">
            {Data.splice(0, 3).map((skill, index) => (
              <div
                key={index}
                className=" rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-cta-hover border-2"
              >
                <div className="mb-4 flex justify-center">{skill.icon}</div>
                <h3 className="text-xl font-semibold  mb-2">{skill.title}</h3>
                <p className="">{skill.description}</p>
              </div>
            ))}
          </div>
          <div className="blog-post-content mx-8">
            <p className="text-left mx-auto my-8">
              Right now, I&apos;m especially interested in working with tradespeople
              and small businesses, helping them create their first
              professional websites and take control of their online presence.
              I&apos;ve worked solo on everything from front-end design to back-end
              logic, and I&apos;m always keen to form long-term partnerships rather
              than one-off jobs. If you&apos;re looking for a developer who values
              creativity as much as technical reliability, someone who
              understands both the code and the commercial side of projects.
              I&apos;d be happy to chat.
            </p>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
