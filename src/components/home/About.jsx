import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Persona from "../../assets/undraw_code_thinking_re_gka2.svg";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="p-5 about-me text-center bg-primary position-relative "
      >
        <Container className="pt-lg-3 mb-5 py-1">
          <Row className="align-items-center justify-content-between text-light">
            {/* <Col sm={1}>"http://www.w3.org/2000/svg">
                <line
              <svg height="365" width="10" xmlns=
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="240"
                  style={{ stroke: "#00f0ff", strokeWidth: 5 }}
                />
                Sorry, your browser does not support inline SVG.
              </svg>
            </Col> */}
            {/* <Col>
              <Row lg={2} md={1}>
                
              </Row>
            </Col> */}
            <Col md={6} xs className="p-5 order-1 order-lg-1 text-start">
              <h1 className="fw-medium fs-1">About Me</h1>
              <h2 className="text-secondary fw-semibold fs-1">
                Enthusiast WebDeveloper
              </h2>

              <p className="lead">
                I am a dedicated, hardworking and disciplined individual. I have
                a good upbringing which I believe has given me good morals and
                ethics – including taking responsibility, being respectful and
                showing good manners. I believe that thinking positively will
                ultimately result in a positive outcome.
              </p>
            </Col>
            <Col md={6} className="order-md-1 p-5">
              <Image src={Persona} fluid alt="about-me-img" />
            </Col>
          </Row>
        </Container>
      </section>
      <div className="about-divider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -1 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default About;
