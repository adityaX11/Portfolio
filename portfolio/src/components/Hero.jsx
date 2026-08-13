import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
// import { FaGithub } from "react-icons/fa"; // here GITHUB icon desible now

export default function Hero() {
  return (
    <section id="hero" className="section hero hero-grid">
      <div className="hero-left">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="tag"
        >
          AI Engineer • ML Developer • Creative Technologist
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Building Intelligent Systems for the Future.
        </motion.h1>

        <motion.p
          className="subtext"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typewriter
            words={[
              "AI Engineer",
              "Machine Learning Engineer",
              "Deep Learning Enthusiast",
              "NLP Developer",
              "Data Scientist",
              "Full Stack Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={55}
            deleteSpeed={35}
            delaySpeed={1200}
          />
        </motion.p>

        <div className="hero-actions">
          <a href="#projects" className="btn">View Projects</a>
          <a href="/Aditya_Kumar_Resume.pdf" download className="btn btn-outline">
            Download Resume
          </a>
          {/* <a
            href="https://github.com/adityaX11"
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
            aria-label="GitHub"
          >
            <FaGithub />
          </a> */}
        </div>
      </div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <div className="profile-card">
          <img src="/profile.jpeg" alt="Aditya Kumar" className="profile-img" />
          <div className="profile-glow" />
        </div>
      </motion.div>
    </section>
  );
}