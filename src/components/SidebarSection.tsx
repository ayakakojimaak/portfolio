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
  const [primaryColor, setPrimaryColor] = useState<string>("#000");
  const [textColor, setTextColor] = useState<string>("#fff");

  // クライアント側でのみ CSS 変数を取得
  useEffect(() => {
    if (typeof window !== "undefined") {
      const getCSSVariable = (varName: string) =>
        getComputedStyle(document.documentElement).getPropertyValue(varName).trim();

      setPrimaryColor(getCSSVariable("--primary-color") || "#000");
      setTextColor(getCSSVariable("--text-color") || "#fff");
    }
  }, []);

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

  // ホバー & アクティブ時のアニメーション
  useEffect(() => {
    navItemsRef.current.forEach((item, index) => {
      if (!item) return;

      const hoverAnim = gsap.to(item, {
        color: primaryColor,
        duration: 0.3,
        paused: true,
        ease: "power2.out",
      });

      item.addEventListener("mouseenter", () => hoverAnim.play());
      item.addEventListener("mouseleave", () => hoverAnim.reverse());

      return () => {
        item.removeEventListener("mouseenter", () => hoverAnim.play());
        item.removeEventListener("mouseleave", () => hoverAnim.reverse());
      };
    });
  }, [primaryColor]);

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
            className={`${styles.sectionItem} navItem`}
            style={{
              color: activeSection === section.slug ? primaryColor : textColor,
              transition: "color 0.3s ease, color 0.3s ease",
            }}>
            <a href={`#${section.slug}`} className={styles.link}>
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
