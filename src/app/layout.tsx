import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import ClickSpark from "@/components/ui/click-spark";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: `Hi, This is ${DATA.name}`,
  description: `${DATA.description}`,
  keywords: ["Gia Bao", "Portfolio", "Web Developer", "Frontend Developer", "Fullstack Developer", "Frontend Engineer", "Fullstack Engineer", "Software Engineer", "Software Developer", "React", "Next.js", "JavaScript", "TypeScript", "SCSS", "CSS", "HTML", "Web Design", "Web Development", "UI/UX", "User Interface", "User Experience", "Responsive Design", "Cross-Browser Compatibility", "Performance Optimization", "Accessibility", "SEO", "Agile", "Scrum", "Git", "Version Control"],
  openGraph: {
    title: `Hi, This is ${DATA.name}`,
    description: `So glad to see you here! I'm ${DATA.name}, a passionate web developer with a focus on creating engaging and user-friendly web applications. Explore my portfolio to see my work and learn more about my skills.`,
    url: `${DATA.url}`,
    type: "website",
    siteName: `${DATA.name}`,
    locale: "vi_VN",
    images: [
      {
        url: "https://giabao-portfolio2.vercel.app/me.jpg",
        width: 1200,
        height: 630,
        alt: `Hi, This is ${DATA.name}`,
      }
    ]
  },
  alternates: {
    canonical: `${DATA.url}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "website",
  other: {
    "revisit-after": "7 days",
    "distribution": "global",
    "rating": "general",
    "geo.region": "VN",
    "geo.country": "Vietnam",
  },
  metadataBase: new URL(DATA.url),
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Gia Bao Portfolio" />
        <meta name="description" content={DATA.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <ClickSpark
              sparkColor="#000000"
              sparkSize={10}
              sparkRadius={15}
              sparkCount={8}
              duration={400}
            >
              {children}
              <Navbar />
            </ClickSpark>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
