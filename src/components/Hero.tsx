"use client";

import Link from "next/link";
import { useTranslation } from "@/components/hooks/useTranslation";
import SettingAppearance from "@/components/SettingAppearance";
import Illustration from "./Illustration";
import { ExternalLink } from "lucide-react";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  const t = useTranslation();

  return (
    <div id="hero" className={styles.container}>
      <SettingAppearance />
      <div className={styles.content}>
        <h1 className={styles.title}>{t.hero.title}</h1>
        <h2 className={styles.role}>
          {t.hero.role1}
          <br />
          {t.hero.role2}
        </h2>
        <p className={styles.description}>{t.hero.description}</p>
        <Link
          className={`${styles.contact} d-flex align-items-center gap-1`}
          href={t.hero.link}
          target="_blank"
          rel="noopener noreferrer">
          <span>{t.hero.contact}</span>
          <ExternalLink width={20} />
        </Link>
      </div>
      <Illustration />
    </div>
  );
};

export default Hero;
