import React, { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.date = new Date().toLocaleDateString();
    data.time = new Date().toLocaleTimeString();
    data.userEmail = user.email;
    if (user.displayName) {
      data.userName = user.displayName;
    }
    fetch("https://floating-sea-71952.herokuapp.com/__", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setIsSuccess(true);
          reset();
        }
      });
  };
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h4 className="input-group-title pb-2 mb-4 border-bottom">
              Make new admin:
            </h4>
            <Row>
              <Col xs={12} md={6}>
                <h6 className="input-field-title">
                  Enter email whom you want to make admin
                </h6>
                <input
                  className="form-control form-control-lg mb-3 mt-2"
                  placeholder="Admin Email"
                  {...register("adminEmail", { required: true })}
                />
                {errors.firstName && <span>This field is required</span>}
              </Col>
            </Row>

            <Col xs={12} md={6}>
              <input
                className="btn btn-primary custom-lg-btn"
                type="submit"
                value="Submit"
              />
              {isSuccess && (
                <Alert className="my-3" variant="success">
                  Admin added
                </Alert>
              )}
            </Col>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default MakeAdmin;
