"use client";

import { useEffect, useRef } from "react";
import styles from "./Experience.module.scss";
import { useTranslation } from "@/components/hooks/useTranslation";

const Experience = () => {
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const t = useTranslation();

  useEffect(() => {
    const items = experienceRefs.current.filter(Boolean) as HTMLDivElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    items.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.15}s`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="experience">
      <h2 className="section-title">
        <span className="section-number">04</span>
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
