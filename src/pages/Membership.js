import React from "react";
import AdditionalInfo from "../components/membership/AdditionalInfo";
import Prices from "../components/membership/Prices";
import PageHeader from "../components/UI/PageHeader";
import Form from "../components/contactForm/Form";

const Membership = () => {
  return (
    <React.Fragment>
      <div className="padding">
        <PageHeader title="Membership Information" />
        <Prices />
      </div>
      <div className="padding darker">
        <PageHeader title="Apply for Membership" />
        <Form />
      </div>
      <div className="padding">
        <PageHeader title="Additional Information" />
        <AdditionalInfo />
      </div>
    </React.Fragment>
  );
};

export default Membership;
