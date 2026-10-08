import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaCodeBranch,
} from "react-icons/fa";

const experiences = [
  {
    role: "Machine Learning & Python Developer Intern",
    company: "CantiLever",
    companyUrl: "https://cantilever.in/",
    duration: "Jul 2025 – Aug 2025",
    location: "Remote",
    type: "Internship",
    projectTitle: "ReviewLens – Movie Review Sentiment Analysis",
    projectDemo: "https://reviewlens-movie-analysis.streamlit.app/",
    projectGithub:
      "https://github.com/adityaX11/ReviewLens-Movie-Review-Analysis.git",
    description:
      "During my internship at CantiLever, I spearheaded the design, training, and deployment of ReviewLens — an end-to-end Natural Language Processing (NLP) sentiment analysis system developed to automate unstructured feedback quantification and audience opinion classification.",
    points: [
      "Engineered an end-to-end NLP text classification pipeline trained on a benchmark corpus of 10,000 movie reviews, implementing preprocessing, tokenization, stop-word filtration, and WordNet lemmatization.",
      "Constructed and optimized feature extraction using TF-IDF (Term Frequency-Inverse Document Frequency) vectorization to capture semantic word importance across diverse review lengths.",
      "Trained, benchmarked, and tuned multiple machine learning algorithms including Linear SVM, Logistic Regression, and Multinomial Naive Bayes, optimizing for high precision and recall on sentiment boundaries.",
      "Achieved peak classification accuracy of 89.80% and a 0.898 F1-score with Linear SVM, outperforming baseline models by over 12%.",
      "Real-World Impact: Deployed an interactive Streamlit analytics platform that provides instant polarity scoring, confidence metrics, and keyword impact visualization, enabling streaming services and production teams to automate audience reaction monitoring and improve recommendation engines.",
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
];

export default function Experience() {
  return (
    <article className="page-content">
      <header className="page-header">
        <h1 className="page-title">Experience</h1>
        <p className="page-subtitle">
          My professional industry internships and machine learning engineering contributions.
        </p>
      </header>

      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-item glass-panel">
            <div className="exp-top">
              <div>
                <h2 className="exp-role">{exp.role}</h2>
                <div className="exp-company-row">
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-company-link"
                    title={`Visit ${exp.company}`}
                  >
                    {exp.company} <FaExternalLinkAlt className="inline-ext" />
                  </a>
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

            {/* Featured Internship Project Callout */}
            <div className="intern-project-callout glass-panel">
              <div className="callout-header">
                <div className="callout-title-wrap">
                  <FaCodeBranch className="callout-icon" />
                  <span className="callout-label">Primary Project Built:</span>
                  <strong>{exp.projectTitle}</strong>
                </div>

                <div className="callout-links">
                  <a
                    href={exp.projectDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="callout-link live-link"
                  >
                    (Live Demo ↗)
                  </a>
                  <a
                    href={exp.projectGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="callout-link"
                  >
                    (GitHub)
                  </a>
                </div>
              </div>
              <p className="exp-desc">{exp.description}</p>
            </div>

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