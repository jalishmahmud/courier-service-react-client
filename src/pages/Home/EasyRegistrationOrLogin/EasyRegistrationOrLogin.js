import React from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

const EasyRegistrationOrLogin = () => {
  return (
    <div>
      <Container className="py-5">
        <h2 className="text-center mb-5">
          Register as Business Owner or Individual Easily
        </h2>
        <Row className="border py-5 px-4 rounded">
          <Col xs={12}>
            <Row>
              <Col xs={12} md={6}>
                <InputGroup className="mb-3" size="lg">
                  <FormControl placeholder="Your/ Your Business Email" />
                </InputGroup>
              </Col>
              <Col xs={12} md={6}>
                <InputGroup className="mb-3" size="lg">
                  <FormControl placeholder="Password" />
                </InputGroup>
              </Col>
            </Row>
          </Col>
          <Col xs={12}>
            <Row>
              <Col xs={12} md={6}>
                <Button
                  className="w-100 custom-lg-btn"
                  variant="primary"
                  size="lg"
                >
                  Register Now
                </Button>
              </Col>
              <Col xs={12} md={6}>
                <Button
                  className="w-100 custom-lg-btn"
                  variant="danger"
                  size="lg"
                >
                  Login With Google
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EasyRegistrationOrLogin;
