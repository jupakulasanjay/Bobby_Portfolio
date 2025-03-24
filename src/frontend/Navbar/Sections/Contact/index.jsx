import { FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="d-flex gap-5 justify-content-center contact-container">
      {/* GitHub Icon */}
      <div className="contact-icon-container">
        <a
          href="https://github.com/jupakulasanjay"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon-link"
        >
          <FaGithub className="contact-icon" />
          <span> Github</span>
        </a>
      </div>

      {/* Email Link */}
      <div className="contact-icon-container">
        <a
          href="mailto:sanjayjupakula@gmail.com"
          className="contact-icon-link"
        >
          <FaEnvelope className="contact-icon" />
          <span> sanjayjupakula@gmail.com</span>
        </a>
      </div>

      <div className="contact-icon-container">
        <a href="tel:+919010180960" className="contact-icon-link">
          <FaPhone className="contact-icon" />
          <span> +91 9010180960</span>
        </a>
      </div>
    </div>

    
  );
};

export default Contact;
