const Contact = () => (
  <section id="contact" className="py-16 px-6 surface text-center">
    <h2 className="text-4xl font-bold text-center mb-6 text-primary-300">
      Contact Us
    </h2>
    <div
      className="max-w-2xl mx-auto"
      style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
    >
      <p className="transition-colors hover-text-primary-800">
        📍 Address: [Your Business Address Here]
      </p>
      <p className="transition-colors hover-text-primary-800">
        📧 Email: lakshman.258456@gmail.com
      </p>
      <p className="transition-colors hover-text-primary-800">
        📞 Phone: +91-9493206719
      </p>
    </div>
    <div className="text-center mt-8">
      <a
        href="https://calendly.com/moturisoumya24/marketing"
        className="btn-primary"
      >
        Schedule a Call
      </a>
    </div>
  </section>
);
export default Contact;
