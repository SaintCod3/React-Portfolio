import React from "react";
import { Nav, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";

function Navegation() {
  let location = useLocation();

  return (
    <React.Fragment>
      <Container>
        <Nav
          fill
          variant="tabs"
          defaultActiveKey={location.pathname}
          className="mb-4"
        >
          <Nav.Item>
            <IndexLinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </IndexLinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/projects">
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </Container>
    </React.Fragment>
  );
}

export default Navegation;
