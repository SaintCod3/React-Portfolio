import React, { Component } from "react";
import { Nav, Tab, Container, Row, Col, Image } from "react-bootstrap";
import NicePage from "../img/NicePage.PNG";
import Chalets from "../img/Chalets.PNG";
import WhatItOutside from "../img/WhatItOutside.PNG";

class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Tab.Container defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">NicePage</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Chalets and Caviar</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      Brooklyn Outdoor Film Festival
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Col xs={12} md={12} lg={12}>
                      <Image src={NicePage} thumbnail />
                    </Col>
                    <h2 className="font-weight-light text-center mt-2">
                      NicePage
                    </h2>
                    <hr />
                    <h5 className="font-weight-light mb-2">JavaScript / CSS</h5>
                    <hr />
                    <p>
                      NicePage was my first JavaScript project made to practice
                      with APIs. The website is made so it can replace your
                      "boring" web browser page providing you with the current
                      time, news and the weather.
                    </p>
                    <p>Some of the features of NicePage:</p>
                    <ul>
                      <li>Geo-location using your public IP (API)</li>
                      <li>
                        Dynamic background (will change based on the time)
                      </li>
                      <li>
                        Theme selector (will save your selection in the local
                        storage)
                      </li>
                      <li>Hide/Show the UI</li>
                    </ul>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Col xs={12} md={12} lg={12}>
                      <Image src={Chalets} thumbnail />
                    </Col>
                    <h2 className="font-weight-light text-center mt-2">
                      Chalets and Caviar
                    </h2>
                    <hr />
                    <h5 className="font-weight-light mb-2">
                      WordPress Theme / Custom CSS
                    </h5>
                    <hr />

                    <p>
                      A real estate website created in WordPress using Astra
                      (Responsive Theme), Elementor (Pro) and some custom CSS
                      (minor changes). You can view the demo here:
                      <a
                        href="http://chaletsandcaviarpractice.x10host.com"
                        className="ml-1"
                        target="_new"
                      >
                        Demo
                      </a>
                    </p>
                    <p>Additional plugins used:</p>
                    <ul>
                      <li>Advanced Custom Fields (AFC)</li>
                      <li>Custom Post Type UI</li>
                      <li>WPForms Lite</li>
                    </ul>
                  </Tab.Pane>
                </Tab.Content>
                <Tab.Content>
                  <Tab.Pane eventKey="third">
                    <Col xs={12} md={12} lg={12}>
                      <Image src={WhatItOutside} thumbnail />
                    </Col>
                    <h2 className="font-weight-light text-center mt-2">
                      Brooklyn Outdoor Film Festival
                    </h2>
                    <hr />
                    <h5 className="font-weight-light mb-2">Bootstrap</h5>
                    <hr />
                    <p>
                      A Responsive Mockup website created only using
                      BootstrapThese with the following features:
                    </p>
                    <ul>
                      <li>
                        Full screen navigation bar (collapsible on mobile
                        devices) including company´s logo, company´s name,
                        functional links to each section and a right button to
                        prompt the preregistration form (modal)
                      </li>
                      <li>
                        Full screen header with site name and date of the event
                      </li>
                      <li>
                        Centered dated news section which shows up to 4 news
                        (paginated for more than 4 news)
                      </li>
                      <li>
                        Centered Festival program (Will be displayed as a unique
                        column on mobile devices)
                      </li>
                      <li>
                        Centered about us section with medium size logo of the
                        company
                      </li>
                    </ul>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </React.Fragment>
    );
  }
}

export default Projects;
