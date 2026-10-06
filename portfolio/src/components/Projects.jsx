import { useState, useMemo } from "react";

const projectsList = [
  {
    id: "churnguard",
    title: "ChurnGuard",
    category: "AI / ML",
    github: "https://github.com/adityaX11",
    demo: "https://churnguardmodel.streamlit.app/",
    desc: "An end-to-end customer churn prediction and retention analytics platform. Leverages supervised machine learning classification algorithms to detect early signals of customer attrition from usage metrics, service subscriptions, and behavioral data, enabling businesses to proactively retain at-risk users.",
    highlights: [
      "Engineered data preprocessing and feature scaling pipelines to handle class imbalances and customer risk patterns.",
      "Trained and evaluated classification models (Logistic Regression, Random Forest, Gradient Boosting) optimizing for recall on churning accounts.",
      "Built and deployed a live interactive web dashboard on Streamlit Cloud providing instant risk scores and key factor explanations.",
    ],
    tech: ["Python", "Scikit-Learn", "Streamlit", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    id: "blogvite",
    title: "BlogVite",
    category: "Full-Stack Web",
    github: "https://github.com/adityaX11",
    demo: "https://blogvite.onrender.com",
    desc: "A modern, high-performance full-stack blogging platform and content management system. Features secure user authentication, rich-text markdown article authoring, category filtering, search capabilities, and a responsive reading layout deployed in production on Render.",
    highlights: [
      "Built responsive, dynamic UI with React and Vite for blazing-fast client loading and smooth navigation.",
      "Developed secure RESTful API backend using Node.js and Express with persistent MongoDB document storage.",
      "Implemented JWT-based authentication, user authorization, and image/content handling with clean error handling.",
    ],
    tech: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
  },
  {
    id: "ipl-predictor",
    title: "IPL Win Predictor",
    category: "AI / ML",
    github: "https://github.com/adityaX11",
    demo: "https://github.com/adityaX11",
    desc: "A machine-learning application that predicts real-time winning probabilities for Indian Premier League (IPL) cricket matches. The model analyzes historical match data, current required run rate, target score, balls remaining, wickets in hand, and team performance metrics.",
    highlights: [
      "Trained on comprehensive ball-by-ball IPL dataset with Logistic Regression and Random Forest classifiers.",
      "Engineered dynamic features including current run rate, required run rate, and wicket degradation.",
      "Built an interactive prediction interface for instantaneous probability assessment.",
    ],
    tech: ["Python", "Pandas", "Scikit-Learn", "Streamlit", "NumPy"],
  },
  {
    id: "loan-risk",
    title: "Loan Risk Prediction",
    category: "AI / ML",
    github: "https://github.com/adityaX11",
    demo: "",
    desc: "An end-to-end financial credit risk classification pipeline that assesses applicant default likelihood. Implements rigorous data preprocessing, missing value imputation, categorical encoding, and class imbalance handling.",
    highlights: [
      "Benchmarked multiple algorithms: Random Forest, Gradient Boosting, and XGBoost.",
      "Extensive feature selection and correlation analysis to isolate key creditworthiness indicators.",
      "Evaluated model robustness using ROC-AUC, Precision-Recall curves, and cross-validation.",
    ],
    tech: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    id: "customer-purchase",
    title: "Customer Purchase Prediction",
    category: "AI / ML",
    github: "https://github.com/adityaX11",
    demo: "https://github.com/adityaX11",
    desc: "A predictive analytics model that determines whether an online user will make a purchase based on behavioral, navigational, and demographic features. Assists e-commerce businesses in optimizing user targeting.",
    highlights: [
      "Performed in-depth exploratory data analysis (EDA) to discover purchasing patterns and drop-offs.",
      "Constructed a clean feature transformation pipeline for numerical and categorical variables.",
      "Deployed with an interactive dashboard allowing manual input of user session parameters.",
    ],
    tech: ["Python", "Scikit-Learn", "Pandas", "Streamlit", "NumPy"],
  },
  {
    id: "cantiliver-ml",
    title: "Automated ML Pipeline & Fraud Detection",
    category: "AI / ML",
    github: "https://github.com/adityaX11",
    demo: "",
    desc: "Production-grade machine learning workflows developed during the Cantiliver.in internship. Included automated Python data preprocessing scripts and a fraud classification engine with 99% ROC-AUC.",
    highlights: [
      "Engineered automated preprocessing pipeline that decreased manual preparation effort by 35%.",
      "Optimized classification models with hyperparameter tuning, yielding a 12% boost in F1-score.",
      "Implemented fraud detection algorithms focusing on minimizing false positives on unbalanced data.",
    ],
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "EDA", "Tkinter"],
  },
  {
    id: "ai-resume-builder",
    title: "AI Resume Builder",
    category: "Full-Stack Web",
    github: "https://github.com/adityaX11",
    demo: "",
    desc: "A modern full-stack web application that helps candidates craft professional resumes using AI-assisted bullet point generation, clean styling templates, and one-click PDF export.",
    highlights: [
      "Customizable section builder with live previews for experience, education, and skills.",
      "Backend REST API handling user data serialization and export utilities.",
      "Clean, modern UI designed with responsive typography and theme consistency.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "REST APIs", "CSS3"],
  },
  {
    id: "realtime-chat",
    title: "Real-time Chat Application",
    category: "Full-Stack Web",
    github: "https://github.com/adityaX11",
    demo: "",
    desc: "A scalable bidirectional chat application supporting real-time messaging, room creation, online user presence, and persistent conversation history.",
    highlights: [
      "Implemented WebSocket communication via Socket.IO for sub-second message delivery.",
      "Constructed secure Express.js backend with session handling and room separation.",
      "Responsive and clean frontend interface with instant message bubbles and status indicators.",
    ],
    tech: ["React.js", "Socket.IO", "Node.js", "Express.js", "JavaScript"],
  },
];

const categories = ["All", "AI / ML", "Full-Stack Web"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projectsList.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <article className="page-content">
      <header className="page-header">
        <h1 className="page-title">Work / Projects</h1>
        <p className="page-subtitle">
          A showcase of machine learning models, live applications, and software engineering projects I&apos;ve built.
        </p>
      </header>

      {/* Filter and Search Bar */}
      <div className="filter-controls">
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search projects by name or tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input glass-input"
            aria-label="Search projects"
          />
        </div>
      </div>

      {/* Projects List */}
      <div className="projects-feed">
        {filteredProjects.length === 0 ? (
          <p className="empty-msg">No projects matched your search criteria.</p>
        ) : (
          filteredProjects.map((project) => (
            <div key={project.id} className="project-item glass-panel">
              <div className="project-header">
                <h2 className="project-title">{project.title}</h2>
                <div className="project-links">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live-link"
                    >
                      (Live Demo ↗)
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      (GitHub)
                    </a>
                  )}
                </div>
              </div>

              <p className="project-desc">{project.desc}</p>

              {project.highlights && (
                <ul className="project-highlights">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}

              <div className="project-tags">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </article>
  );
}