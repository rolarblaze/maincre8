import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalProvider } from "@/redux/provider";
import { AlertWrapper } from "@/components";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// Define your base URL (use your production URL here)
const metadataBase = new URL('https://sellcrea8.com');

export const metadata: Metadata = {
  metadataBase,
  title:
    "SellCrea8 | Your All-in-One Content, Design, Branding and Marketing Solution.",
  description:
    "SellCrea8 provides solutions to streamline your content, design, marketing and branding needs. Let us help you transform your business.",
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

  // openGraph: {
  //   title: "SellCrea8 | Your All-in-One Content, Design, Branding and Marketing Solution.",
  //   description: "SellCrea8 provides solutions to streamline your content, design, marketing and branding needs. Let us help you transform your business.",
  //   image: {
  //     url: "/images/web preview.svg",
  //     width: 1200,
  //     height: 630,
  //     alt: "SellCrea8 Preview Image",
  //   },
  //   siteName: "SellCrea8",
  // },
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

  // Safely handle the single openGraph image object
  // const openGraphImage = metadata.openGraph?.image;

  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth antialiased">
      <head>
        <meta name="description" content={metadata.description ?? ""} />
        <meta name="keywords" content={keywords ?? ""} />
        {/* <meta property="og:title" content={String(metadata.openGraph?.title ?? pageTitle)} />
        <meta property="og:description" content={String(metadata.openGraph?.description ?? metadata.description)} />
        {openGraphImage && (
          <>
            <meta property="og:image" content={String(openGraphImage.url)} />
            <meta property="og:image:width" content={String(openGraphImage.width ?? '')} />
            <meta property="og:image:height" content={String(openGraphImage.height ?? '')} />
            <meta property="og:image:alt" content={String(openGraphImage.alt)} />
          </>
        )} */}

        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://openexchangerates.github.io/money.js/money.min.js"
        ></script>
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
