import React, { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";

const EasyRegistrationOrLogin = () => {
  const [registerInfo, setRegisterInfo] = useState({});

  const { registerNewUser, signInWithGoogle, isLoading, authError } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const getInputFieldValue = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterInfo = { ...registerInfo };
    newRegisterInfo[field] = value;
    setRegisterInfo(newRegisterInfo);
  };

  const handleRegister = (e) => {
    registerNewUser(registerInfo.email, registerInfo.password, navigate);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };

  return (
    <div>
      <Container className="py-2">
        <h2 className="text-center mb-3">
          Register as Business Owner or Individual Easily
        </h2>
        <br />
        <span className="pr-4">
          {isLoading && <Spinner animation="border" variant="primary" />}
        </span>
        <Form onSubmit={handleRegister}>
          <Row className="border py-5 px-4 rounded">
            <Col xs={12}>
              <Row>
                <Col xs={12} md={6}>
                  <InputGroup className="mb-3" size="lg">
                    <FormControl
                      onBlur={getInputFieldValue}
                      name="email"
                      placeholder="Your/ Your Business Email"
                    />
                  </InputGroup>
                </Col>
                <Col xs={12} md={6}>
                  <InputGroup className="mb-3" size="lg">
                    <FormControl
                      onBlur={getInputFieldValue}
                      name="password"
                      placeholder="Password"
                      type="password"
                    />
                  </InputGroup>
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
              <Row>
                <Col xs={12} md={6}>
                  {authError && (
                    <Alert className="my-3" variant="danger">
                      {authError}
                    </Alert>
                  )}
                  <Button
                    className="w-100 custom-lg-btn mb-3"
                    variant="primary"
                    type="submit"
                    size="lg"
                  >
                    Register Now
                  </Button>
                </Col>
                <Col xs={12} md={6}>
                  <Button
                    onClick={handleGoogleSignIn}
                    className="w-100 custom-lg-btn mb-3"
                    variant="danger"
                    size="lg"
                  >
                    Login With Google
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default EasyRegistrationOrLogin;
