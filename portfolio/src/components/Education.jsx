import {
  FaGraduationCap,
  FaSchool,
  FaAward,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering (Artificial Intelligence)",
    institution: "Maharaja Agrasen Institute of Technology (MAIT)",
    affiliation: "Guru Gobind Singh Indraprastha University (GGSIPU), Delhi",
    duration: "2023 – 2027",
    location: "Delhi, India",
    locationUrl:
      "https://dmnorthwest.delhi.gov.in/public-utility/maharaja-agrasen-institute-of-technology/",
    scoreType: "CGPA",
    score: "8.86 / 10.0",
    badge: "Undergraduate (Pursuing)",
    highlights: [
      "Specialization in Artificial Intelligence & Machine Learning with coursework in Deep Learning, NLP, and Computer Vision.",
      "Comprehensive foundations in Data Structures & Algorithms (DSA in C++), Database Management Systems (DBMS), and Object-Oriented Programming (OOP).",
      "Actively built and deployed multiple machine learning pipelines, predictive modeling projects, and full-stack web applications.",
    ],
  },
  {
    degree: "Senior Secondary (Class 12th / Intermediate Science)",
    institution: "DR R N Singh Plus 2 School",
    affiliation: "Bihar School Examination Board (BSEB)",
    duration: "2021 – 2023",
    location: "Chapra, Bihar",
    locationUrl:
      "https://www.justdial.com/Chapra/Dr-R-N-Singh-Plus-2-School-Pratap-Nagar/9999P6152-6152-200926235650-S8K4_BZDET",
    scoreType: "Percentage",
    score: "85.20%",
    badge: "Class 12th",
    highlights: [
      "Stream: Science (Physics, Chemistry, Mathematics).",
      "Achieved 85.20% with strong analytical and problem-solving fundamentals in Mathematics and Science.",
    ],
  },
  {
    degree: "Secondary School Examination (Class 10th / Matriculation)",
    institution: "Rajendra Collegiate School",
    affiliation: "Bihar School Examination Board (BSEB)",
    duration: "2020 – 2021",
    location: "Chapra, Bihar",
    locationUrl:
      "https://www.justdial.com/Chapra/Rajendra-Collegiate-School-Takkad-Morde/9999P6152-6152-220519223958-I8N6_BZDET",
    scoreType: "Percentage",
    score: "83.20%",
    badge: "Class 10th",
    highlights: [
      "Graduated with 83.20% distinction under the Bihar School Examination Board.",
      "Active participation in school science exhibitions and mathematics competitions.",
    ],
  },
];

export default function Education() {
  return (
    <article className="page-content">
      <header className="page-header">
        <h1 className="page-title">Education</h1>
        <p className="page-subtitle">
          My academic foundation, degrees, school education, and campus location details.
        </p>
      </header>

      <div className="education-timeline">
        {educationData.map((edu, idx) => (
          <div key={idx} className="edu-timeline-card glass-panel">
            <div className="edu-top-row">
              <div className="edu-main-info">
                <div className="edu-badge-row">
                  <span className="edu-tag-pill">{edu.badge}</span>
                  <span className="edu-score-pill">
                    <FaAward className="pill-icon" /> {edu.scoreType}: <strong>{edu.score}</strong>
                  </span>
                </div>

                <h2 className="edu-degree-title">{edu.degree}</h2>

                <div className="edu-inst-row">
                  {idx === 0 ? (
                    <FaGraduationCap className="inst-icon" />
                  ) : (
                    <FaSchool className="inst-icon" />
                  )}
                  <span className="edu-school-name">{edu.institution}</span>
                </div>

                <p className="edu-board-name">{edu.affiliation}</p>
              </div>

              <div className="edu-meta-col">
                <span className="meta-badge">
                  <FaCalendarAlt className="meta-icon" /> {edu.duration}
                </span>

                <a
                  href={edu.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="meta-badge meta-location-link glass-btn"
                  title="View campus location on map"
                >
                  <FaMapMarkerAlt className="meta-icon location-pin" />
                  <span>{edu.location}</span>
                  <FaExternalLinkAlt className="ext-icon" />
                </a>
              </div>
            </div>

            <ul className="edu-highlights-list">
              {edu.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}
