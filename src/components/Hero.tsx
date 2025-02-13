"use client";

import { useLayoutEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "@/components/hooks/useTranslation";
import SettingAppearance from "@/components/SettingAppearance";
import Illustration from "./Illustration";
import { ExternalLink } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import styles from "./Hero.module.scss";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const t = useTranslation();

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const ctx = gsap.context(() => {}, container);

    ctx.add(() => {
      const initialTl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      initialTl
        .to(".title", { opacity: 1, y: 0 }, "-=0.3")
        .to(".role", { opacity: 1, y: 0, stagger: 0.1 }, "-=0.3")
        .to(".description", { opacity: 1, y: 0 }, "-=0.3")
        .to(".contact", { opacity: 1, y: 0 }, "-=0.3");

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom center",
        pin: true,
        // markers: true,
        // onLeave: () => {
        //   gsap.to(window, {
        //     duration: 0.3, // スクロール時間
        //     ease: "ease",
        //     scrollTo: {
        //       y: "#main",
        //       autoKill: false, // スクロールの中断を防ぐ
        //     },
        //   });
        // },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div id="hero" className={`${styles.container} ${theme === "dark" ? styles.dark : ""}`} ref={containerRef}>
      <SettingAppearance />
      <div className={styles.content}>
        <h1 className={`${styles.title} title`}>{t.hero.title}</h1>
        <h2 className={`${styles.role} role`}>{t.hero.role1}</h2>
        <h2 className={`${styles.role} role`}>{t.hero.role2}</h2>
        <p className={`${styles.description} description`}>{t.hero.description}</p>
        <a className={`${styles.contact} contact`} href={t.hero.link} target="_blank" rel="noopener noreferrer">
          <span>{t.hero.contact}</span>
          <ExternalLink width={20} />
        </a>
      </div>
      <Illustration />
    </div>
  );
};

export default Hero;
