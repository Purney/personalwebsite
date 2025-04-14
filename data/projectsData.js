import { FaClock, FaList, FaPeopleArrows, FaQuestion } from "react-icons/fa";

import text2quizhero from "../assets/images/text2quiz/text2quizhero.jpg";
import quizscreen from "../assets/images/text2quiz/quizscreen.png";
import pdfIcon from "../assets/images/text2quiz/pdf-icon-transparent.png";
import filamentgiftshero from "../assets/images/filamentgifts/filamentgiftshero.png";
import mongodb from "../assets/images/logos/mongodb.png";
import openai from "../assets/images/logos/openai.webp";
import nextjs from "../assets/images/logos/nextjs.webp";
import successFailure from "../assets/images/logos/success-failure.jpg";
import generationScreen from "../assets/images/filamentgifts/generationScreen.png";
import productPage from "../assets/images/filamentgifts/productPage.png";
import benRobb from "../assets/images/testimonials/benRobb.jpg";

export const Data = [
  {
    id: "text-2-quiz",
    seoTitle: "Building Text2Quiz — My AI-Powered Quiz Generator Experiment",
    title: "Text 2 Quiz",
    shortDescription:
      "Turning Notes Into Knowledge: Building Text2Quiz With AI Integration.",
    seoDescription:
      "Discover how I built Text2Quiz — an AI-powered quiz generator using OpenAI and Retrieval-Augmented Generation (RAG). A deep dive into AI integration, project lessons, and reflections on building educational tools.",

    techStack: ["Next.js", "React", "Tailwind CSS"],
    category: ["Web Development", "AI Integration"],
    image: text2quizhero,
    dateCreated: "2025-01-23T08:32:06.301Z",
    dateUpdated: null,
    sections: [
      {
        name: "the-beginning",
        type: "text",
        icon: <FaQuestion />,
        content: {
          html: `<section class="blog-content-wrapper mx-auto">
  <h2 class="text-4xl font-bold mb-6">Turning Notes Into Knowledge: Building Text2Quiz With AI Integration</h1>

  <p class="mb-4">
    Like many developers, some of my best ideas have come from scratching my own itch. <strong>Text2Quiz</strong> was one of those projects born from a real-world problem — and a personal one at that.
  </p>

  <p class="mb-4">
    Back in 2020, during the lockdown years, I was running a small side business on Etsy, selling downloadable PowerPoint quiz packs. Think pub-style quizzes, but designed for the era of video calls and virtual get-togethers. The business was ticking along nicely, but the repetitive nature of writing unique questions for each pack got me thinking: <em>Surely AI can help with this?</em>
  </p>

  <p class="mb-4">
    That simple curiosity planted the seed for what eventually became <strong>Text2Quiz</strong> — an AI-powered tool that could turn source material, like lecture notes or textbook chapters, into structured quiz questions.
  </p>

  <h3 class="text-2xl font-semibold mt-8 mb-4">From Lockdown Side-Hustle to AI Experiment</h3>

  <p class="mb-4">
    The first version of the idea was pretty straightforward: feed some text into <strong>OpenAI's language models</strong>, and get quiz questions back out. But as with most things in AI, it wasn’t quite as plug-and-play as it sounded.
  </p>

  <p class="mb-4">
    One of the earliest lessons I learned was that generating <strong>unique and factual questions</strong> is surprisingly hard for a model like GPT. It’s not that the model can’t write questions — it can write hundreds — but whether those questions are correct, relevant, and genuinely useful is another matter entirely. OpenAI’s models, especially in their earlier versions, had a knack for confidently making things up.
  </p>

  <p class="mb-4">
    So I turned to a more structured approach: <strong>RAG (Retrieval-Augmented Generation)</strong>. Rather than asking AI to invent questions from scratch, I designed the system to supply the AI with source material — this could be lecture notes, study guides, or any educational content — and the AI would craft questions directly from that. The results were instantly more accurate and context-aware.
  </p>

  <h3 class="text-2xl font-semibold mt-8 mb-4">AI Integration: More Than Just an API Call</h3>

  <p class="mb-4">
    The project wasn’t just a matter of plugging into OpenAI’s API and calling it a day. A huge part of the challenge was testing the sweet spot between input length and output quality. Feed the model too little, and the questions are generic. Feed it too much, and the AI gets lost or returns unusable answers.
  </p>

  <p class="mb-4">
    A lot of the development time went into refining that balance — learning by trial, error, and plenty of <strong>prompt engineering</strong>. Getting consistent, high-quality quiz questions was one of the most rewarding hurdles to clear, especially the first time the system produced genuinely useful material without human intervention.
  </p>

  <h3 class="text-2xl font-semibold mt-8 mb-4">A Weekend MVP With Long-Term Lessons</h3>

  <p class="mb-4">
    I built the MVP over a single weekend, a solo sprint from idea to working prototype. Like most good weekend projects, it didn’t stop there. Over the following months, I gradually polished the system — improving its handling of large source texts, adding better error handling, and experimenting with UI designs.
  </p>

  <p class="mb-4">
    But as I continued developing the project, I also started validating the idea with real users. I assumed <strong>students</strong> would find this tool invaluable for revising their notes, turning dry content into self-test quizzes on demand. But conversations with students and educators quickly revealed a market reality: there were already alternative tools doing a similar job — and in many cases, offering it for free.
  </p>

  <p class="mb-4">
    I shifted focus to teachers, thinking the automation could help them generate classroom quizzes and worksheets. Again, the same story: plenty of free or low-cost alternatives, and not enough of a unique selling point to make <strong>Text2Quiz</strong> stand out.
  </p>

  <h3 class="text-2xl font-semibold mt-8 mb-4">Knowing When To Pivot (Or Pause)</h3>

  <p class="mb-4">
    Ultimately, I made the decision to shut the project down. The competition in the AI education space is fierce — and since I first built Text2Quiz, both <strong>OpenAI’s models</strong> and rival platforms have improved dramatically. The gap I originally set out to solve has largely been filled by better-funded tools with larger user bases.
  </p>

  <p class="mb-4">
    And you know what? I’m fine with that.
  </p>

  <p class="mb-4">
    Text2Quiz wasn’t just a product experiment, it was a hands-on learning experience in <strong>AI integration</strong>. I gained a deep understanding of how large language models interact with structured prompts, how <strong>RAG pipelines</strong> can control output quality, and how market feedback shapes technical projects. These are skills and lessons that I’ve carried forward into every AI-related project since.
  </p>

  <h3 class="text-2xl font-semibold mt-8 mb-4">Reflecting on AI’s Evolution</h3>

  <p class="mb-4">
    One thing that really stands out when I look back on Text2Quiz is just how quickly the AI landscape has evolved. When I first built the MVP, the idea of generating fully tailored quizzes from source material felt cutting-edge, if slightly unpredictable.
  </p>

  <p class="mb-4">
    Fast forward to today, and <strong>OpenAI’s GPT models</strong> — along with other AI providers — have closed the gap considerably. Better context handling, improved factual accuracy, and more robust frameworks mean that the technical challenges I faced back then would be far easier to solve now.
  </p>

  <p class="mb-4">
    That in itself is one of the exciting, and humbling, parts of working in AI: the speed of change. Projects like Text2Quiz help sharpen your instincts for what’s possible today, and give you a running start for whatever’s coming next.
  </p>

  <h3 class="text-2xl font-semibold mt-8 mb-4">The Takeaway</h3>

  <p class="mb-4">
    While <strong>Text2Quiz</strong> might not have become a breakout product, the project was a rewarding deep dive into the world of <strong>AI integration, OpenAI-powered systems</strong>, and market-driven software design.
  </p>

  <p class="mb-4">
    Every project — success or failure — leaves you with more experience than you started with. For me, this one reinforced the importance of validating ideas early, understanding your competition, and approaching AI tools not as magic buttons, but as systems that need real human thought behind their design.
  </p>

  <p class="mb-4">
    If you're interested in building AI-powered tools or integrating OpenAI into your business software, I’d love to chat — or at least swap notes on what’s worked (and what hasn’t).
  </p>

  <p class="mt-8">
    <strong>Thanks for reading!</strong><br>
    You can explore more of my projects 
    <a href="https://www.william-purnell.com/projects" class="text-blue-600 underline hover:text-blue-800">here</a> 
    or reach out directly if you’ve got an idea you’d like to bring to life.
  </p>
</section>
`,
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
    dateCreated: "2025-01-23T08:32:06.301Z",
    dateUpdated: null,
    sections: [
      {
        name: "what-is-text-2-quiz",
        type: "image-with-text",
        icon: <FaQuestion />,
        content: {
          image: { src: filamentgiftshero, alt: "Filament Home Page Image" },
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
          text: "The mission was to create an ecommerce store and a backend management system that would allow them to create and launch products outside of Etsy.",
          beforeImage: { src: generationScreen, alt: "Generation Screen" },
          afterImage: {
            src: productPage,
            alt: "Pear Drop Bird Feeder Product Page",
          },
        },
      },
      {
        name: "technical-overview",
        type: "technical-overview",
        icon: <FaQuestion />,
        content: {
          title: "Technical Overview",
          text: "This project used Nextjs and MongoDB",
          images: [
            { src: nextjs, alt: "Next js Logo" },
            { src: mongodb, alt: "Mongo db Logo" },
          ],
        },
      },
      {
        name: "testimonial",
        type: "image-with-text",
        icon: <FaQuestion />,
        content: {
          image: { src: benRobb, alt: "Bens Face logo" },
          title: "What did the client say?",
          text: "<q>It's been a smooth experience creating my custom 3D printing website with Will. He's always interested in developing the best user experience for my customers.</q>",
          format: "text-left",
          buttonLink: "https://filamentgifts.com/",
          buttonText: "Check out Filament Gifts",
        },
      },
      {
        name: "contact",
        type: "contact",
        icon: <FaQuestion />,
        content: {
          title: "Interested in having your own ecommerce store?",
        },
      },
    ],
  },
];
