import {
  FaExclamationCircle,
  FaLightbulb,
  FaWrench,
  FaArrowRight,
  FaQuestion,
} from "react-icons/fa";

import placeholder from "../assets/images/placeholder.jpg";

export const Data = [
  {
    id: "text-2-quiz",
    title: "Text 2 Quiz",
    shortDescription:
      "A platform that transforms lecture notes into interactive quizzes.",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    category: ["Web Development", "AI Integration"],
    image: placeholder,
    sections: [
      {
        name: "what-is-text-2-quiz",
        type: "text",
        icon: <FaQuestion />,
        content: {
          text: "Text 2 Quiz is a Educational Tool that allows users to turn their lecture notes into online interactive quizzes",
        },
      },
      {
        name: "problem",
        type: "text",
        icon: <FaExclamationCircle />,
        content: {
          text: "The aim of Text 2 Quiz was to make studying more fun through interactive quizzes. Without spending hours creating quizzes for each lecture they would simply be able to upload a pdf and get the quiz generated in seconds.",
        },
      },
      {
        name: "solution",
        type: "text",
        icon: <FaLightbulb />,
        content: {
          text: "The solution passes information 'the lecture' to the open ai api 'GenAI'. ",
        },
      },
      {
        name: "hardships",
        type: "text",
        icon: <FaWrench />,
        content: {
          text: "Share the challenges you faced during the project, both technical and non-technical, and how you overcame them.",
        },
      },
      {
        name: "what-now",
        type: "text",
        icon: <FaArrowRight />,
        content: {
          text: "Discuss the current status of the project, future plans, and lessons learned. Mention any potential next steps or new directions.",
        },
      },
    ],
  },
  {
    id: "filament-gifts",
    title: "Filament Gifts",
    shortDescription:
      "A fully functional e-commerce platform for 3d Printed goods.",
    techStack: [".NET", "React", "Stripe API"],
    category: ["Web Development", "AI Integration"],
    image: placeholder,
    sections: [
      {
        name: "what-is-filament-gifts",
        type: "text",
        icon: <FaQuestion />,
        content: {
          text: "Filament Gifts is a a fully functional e-commerce platform for 3d Printed goods.",
        },
      },
    ],
  },
  {
    id: "filament-gifts",
    title: "Filament Gifts",
    shortDescription:
      "A fully functional e-commerce platform for 3d Printed goods.",
    techStack: [".NET", "React", "Stripe API"],
    category: ["Web Development", "AI Integration"],
    image: placeholder,
    sections: [
      {
        name: "what-is-filament-gifts",
        type: "text",
        icon: <FaQuestion />,
        content: {
          text: "Filament Gifts is a a fully functional e-commerce platform for 3d Printed goods.",
        },
      },
    ],
  },
];
