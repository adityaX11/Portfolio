import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MobileHeader from "./components/MobileHeader";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ResumeSection from "./components/ResumeSection";
import Contact from "./components/Contact";

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("portfolio_theme");
    if (saved) return saved;
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const getInitialTab = () => {
    const hash = window.location.hash.replace("#", "").toLowerCase();
    if (["work", "projects"].includes(hash)) return "work";
    if (["experience", "exp"].includes(hash)) return "experience";
    if (["education", "edu", "academics"].includes(hash)) return "education";
    if (["resume", "cv"].includes(hash)) return "resume";
    if (["contact", "email"].includes(hash)) return "contact";
    return "about";
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);

  // Sync theme attribute with documentElement
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio_theme", theme);
  }, [theme]);

  // Listen to hash changes (back/forward navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (["work", "projects"].includes(hash)) {
        setActiveTab("work");
      } else if (["experience", "exp"].includes(hash)) {
        setActiveTab("experience");
      } else if (["education", "edu", "academics"].includes(hash)) {
        setActiveTab("education");
      } else if (["resume", "cv"].includes(hash)) {
        setActiveTab("resume");
      } else if (["contact", "email"].includes(hash)) {
        setActiveTab("contact");
      } else if (["about"].includes(hash)) {
        setActiveTab("about");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case "work":
        return <Projects />;
      case "experience":
        return <Experience />;
      case "education":
        return <Education />;
      case "resume":
        return <ResumeSection />;
      case "contact":
        return <Contact />;
      case "about":
      default:
        // On home page, only About is rendered!
        return <About onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="layout-container">
      {/* Mobile top header with glassmorphism */}
      <MobileHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <div className="layout-wrapper">
        {/* Desktop / tablet sidebar with glassmorphic finish */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        {/* Main Content Area: ONLY the active view is displayed */}
        <main className="main-viewport" id="content">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
}