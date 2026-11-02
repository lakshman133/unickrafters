import { motion } from "framer-motion";
import { Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section className="hero position-relative overflow-hidden" id="home">
      <div className="hero-background"></div>

      {/* Main content */}
      <Container className="hero-container">
        <motion.div
          className="hero-content text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-title mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Where <span className="gradient-text">Creativity</span> Meets
            <br />
            Digital <span className="highlight">Excellence</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle mx-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Fuel Your Sales Pipeline with Our AI-Integrated Lead Generation
            Services – Turn Clicks into Loyal Customers!
          </motion.p>

          <motion.p
            className="hero-text mx-auto mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to scale your brand to new heights? You're in the right place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              href="https://calendly.com/moturisoumya24/marketing"
              className="hero-button"
              variant="primary"
            >
              Schedule a Call
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
