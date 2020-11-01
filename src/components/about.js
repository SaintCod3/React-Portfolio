import React from "react";
import { Container } from "react-bootstrap";

function About() {
  return (
    <React.Fragment>
      <Container>
        <h3 className="font-weight-light mb-2">About me</h3>
        <hr />
        <p className="font-weight-light">
          A highly competent and enthusiastic Technical Customer Support
          Specialist with experience of providing advice and practical
          assistance to system users via emails, social media and phone calls,
          confident individual with exceptional multi-tasking capabilities.
          Possessing excellent client facing skills and natural problem solving
          and currently studying Full-Stack developer at OpenClassrooms.
        </p>
        <h3 className="font-weight-light mb-2">Work History</h3>
        <hr />
        <ul>
          <li>
            <h5 className="font-weight-light mb-2">
              2019-06 - Current: Technical Customer Support Specialist at
              Smartsheet, Edinburgh
            </h5>
          </li>
          <li>
            <h5 className="font-weight-light mb-2">
              2017-09 - 2019-06: Tier 1 Technical Support Agent Sonos (Sykes),
              Edinburgh
            </h5>
          </li>
        </ul>
        <h3 className="font-weight-light mb-2">Education</h3>
        <hr />
        <ul>
          <li>
            <h5 className="font-weight-light mb-2">
              2019-09 - Current: Bachelor's Diploma: Full-Stack Developer
              OpenClassrooms - Digital Education Plataform
            </h5>
            <p className="font-weight-light">
              The coursework consists of several practical projects designed to
              emulate the kind of projects that Full-Stack developers do in a
              real-world setting. This is to ensure I graduate with the skill
              necessary to succeed and thrive in a real work environment.
              Examples include creating web sites using JavaScript, create Ruby
              on Rails applications, creating the Front-End of a project using
              React, also using platforms like WordPress.{" "}
            </p>
          </li>
          <li>
            <h5 className="font-weight-light mb-2">
              2016-06 - 2017-07: Microcomputer Systems And Networks Technicians
              Ilerna Online - Digital Education Plataform
            </h5>
            <p className="font-weight-light">
              Install, configure and maintain micro-information systems,
              isolated or networked, as well as local networks in small
              environments, ensuring their functionality and applying the
              established protocols of quality, safety and respect for the
              environment
            </p>
          </li>
        </ul>
      </Container>
    </React.Fragment>
  );
}

export default About;
