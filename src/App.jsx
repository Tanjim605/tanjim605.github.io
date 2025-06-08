import { useState } from "react";
import { ThemeContext } from "./context";

import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <div
          className={`${
            darkMode ? "dark" : ""
          } font-sans bg-white dark:bg-slate-900 transition-colors duration-300`}
        >
          <Navbar />
          <HeroSection />
          <About />
          <Skills />
          <Works />
          <Contact />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}
