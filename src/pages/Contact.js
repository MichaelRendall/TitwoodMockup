import React, { useEffect } from "react";
import PageHeader from "../components/UI/PageHeader";
import Form from "../components/contactForm/Form";
import Map from "../components/map/Map";
/* import OpeningHours from "../components/about/OpeningHours"; */

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Titwood Tennis";
  });
  
  return (
    <React.Fragment>
      <div className="padding">
        <PageHeader title="Where to Find Us" />
        <div className="section-container">
          <Map />
          {/* <OpeningHours /> */}
        </div>
      </div>
      <div className="padding darker">
        <PageHeader title="Ask a Question" />
        <div className="section-container">
          <Form />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
