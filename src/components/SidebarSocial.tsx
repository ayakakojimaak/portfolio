"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Sidebar.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Sidebar: React.FC = () => {
  const lineRef = useRef<SVGLineElement>(null);
  const socialRefs = useRef<HTMLAnchorElement[]>([]); // 配列でrefを保持

  useEffect(() => {
    if (!lineRef.current) return;

    const line = lineRef.current;
    const length = line.getTotalLength();

    gsap.set(line, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "bottom center",
        end: "bottom center",
        scrub: 0.5,
      },
    });

    tl.to(line, { strokeDashoffset: 0, duration: 1, ease: "power2.out" });

    // staggerを使ってアイコンのアニメーションをまとめる
    tl.fromTo(
      socialRefs.current, // アニメーション対象の要素の配列
      { opacity: 0, y: 20 }, // 初期値
      { opacity: 1, y: 0, duration: 3, stagger: 1, ease: "power2.out" }, // 最終値, 遅延, イージング
      "+=0.2" // timelineの開始位置
    );
  }, []);

  // refを配列に格納する関数
  const setSocialRef = (el: HTMLAnchorElement | null, index: number) => {
    if (el) {
      socialRefs.current[index] = el;
    }
  };

  return (
    <div className={styles.socialContainer}>
      <ul className={styles.social}>
        <li>
          <a ref={(el) => setSocialRef(el, 3)} href="https://github.com/ayakakojimaak">
            <Github size={25} />
          </a>
        </li>
        <li>
          <a ref={(el) => setSocialRef(el, 2)} href="https://www.linkedin.com/in/ayaka-kojima/">
            <Linkedin size={25} />
          </a>
        </li>
        <li>
          <a ref={(el) => setSocialRef(el, 1)} href="https://www.instagram.com/janekojima/">
            <Instagram size={25} />
          </a>
        </li>
        <li>
          <a ref={(el) => setSocialRef(el, 0)} href="https://x.com/_em_penguin/">
            <Twitter size={25} />
          </a>
        </li>
      </ul>
      <svg className={styles.line} width="2" height="100%" viewBox="0 0 2 100%">
        <line ref={lineRef} x1="1" y1="100%" x2="1" y2="0" strokeWidth={1.6} />
      </svg>
    </div>
  );
};

export default Sidebar;
