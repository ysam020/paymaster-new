import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../styles/features.scss";

function Features(props) {
  return (
    <Container fluid className="features-container">
      <Row gutter={0}>
        <span>{props.data?.features_subheading}</span>
        <h2>{props.data?.features_heading}</h2>
        <Col>
          <img src={props.data?.features_icon_1} alt="" />
          <p>{props.data?.features_text_1}</p>
        </Col>
        <Col>
          <img src={props.data?.features_icon_2} alt="" />
          <p>{props.data?.features_text_2}</p>
        </Col>
        <Col>
          <img src={props.data?.features_icon_3} alt="" />
          <p>{props.data?.features_text_3}</p>
        </Col>
        <Col>
          <img src={props.data?.features_icon_4} alt="" />
          <p>{props.data?.features_text_4}</p>
        </Col>
        <Col>
          <img src={props.data?.features_icon_5} alt="" />
          <p>{props.data?.features_text_5}</p>
        </Col>
      </Row>
      <br />
      <a href={props.data?.features_link}>{props.data?.features_link_text}</a>

      <Row className="features-row-2">
        <span>{props.data?.features_subheading_2}</span>
        <h2>{props.data?.features_heading_2}</h2>

        <img src={props.data?.features_img} alt="features" />
      </Row>

      <Row className="features-row-3">
        <div>
          <button>Client Reviews</button>
        </div>
        <p>{props.data?.review}</p>
        <span>{props.data?.reviewer_name}</span>
      </Row>
    </Container>
  );
}

export default Features;
