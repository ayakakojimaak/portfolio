// Summary.tsx
"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Summary: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="container" id="summary">
      <div className="row border-bottom pb-4">
        <div className="col-12 col-md-4 col-lg-3">
          <Image
            src="/assets/images/headshot.jpg"
            alt="headshot"
            width={300}
            height={300}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="col-12 col-md-8 col-lg-9 d-flex flex-column justify-content-between">
          <div>
            <h1>{t("summary.title")}</h1>
            <div className="mt-2">{t("summary.role")}</div>
          </div>
          <ul className="lh-sm">
            {/* {t("summary.experience", { returnObjects: true }).map((item: string, index: number) => (
              <li key={index}>- {item}</li>
            ))} */}
          </ul>
          <div className="d-flex justify-content-between align-items-center">
            <a className="border-bottom" href="">
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
