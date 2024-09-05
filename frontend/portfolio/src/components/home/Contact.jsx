import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EnvelopeFill from "react-bootstrap-icons/dist/icons/envelope-fill";
import TelephoneFill from "react-bootstrap-icons/dist/icons/telephone-fill";
import GeoaltFill from "react-bootstrap-icons/dist/icons/geo-alt-fill";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// import MapboxWorker from "mapbox-gl/dist/mapbox-gl-csp-worker";

const Contact = () => {
  return (
    <>
      <div className="contact-divider" id="contact">
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
      <section className="p-5 px-2 mt-5">
        <Container fluid="lg">
          <div className="text-lg-start text-sm-center">
            <h1>Contact</h1>
            <p className="lead pt-2">
              Let me hear what you have to say and I will get back to you asap
            </p>
          </div>

          <Row className="align-items-center pt-3">
            <Col md={4} className="text-lg-start mx-sm-auto text-sm-center">
              <ul style={{ listStyle: "none" }} className="px-0">
                <li className="pb-3">
                  <EnvelopeFill className="h5" />
                  <p className="fw-bold mb-0">Email</p>
                  <p>jsalie165@gmail.com</p>
                </li>
                <li className="pb-3">
                  <TelephoneFill className="h5" />
                  <p className="fw-bold mb-0">Phone</p>
                  <p>+27685193838</p>
                </li>
                <li className="pb-3">
                  <GeoaltFill className="h5" />
                  <p className="fw-bold mb-0">Location</p>
                  <p>Cape Town, South Africa</p>
                </li>
              </ul>
            </Col>
            <Col className="d-flex justify-content-center justify-content-lg-start">
              <Map
                mapboxAccessToken={import.meta.env.VITE_MAP_BOX_ACCESS_TOKEN}
                initialViewState={{
                  longitude: 18.6801368,
                  latitude: -34.0659164,
                  zoom: 6.5,
                }}
                style={{
                  width: 550,
                  height: 300,
                }}
                mapStyle="mapbox://styles/mapbox/streets-v12"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <div className="footer-divider">
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

export default Contact;
