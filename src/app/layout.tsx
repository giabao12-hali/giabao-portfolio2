import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import ClickSpark from "@/components/ui/click-spark";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

const OG_DESCRIPTION = `I'm ${DATA.name}, a fullstack web developer based in Ho Chi Minh City. Explore my projects, experience and skills.`;

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.fullName} | Fullstack Web Developer`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "Gia Bao",
    "Portfolio",
    "Fullstack Developer",
    "Web Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "ASP.NET",
    "Ho Chi Minh City",
    "Vietnam",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Gia Bao Portfolio",
  },
  openGraph: {
    title: `${DATA.name} | Fullstack Web Developer`,
    description: OG_DESCRIPTION,
    url: DATA.url,
    type: "website",
    siteName: DATA.name,
    locale: "en_US",
    images: [
      {
        url: "/me.jpg",
        alt: `${DATA.name} - Fullstack Web Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} | Fullstack Web Developer`,
    description: OG_DESCRIPTION,
    images: ["/me.jpg"],
  },
  alternates: {
    canonical: "/",
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
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: DATA.fullName,
  alternateName: DATA.name,
  url: DATA.url,
  image: `${DATA.url}${DATA.avatarUrl}`,
  jobTitle: "Fullstack Web Developer",
  description: DATA.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ho Chi Minh City",
    addressCountry: "VN",
  },
  knowsAbout: DATA.skills,
  sameAs: Object.values(DATA.contact.social)
    .map((s) => s.url)
    .filter((u) => u.startsWith("http")),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <link rel="apple-touch-icon" href="/web-app-manifest-192x192.png" />
        <meta name="apple-mobile-web-app-title" content="Gia Bao Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
        style={{
          backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
        }}
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
