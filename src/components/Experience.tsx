"use client";
import React, { useState } from "react";

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  details: string[];
  images?: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Yoom Inc.",
    period: "February 2023 - June 2024",
    details: [
      "Designed and implemented key features for Yoom’s SaaS platform using React and TypeScript, increasing user onboarding rates by 33%.",
      "Implemented a mention feature in the comment system, improving user convenience and boosting premium plan registration rates by 4%.",
      "Proposed and designed UI improvements using Figma, enhancing stakeholder collaboration and user experience.",
      "Refactored code to eliminate redundancy, reducing development time for new features by 60%.",
      "Developed and maintained E2E tests, ensuring stability and reducing post-release bugs by 20%.",
    ],
    images: ["/images/yoom1.png", "/images/yoom2.png", "/images/yoom3.png"],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Leverage Inc.",
    period: "February 2020 - January 2023",
    details: [
      "Designed and implemented reusable React components, boosting development efficiency across multiple projects.",
      "Led the development and launch of a yoga brand e-commerce site using WordPress, delivered on schedule.",
      "Ensured visual consistency in UI designs by collaborating with stakeholders using Figma.",
      "Optimized SEO strategies and improved web performance, resulting in a 20% increase in organic traffic.",
      "Created comprehensive documentation to facilitate knowledge sharing and mentored junior developers to enhance their technical skills.",
    ],
    images: ["/images/leverage.png"],
  },
  {
    id: 3,
    title: "Graphic Designer",
    company: "Toikatsu LLC",
    period: "October 2018 - January 2020",
    details: [
      "Designed and developed a user-friendly mobile gym management app interface, incorporating features like weight tracking and instructor reviews, resulting in increased member engagement among a 15,000-strong user base.",
      "Created packaging designs for a women-focused protein brand, now sold in over 40 stores nationwide.",
    ],
  },
  {
    id: 4,
    title: "Graphic Designer",
    company: "KOYAMA Inc.",
    period: "April 2016 - September 2018",
    details: [
      "Produced branding and signage solutions for educational and healthcare facilities, ensuring alignment with client requirements through consistent collaboration.",
    ],
  },
];

const Experience = () => {
  const [show, setShow] = useState(false);
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  const handleShow = (exp: Experience) => {
    setSelectedExp(exp);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <section className="container" id="experience">
      <h2 className="mb-3 mt-5">
        <span>04</span>
        <span>Experience</span>
      </h2>
      {experiences.map((exp) => (
        <div key={exp.id} className="mb-4">
          <h5>{exp.company}</h5>
          <strong>{exp.title}</strong>
          <span>{exp.period}</span>
          <ul>
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
