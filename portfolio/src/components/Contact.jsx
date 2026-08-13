import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("✅ Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Check EmailJS keys.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section card">
      <h2>Contact</h2>
      <p>Let’s collaborate on something great.</p>

      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit" className="btn" disabled={sending}>
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status && <p className="form-status">{status}</p>}

      <div className="socials">
        <a href="https://github.com/adityaX11" target="_blank" rel="noreferrer">
          <FaGithub /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/aditya-kumar-878201322/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a href="mailto:adityakumarsah4555@gmail.com">
          <FaEnvelope /> Email
        </a>
      </div>
    </section>
  );
}