import { Container, Row, Col, Card } from "react-bootstrap";

const aboutSections = [
  {
    title: "Our Philosophy",
    description:
      "We build digital ecosystems that generate sustainable revenue.",
    icon: new URL("../assets/philosophy.gif", import.meta.url).href,
  },
  {
    title: "Our Mission",
    description:
      "To empower businesses through innovative, data-driven strategies that convert traffic into loyal customers.",
    icon: new URL("../assets/mission.gif", import.meta.url).href,
  },
  {
    title: "Our Vision",
    description:
      "To become a trusted digital partner for brands worldwide, delivering consistent impact and growth.",
    icon: new URL("../assets/vision.gif", import.meta.url).href,
  },
];

const About = () => (
  <section id="about" className="py-16 px-6 bg-light">
    <Container>
      <h2 className="text-4xl font-bold text-center mb-6 text-primary-900">
        Who We Are
      </h2>
      <p
        className="text-center mx-auto mb-5 text-primary-500 fs-5"
        style={{ maxWidth: "720px" }}
      >
        At Unikrafters, we are more than just a digital marketing agency — we
        are growth partners for ambitious brands.
      </p>
      <Row className="g-4 justify-content-center">
        {aboutSections.map(({ title, description, icon }) => (
          <Col key={title} md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0 rounded-4 overflow-hidden hover-scale bg-white">
              <Card.Img
                variant="top"
                src={icon}
                alt={title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="text-primary-500 d-flex align-items-center justify-content-between">
                    {title}
                  </Card.Title>
                  <Card.Text className="text-muted">{description}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default About;
