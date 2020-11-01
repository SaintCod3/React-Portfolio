import React, { Component } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";

class Contact extends Component {
  state = {};
  handleSubmit = e => {
    e.preventDefault();
    const correo =
      "mailto:damianmartin95@gmail.com?subject=New message from " +
      this.refs.firstName.value +
      " " +
      this.refs.lastName.value +
      "&body=" +
      this.refs.message.value;
    window.open(correo);
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <h3 className="font-weight-light mb-4 text-center">
            You can contact me directly using the contact form below or via
            LinkedIn
          </h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Row className="mb-2">
              <Col>
                <Form.Label> First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="firstName"
                  ref="firstName"
                  placeholder="First name"
                />
              </Col>
              <Col>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="lastName"
                  ref="lastName"
                  placeholder="Last name"
                />
              </Col>
            </Form.Row>
            <Form.Group controlId="message">
              <Form.Label>Your message</Form.Label>
              <Form.Control as="textarea" ref="message" rows="3" />
            </Form.Group>
            <Button variant="dark" type="submit" className="mb-2">
              Submit
            </Button>
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}

export default Contact;
