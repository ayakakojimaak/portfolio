import React from "react";

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
    <section className="container" id="skills">
      <h2 className="mb-3">
        <span>03</span>
        <span>Skills</span>
      </h2>
      <div className="">
        {Object.entries(skills).map(([category, skillList]) => (
          <div className="" key={category}>
            {category}
            <ul>
              {skillList.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skill;
