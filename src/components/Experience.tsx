"use client";

import { useEffect, useRef } from "react";
import styles from "./Experience.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "@/components/hooks/useTranslation";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const t = useTranslation();

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
          },
        }
      );

      experienceRefs.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.2,
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
              },
            }
          );
        }
      });
    }
  }, []);

  return (
    <section className={styles.experienceSection} id="experience" ref={sectionRef}>
      <h2>
        <span>04</span>
        <span>Experience</span>
      </h2>

      {t.experiences.map((exp, index) => (
        <div
          key={exp.id}
          className={styles.experienceItem}
          ref={(el) => {
            experienceRefs.current[index] = el;
          }}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <h3 className={styles.company}>{exp.company}</h3>
              <div className={styles.title}>{exp.title}</div>
            </div>
            <div className={styles.period}>{exp.period}</div>
          </div>
          <ul className={styles.details}>
            {exp.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
