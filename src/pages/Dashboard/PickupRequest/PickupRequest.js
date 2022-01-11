import React, { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const PickupRequest = () => {
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
    data.status = "Pending";
    data.userEmail = user.email;
    if (user.displayName) {
      data.userName = user.displayName;
    }
    fetch("https://floating-sea-71952.herokuapp.com/pickUpRequest", {
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
            <h4 className="input-group-title pb-2 border-bottom">
              Request for pick up
            </h4>

            {/* Pickup Information ===================================================== */}
            <h4 className="input-group-title pb-2 pt-3">Pickup Information:</h4>
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
            <Row>
              <Col xs={12} md={6}>
                <h6 className="input-field-title">Product Name</h6>
                <input
                  className="form-control form-control-lg mb-3 mt-2"
                  placeholder="Product Name"
                  {...register("productName")}
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
            {/* Delivery Location ======================================================== */}
            <h4 className="input-group-title pb-2 pt-3">Delivery Location:</h4>
            <Row>
              <Col xs={12} md={6}>
                <h6 className="input-field-title">Delivery Area/Division</h6>
                <select
                  className="form-control form-control-lg mb-3 mt-2"
                  {...register("deliveryDivision", { required: true })}
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
                <h6 className="input-field-title">Delivery Address</h6>
                <input
                  className="form-control form-control-lg mb-3 mt-2"
                  placeholder="Delivery Address"
                  {...register("deliveryAddress", { required: true })}
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
                <Alert className="my-3" variant="success">
                  Your pick up request accepted
                </Alert>
              )}
            </Col>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default PickupRequest;
