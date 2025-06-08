import { useContext } from "react";
import { ThemeContext } from "../context/index";

export default function NavLink({ href, children }) {
  const { darkMode } = useContext(ThemeContext);
  return (
    <a
      href={href}
      className={`${
        darkMode ? "dark" : ""
      }text-slate-700 dark:text-slate-300 hover:text-lime-600 px-3 py-2 rounded-md text-sm font-medium transition-colors`}
    >
      {children}
    </a>
  );
}
