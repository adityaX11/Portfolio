import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export default function Sidebar({
  activeTab,
  setActiveTab,
  theme,
  toggleTheme,
}) {
  const navItems = [
    { id: "about", label: "About me" },
    { id: "work", label: "Work / Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveTab(id);
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", `#${id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <aside className="sidebar glass-sidebar">
      <div className="sidebar-inner">
        {/* Author Header */}
        <div className="sidebar-author">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="author-avatar-link"
            aria-label="Aditya Kumar home"
          >
            <img
              src="/profile.jpeg"
              alt="Aditya Kumar"
              className="author-avatar"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </a>

          <h1 className="author-name">
            <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
              Aditya Kumar
            </a>
          </h1>

          <p className="author-role">
            AI Aspirant • Machine Learning &amp; Software Developer
          </p>
        </div>

        {/* Navigation Menu */}
        <nav className="sidebar-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeTab === item.id ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  <span>{item.label}</span>
                  {activeTab === item.id && <span className="nav-indicator">•</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social / Contact Links */}
        <div className="sidebar-contacts">
          <div className="contacts-title">Connect &amp; Socials</div>
          <div className="contacts-list">
            <a
              href="mailto:adityakumarsah4555@gmail.com"
              className="contact-icon-link"
              title="Email: adityakumarsah4555@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/adityaX11"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon-link"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-kumar-878201322/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon-link"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/dityA5757"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon-link"
              title="X (Twitter): @dityA5757"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://leetcode.com/u/Aditya_leet_11/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon-link"
              title="LeetCode Profile: Aditya_leet_11"
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </a>
            <a
              href="/Aditya_Kumar_Resume.pdf"
              download="Aditya_Kumar_Resume.pdf"
              className="contact-icon-link"
              title="Download Resume (PDF)"
              aria-label="Download Resume"
            >
              <FaFilePdf />
            </a>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="sidebar-theme">
          <button
            className="theme-toggle-btn glass-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <>
                <FaSun className="theme-icon sun" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <FaMoon className="theme-icon moon" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>

        {/* Footer / Copyright */}
        <div className="sidebar-footer">
          <p>© {new Date().getFullYear()} Aditya Kumar.</p>
          <p className="sidebar-subtext">All rights reserved.</p>
        </div>
      </div>
    </aside>
  );
}
