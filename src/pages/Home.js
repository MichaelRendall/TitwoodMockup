import React from "react";
import ClubSummary from "../components/about/ClubSummary";
import Banner from "../components/UI/Banner";
import PageHeader from "../components/UI/PageHeader";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <div className="padding">
        <PageHeader title="The Club" />
        <ClubSummary />
      </div>
    </React.Fragment>
  );
};

export default Home;
