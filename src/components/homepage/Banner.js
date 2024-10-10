import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/banner.scss";

function Banner(props) {
  return (
    <Container className="banner-container">
      <Row>
        <Col xs={4}>
          <span>{props.data?.banner_subheading}</span>
          <h1>{props.data?.banner_heading}</h1>
          <p>{props.data?.banner_content}</p>
          <div className="btn-group">
            <a
              href={props.data?.banner_btn_1_link}
              className="btn banner-btn-1"
            >
              {props.data?.banner_btn_1_text}
            </a>
            <a
              href={props.data?.banner_btn_2_link}
              className="btn banner-btn-2"
            >
              {props.data?.banner_btn_2_text}
            </a>
          </div>
        </Col>
        <Col xs={8}>
          <img src={props.data?.banner_image} alt="" width="100%" />
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
