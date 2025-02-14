import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import OralFix from "../assets/OralFix_Showcase.png";
import Artboard from "../assets/Artboard_Showcase.png";

import Clock from "react-bootstrap-icons/dist/icons/clock";
import Github from "react-bootstrap-icons/dist/icons/github";
import Live from "react-bootstrap-icons/dist/icons/box-arrow-up-right";

const Projects = () => {
  return (
    <section
      className="empty-content"
      style={{ backgroundColor: "#fbfbfb" }}
      id="projects"
    >
      <Container fluid className="text-center p-5">
        <h1 className="pb-5 fw-semibold">My Projects</h1>
        <Row className="gy-4 project-cards" lg={3} md={2} sm={1} xs={1}>
          <Col className="px-sm-3 px-0" lg={4}>
            <Card style={{ height: "100%" }}>
              <Card.Img variant="top" src={OralFix} />
              <Card.Body className="text-start pb-0">
                <Card.Title className="fw-semibold fs-4">
                  Oral Fix (Demo)
                </Card.Title>
                <Card.Text>
                  Bright smiles, expert care—your trusted dental service online!
                </Card.Text>
                <div className="card-tags my-2">
                  <div
                    className="px-2"
                    style={{ color: "#3258c2", backgroundColor: "#d5e7fa" }}
                  >
                    React
                  </div>
                  <div
                    className="px-2"
                    style={{ color: "#20BD9C", backgroundColor: "#d3f9e3" }}
                  >
                    NodeJS
                  </div>
                  <div
                    className="px-2"
                    style={{ color: "#9e812e", backgroundColor: "#ffefca" }}
                  >
                    Vite
                  </div>
                  <div
                    className="px-2"
                    style={{ color: "#8c7cde", backgroundColor: "#e4dfff" }}
                  >
                    Bootstrap5
                  </div>
                </div>
                <div className="card-links">
                  <a
                    href="https://github.com/ZatixVFX/OralFix"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <Github className="fs-5" />
                    </span>
                    <p className="ps-1 py-1">Code</p>
                  </a>
                  <a
                    href="https://oralfix.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <Live />
                    </span>
                    <p className="ps-1 py-1">Live</p>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="px-sm-3 px-0" lg={4}>
            <Card style={{ height: "100%" }}>
              <Card.Img variant="top" src={Artboard} />
              <Card.Body className="text-start pb-0">
                <Card.Title className="fw-semibold fs-4">
                  Artboard (Demo)
                </Card.Title>
                <Card.Text>
                  Efficient admin dashboard for finance and projects—track,
                  manage, optimize and much more
                </Card.Text>
                <div className="card-tags my-2">
                  <div
                    className="px-2"
                    style={{ color: "#3258c2", backgroundColor: "#d5e7fa" }}
                  >
                    React
                  </div>
                  <div
                    className="px-2"
                    style={{ color: "#3fa1ba", backgroundColor: "#c3f2ff" }}
                  >
                    Redux
                  </div>
                  <div
                    className="px-2"
                    style={{ color: "#20BD9C", backgroundColor: "#d3f9e3" }}
                  >
                    NodeJS
                  </div>
                  <div
                    className="px-2"
                    style={{ color: "#9e812e", backgroundColor: "#ffefca" }}
                  >
                    Vite
                  </div>
                  <div
                    className="px-2"
                    style={{ color: "#8c7cde", backgroundColor: "#e4dfff" }}
                  >
                    Bootstrap5
                  </div>
                  <div
                    className="px-2"
                    style={{ color: "#428f20", backgroundColor: "#d0e8c5" }}
                  >
                    MongoDB
                  </div>
                  <div
                    className="px-2"
                    style={{ color: "#2291ff", backgroundColor: "#badafa" }}
                  >
                    Expressjs
                  </div>
                </div>
                <div className="card-links">
                  <a
                    href="https://github.com/ZatixVFX/admin-dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <Github className="fs-5" />
                    </span>
                    <p className="ps-1 py-1">Code</p>
                  </a>
                  <a
                    href="https://admin-dashboard-ayss.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <Live />
                    </span>
                    <p className="ps-1 py-1">Live</p>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="px-sm-3 px-0" lg={4}>
            <Card style={{ height: "100%" }}>
              <div className="placeholder-card">
                <Clock />
              </div>
              {/* <Card.Img
                variant="top"
                src="https://fakeimg.pl/3800x3000?text=Coming+Soon...&font_size=300"
                height="350px"
              /> */}
              <Card.Body className="text-start">
                <Card.Title className="fw-semibold fs-4">
                  Future project
                </Card.Title>
                <Card.Text>
                  Exciting new project under developement.
                  <br />
                  Stay tuned for future updates
                </Card.Text>
                <div className="card-tags d-block my-2">
                  <div
                    style={{
                      width: "100px",
                      backgroundColor: "var(--bs-gray-400)",
                    }}
                  >
                    Next project
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
