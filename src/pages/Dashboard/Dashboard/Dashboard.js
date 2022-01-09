import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <Container className="">
      <Row>
        <Col xs={12} md={3}>
          <Card>
            <Card.Header>
              <h5 className="mt-1">Dashboard</h5>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Link to="/dashboard/makeAdmin">Make Admin</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/dashboard/requestPickUp"> Request Pick Up</Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col xs={12} md={9}>
          <Outlet></Outlet>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
