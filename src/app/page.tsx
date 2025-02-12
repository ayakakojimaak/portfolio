import React from "react";
// import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import SidebarSection from "@/components/SidebarSection";
import SideberSocial from "@/components/SidebarSocial";
import AboutMe from "@/components/AboutMe";
import Project from "@/components/Project";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import { Section } from "lucide-react";

interface Section {
  key: string;
  slug: string;
  title: string;
}
export type { Section };

const sectionOrder: Section[] = [
  { key: "01", slug: "about-me", title: "About me" },
  { key: "02", slug: "projects", title: "Projects" },
  { key: "03", slug: "skills", title: "Skills" },
  { key: "04", slug: "experience", title: "Experience" },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <main id="main">
        <Summary />
        <AboutMe />
        <Project />
        <Skills />
        <Experience />
        <SidebarSection sectionOrder={sectionOrder} />
        <SideberSocial />
      </main>
    </div>
  );
}
