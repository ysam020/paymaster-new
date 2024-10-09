import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Payroll() {
  return (
    <Container>
      <Row>
        <Col xs={5}>
          <h3>Smart, streamlined payroll</h3>
          <p>
            Pay employees and contractors in just a few clicks and leave the
            calculations, deductions, and payroll taxes to us. Powerful
            integrations let you keep it all in sync with accounting software,
            integrated benefits, and more.
          </p>
          <div className="btn-group">
            <button className="btn-1">Get Started</button>
            <button className="btn-2">Learn More</button>
          </div>
        </Col>
        <Col xs={7}>
          <img
            src={require("../../assets/images/payroll-img.webp")}
            alt="payroll"
            width={"100%"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Payroll;
