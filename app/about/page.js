import { FaCode, FaRobot, FaDesktop } from "react-icons/fa";

export const metadata = {
  title: "William Purnell - About ",
  description: "Will is a software developer with 5 years experience based in Bournemouth",
};

export default function About() {
  const skills = [
    {
      title: "Web Development",
      description:
        "I build responsive, scalable, and high-performance websites.",
      icon: <FaCode size={40} className="text-blue-600" />,
    },
    {
      title: "AI Integration",
      description:
        "Integrating AI technologies to enhance application capabilities.",
      icon: <FaRobot size={40} className="text-purple-600" />,
    },
    {
      title: "Consulting",
      description:
        "Providing tailored advice on web architecture and scaling solutions.",
      icon: <FaDesktop size={40} className="text-yellow-500" />,
    },
  ];

  return (
    <>
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            About Me
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            I am a freelance software engineer based in Bournemouth with over 5
            years of experience specializing in Full Stack Development. I am
            passionate about creating scalable solutions and constantly
            expanding my knowledge through side projects and emerging
            technologies.
          </p>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            My Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
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
      </section>
    </>
  );
}
