"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/language-context";
import i18next from "i18next"; // ← 追加
import styles from "./SettingAppearance.module.scss";

const SettingAppearance: React.FC = () => {
  const { theme, setTheme } = useTheme(); // `resolvedTheme` ではなく `theme` を使用
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Next.js の SSR 問題を回避

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ja" : "en";
    setLanguage(newLang);
    i18next.changeLanguage(newLang); // ← 言語変更を適用
  };

  return (
    <div className={styles.container}>
      <button className={styles.switcherButton} onClick={toggleTheme}>
        {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
      </button>
      <button className={styles.switcherButton} onClick={toggleLanguage}>
        <Globe size={21} />
        <span className={styles.switcherButtonLang}>{language === "en" ? "JA" : "EN"}</span>
      </button>
    </div>
  );
};

export default SettingAppearance;
