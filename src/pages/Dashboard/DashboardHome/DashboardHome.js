import React from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <Container>
        <h3>
          Welcome <span className="text-danger">{user.email}</span>
        </h3>
      </Container>
    </div>
  );
};

export default DashboardHome;
