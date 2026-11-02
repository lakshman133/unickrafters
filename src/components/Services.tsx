import { Container, Row, Col, Card } from "react-bootstrap";
import { FaSearch, FaGoogle, FaFacebook, FaPalette } from "react-icons/fa";

const services = [
  {
    title: "SEO",
    description:
      "Boost visibility with on-page optimization, backlinks, and keyword research.",
    icon: <FaSearch size={40} className="text-primary-300 mb-3" />,
  },
  {
    title: "Google Ads",
    description:
      "Full-spectrum campaigns across Search, Display, YouTube & Gmail.",
    icon: <FaGoogle size={40} className="text-primary-300 mb-3" />,
  },
  {
    title: "Meta Ads",
    description:
      "Precision-targeted ads on Facebook & Instagram with high ROI.",
    icon: <FaFacebook size={40} className="text-primary-300 mb-3" />,
  },
  {
    title: "Branding",
    description:
      "Cohesive identity through logo, messaging, and visual storytelling.",
    icon: <FaPalette size={40} className="text-primary-300 mb-3" />,
  },
];

const Services = () => (
  <section id="services" className="py-20 px-6 surface">
    <Container>
      <h2 className="text-4xl font-bold text-center mb-6 text-primary-300">
        Our Services
      </h2>
      <Row className="g-4 justify-content-center text-purple-300">
        {services.map(({ title, description, icon }) => (
          <Col key={title} xs={12} md={6} lg={5} className="d-flex">
            <Card className="card flex-fill shadow-sm border-0 rounded-4 text-center p-4 hover-scale">
              <Card.Body>
                {icon}
                <Card.Title className="text-xl font-semibold mb-2 text-primary-300">
                  {title}
                </Card.Title>
                <Card.Text className="text-gray-600">{description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Services;
