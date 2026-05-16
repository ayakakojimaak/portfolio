"use client";

import type React from "react";
import { useEffect, useState, useRef } from "react";
import type { Section } from "@/app/page";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  sectionOrder: Section[];
}

const SidebarSection: React.FC<SidebarProps> = ({ sectionOrder }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    navItemsRef.current.forEach((item, index) => {
      if (!item) return;
      item.style.animationDelay = `${index * 0.1}s`;
      item.classList.add(styles.animate);
    });
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionOrder.forEach((section) => {
      const el = document.getElementById(section.slug);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(section.slug);
        },
        { rootMargin: "-50% 0px -50% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionOrder]);

  return (
    <nav className={styles.sidebarContainer}>
      <ul className={styles.sectionList}>
        {sectionOrder.map((section, index) => (
          <li
            key={section.key}
            ref={(el) => {
              navItemsRef.current[index] = el;
            }}
            className={styles.sectionItem}>
            <a
              href={`#${section.slug}`}
              className={`${styles.link} ${activeSection === section.slug ? styles.active : ""}`}>
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
