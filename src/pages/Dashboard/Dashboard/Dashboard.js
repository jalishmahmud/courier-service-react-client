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
                <Link to="/dashboard/completeProfile"> Complete Profile</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/dashboard/requestPickUp"> Request New Pick Up</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/dashboard/myPickUpRequest"> My Pick Up Request</Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <Card className="mt-4">
            <Card.Header>
              <h5 className="mt-1">Configuration</h5>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Link to="/dashboard/createNewBranch"> Create New Branch </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/dashboard/makeAdmin">Make Admin</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/dashboard/addNewArea">Add New Area</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/dashboard/addNewDistrict"> Add New District </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/dashboard/addNewUpojela"> Add New Upojela </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/dashboard/addNewLocation"> Add New Location </Link>
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
