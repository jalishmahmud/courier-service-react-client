import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();
  if (isLoading) {
    return <Spinner animation="border" variant="primary" />;
  }
  if (user.email) {
    return children;
  }
  return <Navigate to="/register" state={{ from: location }} />;
};

// function PrivateRoute({ children }) {
//   const auth = useAuth();
//   return auth ? children : <Navigate to="/login" />;
// }

export default PrivateRoute;
