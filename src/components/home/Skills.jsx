import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import StackIcon from "tech-stack-icons";
import CharacterWork from "../../assets/undraw_hacker_mindset_re_8a33.svg";

const Skills = () => {
  const TechStack = [
    {
      name: "Javascript",
      icon: "js",
    },
    {
      name: "HTML",
      icon: "html5",
    },
    {
      name: "CSS",
      icon: "css3",
    },
    {
      name: "Bootstrap",
      icon: "bootstrap5",
    },
    {
      name: "MongoDB",
      icon: "mongodb",
    },
    {
      name: "Express",
      icon: "express",
    },
    {
      name: "React",
      icon: "reactjs",
    },
    {
      name: "NodeJS",
      icon: "nodejs",
    },
  ];

  return (
    <>
      <section
        className="p-5 mt-5 position-relative"
        style={{ minHeight: "95vh" }}
      >
        <Container className="text-center">
          {/* <h1 className="text-info">Tech Stack</h1>
          <p className="lead pt-3 pb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
            ducimus harum excepturi recusandae tempore facere!
          </p> */}
          {/* <Row>
            {TechStack.map((tech, index) => (
              <Col lg={3} md={3} sm={3} key={index} className="mb-3">
                {tech.name === "Express" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    height="100"
                    viewBox="0 0 50 50"
                  >
                    <path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
                  </svg>
                ) : (
                  <StackIcon name={tech.icon} />
                )}
                <p className="py-5 ps-3 fw-medium">{tech.name}</p>
              </Col>
            ))}
          </Row> */}
          <h1>Tech Stack</h1>
          <p className="lead py-3">
            These are the skills {"I've"} learnt throughout my career as a
            WebDeveloper
          </p>

          <Row className="align-items-center justify-content-between">
            <Col>
              <Row className="align-items-center">
                {TechStack.map((tech, index) => (
                  <Col
                    lg={2}
                    md={2}
                    sm={3}
                    key={index}
                    className="rounded-4 pt-3 mx-2 mb-3 icon-border"
                  >
                    {tech.name === "Express" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        fill="none"
                        height="80"
                        width="70"
                        viewBox="-1 -1 50 50"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          fill="black"
                          className="express-icon"
                          d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"
                        ></path>
                      </svg>
                    ) : (
                      <StackIcon name={tech.icon} />
                    )}
                    <p className="pt-4 pb-0 mb-2 fw-medium">{tech.name}</p>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col lg={6}>
              <Image
                src={CharacterWork}
                alt=""
                fluid
                width={400}
                // style={{ height: "800px" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <div className="projects-divider" id="projects">
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

export default Skills;
