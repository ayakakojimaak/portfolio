"use client";
import React from "react";
// import Image from "next/image";
import { useTranslation } from "@/components/hooks/useTranslation";

const AboutMe: React.FC = () => {
  const t = useTranslation();

  return (
    <section className="container" id="about-me">
      <div className="row">
        <div className="col-12">
          <h2>
            {/* <span className="section-number">01</span> */}
            <span>About Me</span>
          </h2>
          <h4>
            Looking for a Front-End Developer with design knowledge?
            <br />
            Let&apos;s create something great together!
          </h4>
        </div>
        <div className="col-8">
          <p>{t.about.description}</p>
        </div>
        {/* <div className="col-6">
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
