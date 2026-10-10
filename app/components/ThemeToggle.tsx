"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("grungehotel-theme") as Theme | null;
    const systemTheme: Theme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const next = saved === "light" || saved === "dark" ? saved : systemTheme;
    setTheme(next);
    applyTheme(next);
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("grungehotel-theme", next);
    applyTheme(next);
  }

  const isLight = theme === "light";
  return <button type="button" onClick={toggleTheme} className="theme-toggle" aria-label={isLight ? "Включить тёмную тему" : "Включить светлую тему"} title={isLight ? "Тёмная тема" : "Светлая тема"}><span aria-hidden="true">{isLight ? "☾" : "☀"}</span></button>;
}
