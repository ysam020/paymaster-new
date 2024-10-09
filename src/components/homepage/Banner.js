import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/banner.scss";

function Banner() {
  return (
    <Container className="banner-container">
      <Row>
        <Col xs={4}>
          <span>PAYROLL • HR • BENEFITS</span>
          <h1>
            <span>Integrated</span> and uncomplicated
          </h1>
          <p>
            We give you everything you need to handle payroll, HR, and benefits
            with confidence — so you can get down to business.
          </p>
          <div className="btn-group">
            <button className="btn banner-btn-1">Get Started</button>
            <button className="btn banner-btn-2">Look Inside</button>
          </div>
        </Col>
        <Col xs={8}>
          <img
            src={require("../../assets/images/banner-img.webp")}
            alt=""
            width="100%"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
