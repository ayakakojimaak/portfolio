"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon, Globe } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { useTheme } from "next-themes";
import styles from "./SettingAppearance.module.scss";

const SettingAppearance: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  // ハイドレーション後にマウント
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // マウント前はプレースホルダーを表示（デザインを維持）
  if (!mounted) {
    return (
      <div className={styles.settingAppearance}>
        <button 
          className={styles.themeToggle}
          aria-label="Toggle theme"
          disabled
        >
          <div style={{ width: "22px", height: "22px" }} />
        </button>
        <button
          className={styles.switcherButton}
          aria-label="Toggle language"
          disabled
        >
          <Globe size={21} />
          <span className={styles.switcherButtonLang}>EN</span>
        </button>
      </div>
    );
  }

  return (
    <div className={styles.settingAppearance}>
      <button 
        className={styles.themeToggle}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
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
}

export default SettingAppearance;