export default function About({ onNavigate }) {
  const handleJump = (tabId) => {
    if (onNavigate) {
      onNavigate(tabId);
      if (typeof window !== "undefined") {
        window.history.pushState(null, "", `#${tabId}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <article className="page-content">
      <header className="page-header">
        <h1 className="page-title">About me</h1>
      </header>

      <div className="prose">
        <h2 className="greeting-heading">Hi! I&apos;m Aditya 👋</h2>

        <p>
          I am a B.Tech Computer Science and Engineering student (<strong>2023 – 2027</strong>) at{" "}
          <strong>Maharaja Agrasen Institute of Technology (MAIT)</strong>, Delhi (CGPA: <strong>8.86</strong>), 
          specializing in <strong>Artificial Intelligence and Machine Learning</strong>.
        </p>

        <p>
          My focus revolves around understanding how learning algorithms behave under the hood and engineering practical, 
          scalable applications around them. From designing machine learning models using Python and Scikit-learn to developing 
          responsive full-stack web applications and RESTful APIs, I enjoy bridging the gap between algorithmic research and real-world deployment.
        </p>

        <p>
          I have hands-on experience building automated data preprocessing pipelines, fraud detection systems, predictive machine learning models, 
          and full-stack tools. I have a strong foundation in <strong>Data Structures &amp; Algorithms (C++)</strong>, SQL, 
          Object-Oriented Programming (OOPs), and Database Management Systems (DBMS).
        </p>

        <p>
          I am deeply curious about modern advancements in AI agents, deep learning architectures, and scalable cloud deployments. 
          When building software, I strive for clean architecture, high efficiency, and thoughtful user experiences.
        </p>

        <p>
          I am actively seeking opportunities as a <strong>Machine Learning Engineer</strong>, <strong>AI Engineer</strong>, 
          <strong>Data Analyst</strong>, or <strong>Software Developer</strong> to collaborate on high-impact technical challenges.
        </p>

        {/* Inspirational Quote */}
        <div className="about-quote glass-panel">
          <blockquote className="quote-text">
            “Winning isn&apos;t everything, but wanting to win is.”
          </blockquote>
        </div>

        {/* Subtle navigation pills to explore other sections */}
        <div className="about-explore-section">
          <span className="explore-label">Explore sections:</span>
          <div className="about-explore-row">
            <button
              onClick={() => handleJump("work")}
              className="explore-pill glass-btn"
            >
              Work / Projects →
            </button>
            <button
              onClick={() => handleJump("experience")}
              className="explore-pill glass-btn"
            >
              Experience →
            </button>
            <button
              onClick={() => handleJump("education")}
              className="explore-pill glass-btn"
            >
              Education →
            </button>
            <button
              onClick={() => handleJump("resume")}
              className="explore-pill glass-btn"
            >
              Resume →
            </button>
            <button
              onClick={() => handleJump("contact")}
              className="explore-pill glass-btn"
            >
              Contact →
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}