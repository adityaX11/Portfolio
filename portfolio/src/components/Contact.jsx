import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCopy,
  FaCheck,
  FaPaperPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [copied, setCopied] = useState(false);

  const emailAddress = "adityakumarsah4555@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", message: "" });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_gs2lpqd";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_t3oj9ha";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "e7Hnszl2MzsuZ3YRR";

    if (!serviceId || !templateId || !publicKey) {
      window.location.href = `mailto:${emailAddress}?subject=Contact from Portfolio&body=Hello Aditya,`;
      setStatus({
        type: "info",
        message:
          "Opening your email client... (EmailJS credentials not configured)",
      });
      setSending(false);
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
      });
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message:
          "Could not send message automatically. Please email me directly at " +
          emailAddress,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <article className="page-content">
      <header className="page-header">
        <h1 className="page-title">Contact</h1>
        <p className="page-subtitle">
          Have an opportunity, collaboration idea, or a question? I&apos;d love to hear from you.
        </p>
      </header>

      {/* Direct Contact Cards */}
      <div className="contact-info-grid">
        <div className="contact-box glass-panel">
          <div className="contact-box-header">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p className="contact-val">{emailAddress}</p>
            </div>
          </div>
          <div className="contact-box-actions">
            <a href={`mailto:${emailAddress}`} className="btn-small glass-btn">
              Send Email
            </a>
            <button
              onClick={handleCopyEmail}
              className="btn-small btn-copy glass-btn"
              type="button"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <FaCheck /> Copied!
                </>
              ) : (
                <>
                  <FaCopy /> Copy
                </>
              )}
            </button>
          </div>
        </div>

        <div className="social-links-card glass-panel">
          <h3>Profiles &amp; Social Platforms</h3>
          <div className="social-pills">
            <a
              href="https://github.com/adityaX11"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill glass-btn"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-kumar-878201322/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill glass-btn"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://x.com/dityA5757"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill glass-btn"
            >
              <FaXTwitter /> X (Twitter)
            </a>
            <a
              href="https://leetcode.com/u/Aditya_leet_11/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill glass-btn"
            >
              <SiLeetcode /> LeetCode
            </a>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* Message Form */}
      <div className="contact-form-section glass-panel">
        <h2>Send a Message</h2>
        <p>Feel free to fill out the form below and I&apos;ll get back to you promptly.</p>

        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="user_name">Your Name</label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                placeholder="e.g. John Doe"
                required
                className="form-input glass-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="user_email">Your Email</label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                placeholder="e.g. john@example.com"
                required
                className="form-input glass-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Write your message here..."
              required
              className="form-textarea glass-input"
            />
          </div>

          <button
            type="submit"
            className="btn-primary submit-btn"
            disabled={sending}
          >
            <FaPaperPlane className="btn-icon" />
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status.message && (
          <div className={`form-feedback ${status.type}`}>
            {status.message}
          </div>
        )}
      </div>
    </article>
  );
}