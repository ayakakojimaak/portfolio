import React from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.container__content}>
        <h2>
          <span>FRONT-END DEVELOPER</span>
          <span>& UI/UX DESIGNER</span>
        </h2>
        <h1>
          Hello,
          <br />
          I'm Ayaka Kojima
        </h1>
        <p>
          As a seasoned front-end engineer with a robust design background, I am dedicated to enhancing user experiences
          and fostering collaborative development environments.
        </p>
        <div className={styles.container__link}>
          <a href="#projects">Projects</a>
          <a href="https://www.linkedin.com/in/ayaka-kojima/">LinkedIn</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
