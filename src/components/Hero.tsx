"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Illustration from "./Illustration";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Hero.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const ctx = gsap.context(() => {}, container);

    ctx.add(() => {
      // 初期アニメーションのタイムライン
      const initialTl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      initialTl
        .to(".icon", { opacity: 1, y: 0, stagger: 0.1 }, "-=0.5")
        .to(".title", { opacity: 1, y: 0 }, "-=0.3")
        .to(".role", { opacity: 1, y: 0, stagger: 0.1 }, "-=0.3")
        .to(".description", { opacity: 1, y: 0 }, "-=0.3")
        .to(".illustration", { opacity: 1, duration: 1.5 }, "-=0.5")
        .to(".socialIcon", { opacity: 1, y: 0, stagger: 0.1 }, "-=1");

      // スクロールアニメーションの設定
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom top",
        pin: true,
        // marker: true,
        // onLeave: () => {
        //   gsap.to(container, {
        //     opacity: 0, // フェードアウトさせる
        //     duration: 0.8,
        //     ease: "power2.out",
        //   });
        // },
        // onEnterBack: () => {
        //   gsap.to(container, {
        //     opacity: 1, // フェードインで戻す
        //     duration: 0.8,
        //     ease: "power2.out",
        //   });
        // },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.icons}>
        <div className={`${styles.icon} icon`}></div>
        <div className={`${styles.icon} icon`}></div>
      </div>
      <div className={styles.content}>
        <h1 className={`${styles.title} title`}>Hello, I'm Ayaka Kojima</h1>
        <h2 className={`${styles.role} role`}>FRONT-END DEVELOPER</h2>
        <h2 className={`${styles.role} role`}>UI DESIGNER</h2>
        <p className={`${styles.description} description`}>
          As a Front-End Developer with over 4 years of experience and a background as a graphic designer for 4+ years,
          I combine technical expertise with a strong design sensibility to create user-friendly and visually engaging
          digital experiences. Starting my career in graphic design, I developed an in-depth understanding of user
          interface, which now informs my work in front-end development.
        </p>
      </div>
      <Illustration />
      <div className={styles.socialIcons}>
        <div className={`${styles.socialIcon} socialIcon`}></div>
        <div className={`${styles.socialIcon} socialIcon`}></div>
        <div className={`${styles.socialIcon} socialIcon`}></div>
      </div>
    </div>
  );
};

export default Hero;
