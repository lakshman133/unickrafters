import { Container } from "react-bootstrap";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => (
  <footer className="footer text-gray-600 py-4">
    <Container className="d-flex flex-column align-items-center text-center gap-3">
      <p className="mb-0 fw-semibold">
        &copy; 2025 Unikrafters. Made with ❤️ in India.
      </p>
      <p
        className="text-gray-600"
        style={{ fontSize: "0.9rem", maxWidth: "400px" }}
      >
        Crafting digital experiences with heart and soul.
      </p>
      <div className="d-flex flex-wrap justify-content-center text-gray-600 gap-4">
        <a
          href="mailto:hello@unikrafters.com"
          className="text-gray-600 text-decoration-none"
          style={{ transition: "color 0.3s" }}
        >
          Contact Us
        </a>
        <a
          href="https://www.instagram.com/unikrafters"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 text-decoration-none d-flex align-items-center gap-2"
          style={{ transition: "color 0.3s" }}
        >
          <FaInstagram />
          Instagram
        </a>
        <a
          href="https://www.facebook.com/unikrafters"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 text-decoration-none d-flex align-items-center gap-2"
          style={{ transition: "color 0.3s" }}
        >
          <FaFacebookF />
          Facebook
        </a>
        <a
          href="https://www.linkedin.com/company/unikrafters"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 text-decoration-none d-flex align-items-center gap-2"
          style={{ transition: "color 0.3s" }}
        >
          <FaLinkedinIn />
          LinkedIn
        </a>
      </div>
    </Container>
  </footer>
);

export default Footer;
