import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Nav, Container, Jumbotron, Image } from "react-bootstrap";
import Me from "../img/me.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

library.add(fab, faHome);

function header() {
  return (
    <React.Fragment>
      <Jumbotron fluid className="text-center cover-image">
        <Container>
          <Image
            src={Me}
            id="meImg"
            className="mx-auto d-block mb-2"
            roundedCircle
          />
          <h1 className="font-weight-light m-4">A. Damian Martin Atencia</h1>
          <h4 className="font-weight-light mb-5">Full Stack Developer</h4>
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link
                href="https://github.com/SaintCod3"
                target="new"
                className="text-white"
              >
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  size="lg"
                  pull="left"
                />
                GitHub
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://www.linkedin.com/in/antonio-damian-martin-atencia-04a3a0140/"
                target="new"
                className="text-white"
              >
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  size="lg"
                  pull="left"
                />
                LinkedIn
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Jumbotron>
    </React.Fragment>
  );
}

export default header;
