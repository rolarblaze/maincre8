import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalProvider } from "@/redux/provider";
import { AlertWrapper } from "@/components";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sell Crea8",
  description:
    "SellCrea8 is your one-stop shop for tailored creative and digital marketing solutions. From innovative design to strategic digital campaigns, we empower businesses to achieve their goals with customized, results-driven strategies.",
  keywords: [
    "Creative Solutions",
    "Digital Marketing Services",
    "Custom Design",
    "Digital Campaigns",
    "Brand Strategy",
    "SEO Services",
    "Social Media Marketing",
    "Content Creation",
    "Web Development",
    "SellCrea8",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const keywords = Array.isArray(metadata.keywords)
    ? metadata.keywords.join(", ")
    : metadata.keywords;

  // Convert metadata.title to a string to avoid type issues
  const pageTitle = metadata.title?.toString() || "SellCrea8";

  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth antialiased">
      <head>
        <meta name="description" content={metadata.description ?? ""} />
        <meta name="keywords" content={keywords ?? ""} />
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <GlobalProvider>
          <AlertWrapper />
          <NextTopLoader />
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
