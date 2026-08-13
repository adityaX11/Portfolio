import { useMemo, useState } from "react";

const projectData = [
  {
    title: "3D Product Showcase",
    desc: "Interactive product visualization with smooth animations and lighting.",
    tech: "React, Three.js, GSAP",
    category: "3D",
    link: "#",
  },
  {
    title: "AI Resume Builder",
    desc: "Generates modern resumes with customizable templates.",
    tech: "React, Node.js, OpenAI API",
    category: "Fullstack",
    link: "#",
  },
  {
    title: "Real-time Chat App",
    desc: "Socket based chat with authentication and private rooms.",
    tech: "React, Express, Socket.IO",
    category: "Fullstack",
    link: "#",
  },
  {
    title: "Portfolio UI Kit",
    desc: "A reusable aesthetic component system for personal websites.",
    tech: "React, Tailwind",
    category: "Frontend",
    link: "#",
  },
];

const filters = ["All", "Frontend", "Fullstack", "3D"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projectData;
    return projectData.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="filter-row">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-btn ${activeFilter === f ? "active" : ""}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid">
        {filteredProjects.map((p) => (
          <article key={p.title} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <small>{p.tech}</small>
            <span className="pill">{p.category}</span>
            <a href={p.link} target="_blank" rel="noreferrer">
              Explore →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}