"use client"

import React from 'react'
import styles from './themeToggle.module.css'
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {

  const {theme} = useContext(ThemeContext)

  console.log(theme + ' mode')

  return (
    <div className={styles.container}>
      <label class={styles.switch}>
          <input type="checkbox"/>
          <span class={styles.slider}></span>
      </label>
    </div>
  );
};

export default ThemeToggle