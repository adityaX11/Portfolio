import { useEffect, useRef, useState } from "react";
import { HiChevronDown } from "react-icons/hi";

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">Aditya.dev</div>

      {/* Desktop / tablet nav */}
      <nav className="nav-desktop">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

      {/* Compact nav for <=700px or <=600px height */}
      <div className="nav-compact" ref={dropdownRef}>
        <button
          className="compact-trigger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open navigation menu"
          aria-expanded={open}
        >
          Menu <HiChevronDown className={`chev ${open ? "up" : ""}`} />
        </button>

        <div className={`compact-menu ${open ? "open" : ""}`}>
          <a href="#hero" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#resume" onClick={closeMenu}>Resume</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <button
            className="compact-theme-btn"
            onClick={() => {
              toggleTheme();
              closeMenu();
            }}
          >
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </header>
  );
}