import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/jmCourierLogo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer mt-5">
      <Container>
        <Row className="footer-content pt-3">
          <Col className="py-4" xs={12} md={3}>
            <h4>About JM Courier</h4>
            <img className="mb-3 img-fluid" src={logo} alt="" />
            <p>
              Encounter the most bewitching wines around the world with a
              knowledgeable wine sommelier to experience the sublime with just a
              sip. Relish from the most
            </p>
          </Col>

          <Col className="py-4" xs={12} md={3}>
            <h4>Popular Services</h4>
            <span>Service Item One</span>
            <span>Service Item Two</span>
            <span>Service Item Three</span>
            <span>Service Item Four</span>
            <span>Service Item Five</span>
          </Col>
          <Col className="py-4" xs={12} md={3}>
            <h4>Important Links</h4>
            <ul>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">Help And FAQs</Link>
              </li>
              <li>
                <Link to="/">Popular Items</Link>
              </li>
              <li>
                <Link to="/">Corporate Support</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
            </ul>
          </Col>
          <Col className="py-4" xs={12} md={3}>
            <h4>Contact Info</h4>
            <h6>ADDRESS:</h6>
            <p>000 Street Name, City, USA</p>

            <h6>PHONE:</h6>
            <p>(123) 000-0000</p>

            <h6>EMAIL:</h6>
            <p>yourmail@mail.com</p>

            <h6>WORKING DAYS/HOURS:</h6>
            <p>Mon - Sun / 9:00 AM - 8:00 PM</p>
          </Col>
        </Row>
        <Row className="copyright d-flex justify-content-center ">
          <p className=" py-3">
            Copyright &copy; JM Courier, All Rights Reserved. Developed By{" "}
            <Link to="https://portfolio-of-jalish.netlify.app/">
              Jalish Mahmud
            </Link>
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
