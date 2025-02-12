"use client";

import React from "react";
import { Sun, Moon, Globe } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { useTheme } from "next-themes";
import styles from "./SettingAppearance.module.scss";

const SettingAppearance: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <div className={styles.container}>
      <button className={styles.switcherButton} onClick={toggleTheme} aria-label="Toggle theme">
        {resolvedTheme === "light" ? <Moon size={22} /> : <Sun size={22} />}
      </button>
      <button
        className={styles.switcherButton}
        onClick={() => setLanguage(language === "en" ? "ja" : "en")}
        aria-label="Toggle language">
        <Globe size={21} />
        <span className={styles.switcherButtonLang}>{language === "en" ? "JA" : "EN"}</span>
      </button>
    </div>
  );
};

export default SettingAppearance;
