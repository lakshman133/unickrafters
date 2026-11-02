import { Navbar as RBNavbar, Nav, Container } from "react-bootstrap";

const Navbar = () => (
  <RBNavbar expand="lg" className="site-nav">
    <Container>
      <RBNavbar.Brand
        href="#home"
        className="text-xl font-bold text-primary-700"
      >
        Unikrafters
      </RBNavbar.Brand>
      <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
      <RBNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <Nav.Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-colors"
            >
              {item}
            </Nav.Link>
          ))}
        </Nav>
      </RBNavbar.Collapse>
    </Container>
  </RBNavbar>
);

export default Navbar;
