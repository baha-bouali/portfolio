import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Baha Bouali",
  initials: "DV",
  url: "https://dillion.io",
  location: "Ben Arous, Tunis",
  locationLink: "https://www.google.com/maps/place/Ben+Arous/",
  description:
    "Software Engineering student, passionate about Competitive Programming, loves learning things.",
  summary:
    "I’m a 21-year-old Computer Science student at [ISI Ariana](http://www.isi.rnu.tn/institut/presentation/) with a strong passion for competitive programming, algorithms, and data science. I’ve sharpened my skills through platforms like [Codeforces](https://codeforces.com/profile/bahab), [Leetcode](https://leetcode.com/u/BahaBouali22/), and real-world experience during my internship at [Pyxis IT](#work). Beyond coding challenges, I enjoy exploring new technologies and building solutions that bridge theory and practice. Currently, I’m looking for opportunities where I can apply my problem-solving skills to impactful projects.",
  avatarUrl: "/avatartion.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "C++",
    "Python",
    "Competitive Programming",
    "Java",
    "RAG",
    "Machine Learning",
    "Data Science",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "baha.bouali2020@gmail.com",
    tel: "50949423",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/baha-bouali",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/baha-bouali-8800801b6/",
        icon: Icons.linkedin,

        navbar: true,
      },
      leetcode: {
        name: "Leetcode",
        url: "https://leetcode.com/BahaBouali22",
        icon: Icons.leetcode,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
      codeforces: {
        name: "Codeforces",
        url: "https://codeforces.com/profile/bahab",
        icon: Icons.codeforces,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Pyxis IT",
      href: "https://pyxis.com.tn/",
      badges: [],
      location: "On-site",
      title: "Data Scientist",
      logoUrl: "/image.png",
      start: "Feb 2025",
      end: "Jun 2025",
      description: 
      "Designed and implemented time series models for trend forecasting and anomaly detection using Facebook Prophet and LSTM neural networks. Built an end-to-end Retrieval-Augmented Generation (RAG) system for anomaly contextualization using vector embeddings and LLMs. Enhanced model performance by combining deep learning techniques and deployed the solution using Docker.",
    },
    {
      company: "Freeways ISI",
      badges: [],
      href: "https://www.facebook.com/FreewaysISIClub/",
      location: "On-site",
      title: "Instructor & Problem Solving Department Co-head",
      logoUrl: "/image copy.png",
      start: "Sep 2024",
      end: "Sep 2025",
      description:
      "Provided guidance, mentorship and workshop sessions for Freeways and Non Freeways members both on-site and online. Described effective problem-solving techniques, data structures, algorithms, and solutions. Problem Setter: Created and curated algorithmic challenges for various competitions both on-site and online."
    },
  ],
  education: [
    {
      school: "ISI Ariana",
      href: "http://www.isi.rnu.tn/institut/presentation/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/isiLogo1.png",
      start: "2022",
      end: "2025",
    },
    {
      school: "ISI Ariana",
      href: "http://www.isi.rnu.tn/institut/presentation/",
      degree: "Engineering Degree of Software Development (ESD)",
      logoUrl: "/isiLogo1.png",
      start: "2025",
      end: "2028",
    },
  ],
  projects: [
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
