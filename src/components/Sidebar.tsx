import React from "react";
import { Section } from "@/app/page";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  sectionOrder: Section[];
}

const Sidebar: React.FC<SidebarProps> = ({ sectionOrder }) => {
  return (
    <nav className={styles.container}>
      <ul className={styles.nav}>
        {sectionOrder.map((section: Section) => (
          <li key={section.key}>
            <a href={`#${section.slug}`}>
              <span className={styles.navKey}>{section.key}</span>
              <span className={styles.navTitle}>{section.title}</span>
            </a>
          </li>
        ))}
      </ul>
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
