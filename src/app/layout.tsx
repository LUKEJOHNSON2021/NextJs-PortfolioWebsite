import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navigation/nav-bar";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/providers/providers";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "500",
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luke Johnson Dev",
  description: "Luke Johnson's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg" sizes="32x32" />
      </head>
      <body
        className={`${geistSans.variable} ${sourceCodePro.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-white dark:bg-zinc-900 min-h-screen flex-col items-center flex`}
      >
        <Providers>
          <NavBar />
          {children}
          <Toaster />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
