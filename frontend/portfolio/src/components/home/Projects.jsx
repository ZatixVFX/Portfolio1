import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import OralFixShowcase from "../../assets/Projects/Oral_Fix.png";
import OralFix from "../../assets/Projects/Oral-Fix.svg";

const Projects = () => {
  const myProjects = [
    {
      name: "OralFix",
      url: "https://oralfix.netlify.app/",
      sourceCode: "",
      img: OralFixShowcase,
      overlayImg: OralFix,
    },
    {
      name: "placeholder",
      url: "",
      sourceCode: "",
      img: "",
    },
    {
      name: "placeholder",
      url: "",
      sourceCode: "",
      img: "",
    },
    {
      name: "placeholder",
      url: "",
      sourceCode: "",
      img: "",
    },
    {
      name: "placeholder",
      url: "",
      sourceCode: "",
      img: "",
    },
    {
      name: "placeholder",
      url: "",
      sourceCode: "",
      img: "",
    },
  ];
  return (
    <>
      <div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
          <path
            fill="#051923"
            fillOpacity="1"
            d="M0,256L1440,128L1440,320L0,320Z"
          ></path>
        </svg> */}
      </div>
      <section className="p-5 px-2 projects bg-primary">
        <Container fluid="lg" className="text-center text-light">
          <h1>Projects</h1>
          <p className="lead pt-3 pb-5">
            View my projects that {"I've"} built throughout my career
          </p>
          <Row className="gy-5">
            {myProjects.map((project) => (
              <>
                <Col className="d-flex justify-content-center">
                  <div className="img-wrapper ">
                    <Image
                      src={
                        project.name === "placeholder"
                          ? "https://placehold.co/400?text=Coming+Soon"
                          : project.img
                      }
                      className="img"
                      alt={`${project.name} image`}
                      style={{
                        width: "350px",
                        height: "350px",
                      }}
                    />
                    <div className="img-overlay mx-auto d-flex flex-column justify-content-center align-items-center">
                      {project.overlayImg ? (
                        <Image
                          src={project.overlayImg}
                          width="50%"
                          alt={project.name}
                        />
                      ) : null}
                      <Button
                        as="a"
                        href={project.url}
                        target="_blank"
                        size="md"
                        className="btn-responsive mt-4"
                      >
                        View
                      </Button>
                    </div>
                  </div>
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Projects;
