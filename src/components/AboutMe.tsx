import React from "react";
import styles from "./AboutMe.module.scss";

const AboutMe: React.FC = () => {
  return (
    <section className="about-me" id="about">
      <div className={styles.container}>
        <img src={`${process.env.PUBLIC_URL}/assets/images/vector02.svg`} className={styles.vector} />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/headshot.png`}
          alt="Ayaka Kojima"
          className={styles.headshot}
        />
        <div className={styles.content}>
          <h2>About Me</h2>
          <p>
            I am dedicated to enhancing user experiences and fostering collaborative development environments. I have
            consistently shown the ability to learn independently and adapt to new challenges, merging creativity with
            technical expertise to deliver outstanding results. My unique blend of skills makes me a valuable asset to
            any team, bridging the gap between creative vision and technical implementation. Outside of work, I am a cat
            lover and enjoy bouldering and martial arts. <br />
            Lorem ipsum dolor sit ametconsectetur <br />
            adipisicing elitsed do eiusmod tempo <br />
            incididuntut labore et dolore magna aliqua
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
