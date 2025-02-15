import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Github from "react-bootstrap-icons/dist/icons/github";
import LinkedIn from "react-bootstrap-icons/dist/icons/linkedin";

const Footer = () => {
  return (
    <footer>
      <Container fluid className="py-4 px-md-5 px-4">
        <Row md={3} xs={1} className="gy-sm-0 gy-3 mx-4">
          <Col className="px-0">
            <a href="#home" className="fs-2 text-gradient">
              JS.
            </a>
          </Col>
          <Col md={3} className="px-0 socials">
            <ul className="ps-0 mb-md-0 mb-3">
              <li>
                <a
                  href="https://github.com/ZatixVFX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="fs-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/junaid-salie-244222170/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn className="fs-3" />
                </a>
              </li>
            </ul>
          </Col>
          <Col md={5} className="copywrite py-sm-0 pt-0 ">
            <div className="d-flex gap-3 flex-md-nowrap flex-wrap justify-content-md-end w-100">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} Junaid Salie. All rights
                reserved.
              </p>
              <a
                className="text-dark"
                href="https://drive.google.com/file/d/1n0sRiBhzhZJ3tippAr6ZPwuDiItOCH5L/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
