import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import heroImage from "../../../images/hero-image.png";
const Banner = () => {
  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col xs={12}>
            <div className="d-flex justify-content-center">
              <img src={heroImage} alt="HeroImage" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
