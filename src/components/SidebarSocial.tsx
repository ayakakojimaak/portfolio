import React from "react";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import styles from "./Sidebar.module.scss";

const Sidebar: React.FC = () => {
  return (
    <nav className={styles.socialContainer}>
      <ul className={styles.social}>
        <li>
          <a href="https://github.com/ayakakojimaak">
            <Github size={25} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ayaka-kojima/">
            <Linkedin size={25} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/janekojima/">
            <Instagram size={25} />
          </a>
        </li>
        <li>
          <a href="https://x.com/_em_penguin/">
            <Twitter size={25} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
