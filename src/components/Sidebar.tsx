import React from "react";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import styles from "./Sidebar.module.scss";

const Sidebar: React.FC = () => {
  return (
    <ul className={styles.container}>
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
  );
};

export default Sidebar;
