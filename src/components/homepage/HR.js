import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function HR() {
  return (
    <Container>
      <Row>
        <Col xs={5}>
          <h3>Built-in HR</h3>
          <p>
            As you add employees, we also help you stay organized. Our HR
            features help small businesses automate processes, stay compliant,
            and manage their teams more efficiently.
          </p>
          <div className="btn-group">
            <button className="btn-1">Get Started</button>
            <button className="btn-2">Learn More</button>
          </div>
        </Col>
        <Col xs={7}>
          <img
            src={require("../../assets/images/hr-img.webp")}
            alt="hr"
            width={"100%"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HR;
