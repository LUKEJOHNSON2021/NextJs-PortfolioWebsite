import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Code_Pro, Maven_Pro } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

const mavenPro = Maven_Pro({
  variable: "--font-maven-pro",
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${sourceCodePro.variable} ${mavenPro.variable} antialiased`}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
