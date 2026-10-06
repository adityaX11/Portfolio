import { FaExternalLinkAlt, FaUserGraduate, FaCode, FaBriefcase, FaEnvelope } from "react-icons/fa";

export default function ResumeSection() {
  const resumePreviewPath = "/resume_v2.png";

  return (
    <article className="page-content">
      <header className="page-header">
        <h1 className="page-title">Resume</h1>
        <p className="page-subtitle">
          Summary of my qualifications, engineering competencies, and professional background.
        </p>
      </header>

      {/* Action Bar */}
      <div className="resume-actions-bar">
        <a
          href={resumePreviewPath}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <FaExternalLinkAlt className="btn-icon" /> Open Full-Resolution Resume ↗
        </a>
      </div>

      {/* Resume Highlights Summary */}
      <div className="resume-summary-box glass-panel">
        <h3>Resume Highlights</h3>
        <div className="summary-grid">
          <div className="summary-item">
            <FaUserGraduate className="check-icon" />
            <div>
              <strong>Education:</strong> B.Tech CSE (Artificial Intelligence), MAIT Delhi (2023 – 2027, CGPA: 8.86)
            </div>
          </div>
          <div className="summary-item">
            <FaBriefcase className="check-icon" />
            <div>
              <strong>Experience:</strong> ML &amp; Python Intern at Cantiliver.in (Fraud detection &amp; ETL automation)
            </div>
          </div>
          <div className="summary-item">
            <FaCode className="check-icon" />
            <div>
              <strong>Core Competencies:</strong> Machine Learning, Deep Learning, Scikit-learn, Python, C++, DSA, React.js
            </div>
          </div>
          <div className="summary-item">
            <FaEnvelope className="check-icon" />
            <div>
              <strong>Contact:</strong> adityakumarsah4555@gmail.com • Delhi, India
            </div>
          </div>
        </div>
      </div>

      {/* Visual Preview */}
      <div className="resume-preview-container glass-panel">
        <div className="preview-header">
          <span>Curriculum Vitae Preview</span>
          <a
            href={resumePreviewPath}
            target="_blank"
            rel="noopener noreferrer"
            className="preview-link"
          >
            Open in New Window ↗
          </a>
        </div>
        <div className="preview-image-wrapper">
          <img
            src={resumePreviewPath}
            alt="Aditya Kumar Resume"
            className="resume-preview-img"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
      </div>
    </article>
  );
}