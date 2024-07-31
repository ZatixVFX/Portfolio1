import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Hamburger from "hamburger-react";

const Header = () => {
  const [onScroll, setOnScroll] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const EventListenerScroll = () => {
    if (window.scrollY >= 80) {
      setOnScroll(true);
    }
  };
  window.addEventListener("scroll", EventListenerScroll);
  return (
    <>
      <Navbar bg="primary" expand="lg" className="pt-3 pb-2 sticky-top">
        <Container>
          <Navbar.Brand href="#" className="fw-bold fs-4">
            Junaid Salie
          </Navbar.Brand>
          <NavbarToggle style={{ border: "0px" }}>
            <Hamburger toggled={isOpen} size={25} toggle={setOpen} />
          </NavbarToggle>
          <NavbarCollapse>
            <Nav className="ms-auto align-items-start">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
