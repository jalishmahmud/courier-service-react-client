import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

const MyPickUpRequest = () => {
  const [requestedPickup, setRequestedPickup] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/pickUpRequest`)
      .then((res) => res.json())
      .then((data) => setRequestedPickup(data));
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h4 className="input-group-title pb-2 mb-4 border-bottom">
              All Pick Up Request
            </h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Request Date</th>
                  <th>Delivery Address</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {requestedPickup.map((pickup, index) => (
                  <tr key={pickup._id}>
                    <td>{index + 1}</td>
                    <td>{pickup.productName}</td>
                    <td>{pickup.date}</td>
                    <td>{pickup.deliveryAddress}</td>
                    <td>{pickup.status}</td>
                    <td>
                      <span>
                        <Button className="mb-2" onClick="" variant="primary">
                          Update
                        </Button>
                        <Button onClick="" variant="danger">
                          Cancel
                        </Button>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyPickUpRequest;
