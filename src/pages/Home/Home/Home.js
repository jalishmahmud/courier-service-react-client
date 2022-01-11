import React from "react";
import Banner from "../Banner/Banner";
import EasyRegistrationOrLogin from "../EasyRegistrationOrLogin/EasyRegistrationOrLogin";
import WhyJMCourier from "../WhyJMCourier/WhyJMCourier";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <EasyRegistrationOrLogin></EasyRegistrationOrLogin>
      <WhyJMCourier></WhyJMCourier>
    </div>
  );
};

export default Home;
