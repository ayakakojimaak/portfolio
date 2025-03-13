"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/components/hooks/useTranslation";
import styles from "./AboutMe.module.scss";

const AboutMe: React.FC = () => {
  const t = useTranslation();

  return (
    <section className={`container ${styles.container}`} id="about-me">
      <div className="row">
        <div className="col-12">
          <h2 className={styles.title}>
            <span className={styles.sectionNumber}>01</span>
            <span>About Me</span>
          </h2>
        </div>
      </div>

      <div className={`row ${styles.profileSection}`}>
        <div className="col-12 col-md-4 col-lg-3">
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/images/headshot.jpg"
              alt="headshot"
              width={400}
              height={400}
              className={styles.profileImage}
            />
          </div>
        </div>
        <div className="col-12 col-md-8 col-lg-9 d-flex flex-column justify-content-between">
          <div>
            <h3 className={styles.name}>{t.summary.title}</h3>
            <div className={styles.role}>{t.summary.role}</div>
          </div>
          <ul className={styles.experienceList}>
            {t.summary.experience.map((item, index) => (
              <li key={index} className={styles.experienceItem}>
                {item}
              </li>
            ))}
          </ul>
          <div className={styles.resumeLink}>
            <Link href={t.summary.link} target="_blank" rel="noopener noreferrer">
              <span>{t.summary.resume}</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          {t.about.subtitle && (
            <h4 className={styles.subtitle} dangerouslySetInnerHTML={{ __html: t.about.subtitle }}></h4>
          )}
        </div>
        <div className="col-md-12">
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: t.about.description.replace(/\n/g, "<br />") }}></p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
