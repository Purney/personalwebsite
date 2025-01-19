import {
  FaExclamationCircle,
  FaLightbulb,
  FaWrench,
  FaArrowRight,
  FaQuestion,
} from "react-icons/fa";

import placeholder from "../assets/images/placeholder.jpg";
import text2quizhero from "../assets/images/text2quiz/text2quizhero.jpg";
import quizscreen from "../assets/images/text2quiz/quizscreen.png";
import pdfIcon from "../assets/images/text2quiz/pdf-icon-transparent.png";
import filamentgiftshero from "../assets/images/filamentgifts/filamentgiftshero.png";


export const Data = [
  {
    id: "text-2-quiz",
    title: "Text 2 Quiz",
    shortDescription: "A platform that transforms lecture notes into interactive quizzes.",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    category: ["Web Development", "AI Integration"],
    image: text2quizhero,
    dateCreated: '18/01/2025',
    dateUpdated: null,
    sections: [
      {
        name: "what-is-text-2-quiz",
        type: "image-with-text",
        icon: <FaQuestion />,
        content: {
          image: { src: text2quizhero, alt: "Text 2 Quiz Hero Image" },
          title: "What is Text 2 Quiz?",
          text: "Text 2 Quiz is a Educational Tool that allows users to turn their lecture notes into online interactive quizzes",
        },
      },
      {
        name: "initial-mission",
        type: "mission",
        icon: <FaQuestion />,
        content: {
          title: "Initial Mission?",
          text: "The mission was to allow users to turn their lecture notes into online interactive quizzes",
          beforeImage: { src: pdfIcon, alt: "Pdf Icon" },
          afterImage: { src: quizscreen, alt: "Text 2 Quiz Game" },
        },
      },
      {
        name: "technical-overview",
        type: "technical-overview",
        icon: <FaQuestion />,
        content: {
          title: "Technical Overview",
          text: "This uses Nextjs, Reactjs and MongoDB",
          images: [
            { src: placeholder, alt: "First Image" },
            { src: placeholder, alt: "Second Image" },
            { src: placeholder, alt: "Last Image" },
          ]
        },
      },
      {
        name: "what-id-do-differently",
        type: "showcase",
        icon: <FaQuestion />,
        content: {
          title: "What I'd do differently",
          services: [
            {
              icon: <FaQuestion />,
              description: "MVP Speed",
            },
            {
              icon: <FaQuestion />,
              description: "Waiting List",
            },
            {
              icon: <FaQuestion />,
              description: "Speak to people",
            },
          ],
        },
      },
      {
        name: "was-it-a-failure",
        type: "image-with-text",
        icon: <FaQuestion />,
        content: {
          image: { src: placeholder, alt: "Was it a failure image" },
          title: "Was text 2 quiz a failure?",
          text: "Reasoning for why I learnt a lot",
          format: "text-left",
        },
      },
      {
        name: "contact",
        type: "contact",
        icon: <FaQuestion />,
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
    image: filamentgiftshero,
    dateCreated: '18/01/2025',
    dateUpdated: null,
    sections: [
      {
        name: "what-is-text-2-quiz",
        type: "image-with-text",
        icon: <FaQuestion />,
        content: {
          image: { src: placeholder, alt: "Filament Home Page Image" },
          title: "What is Filament Gifts?",
          text: "Filament Gifts is a manufacturing company that creates and distributes 3d printed goods",
        },
      },
      {
        name: "initial-mission",
        type: "mission",
        icon: <FaQuestion />,
        content: {
          title: "Initial Mission?",
          text: "The mission was to filament gifts to easily sell their products away from Etsy",
          beforeImage: { src: placeholder, alt: "Before Image" },
          afterImage: { src: placeholder, alt: "After Image" },
        },
      },
      {
        name: "technical-overview",
        type: "technical-overview",
        icon: <FaQuestion />,
        content: {
          title: "Technical Overview",
          text: "This uses Nextjs, Reactjs and MongoDB",
          images: [
            { src: placeholder, alt: "First Image" },
            { src: placeholder, alt: "Second Image" },
            { src: placeholder, alt: "Last Image" },
          ]
        },
      },
      {
        name: "testimonial",
        type: "image-with-text",
        icon: <FaQuestion />,
        content: {
          image: { src: placeholder, alt: "Bens Face logo" },
          title: "What did the client say?",
          text: "nice one mate",
          format: "text-left",
          buttonLink: "https://filamentgifts.com/",
          buttonText: "Check out Filament Gifts"
        },
      },
      {
        name: "contact",
        type: "contact",
        icon: <FaQuestion />,
      },
    ],
  },
];
