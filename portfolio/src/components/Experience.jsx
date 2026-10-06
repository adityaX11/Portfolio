import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Machine Learning & Python Developer Intern",
    company: "Cantiliver.in",
    duration: "Jun 2025 – Aug 2025",
    location: "Remote",
    type: "Internship",
    description:
      "Contributed to the data science and analytics team focusing on data automation pipelines and predictive fraud detection modeling.",
    points: [
      "Engineered automated Python-based data preprocessing pipelines using Pandas and NumPy, reducing manual processing effort by ~35% across iterative ML workflows.",
      "Built, validated, and optimized classification models with Scikit-Learn; implemented rigorous feature engineering, cross-validation, and hyperparameter tuning, elevating the overall model F1-score by 12%.",
      "Developed end-to-end fraud detection solutions using Logistic Regression and Random Forest algorithms, achieving 99% ROC-AUC while minimizing false positive rates on heavily imbalanced datasets.",
      "Prepared data visualizations and comprehensive exploratory analysis reports using Matplotlib and Seaborn for stakeholder presentation.",
    ],
    tech: [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "EDA",
      "Tkinter",
    ],
  },
];

export default function Experience() {
  return (
    <article className="page-content">
      <header className="page-header">
        <h1 className="page-title">Experience</h1>
        <p className="page-subtitle">
          My professional industry experience and internships in machine learning and software engineering.
        </p>
      </header>

      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-item">
            <div className="exp-top">
              <div>
                <h2 className="exp-role">{exp.role}</h2>
                <div className="exp-company-row">
                  <span className="exp-company">{exp.company}</span>
                  <span className="exp-sep">•</span>
                  <span className="exp-type">{exp.type}</span>
                </div>
              </div>

              <div className="exp-meta">
                <span className="meta-badge">
                  <FaCalendarAlt className="meta-icon" /> {exp.duration}
                </span>
                <span className="meta-badge">
                  <FaMapMarkerAlt className="meta-icon" /> {exp.location}
                </span>
              </div>
            </div>

            <p className="exp-desc">{exp.description}</p>

            <ul className="exp-bullet-points">
              {exp.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>

            <div className="exp-tech-tags">
              {exp.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}