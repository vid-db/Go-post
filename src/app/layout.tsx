import Footer from "@/components/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Container from "@/components/container";
import Header from "../components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Go Post",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link rel="icon" href="/DB.jpg" />
      </head>
      <body className={`${inter.className} bg-zinc-100 text-zinc-900`}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
