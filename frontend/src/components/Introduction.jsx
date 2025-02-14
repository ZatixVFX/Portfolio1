import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import Avatar from "../assets/avatar.svg";
import Img from "../assets/image-of-me.png";

const Introduction = () => {
  const [extraSm, setExtraSm] = useState();

  window
    .matchMedia("(max-width: 375px)")
    .addEventListener("change", (e) => setExtraSm(e.matches));

  return (
    <section>
      <Container fluid className="p-5 pt-lg-5 pt-0">
        <Row className="py-lg-5 px-lg-0 pt-0" lg={2} xs={1}>
          <Col className="py-5 py-sm-5 px-md-4 px-0 my-auto">
            <h1 className="fw-bold" style={{ fontSize: "70px" }}>
              Hi, I'm <span className="fw-bold text-gradient">Junaid</span>{" "}
              <span className="surname">Salie</span>
            </h1>
            <p className="fs-4 fw-medium">
              Web Developer crafting beautiful and functional web experiences
            </p>
            <div className="d-flex gap-3 flex-sm-row flex-column">
              <Button size="lg" href="#contact">
                Get in touch
              </Button>
              <Button
                className="btn-outline-primary"
                variant="light"
                size="lg"
                href="#projects"
              >
                View work
              </Button>
            </div>
          </Col>
          <Col className="p-5 py-0 py-sm-3 px-0 m-auto text-center">
            <Image src={Avatar} className="intro-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Introduction;
