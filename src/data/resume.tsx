import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "GiaBao ",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Web Developer. I really enjoy exploring technologies and listening to all the sounds of life.",
  // summary:
  //   "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  summary:
    "After completing my thesis defense in December 2023 with a project on event ticket sales and graduating in May 2024, I spent a significant amount of time researching modern web technologies. During this period, I also participated in several activities and connected with experienced developers in the field to learn new things in programming.",
  avatarUrl: "/me.jpg",
  skills: [
    "C#",
    "ASP.NET",
    "ABP Framework",
    "React",
    "Next.js",
    "Angular",
    "Typescript",
    "Postgres",
    "MS SQL",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
        url: "https://www.linkedin.com/in/b%E1%BA%A3o-nguy%E1%BB%85n-4989a4305/",
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
      href: "https://www.vietravel.com/",
      badges: [],
      location: "At Company",
      title: "Web Developer",
      logoUrl: "/vietravel_logo.png",
      start: "September 2024",
      end: "Present",
      description:
        "Using React/Next.js to design UX/UI based on design principles and optimize SEO for new websites. Collaborating with other departments to maintain and develop the company's system using .NET technology. Utilizing Docker to optimize services. Building an admin website with the ABP Framework and Angular. Developing APIs to support the migration and modernization of the website.",
    },
    {
      company: "HQSOFT - Distribution & Retail Expert",
      badges: [],
      href: "https://hqsoft.com.vn/",
      location: "At Company",
      title: "Web Developer",
      logoUrl: "/hqsoft.png",
      start: "March 2024",
      end: "May 2024",
      description:
        "Researching ABP Framework with .NET 8. Using Docker to deploy a modular architecture with ABP Framework, Client-side, and PostgreSQL. Learning and effectively utilizing ChatGPT for programming.",
    },
    {
      company: "FPT Polytechnic",
      href: "https://caodang.fpt.edu.vn/",
      badges: [],
      location: "At Company",
      title: "Front-end Developer",
      logoUrl: "/fpt.png",
      start: "September 2023",
      end: "March 2024",
      description:
        "Using React/Next.js to design UX/UI and support other developers at the university. Continuously learning and enhancing knowledge through workshops and self-designed software with the team to support the PDP (Personal Development Planning) department.",
    },
  ],
  education: [
    {
      school: "FPT Polytechnic",
      href: "https://caodang.fpt.edu.vn/",
      degree: "Good",
      logoUrl: "/fpt.png",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Vietravel Plus",
      href: "https://uat.vietravelplus.com",
      dates: "Dec 2024 - Present (Maintaince)",
      active: true,
      description:
        "After being assigned by the leader to revamp the [Vietravel Plus](https://uat.vietravelplus.com) website—with exciting features and attractive benefits for registered members—I collaborated with the designer to build the Client-side while following the leader's guidance to implement the Server-side of the website.",
      technologies: [
        "C#",
        "ASP.NET",
        "ABP Framework",
        "Next.js",
        "Angular",
        "Typescript",
        "MS SQL",
        "TailwindCSS",
        "Bootstrap 5",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://uat.vietravelplus.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dio8ni9dk/video/upload/v1738948834/rhsdcnyvvvujhhsjiu6l.mp4",
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
        "Typescript",
        "TailwindCSS",
        "SynxtaxUI",
      ],
      links: [
        {
          type: "Website",
          href: "https://birthday.hivietravel.vn",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
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
        "Typescript",
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
      image: "",
      video: "https://res.cloudinary.com/dio8ni9dk/video/upload/v1738950125/gdtmubb92y3acoem4atw.mp4",
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
        "Typescript",
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
      image: "",
      video:
        "https://res.cloudinary.com/dio8ni9dk/video/upload/v1738950023/m2m6gifgxi81szcqjcxl.mp4",
    },
  ],
  hackathons: [
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
