// import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import jmCourierLogo from "../../../images/jmCourierLogo.png";
import "./Navigation.css";
// const phoneSquare = <FontAwesomeIcon icon={faPhoneSquareAlt} />;
const Navigation = () => {
  const { user, signOutUser } = useAuth();
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              className="img-fluid"
              style={{ maxWidth: "200px" }}
              src={jmCourierLogo}
              alt="JM Courier Logo"
            />
          </Navbar.Brand>
          <InputGroup className="mb-3 w-50 pt-3">
            <FormControl
              placeholder="Input your tracking ID"
              aria-label="Input your tracking ID"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Track
            </Button>
          </InputGroup>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              {/* <Navbar.Text>
                <a href="tel:+8801521110888">
                  <span className="phone-icon">{phoneSquare}</span>(+88) 01521
                  110888
                </a>
              </Navbar.Text> */}
              {!user.email ? (
                <Nav.Link as={Link} to="/login">
                  <Button variant="danger">Login</Button>
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link as={Link} to="/dashboard">
                    <Button
                      className="custom-login-logout-btn"
                      variant="primary"
                    >
                      Dashboard
                    </Button>
                  </Nav.Link>
                  <Nav.Link>
                    <Button
                      className="custom-login-logout-btn"
                      onClick={signOutUser}
                      variant="danger"
                    >
                      Logout
                    </Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
