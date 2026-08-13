export default function ResumeSection() {
  return (
    <section id="resume" className="section card">
      <h2>Resume</h2>
      <p>Preview and download my latest resume.</p>

      <div className="resume-wrap">
        <img
          src="/resume_v2.png"
          alt="Resume Preview"
          className="resume-image"
        />
      </div>

      <a className="btn" href="/Aditya_Kumar_Resume.pdf" download>
        Download Resume PDF
      </a>
    </section>
  );
}