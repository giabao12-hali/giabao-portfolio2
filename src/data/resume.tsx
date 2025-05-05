import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "GiaBao",
  initials: "DV",
  url: "https://dillion.io",
  location: "Ho Chi Minh City, Vietnam",
  locationLink: "https://maps.app.goo.gl/B74bgAcgCRVFgJDH8",
  description:
    "Fullstack Web Developer. I really enjoy exploring technologies and listening to all the sounds of life.",
  summary:
    "After completing my thesis defense in December 2023 with a project on event ticket sales and graduating in May 2024, I spent a significant amount of time researching modern web technologies. During this period, I also participated in several activities and connected with experienced developers in the field to learn new things in programming.",
  avatarUrl: "/me.jpg",
  skills: [
    "C#",
    "ASP.NET",
    // "ABP Framework",
    "React",
    "Next.js",
    // "Angular",
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

        navbar: false,
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
      company: "FPT Polytechnic",
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
      school: "FPT Polytechnic",
      href: "https://caodang.fpt.edu.vn",
      degree: "Good",
      logoUrl: "/fpt.png",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
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
      title: "Birthday Voucher",
      href: "https://birthday.hivietravel.vn",
      dates: "Dec 2024 - Dec 2024",
      active: true,
      description:
        "It's a simple website (as requested by the leader) that includes terms and conditions for using the birthday voucher gifted by Vietravel to customers.",
      technologies: [
        "React",
        "Vite",
        "TypeScript",
        "TailwindCSS",
        "SynxtaxUI",
      ],
      links: [
        {
          type: "Website",
          href: "https://birthday.hivietravel.vn",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dio8ni9dk/video/upload/v1738949443/elcebfz1u8aks3e36g8x.mp4",
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
    {
      title: "Story Reading",
      href: "https://story-reading.vercel.app",
      dates: "January 2024 - February 2024",
      active: true,
      description:
        "A reading website for all ages, offering advanced features for users.",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "DaisyUI",
        "axios",
        "react-router-dom",
      ],
      links: [
        {
          type: "Website",
          href: "https://story-reading.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/TranDat1114/Story-Reading",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/story.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Vesak 2025",
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
