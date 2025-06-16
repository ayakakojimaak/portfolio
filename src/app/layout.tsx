import type { Metadata } from "next";
import { ClientLayout } from "@/app/client-layout";
import { Lora, Inter } from "next/font/google";
import "@/styles/globals.scss";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ayaka Kojima | Front-End Developer & UI Designer",
  description: "This is the portfolio website of Ayaka Kojima, a front-end developer and UI designer with 4+ years of experience. Showcasing selected works that blend clean code with thoughtful design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={lora.variable} lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
