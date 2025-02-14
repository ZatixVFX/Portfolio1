import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StackIcon from "tech-stack-icons";

const Skills = () => {
  return (
    <section className="empty-content" id="skills">
      <Container fluid className="text-center p-5">
        <h1 className="pb-5 fw-semibold">My Skills</h1>
        <Row md={4} sm={2} xs={1} className="gy-4">
          <Col className="px-sm-3 px-0">
            <div className="skill-card p-1">
              <StackIcon name="html5" />
              <p className="fs-5">HTML</p>
            </div>
          </Col>
          <Col className="px-sm-3 px-0">
            <div className="skill-card p-1">
              <StackIcon name="css3" />
              <p className="fs-5">CSS</p>
            </div>
          </Col>
          <Col className="px-sm-3 px-0">
            <div className="skill-card p-1">
              <StackIcon name="bootstrap5" />
              <p className="fs-5">Bootstrap 5</p>
            </div>
          </Col>
          <Col className="px-sm-3 px-0">
            <div className="skill-card p-1">
              <StackIcon name="js" />
              <p className="fs-5">Javascript</p>
            </div>
          </Col>
          <Col className="px-sm-3 px-0">
            <div className="skill-card p-1">
              <StackIcon name="nodejs" />
              <p className="fs-5">Nodejs</p>
            </div>
          </Col>
          <Col className="px-sm-3 px-0">
            <div className="skill-card p-1">
              <StackIcon name="reactjs" />
              <p className="fs-5">Reactjs</p>
            </div>
          </Col>
          <Col className="px-sm-3 px-0">
            <div className="skill-card p-1">
              <StackIcon name="redux" />
              <p className="fs-5">Redux</p>
            </div>
          </Col>
          <Col className="px-sm-3 px-0">
            <div className="skill-card p-1">
              <StackIcon name="mongodb" />
              <p className="fs-5">MongoDB</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
