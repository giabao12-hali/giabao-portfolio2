import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "GiaBao",
  fullName: "Nguyen Hien Gia Bao",
  initials: "GB",
  url: "https://giabao-portfolio2.vercel.app",
  location: "Ho Chi Minh City, Vietnam",
  locationLink: "https://maps.app.goo.gl/B74bgAcgCRVFgJDH8",
  description:
    "Fullstack Web Developer at Vietravel building travel platforms with Next.js, TypeScript and .NET, from AI trip planning to booking experiences.",
  summary:
    "I'm a Fullstack Web Developer at Vietravel with 2 years of experience building travel platforms, membership portals and booking experiences with Next.js, React, TypeScript and .NET. Recently I've worked on AI-powered trip planning with Google Maps, third-party ticketing integrations and admin dashboards. I'm also studying Artificial Intelligence at VNUHCM - University of Technology.",
  avatarUrl: "/avatar2.jpg",
  skills: [
    "Next.js",
    "ReactJS",
    "TypeScript",
    "TailwindCSS",
    "Shadcn UI",
    "SCSS",
    "TanStack Query",
    "C#",
    ".NET",
    "ASP.NET",
    "ABP Framework",
    "Google Maps API",
    "PostgreSQL",
    "MS SQL Server",
    "Docker",
    "n8n",
  ],
  languages: [
    { name: "English", level: "Intermediate" },
    { name: "Vietnamese", level: "Fluent" },
  ],
  resumeUrl: "/NGUYEN_HIEN_GIA_BAO_cv.pdf",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "nguyenhiengiabao12@gmail.com",
    tel: "+84 929 435 927",
    social: {
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/nguyengiabao01212",
        icon: Icons.facebook,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/_giabao_12",
        icon: Icons.instagram,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/giabao12-hali",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/b%E1%BA%A3o-nguy%E1%BB%85n-4989a4305",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:nguyenhiengiabao12@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Discord: {
        name: "Discord",
        url: "https://discordapp.com/users/494207238542589962",
        icon: Icons.discord,
        navbar: true,
      },
      Blog: {
        name: "My blog",
        url: "/blog",
        icon: Icons.notion,
        navbar: false,
      }
    },
  },

  work: [
    {
      company: "Vietravel",
      href: "https://www.vietravel.com",
      badges: [],
      location: "At Company",
      title: "Fullstack Web Developer",
      logoUrl: "/vietravel_logo.png",
      start: "September 2024",
      end: "Present",
      description:
        "Developed and maintained travel platforms, membership portals, booking experiences and internal admin dashboards using Next.js, React and TypeScript. Implemented authentication, profile management, membership benefits and reward features; integrated third-party travel services and backend APIs for product discovery and booking. Built AI-powered travel planning experiences with personalized itineraries and Google Maps visualization, plus admin dashboards for content management, customer inquiries and usage reporting. Developed backend APIs with C#/.NET, and improved SEO, performance and UX in collaboration with business teams.",
    },
    {
      company: "HQSOFT - Distribution & Retail Expert",
      badges: [],
      href: "https://hqsoft.com.vn",
      location: "At Company",
      title: "Backend Web Developer",
      logoUrl: "/hqsoft.png",
      start: "March 2024",
      end: "May 2024",
      description:
        "Researching ABP Framework with .NET 8. Using Docker to deploy a modular architecture with ABP Framework, Client-side, and PostgreSQL. Learning and effectively utilizing ChatGPT for programming.",
    },
    {
      company: "FPT Polytechnic Collage",
      href: "https://caodang.fpt.edu.vn",
      badges: [],
      location: "At Company",
      title: "Frontend Web Developer",
      logoUrl: "/fpt.png",
      start: "September 2023",
      end: "March 2024",
      description:
        "Using React/Next.js to design UX/UI and support other developers at the university. Continuously learning and enhancing knowledge through workshops and self-designed software with the team to support the PDP (Personal Development Planning) department.",
    },
  ],
  education: [
    {
      school: "VNUHCM - University of Technology",
      href: "https://www.uit.edu.vn",
      degree: "Bachelor - Artificial Intelligence",
      logoUrl: "/uit.png",
      start: "March 2026",
      end: "Present",
    },
    {
      school: "FPT Polytechnic",
      href: "https://caodang.fpt.edu.vn",
      degree: "College - Information Technology - Software Development",
      logoUrl: "/fpt.png",
      start: "August 2021",
      end: "December 2023",
    },
  ],
  projects: [
    {
      title: "Make Your Trip",
      href: "",
      dates: "March 2026 - September 2026",
      active: true,
      description:
        "An AI-powered travel planning platform that generates personalized itineraries, visualizes trip locations on Google Maps, and integrates travel products for a seamless planning and booking experience. Integrated AI to generate itineraries from user preferences, embedded travel products into the planning flow, and built an admin dashboard to review conversations and visualize usage data.",
      technologies: [
        "C#",
        ".NET 10",
        "ASP.NET",
        "Next.js",
        "TypeScript",
        "Google Maps API",
        "ChatGPT 5.5",
      ],
      links: [
        {
          type: "Website",
          href: "https://travel.com.vn/en/make-your-trip",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "GlobalTix",
      href: "",
      dates: "May 2026 - September 2026",
      active: true,
      description:
        "A sightseeing ticket booking integration with GlobalTix, a third-party ticket provider, enabling users to browse attractions, select ticket options, and complete bookings. Integrated GlobalTix APIs for attraction details, ticket options and pricing, and developed the end-to-end booking flow with responsive interfaces.",
      technologies: ["Next.js", "TypeScript", "SCSS"],
      links: [
        {
          type: "Website",
          href: "https://travel.com.vn/ota-service?tab=ve-tham-quan",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Vietravel Plus",
      href: "https://vietravelplus.com",
      dates: "December 2025 - February 2026",
      active: true,
      description:
        "A membership portal for Vietravel customers to explore membership benefits and submit inquiries, with an admin dashboard for managing website content and responding to customer questions. **Role:** Fullstack Developer (solo). Built the member-facing website, inquiry workflows, the content-management dashboard and the backend APIs.",
      technologies: [
        "C#",
        ".NET 8",
        "ABP Framework",
        "RESTful APIs",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "TanStack Query",
        "axios",
      ],
      links: [
        {
          type: "Website",
          href: "https://vietravelplus.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/vietravel_plus.png",
      video: "",
    },
    {
      title: "Travel.com.vn",
      href: "https://travel.com.vn",
      dates: "December 2025 - Present",
      active: true,
      description:
        "This project focuses on restructuring and redesigning [Travel.com.vn](https://travel.com.vn) into a modern Online Travel Agency (OTA) platform, where searching and booking tours is intuitive, seamless, and accessible to users of all ages — from young explorers to families and middle-aged travelers. The website is reimagined with a user-first mindset, streamlining user flows and minimizing friction throughout the booking journey. The tour search and filtering system is clearly structured, allowing users to quickly access essential information such as destinations, travel dates, pricing, and included services within just a few interactions.,",
      technologies: [
        "Next.js",
        "TypeScript",
        "SCSS",
        "custom-hooks",
        "zustand",
        "redux",
        "react-query"
      ],
      links: [
        {
          type: "Website",
          href: "https://travel.com.vn",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/travel-com-vn.png",
      video: "",
    },
    {
      title: "Travel Guide",
      href: "https://travel-guide-kappa.vercel.app",
      dates: "August 2025 - September 2025",
      active: true,
      description:
        "Travel Guide is a web application designed to provide users with comprehensive travel information and recommendations. The platform offers features such as destination guides, itineraries, local attractions, dining options, and user reviews to help travelers plan their trips effectively.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
        "zustand",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://travel-guide-kappa.vercel.app",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/travel-guide-image.png",
      video: "",
    },
    {
      title: "Donace",
      href: "https://donace-fe-production.vercel.app",
      dates: "August 2023 - December 2023",
      active: true,
      description:
        "An event ticket management project for event organizers and participants.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "NextUI",
        "axios",
        "react-hook-form",
      ],
      links: [
        {
          type: "Website",
          href: "https://donace-fe-production.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Donace-Project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/donace.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Startup GenZ - Ý Tưởng Nhỏ, Bức Phá Lớn",
      dates: "August 2025 - September 2025",
      location: "Vietravel Tower, Ho Chi Minh City",
      description:
        "Served as Project Manager & Tech Lead, responsible for UI/UX design and frontend development of the Travel Guide web app (mobile-simulated). Led project coordination, defined technical direction, and built a clean, scalable codebase to deliver a modern, intuitive travel experience.",
      image: "/travel-guide.png",
      mlh: "",
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          title: "Travel Guide",
          href: "https://travel-guide-kappa.vercel.app/"
        }
      ]
    },
    {
      title: "United Nations Vesak Festival 2025",
      dates: "May 2025 - May 2025",
      location: "Vietnam National Pagoda, Ho Chi Minh City",
      description:
        "Implemented workflow automation using n8n to manage attendee data and logistics during the Vesak 2025 celebration. Built flows to auto-update information, add new entries, and send email notifications to international delegates. Also provided technical support for Wi-Fi/network stability and hardware troubleshooting throughout the event.",
      image: "/vesak.jpg",
      mlh: "",
      links: [],
    },
    {
      title: "Mammothon - Celestia Hackathon",
      dates: "February 2025 - February 2025",
      location: "FPT Polytechnic Collage",
      description:
        "Built and optimized the frontend of a Celestia Mammothon hackathon project using Next.js. Focused on UI implementation, performance tuning, and expanding skills in modern frontend development within a collaborative team environment.",
      image:
        "/bg.png",
      mlh: "",
      links: [],
    },
    {
      title: "Game Việt Hackathon",
      dates: "Jun 06, 2023 - Sep 20, 2023",
      location: "FPT Polytechnic Collage",
      description:
        "Developing a game based on the idea from the organizers, inspired by Vietnamese history. The team's concept is to create a game that honors the silent sacrifices of the heroic Vietnamese mothers and the Vietnamese women warriors.",
      image:
        "/fpt.png",
      mlh: "",
      links: [],
    },
  ],
} as const;
