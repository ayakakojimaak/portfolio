"use client";
import React from "react";
// import Image from "next/image";
import { useTranslation } from "@/components/hooks/useTranslation";
import styles from "./AboutMe.module.scss";

const AboutMe: React.FC = () => {
  const t = useTranslation();

  return (
    <section className={`container ${styles.container}`} id="about-me">
      <div className="row">
        <div className="col-12">
          <h2 className={styles.title}>
            {/* <span className="section-number">01</span> */}
            <span>About Me</span>
          </h2>
          {t.about.subtitle && (
            <h4 className={styles.subtitle} dangerouslySetInnerHTML={{ __html: t.about.subtitle }}></h4>
          )}
        </div>
        <div className="col-md-8 col-12">
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: t.about.description.replace(/\n/g, "<br />") }}></p>
        </div>
        {/* <div className="col-md-4 col-12">
          <Image
            src="/assets/images/aboutme.png"
            alt="headshot"
            width={300}
            height={300}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div> */}
      </div>
    </section>
  );
};

export default AboutMe;
