import { useEffect } from "react";
import { useState } from "react";

const themeFromLocalStore = () => {
  return localStorage.getItem("theme") || "winter";
};
export function useTheme() {
  const [theme, setTheme] = useState(themeFromLocalStore());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const changeTheme = () => {
    setTheme((prev) => (prev == "winter" ? "dracula" : "winter"));
  };
  return { changeTheme, theme };
}
