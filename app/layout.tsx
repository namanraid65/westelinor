import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "West Elinor Technologies | Transforming Businesses Through Technology",
  description:
    "Custom Software Development, LMS, Mobile Applications, and Digital Transformation Services engineered for the modern enterprise. Serving clients across 10+ countries.",
  keywords: [
    "software development",
    "LMS platforms",
    "mobile app development",
    "business automation",
    "digital transformation",
    "enterprise software",
    "e-learning",
  ],
  authors: [{ name: "West Elinor Technologies" }],
  creator: "West Elinor Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://westelinor.com",
    siteName: "West Elinor Technologies",
    title: "West Elinor Technologies | Transforming Businesses Through Technology",
    description:
      "Custom Software Development, LMS, Mobile Applications, and Digital Transformation Services engineered for the modern enterprise.",
  },
  twitter: {
    card: "summary_large_image",
    title: "West Elinor Technologies",
    description:
      "Custom Software Development, LMS, and Digital Transformation Services.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
