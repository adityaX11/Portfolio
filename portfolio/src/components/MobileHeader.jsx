import { FaSun, FaMoon } from "react-icons/fa";

export default function MobileHeader({
  activeTab,
  setActiveTab,
  theme,
  toggleTheme,
}) {
  const tabs = [
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  const handleTabClick = (e, id) => {
    e.preventDefault();
    setActiveTab(id);
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", `#${id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="mobile-header glass-header">
      <div className="mobile-top-bar">
        <div className="mobile-identity">
          <img
            src="/profile.jpeg"
            alt="Aditya Kumar"
            className="mobile-avatar"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <div>
            <h1 className="mobile-name">Aditya Kumar</h1>
            <p className="mobile-sub">AI Aspirant • ML &amp; Software Dev</p>
          </div>
        </div>

        <button
          className="mobile-theme-btn glass-btn"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      <nav className="mobile-nav-bar" aria-label="Mobile navigation">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`mobile-tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
