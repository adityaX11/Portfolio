import { motion } from "framer-motion";

const experiences = [
  {
    type: "Internship",
    role: "Machine Learning And Python Developer Intern",
    company: "Cantiliver.in",
    duration: "Jun 2025 – Aug 2025",
    location: "Remote",
    points: [
      " Engineered automated Python-based data preprocessing pipelines using Pandas and NumPy, reducing manual processing effort by approximately 35% across multiple machine learning workflows.",
      " Built and evaluated classification models using Scikit-Learn, implementing feature engineering, model evluation, cross-validation, and hyperparameter tuning, improving F1-score by 12%.",
      "Developed fraud detection solutions using Logistic Regression and Random Forest algorithms, achieving 99% AUC while optimizing model performance and reducing false positives.",
    ],
    tech: ["Python", "Scikit-learn", "Pandas","Numpy","Matplotlib","Seaborn","EDA","tkinter"],
  },
//   {
//     type: "Experience",
//     role: "Freelance Full Stack Developer",
//     company: "Self-employed",
//     duration: "2024 – Present",
//     location: "Remote",
//     points: [
//       "Designed and developed modern portfolio and business websites.",
//       "Built scalable frontend architectures with React and performance optimizations.",
//       "Integrated APIs, authentication, and deployment workflows.",
//     ],
//     tech: ["React", "Node.js", "MongoDB", "Vercel"],
//   },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="exp-list">
        {experiences.map((item, idx) => (
          <motion.article
            key={idx}
            className="exp-card"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="exp-head">
              <span className={`exp-pill ${item.type.toLowerCase()}`}>{item.type}</span>
              <span className="exp-duration">{item.duration}</span>
            </div>

            <h3>{item.role}</h3>
            <p className="exp-company">
              {item.company} • {item.location}
            </p>

            <ul>
              {item.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>

            <div className="exp-tech">
              {item.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}