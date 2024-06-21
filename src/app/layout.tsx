import { Suspense } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Loading from "./loading";
import { ThemeProvider } from "@/context/themeContext";
import Navbar from "@/components/layouts/navbar/navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Affiliate Clone",
  description: "Affliate Clone",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={roboto.className}>
          <Suspense fallback={<Loading />}>
            <Navbar />
            {children}
          </Suspense>
        </body>
      </html>
    </ThemeProvider>
  );
}
