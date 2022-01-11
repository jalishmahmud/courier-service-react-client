import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import pict1 from "../../../images/whyJM/pict-1.jpg";
import pict2 from "../../../images/whyJM/pict-2.jpg";
import pict3 from "../../../images/whyJM/pict-3.jpg";
import pict4 from "../../../images/whyJM/pict-4.jpg";
import pict5 from "../../../images/whyJM/pict-5.jpg";
import pict6 from "../../../images/whyJM/pict-6.jpg";
import "./WhyJMCourier.css";
const WhyJMCourier = () => {
  return (
    <Container className="py-4">
      <h2 className="text-center mt-4">Why JM Courier?</h2>
      <br />
      <Row className=" pb-5 px-4 ">
        <Col className="p-3 mb-4 single-reason" xs={12} md={4}>
          <img className="img-fluid" src={pict1} alt="" />
          <h3>Doorstep pickup and delivery</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            esse
          </p>
        </Col>
        <Col className="p-3 mb-4 single-reason" xs={12} md={4}>
          <img className="img-fluid" src={pict2} alt="" />
          <h3>3 days delivery guaranteed</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            esse
          </p>
        </Col>
        <Col className="p-3 mb-4 single-reason" xs={12} md={4}>
          <img className="img-fluid" src={pict3} alt="" />
          <h3>Payment the next day</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            esse
          </p>
        </Col>
        <Col className="p-3 mb-4 single-reason" xs={12} md={4}>
          <img className="img-fluid" src={pict4} alt="" />
          <h3>Best Cash On Delivery Rate</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            esse
          </p>
        </Col>
        <Col className="p-3 mb-4 single-reason" xs={12} md={4}>
          <img className="img-fluid" src={pict5} alt="" />
          <h3> SMS update</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            esse
          </p>
        </Col>
        <Col className="p-3 mb-4 single-reason" xs={12} md={4}>
          <img className="img-fluid" src={pict6} alt="" />
          <h3>Secure handling</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            esse
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyJMCourier;
