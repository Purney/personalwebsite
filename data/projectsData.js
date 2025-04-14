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
  <h2 class="text-4xl font-bold mb-6">Turning Notes Into Knowledge: Building Text2Quiz With AI Integration</h2>

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
    seoTitle: "Custom E-Commerce Build for Filament Gifts — Scalable Next.js & Tailwind Solution",
    shortDescription:
      "Custom E-Commerce Build for Filament Gifts — Scalable Next.js & Tailwind Solution",
      seoDescription:
      "Discover how I built a scalable, full-stack e-commerce platform for Filament Gifts using Next.js, Tailwind, MongoDB, and Stripe. A project designed for real business needs with a custom backend and flexible frontend built for growth.",
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
          text: "Filament Gifts is a manufacturing company that creates and distributes 3d printed goods. The Owner (Ben) wanted to have an independent website that would allow him to sell his products online without the use of an external company like Etsy.",
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
        name: "what-happened",
        type: "text",
        icon: <FaQuestion />,
        content: {
          html: `<section class="blog-content-wrapper mx-auto">
          <h3 class="text-2xl font-semibold mt-8 mb-4">Building for Growth: Why Two Sites Made Sense</h3>
          <p class="mb-4"> What started as a simple product display page for <strong>Filament Gifts</strong> quickly grew into something more ambitious — a two-part system designed to separate day-to-day operations from customer-facing traffic. The project now consists of two distinct but connected sites: a frontend for users to browse and purchase products, and a backend that gives the shop owner, Ben, full control over his store, orders, and product listings. </p> <p class="mb-4"> The decision to split the project into two wasn’t made for the sake of complexity — it was all about scalability and long-term flexibility. Separating the frontend and backend meant that Ben could manage his inventory, update products, and process orders without ever interrupting the user experience for customers, even during periods of high traffic. It also future-proofed the project, making it easier to introduce new features without breaking the core flow of the storefront. </p>
          <h3 class="text-2xl font-semibold mt-8 mb-4">Tailored for a Real Business</h3>
          <p class="mb-4"> Ben, the client and owner of <strong>Filament Gifts</strong>, had specific needs that went beyond what typical e-commerce platforms like Shopify or Etsy could offer. Building the system from scratch gave me complete control over the feature set and allowed for direct, business-friendly solutions. The backend wasn’t just about adding and editing products — it was built to handle real-world workflows: everything from dynamic shipping prices to sales analytics and order status updates. </p> <p class="mb-4"> For example, the backend includes custom Stripe payment integration, along with a simple but powerful order management system. When an order is placed, Ben can update its status in the backend, which automatically triggers customer notifications via email — a small touch that makes the shop feel personal and professional at the same time. </p> <h3 class="text-2xl font-semibold mt-8 mb-4">Design Inspired, Experience Focused</h3> <p class="mb-4"> On the frontend side, Ben already had a clear vision of the kind of site he wanted, drawing inspiration from a design he’d seen and liked. The final build focused on keeping the user experience straightforward, with easy-to-navigate categories and a search system that helps customers quickly find the perfect gift. The site was designed to be lightweight and mobile-friendly, while still leaving room for future growth. </p> <h3 class="text-2xl font-semibold mt-8 mb-4">A Full-Stack Learning Curve</h3> <p class="mb-4"> The tech stack for both the frontend and backend was kept consistent: <strong>Next.js</strong> for server-side rendering, <strong>Tailwind CSS</strong> for styling, and <strong>MongoDB</strong> for flexible data handling. Building both sides of the project reinforced one of the most important lessons I’ve picked up as a developer — while splitting projects into distinct systems gives you flexibility and performance, maintaining design and technical consistency between them is what makes the whole thing feel cohesive. </p> <p class="mb-4"> <em>Filament Gifts</em> wasn’t just another shop; it was a practical exercise in balancing the needs of real-world businesses with a clean, scalable development approach — something I now apply to every client project I take on. </p></section>`,
        },
      },
      {
        name: "testimonial",
        type: "image-with-text",
        icon: <FaQuestion />,
        content: {
          image: { src: benRobb, alt: "Bens Face logo" },
          title: "What did Ben say?",
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
