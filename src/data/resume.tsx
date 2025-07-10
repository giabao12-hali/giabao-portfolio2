import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "GiaBao",
  initials: "DV",
  url: "https://giabao-portfolio2.vercel.app",
  location: "Ho Chi Minh City, Vietnam",
  locationLink: "https://maps.app.goo.gl/B74bgAcgCRVFgJDH8",
  description:
    "Fullstack Website Developer. I really enjoy exploring technologies and listening to all the sounds of life.",
  summary:
    "After completing my thesis defense in December 2023 with a project on event ticket sales and graduating in May 2024, I spent a significant amount of time researching modern web technologies. During this period, I also participated in several activities and connected with experienced developers in the field to learn new things in programming.",
  avatarUrl: "/me.jpg",
  skills: [
    "C#",
    "ASP.NET",
    "ReactJS",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "PostgreSQL",
    "MS SQL Server",
    "Docker",
    "n8n"
  ],
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
        navbar: false,
      }
    },
  },

  work: [
    {
      company: "TripU",
      href: "https://tripu.com.vn",
      badges: [],
      location: "At Company",
      title: "Frontend Web Developer",
      logoUrl: "/LogoTripU.png",
      start: "May 2025",
      end: "Present",
      description:
        "As a Frontend Developer at TripU, I focus on enhancing the digital booking experience for our self-guided travel services, including sightseeing tickets and SIM cards. I build and maintain responsive, user-centric interfaces using React and Next.js, ensuring performance, SEO optimization, and seamless accessibility across devices. I play a key role in the transition toward a direct-to-user booking model—allowing customers to book travel services directly on TripU’s platform without relying on third-party intermediaries. By collaborating closely with product designers and backend engineers, I contribute to delivering smooth user flows, dynamic form handling, and personalized service selection interfaces that reflect TripU’s commitment to digital transformation in the travel space.",
    },
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
        "In my role, I work with React and Next.js to design user-focused interfaces while ensuring SEO optimization for newly developed websites. I collaborate with cross-functional teams to maintain and extend the company’s systems built on .NET, and utilize Docker to streamline service deployment and performance. Alongside core development tasks, I also support internal tooling efforts, including building and maintaining an admin dashboard using Angular and the ABP Framework. Additionally, I contribute to backend development by building APIs that facilitate system migration and modernization.",
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
      school: "University of Information Technology - UIT",
      href: "https://www.uit.edu.vn",
      degree: "Good",
      logoUrl: "/uit.png",
      start: "2025",
      end: "Present",
    },
    {
      school: "FPT Polytechnic Collage",
      href: "https://caodang.fpt.edu.vn",
      degree: "Good",
      logoUrl: "/fpt.png",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "TripU",
      href: "https://tripu.com.vn",
      dates: "May 2025 - Present",
      active: true,
      description:
        "[TripU](https://tripu.com) is a travel-tech company specializing in tailor-made travel services, empowering independent travelers with customizable trip packages designed to meet every unique customer need. We aim to deliver experiences that are free-spirited, exciting, safe, and reliable. With the mission to become Vietnam's leading Online Travel Agency (OTA)",
      technologies: [
        "Next.js",
        "TypeScript",
        "SCSS",
        "Material UI",
        "Docker",
        "custom-hooks",
        "zustand",
        "redux",
        "react-query"
      ],
      links: [
        {
          type: "Website",
          href: "https://tripu.com.vn",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/tripu.png",
      video: "",
    },
    {
      title: "ChatGPT Clone",
      href: "",
      dates: "April 2025 - Present",
      active: true,
      description:
        "A custom AI chatbot platform designed for internal company use, enabling employees to enrich the chatbot with business-specific, travel-related, and proprietary company data. This system allows users to both train the chatbot with tailored knowledge and verify the information it has learned through an intuitive feedback mechanism.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
        "OpenAI API",
        "Docker",
      ],
      links: [],
      image: "/chatbot.png",
      video: "",
    },
    {
      title: "Vietravel Plus",
      href: "https://vietravelplus.com",
      dates: "Dec 2024 - Present (Maintaince)",
      active: true,
      description:
        "After being assigned by the leader to revamp the [Vietravel Plus](https://vietravelplus.com) website—with exciting features and attractive benefits for registered members—I collaborated with the designer to build the Client-side while following the leader's guidance to implement the Server-side of the website.",
      technologies: [
        "C#",
        "ASP.NET",
        "ABP Framework",
        "Next.js",
        "Angular",
        "TypeScript",
        "MS SQL Server",
        "TailwindCSS",
        "Bootstrap 5",
        "Shadcn UI",
        "Docker"
      ],
      links: [
        {
          type: "Website",
          href: "https://vietravelplus.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/vietravel_plus.png",
      video:
        "",
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
