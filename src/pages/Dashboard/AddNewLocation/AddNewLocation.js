import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const AddNewLocation = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [allUpojela, setAllUpojela] = useState([]);

  const { user } = useAuth();
  useEffect(() => {
    fetch("http://localhost:5000/getAllUpojela")
      .then((res) => res.json())
      .then((data) => setAllUpojela(data));
  }, []);

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
    fetch("http://localhost:5000/addNewLocation", {
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
              Add New Location:
            </h4>
            <Row>
              <Col xs={12} md={6}>
                <h6 className="input-field-title">Select Upojela</h6>
                <select
                  className="form-control form-control-lg mb-3 mt-2"
                  {...register("upojelaName", { required: true })}
                >
                  {allUpojela.map((upojela) => (
                    <option value={upojela.upojelaName} key={upojela._id}>
                      {upojela.upojelaName}
                    </option>
                  ))}
                </select>
                {errors.upojelaName && <span>This field is required</span>}
              </Col>
              <Col xs={12} md={6}>
                <h6 className="input-field-title">Location Name</h6>
                <input
                  className="form-control form-control-lg mb-3 mt-2"
                  placeholder="Location Name"
                  {...register("locationName", { required: true })}
                />
                {errors.locationName && <span>This field is required</span>}
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
                  Location added
                </Alert>
              )}
            </Col>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddNewLocation;
