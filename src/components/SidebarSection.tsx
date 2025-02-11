"use client";

import type React from "react";
import { useEffect, useState, useRef } from "react";
import type { Section } from "@/app/page";
import styles from "./Sidebar.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SidebarProps {
  sectionOrder: Section[];
}

const SidebarSection: React.FC<SidebarProps> = ({ sectionOrder }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sidebarRef.current) return;

    sectionOrder.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section.slug}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(section.slug),
        onEnterBack: () => setActiveSection(section.slug),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [sectionOrder]);

  return (
    <nav className={styles.sidebarContainer} ref={sidebarRef}>
      <ul className={styles.sectionList}>
        {sectionOrder.map((section: Section) => (
          <li key={section.key} className={styles.sectionItem}>
            <a href={`#${section.slug}`} className={activeSection === section.slug ? styles.active : ""}>
              <span className={styles.sectionKey}>{section.key}</span>
              <span className={styles.sectionTitle}>{section.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarSection;
