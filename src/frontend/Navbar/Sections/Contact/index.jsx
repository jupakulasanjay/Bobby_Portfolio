import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="d-flex gap-5 justify-content-center contact-container">
      {/* LinkedIn Icon */}
      <div className="contact-icon-container">
        <a
          href="https://in.linkedin.com/in/bobby-pamarthi-3a7b8020b"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon-link"
        >
          <FaLinkedin className="contact-icon" />
          <span> LinkedIn</span>
        </a>
      </div>

      {/* Email Link */}
      <div className="contact-icon-container">
        <a
          href="mailto:bobypamarthi@gmail.com"
          className="contact-icon-link"
        >
          <FaEnvelope className="contact-icon" />
          <span> bobypamarthi@gmail.com</span>
        </a>
      </div>

      <div className="contact-icon-container">
        <a href="tel:+919391362955" className="contact-icon-link">
          <FaPhone className="contact-icon" />
          <span> +91 9391362955</span>
        </a>
      </div>
    </div>

    
  );
};

export default Contact;
