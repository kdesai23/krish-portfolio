import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

/*
 Navbar and Footer now appear on every page automatically
 main gives every page consistent spacing and a clean max-width
 metdata affects your browser tab title + SEO basics.
*/

export const metadata: Metadata = {
  title: "Krish Desai | Portfolio",
  description: "Portfolio website of Krish Desai",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className = "min-h-screen bg-black text-white">
        <Navbar />

        <main className ="mx-auto max-w-5xl px-6 py-12">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
