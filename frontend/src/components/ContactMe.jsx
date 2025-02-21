import { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { toast } from "react-toastify";

import Map from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMSG] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let id = toast.loading("Sending Message");
    await axios
      .post("http://localhost:5000/api/send_mail", {
        name,
        email,
        msg,
      })
      .then((res) => {
        toast.update(id, {
          render: "Message sent",
          type: "success",
          isLoading: false,
          closeButton: true,
          autoClose: 5000,
        });
      })
      .catch((error) => {
        toast.update(id, {
          render: error.response
            ? error.response.data.msg
            : "Failed to send message",
          type: "error",
          isLoading: false,
          closeButton: true,
          autoClose: 5000,
        });
        console.log(error.message);
      });
  };
  return (
    <section id="contact">
      <Container fluid className="p-5">
        <h1 className="pb-5 fw-semibold text-center">Get in touch</h1>
        <Row className="gap-md-5">
          <Col md={6} className="px-lg-5 px-sm-3">
            <Form onSubmit={onSubmitHandler} className=" mx-auto">
              <Row lg={1} xs={1} className="mb-3 gy-3">
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Your name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="your@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    placeholder="Your message"
                    onChange={(e) => setMSG(e.target.value)}
                    style={{ minHeight: "100px", maxHeight: "100px" }}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Button className="w-100 rounded" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col className="px-md-0 px-sm-3" md={5}>
            <div className="my-5">
              <Map
                mapboxAccessToken={import.meta.env.VITE_MAP_BOX_ACCESS_TOKEN}
                initialViewState={{
                  longitude: 18.6801368,
                  latitude: -34.0659164,
                  zoom: 6.5,
                }}
                mapStyle="mapbox://styles/mapbox/streets-v12"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactMe;
