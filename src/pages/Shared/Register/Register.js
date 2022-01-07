import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Register = () => {
  const [registerInfo, setRegisterInfo] = useState({});
  const { registerNewUser } = useAuth();
  const getInputFieldValue = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterInfo = { ...registerInfo };
    newRegisterInfo[field] = value;
    setRegisterInfo(newRegisterInfo);
  };
  console.log(registerInfo);
  const handleRegister = (e) => {
    registerNewUser(registerInfo.email, registerInfo.password);
    e.preventDefault();
  };
  return (
    <div>
      <Container>
        <Row className="mt-5 d-flex justify-content-center">
          <Col md={5} xs={10} className=" p-5 rounded shadow">
            <h2 className="mb-3">Register </h2>
            <Form onSubmit={handleRegister}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  onBlur={getInputFieldValue}
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  onBlur={getInputFieldValue}
                  type="password"
                  placeholder="Your password"
                />
              </Form.Group>
              {/* {authError && (
                <Alert className="my-3" variant="danger">
                  {authError}
                </Alert>
              )} */}

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember" />
              </Form.Group>

              <Button className="me-2" variant="primary" type="submit">
                Register
              </Button>
              {/* {isLoading && <Spinner animation="border" variant="primary" />} */}
              <span className="m-4">
                <Link to="/login">Already Register? Login Here</Link>
              </span>
            </Form>
            <div className="my-3">OR</div>
            <Button onClick="" variant="danger" type="submit">
              Login With Google
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
