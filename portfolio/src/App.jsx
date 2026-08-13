import { useEffect, useState } from "react";
import Background3D from "./components/Background3D";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import SectionReveal from "./components/SectionReveal";
import ResumeSection from "./components/ResumeSection";
import Experience from "./components/Experience";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app">
      <Background3D theme={theme} />
      <CursorGlow />
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="content">
        <SectionReveal><Hero /></SectionReveal>
        <SectionReveal><About /></SectionReveal>
        <SectionReveal><Projects /></SectionReveal>
        <SectionReveal><Experience/></SectionReveal>
        <SectionReveal><ResumeSection /></SectionReveal>
        <SectionReveal><Contact /></SectionReveal>
      </main>

      <BackToTop />
    </div>
  );
}