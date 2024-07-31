import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const Projects = () => {
  const myProjects = [
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
      <section className="p-5 projects bg-primary">
        <Container className="text-center text-light">
          <h1>Projects</h1>
          <p className="lead pt-3 pb-5">
            View my projects that {"I've"} built throughout my career
          </p>
          <Row className="justify-content-between">
            {myProjects.map((project) => (
              <>
                <Col lg={4} md={4} className="p-3 ">
                  <div className="img-wrapper">
                    <Image
                      src="https://placehold.co/400"
                      width="75%"
                      className="img"
                      // height="10%"
                      alt={`${project.name} image`}
                    />
                    <div className="img-overlay">
                      <Button className="btn-responsive">View</Button>
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
