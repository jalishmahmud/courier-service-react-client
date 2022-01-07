import React from "react";
import Banner from "../Banner/Banner";
import EasyRegistrationOrLogin from "../EasyRegistrationOrLogin/EasyRegistrationOrLogin";
import PersonalOrBusinessInfo from "../PersonalOrBusinessInfo/PersonalOrBusinessInfo";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <EasyRegistrationOrLogin></EasyRegistrationOrLogin>
      <PersonalOrBusinessInfo></PersonalOrBusinessInfo>
    </div>
  );
};

export default Home;