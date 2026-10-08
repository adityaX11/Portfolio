import { useState, useMemo } from "react";

const projectsList = [
  {
    id: "blogvite",
    title: "BlogVite",
    category: "Full-Stack Web",
    github: "https://github.com/adityaX11/BlogVite.git",
    demo: "https://blogvite.onrender.com",
    desc: "A modern, high-performance full-stack blogging platform and content publishing system. Features rich-text publishing, real-time social networking, friend requests, categorized live news feeds, and responsive direct messaging with smart scroll preservation.",
    highlights: [
      "Full-Stack Publishing: Enables users to draft, edit, and publish rich-text articles using TinyMCE with optimized Cloudinary image delivery.",
      "Social Networking & Chat: Features custom user profiles, friend connections, and responsive direct messaging with instant scroll restoration.",
      "News & Authentication: Integrated categorized news across Tech, AI, Sports, and Business with secure JWT HTTP-only cookie authentication and OAuth.",
    ],
    tech: [
      "React",
      "Vite",
      "Express.js",
      "MongoDB Atlas",
      "Redux Toolkit",
      "Three.js",
      "Cloudinary",
      "TinyMCE",
      "JWT",
      "OAuth",
    ],
  },
  {
    id: "churnguard",
    title: "ChurnGuard",
    category: "AI / ML",
    github: "https://github.com/adityaX11/ChurnGuard.git",
    demo: "https://churnguardmodel.streamlit.app/",
    desc: "An intelligent customer churn prediction and retention analytics platform. Leverages neural networks and machine learning classification algorithms to detect early attrition signals based on customer demographics, account balance, and activity history.",
    highlights: [
      "Built a neural network-based churn prediction model using TensorFlow (Keras) and Scikit-Learn, achieving 86% classification accuracy.",
      "Engineered automated feature scaling and preprocessing pipelines to evaluate customer attributes such as age, balance, and credit score.",
      "Deployed a Streamlit web application delivering real-time churn likelihood scoring with actionable retention strategy recommendations.",
    ],
    tech: [
      "Python",
      "NLP",
      "TensorFlow (Keras)",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Streamlit",
    ],
  },
  {
    id: "reviewlens",
    title: "ReviewLens – Movie Review Sentiment Analysis",
    category: "AI / ML",
    github: "https://github.com/adityaX11/ReviewLens-Movie-Review-Analysis.git",
    demo: "https://reviewlens-movie-analysis.streamlit.app/",
    desc: "An advanced Natural Language Processing (NLP) sentiment classification engine developed during the CantiLever internship. Analyzes movie review text to accurately categorize critical audience reception, providing real-time sentiment distribution and polarity scores.",
    highlights: [
      "Constructed a high-throughput NLP classification pipeline on 10,000 movie reviews utilizing tokenization, lemmatization, and TF-IDF vectorization.",
      "Benchmarked multiple machine learning classifiers and achieved 89.80% accuracy and a 0.898 F1-score with Linear SVM.",
      "Deployed an intuitive Streamlit interface allowing users to analyze individual reviews, inspect probability confidence, and explore key contributing keywords.",
    ],
    tech: [
      "Python",
      "NLP",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "NLTK",
      "TF-IDF",
      "Linear SVM",
      "Logistic Regression",
      "Naive Bayes",
      "Streamlit",
    ],
  },
  {
    id: "ipl-predictor",
    title: "IPL Win Predictor",
    category: "AI / ML",
    github: "https://github.com/adityaX11/IPL-WIN.git",
    demo: "https://ipl-win-predicter.streamlit.app/",
    desc: "A machine learning predictive application that calculates dynamic, real-time winning probabilities for Indian Premier League (IPL) cricket matches during second-innings run chases.",
    highlights: [
      "Trained on historical ball-by-ball IPL match data with Logistic Regression and ensemble classifiers.",
      "Engineered critical match state variables including current run rate (CRR), required run rate (RRR), balls left, wickets in hand, and batting/bowling team performance.",
      "Created an interactive Streamlit dashboard allowing users to input live match scores and visualize shifting victory probabilities in real time.",
    ],
    tech: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "Streamlit",
      "NumPy",
      "Matplotlib",
    ],
  },
  {
    id: "pnr-checker",
    title: "PNR Checker",
    category: "AI / ML",
    github: "https://github.com/adityaX11/PNR-Checker.git",
    demo: "https://pnr-checker.streamlit.app/",
    desc: "An Indian Railways PNR status tracking and journey analytics web application. Provides passengers with real-time ticket confirmation status, coach/berth allocation, train schedules, and confirmation probability forecasting.",
    highlights: [
      "Integrated real-time railway APIs with robust error handling, response caching, and data parsing.",
      "Displays comprehensive passenger information including booking status, current status, chart preparation status, and train delay updates.",
      "Designed a clean, mobile-responsive Streamlit interface with instant one-click PNR lookups.",
    ],
    tech: [
      "Python",
      "Streamlit",
      "Pandas",
      "REST APIs",
      "JSON Parsing",
      "Requests",
    ],
  },
  {
    id: "bmi-calculator",
    title: "BMI Calculator",
    category: "Full-Stack Web",
    github: "https://github.com/adityaX11/BMI_CAL.git",
    demo: "https://bmi-cal-vert.vercel.app/",
    desc: "A sleek, responsive health and fitness web utility that calculates Body Mass Index (BMI), categorizes health zones (underweight, normal, overweight, obese), and provides personalized health guidelines.",
    highlights: [
      "Instant real-time calculation supporting both Metric (kg/cm) and Imperial (lbs/ft-in) measurement units.",
      "Interactive visual gauge representing BMI spectrum and personalized ideal weight ranges.",
      "Engineered with clean modern web technologies and deployed with fast performance on Vercel.",
    ],
    tech: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Vercel",
    ],
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
          A showcase of machine learning models, live web applications, and software engineering projects I&apos;ve built.
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