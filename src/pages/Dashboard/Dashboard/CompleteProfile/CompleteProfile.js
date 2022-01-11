import React, { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import useAuth from "../../../../hooks/useAuth";

const CompleteProfile = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { user } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.userEmail = user.email;
    if (user.displayName) {
      data.userName = user.displayName;
    }
    setIsSuccess(true);
    fetch("https://floating-sea-71952.herokuapp.com/userInformation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setIsSuccess(false);
          reset();
          navigate("/dashboard");
        }
      });
  };
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h4 className="input-group-title pb-2 border-bottom">
              Complete Your Profile
            </h4>

            {/* Personal Information ===================================================== */}

            <h4 className="input-group-title pb-2 pt-3">
              Personal Information:
            </h4>
            <Row>
              <Col xs={12} md={6}>
                <h6 className="input-field-title">First Name</h6>
                <input
                  className="form-control form-control-lg mb-3 mt-2"
                  placeholder="First Name"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && <span>This field is required</span>}
              </Col>
              <Col xs={12} md={6}>
                <h6 className="input-field-title">Last Name</h6>
                <input
                  className="form-control form-control-lg mb-3 mt-2"
                  placeholder="Last Name"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && <span>This field is required</span>}
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <h6 className="input-field-title">Mobile Number</h6>
                <input
                  className="form-control form-control-lg mb-3 mt-2"
                  placeholder="Mobile Number"
                  {...register("mobileNumber")}
                />
              </Col>
              <Col xs={12} md={6}>
                <h6 className="input-field-title">
                  Reason for opening an account
                </h6>
                <select
                  className="form-control form-control-lg mb-3 mt-2"
                  {...register("reasonForAccount", { required: true })}
                >
                  <option value="personal">Personal</option>
                  <option value="business">Business</option>
                </select>
                {errors.reasonForAccount && <span>This field is required</span>}
              </Col>
            </Row>
            {/* Shop Information ======================================================== */}
            <h4 className="input-group-title pb-2 pt-3">Shop Information:</h4>
            <Row>
              <Col xs={12} md={6}>
                <h6 className="input-field-title">Shop Name</h6>
                <input
                  className="form-control form-control-lg mb-3 mt-2"
                  placeholder="Shop Name"
                  {...register("shopName")}
                />
              </Col>
              <Col xs={12} md={6}>
                <h6 className="input-field-title">Shop Email</h6>
                <input
                  className="form-control form-control-lg mb-3 mt-2"
                  placeholder="Shop Email"
                  {...register("shopEmail")}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <h6 className="input-field-title">Shop Address</h6>
                <input
                  className="form-control form-control-lg mb-3 mt-2"
                  placeholder="Shop Address"
                  {...register("shopAddress")}
                />
              </Col>
              <Col xs={12} md={6}>
                <h6 className="input-field-title">Product Type</h6>
                <select
                  className="form-control form-control-lg mb-3 mt-2"
                  {...register("productType")}
                >
                  <option value="e-commerce">E-commerce</option>
                  <option value="ElectronicGadget">Electronic Gadget</option>
                  <option value="fashionAccessories">
                    Fashion Accessories
                  </option>
                  <option value="food">Food</option>
                  <option value="grocery">Grocery</option>
                  <option value="cooking">Cooking</option>
                  <option value="craft">Craft</option>
                  <option value="HealthAndFitness">Health and Fitness</option>
                  <option value="stationeries">Stationeries</option>
                  <option value="furniture">Furniture</option>
                  <option value="kidsAndMoms">Kids and moms</option>
                  <option value="homeDecor">Home Decor</option>
                  <option value="others">Others</option>
                </select>
              </Col>
            </Row>
            {/* Pickup Location ======================================================== */}
            <h4 className="input-group-title pb-2 pt-3">Pickup Location:</h4>
            <Row>
              <Col xs={12} md={6}>
                <h6 className="input-field-title">Pickup Area/Division</h6>
                <select
                  className="form-control form-control-lg mb-3 mt-2"
                  {...register("pickupDivision", { required: true })}
                >
                  <option value="dhaka">Dhaka</option>
                  <option value="chittagong">Chittagong</option>
                  <option value="rajshahi">Rajshahi</option>
                  <option value="sylhet">Sylhet</option>
                  <option value="khulna">Khulna</option>
                  <option value="barisal">Barisal</option>
                  <option value="rangpur">Rangpur</option>
                  <option value="mymensingh">Mymensingh</option>
                </select>
                {errors.pickupDivision && <span>This field is required</span>}
              </Col>
              <Col xs={12} md={6}>
                <h6 className="input-field-title">District</h6>
                <input
                  className="form-control form-control-lg mb-3 mt-2"
                  placeholder="District"
                  {...register("district", { required: true })}
                />
                {errors.district && <span>This field is required</span>}
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <h6 className="input-field-title">Thana</h6>
                <input
                  className="form-control form-control-lg mb-3 mt-2"
                  placeholder="Thana"
                  {...register("thana", { required: true })}
                />
                {errors.thana && <span>This field is required</span>}
              </Col>
              <Col xs={12} md={6}>
                <h6 className="input-field-title">Pickup Address</h6>
                <input
                  className="form-control form-control-lg mb-3 mt-2"
                  placeholder="Pickup Address"
                  {...register("pickupAddress", { required: true })}
                />
                {errors.pickupAddress && <span>This field is required</span>}
              </Col>
            </Row>
            <Col xs={12} md={6}>
              <input
                className="btn btn-primary custom-lg-btn"
                type="submit"
                value="Complete Registration"
              />
              {isSuccess && (
                <Spinner
                  className="ml-4"
                  animation="border"
                  variant="primary"
                />
              )}
            </Col>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default CompleteProfile;
