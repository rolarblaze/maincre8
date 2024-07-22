import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "@/redux/provider";
import AlertWrapper from "@/components/AlertWrapper";
import { useAppSelector } from "@/redux/store";
import { RootState } from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sell Crea8",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className={inter.className}>
        <GlobalProvider>
          <AlertWrapper />

          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
