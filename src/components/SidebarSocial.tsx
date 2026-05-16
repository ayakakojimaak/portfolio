"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import styles from "./Sidebar.module.scss";

const socialLinks = [
  { href: "https://github.com/ayakakojimaak", Icon: Github },
  { href: "https://www.linkedin.com/in/ayakakojimaak/", Icon: Linkedin },
  { href: "https://www.instagram.com/janekojima/", Icon: Instagram },
  { href: "https://x.com/_em_penguin/", Icon: Twitter },
];

const SidebarSocial: React.FC = () => {
  const lineRef = useRef<SVGLineElement>(null);
  const iconRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    const length = line.getTotalLength();
    line.style.strokeDasharray = String(length);
    line.style.strokeDashoffset = String(length);
    line.style.transition = "stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)";

    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          line.getBoundingClientRect();
          line.style.strokeDashoffset = "0";

          iconRefs.current.forEach((icon, index) => {
            if (!icon) return;
            icon.style.transitionDelay = `${0.5 + index * 0.15}s`;
            icon.classList.add(styles.iconVisible);
          });

          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.socialContainer}>
      <ul className={styles.social}>
        {socialLinks.map(({ href, Icon }, index) => (
          <li
            key={index}
            ref={(el) => {
              iconRefs.current[index] = el;
            }}
            className={styles.socialIcon}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Icon size={25} />
            </a>
          </li>
        ))}
      </ul>
      <svg className={styles.line} width="2" height="100" viewBox="0 0 2 100">
        <line ref={lineRef} x1="1" y1="100" x2="1" y2="0" strokeWidth={1.6} />
      </svg>
    </div>
  );
};

export default SidebarSocial;
