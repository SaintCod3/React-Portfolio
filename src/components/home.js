import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

function Home() {
  return (
    <React.Fragment>
      <Container>
        <Jumbotron>
          <h1 className="text-center font-weight-light mb-4">Welcome!</h1>
          <h4 className="text-center font-weight-light">
            I am Damian a Full Stack Developer who loves challenges and his cats
          </h4>
        </Jumbotron>
      </Container>
    </React.Fragment>
  );
}

export default Home;
