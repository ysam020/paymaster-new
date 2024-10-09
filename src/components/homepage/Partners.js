import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../styles/partners.scss";

function Partners() {
  return (
    <Container fluid className="partners-container">
      <Row>
        <span>INTEGRATIONS AND PARTNERSHIPS</span>
        <h2>
          Keep everything <span>in sync</span>
          <p>
            From accounting software and 401(k) plans to advanced HR and
            compliance tools, our integrations and partnerships help you
            streamline all of your to-dos.
          </p>
        </h2>
      </Row>
      <Row className="partners-row-2">
        <Col>
          <img
            src={require("../../assets/images/partner-1.webp")}
            alt="partner"
          />
        </Col>
        <Col>
          <img
            src={require("../../assets/images/partner-2.webp")}
            alt="partner"
          />
        </Col>
        <Col>
          <img
            src={require("../../assets/images/partner-3.webp")}
            alt="partner"
          />
        </Col>
        <Col>
          <img
            src={require("../../assets/images/partner-4.webp")}
            alt="partner"
          />
        </Col>
        <Col>
          <img
            src={require("../../assets/images/partner-5.webp")}
            alt="partner"
          />
        </Col>
      </Row>

      <Row className="partners-row-2">
        <Col>
          <img
            src={require("../../assets/images/partner-6.webp")}
            alt="partner"
          />
        </Col>
        <Col>
          <img
            src={require("../../assets/images/partner-7.webp")}
            alt="partner"
          />
        </Col>
        <Col>
          <img
            src={require("../../assets/images/partner-8.webp")}
            alt="partner"
          />
        </Col>
        <Col>
          <img
            src={require("../../assets/images/partner-9.webp")}
            alt="partner"
          />
        </Col>
        <Col>
          <img
            src={require("../../assets/images/partner-10.webp")}
            alt="partner"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Partners;
