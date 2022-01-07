import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import jmCourierLogo from "../../../images/jmCourierLogo.png";
import "./Navigation.css";
const phoneSquare = <FontAwesomeIcon icon={faPhoneSquareAlt} />;
const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
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
              <Navbar.Text>
                <a href="tel:+8801521110888">
                  <span class="phone-icon">{phoneSquare}</span>(+88) 01521
                  110888
                </a>
              </Navbar.Text>
              <Nav.Link as={Link} to="/login">
                <Button variant="danger">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
