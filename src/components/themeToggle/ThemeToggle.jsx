"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      
    >
      <label class={styles.switch}>
        <input type="checkbox" onClick={toggle}
      style={
        theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
      } />
        <span class={styles.slider}></span>
      </label>
    </div>
  );
};

export default ThemeToggle;