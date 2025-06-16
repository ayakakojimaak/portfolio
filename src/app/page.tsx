"use client";

import React, { useState, useEffect } from "react";
// import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SidebarSocial from "@/components/SidebarSocial";
import SidebarSection from "@/components/SidebarSection";
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
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsWideScreen(window.innerWidth >= 1400);
    };

    // 初期チェック
    checkScreenWidth();

    // リサイズイベントリスナーを追加
    window.addEventListener('resize', checkScreenWidth);

    // クリーンアップ
    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

  return (
    <div>
      <Hero />
      <main id="main">
        <AboutMe />
        <div id="content">
        <Project />
        <Skills />
        <Experience />
        {isWideScreen && <SidebarSection sectionOrder={sectionOrder} />}
        {isWideScreen && <SidebarSocial />}
        </div>
      </main>
    </div>
  );
}
