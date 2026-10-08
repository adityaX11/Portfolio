import {
  FaExternalLinkAlt,
  FaFileDownload,
  FaUserGraduate,
  FaCode,
  FaBriefcase,
  FaEnvelope,
  FaAward,
} from "react-icons/fa";

export default function ResumeSection() {
  const resumePdfPath = "/Aditya_Kumar_Resume.pdf";
  const resumePreviewPath = "/resume_v2.png";

  return (
    <article className="page-content">
      <header className="page-header">
        <h1 className="page-title">Resume</h1>
        <p className="page-subtitle">
          Summary of my technical qualifications, engineering competencies, and professional background.
        </p>
      </header>

      {/* Action Bar */}
      <div className="resume-actions-bar">
        <a
          href={resumePdfPath}
          download="Aditya_Kumar_Resume.pdf"
          className="btn-primary"
        >
          <FaFileDownload className="btn-icon" /> Download PDF Resume
        </a>

        <a
          href={resumePdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary glass-btn"
        >
          <FaExternalLinkAlt className="btn-icon" /> View PDF in New Tab ↗
        </a>
      </div>

      {/* Resume Highlights Summary matching uploaded resume */}
      <div className="resume-summary-box glass-panel">
        <h3>Resume Overview &amp; Highlights</h3>
        <div className="summary-grid">
          <div className="summary-item">
            <FaUserGraduate className="check-icon" />
            <div>
              <strong>Education:</strong> B.Tech CSE (Artificial Intelligence), MAIT Delhi (Aug 2023 – June 2027, CGPA: 8.86)
            </div>
          </div>
          <div className="summary-item">
            <FaBriefcase className="check-icon" />
            <div>
              <strong>Internship:</strong> ML &amp; Python Developer Intern at CantiLever (Jul 2025 – Aug 2025)
            </div>
          </div>
          <div className="summary-item">
            <FaCode className="check-icon" />
            <div>
              <strong>Technical Stack:</strong> Python, C++, JavaScript, SQL, Scikit-Learn, Deep Learning (ANN, RNN, LSTM, Transformers), React, Node, Express, MongoDB
            </div>
          </div>
          <div className="summary-item">
            <FaAward className="check-icon" />
            <div>
              <strong>Achievements:</strong> 500+ LeetCode DSA Problems, Samsung Innovation Campus, NPTEL ML Certification
            </div>
          </div>
          <div className="summary-item">
            <FaEnvelope className="check-icon" />
            <div>
              <strong>Contact:</strong> adityakumarsah4555@gmail.com • Delhi, India • +91 62058 79741
            </div>
          </div>
        </div>
      </div>

      {/* Visual Preview of Uploaded Resume */}
      <div className="resume-preview-container glass-panel">
        <div className="preview-header">
          <span>Curriculum Vitae Preview (Latest Uploaded Version)</span>
          <a
            href={resumePdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="preview-link"
          >
            Open Original PDF ↗
          </a>
        </div>
        <div className="preview-image-wrapper">
          <img
            src={resumePreviewPath}
            alt="Aditya Kumar Latest Resume"
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