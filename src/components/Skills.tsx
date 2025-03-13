import React from "react";
import styles from "./Skills.module.scss";

const skills = {
  "Coding Languages": ["HTML5", "CSS3", "SASS", "TypeScript", "JavaScript", "PHP"],
  Frameworks: ["React.js", "Next.js"],
  Libraries: ["Material UI", "Bootstrap", "Tailwind CSS", "Styled-Components"],
  Design: ["Figma", "Framer", "Webflow", "Canva", "Adobe Illustrator", "Adobe Photoshop"],
  CMS: ["microCMS", "WordPress"],
  "Version Control Tools": ["GitHub"],
};

const Skill = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>
        <span className={styles.sectionNumber}>03</span>
        <span>Skills</span>
      </h2>
      <div className={styles.skillsGrid}>
        {Object.entries(skills).map(([category, skillList]) => (
          <div className={styles.skillCategory} key={category}>
            <h3 className={styles.categoryTitle}>{category}</h3>
            <ul className={styles.skillsList}>
              {skillList.map((skill, index) => (
                <li className={styles.skillItem} key={index}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skill;
