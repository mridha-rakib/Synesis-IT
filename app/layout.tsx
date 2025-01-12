import type { Metadata } from "next";
import { Geist_Mono, Roboto } from "next/font/google";

import Header from "~/components/header";
import Providers from "~/components/providers";

import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Synesis-IT",
    default: "Synesis-IT",
  },
  description: "The blog application for Synesis-IT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${geistMono.variable} container mx-0 px-4 antialiased sm:mx-auto sm:px-0`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
