import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Navrobotec | AI,IoT & Robotics Solutions",
  description:
    "ATL-compliant kits and hands-on workshops for Class 6–12 students & teachers. Learn Python, AI, and robotics with Tinkercad, ChatGPT, and more. Aligned with NEP 2020.",
  keywords: [
    "robotics workshop",
    "ATL lab setup",
    "school STEM kits",
    "AI for students",
    "teacher training India",
  ],
  openGraph: {
    images: "/img/outer/kits.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
