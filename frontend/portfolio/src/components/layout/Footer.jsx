import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <>
      <footer className="p-5 px-2 pt-4 pb-4 bg-primary">
        <Container fluid="lg">
          {/* <Row>
            <Col>
              <p className="lead">
                Junaid Salie &#8212; {new Date().getFullYear()}
              </p>
            </Col>
            <Col></Col>
          </Row> */}
          <Navbar expand="lg">
            <Container className="d-flex justify-content-center">
              <Navbar.Brand href="#" className="">
                Junaid Salie &#8212; {new Date().getFullYear()}
              </Navbar.Brand>
              <Nav className="ms-sm-auto">
                <Nav.Link href="#" className="py-0">
                  View Resume
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
