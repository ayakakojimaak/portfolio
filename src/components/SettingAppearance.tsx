import React from "react";
import { useTheme } from "./ThemeContext";
import { Lightbulb, LightbulbOff } from "lucide-react";
import styles from "./SettingAppearance.module.scss";

const SettingAppearance: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={toggleTheme}>
        {theme === "light" ? <Lightbulb size={22} /> : <LightbulbOff size={22} />}
      </button>
      <button className={styles.btn}>EN</button>
    </div>
  );
};

export default SettingAppearance;
