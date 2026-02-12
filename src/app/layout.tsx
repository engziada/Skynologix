import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/ui/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Skynologix | Premium Web Solutions in Riyadh",
    template: "%s | Skynologix"
  },
  description: "Riyadh's leading tech startup providing corporate websites, hosting, and post-launch support for SMEs in Saudi Arabia.",
  keywords: ["Web Design Riyadh", "Saudi Tech Startup", "Hosting Solutions Saudi", "Corporate Websites", "Skynologix"],
  authors: [{ name: "Skynologix Team" }],
  creator: "Skynologix",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://skynologix.com",
    title: "Skynologix | Premium Web Solutions in Riyadh",
    description: "Building Riyadh's digital future with modern web solutions and support.",
    siteName: "Skynologix",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skynologix | Premium Web Solutions in Riyadh",
    description: "Building Riyadh's digital future with modern web solutions and support.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Skynologix",
    "image": "https://skynologix.com/logo.png",
    "@id": "https://skynologix.com",
    "url": "https://skynologix.com",
    "telephone": "+966XXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Riyadh",
      "addressLocality": "Riyadh",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.7136,
      "longitude": 46.6753
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
