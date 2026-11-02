import { useState } from "react";
import { Container, Carousel, Image } from "react-bootstrap";

const data = [
  {
    name: "Rohit Sharma",
    role: "CEO, ExampleCo",
    quote:
      "Unikrafters transformed our pipeline. Conversions rose 3x in three months.",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Neha Patel",
    role: "Head of Growth, ShopNow",
    quote:
      "Their data-driven approach and creative assets helped our brand stand out.",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Aisha Khan",
    role: "Marketing Lead, BrightApps",
    quote: "A smooth process and measurable results — highly recommended.",
    image: "https://i.pravatar.cc/150?img=7",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: number) => setIndex(selectedIndex);

  return (
    <section className="py-5 px-3 text-center bg-light">
      <Container>
        <h2 className="text-3xl font-bold mb-4 text-primary-900">
          Success Stories
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-primary-500">
          Hear what our clients say about working with Unikrafters.
        </p>

        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={6000}
          fade
          indicators={false}
        >
          {data.map((t, i) => (
            <Carousel.Item key={i}>
              <div className="d-flex flex-column align-items-center">
                <Image
                  src={t.image}
                  roundedCircle
                  width={100}
                  height={100}
                  className="mb-4 shadow"
                  alt={t.name}
                />
                <blockquote
                  className="blockquote mb-3"
                  style={{ maxWidth: "700px" }}
                >
                  <p className="fs-5 fst-italic text-dark">“{t.quote}”</p>
                </blockquote>
                <figcaption className="blockquote-footer text-muted">
                  {t.name}, <cite title={t.role}>{t.role}</cite>
                </figcaption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonials;
