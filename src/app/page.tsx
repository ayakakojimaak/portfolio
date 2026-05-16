import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Project from "@/components/Project";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import SidebarWrapper from "@/components/SidebarWrapper";

export interface Section {
  key: string;
  slug: string;
  title: string;
}

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
        <AboutMe />
        <div id="content">
          <Project />
          <Skills />
          <Experience />
          <SidebarWrapper sectionOrder={sectionOrder} />
        </div>
      </main>
    </div>
  );
}
