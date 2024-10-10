import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function HR(props) {
  return (
    <Container>
      <Row>
        <Col xs={5}>
          <h3>{props.data?.product_2_heading}</h3>
          <p>{props.data?.product_2_content}</p>
          <div className="btn-group">
            <a href={props.data?.product_2_btn_1_link} className="btn-1">
              {props.data?.product_2_btn_1_text}
            </a>
            <a href={props.data?.product_2_btn_2_link} className="btn-2">
              {props.data?.product_2_btn_2_text}
            </a>
          </div>
        </Col>
        <Col xs={7}>
          <img src={props.data?.product_2_img} alt="payroll" width={"100%"} />
        </Col>
      </Row>
    </Container>
  );
}

export default HR;
