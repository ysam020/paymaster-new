import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Benefits() {
  return (
    <Container>
      <Row>
        <Col xs={5}>
          <h3>Integrated benefits</h3>
          <p>
            From health insurance to workers’ comp to 401(k), we make it easy
            for businesses of any size to offer employee benefits. Our licensed
            experts can help you choose a great plan from the most popular
            insurance carriers. We even automate the plan administration for
            you.
          </p>
          <div className="btn-group">
            <button className="btn-1">Get Started</button>
            <button className="btn-2">Learn More</button>
          </div>
        </Col>
        <Col xs={7}>
          <img
            src={require("../../assets/images/benefits-img.webp")}
            alt="benefits"
            width={"100%"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Benefits;
