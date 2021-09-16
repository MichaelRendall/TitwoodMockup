import PageHeader from "../components/UI/PageHeader";
import Facilities from "../components/about/Facilities";
import SocialTennis from "../components/about/SocialTennis";
import React from "react";
import Committee from "../components/about/Committee";

const About = () => {
  return (
    <React.Fragment>
      <div className="padding">
        <PageHeader title="Facilities" />
        <Facilities />
      </div>
      <div className="padding darker">
        <PageHeader title="Social Tennis" />
        <SocialTennis />
      </div>
      <div className="padding">
        <PageHeader title="Committee" />
        <Committee />
      </div>
    </React.Fragment>
  );
};

export default About;
