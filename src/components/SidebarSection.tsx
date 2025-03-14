"use client";

import type React from "react";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
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
  const navItemsRef = useRef<HTMLLIElement[]>([]);

  // 初回読み込み時のアニメーション
  useLayoutEffect(() => {
    if (navItemsRef.current.length === 0) return;

    gsap.set(navItemsRef.current, { opacity: 0, x: -20 });

    setTimeout(() => {
      gsap.to(navItemsRef.current, {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        ease: "power3.out",
        duration: 1,
      });
    }, 100);
  }, []);

  // スクロールトリガーの設定
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
        {sectionOrder.map((section, index) => (
          <li
            key={section.key}
            ref={(el) => {
              if (el) navItemsRef.current[index] = el;
            }}
            className={`${styles.sectionItem} navItem`}>
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
