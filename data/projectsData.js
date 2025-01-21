import {
  FaClock,
  FaList,
  FaPeopleArrows,
  FaQuestion,
  FaSpeakap,
  FaTimes,
} from "react-icons/fa";

import placeholder from "../assets/images/placeholder.jpg";
import text2quizhero from "../assets/images/text2quiz/text2quizhero.jpg";
import quizscreen from "../assets/images/text2quiz/quizscreen.png";
import pdfIcon from "../assets/images/text2quiz/pdf-icon-transparent.png";
import filamentgiftshero from "../assets/images/filamentgifts/filamentgiftshero.png";
import mongodb from "../assets/images/logos/mongodb.png";
import openai from "../assets/images/logos/openai.webp";
import nextjs from "../assets/images/logos/nextjs.webp";
import successFailure from "../assets/images/logos/success-failure.jpg";

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
          text: "Text 2 Quiz is a Educational Tool that uses GenAI to allows users to turn their lecture notes into online interactive quizzes.",
        },
      },
      {
        name: "initial-mission",
        type: "mission",
        icon: <FaQuestion />,
        content: {
          title: "Initial Mission?",
          text: "The mission was to enable users to spend less time creating their own testing material. Allowing them to study in a more enjoyable way through interactive quizzes.",
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
          text: "This project used Nextjs, MongoDB and OpenAI",
          images: [
            { src: nextjs, alt: "Next js Logo" },
            { src: mongodb, alt: "Mongo db Logo" },
            { src: openai, alt: "Open AI Logo" },
          ]
        },
      },
      {
        name: "was-it-a-failure",
        type: "image-with-text",
        icon: <FaQuestion />,
        content: {
          image: { src: successFailure, alt: "Was it a failure image" },
          title: "What happened?",
          text: "I decided to shutdown Text2Quiz.</br></br> The reason being that there was a ton of free alternatives being made by everyone from first year computer science students to senior software engineers.</br></br>I simply couldn't compete as I was building this project outside my 9-5 and wasn't willing to add a freemium version (which may have been my downfall). ",
          format: "text-left",
        },
      },
      {
        name: "what-id-do-differently",
        type: "showcase",
        icon: <FaQuestion />,
        content: {
          title: "What would I do differently?",
          services: [
            {
              icon: <FaClock />,
              title: "MVP Speed",
              description: "Create one feature and launch",
            },
            {
              icon: <FaList />,
              title: "Waiting List",
              description: "Start a waitlist before creating",
            },
            {
              icon: <FaPeopleArrows />,
              title: "Speak to people",
              description: "Get feedback from people ASAP",
            },
          ],
        },
      },
      
      {
        name: "contact",
        type: "contact",
        content: {
          title: "Would you like to create a similar project?",
        },
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
