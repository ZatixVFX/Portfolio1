import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Code from "react-bootstrap-icons/dist/icons/code-slash";
import Mobile from "react-bootstrap-icons/dist/icons/phone";
import Performance from "react-bootstrap-icons/dist/icons/rocket-takeoff";
import Collaborative from "react-bootstrap-icons/dist/icons/people-fill";

const AboutMe = () => {
  return (
    <section
      className="empty-content"
      style={{ backgroundColor: "#fbfbfb" }}
      id="about"
    >
      <Container fluid className="p-5">
        <h1 className="pb-lg-5 pb-4 fw-semibold text-center">About Me</h1>
        <Row className="gy-5" lg={2} xs={1}>
          <Col className="d-flex px-lg-5 px-sm-3 px-0">
            <p className="fs-5 my-auto">
              I am a dedicated, hardworking and disciplined individual. I have a
              good upbringing which I believe has given me good morals and
              ethics – including taking responsibility, being respectful and
              showing good manners. I believe that thinking positively will
              ultimately result in a positive outcome.
            </p>
          </Col>
          <Col>
            <Row className="gy-3" sm={2} xs={1}>
              {[
                {
                  icon: Code,
                  header: "Clean Code",
                  text: "Writing maintainable and efficient code",
                },
                {
                  icon: Mobile,
                  header: "Responsive",
                  text: "Mobile-first approach to design",
                },
                {
                  icon: Performance,
                  header: "Performance",
                  text: "Optimized for speed and efficiency",
                },
                {
                  icon: Collaborative,
                  header: "Collaborative",
                  text: "Great team player and communicator",
                },
              ].map((Data, index) => (
                <Col className="px-sm-2 px-0" key={`item-${index}`}>
                  <div className="about-me-card p-3 h-100">
                    <Data.icon className="fs-3 mb-1 text-primary" />
                    <h4 className="fw-semibold mb-1">{Data.header}</h4>
                    <p className="text-grey mb-0">{Data.text}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
