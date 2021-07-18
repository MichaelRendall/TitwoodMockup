import React from "react";
import ClubSummary from "../components/about/ClubSummary";
import Banner from "../components/UI/Banner";
import BannerText from "../components/UI/BannerText";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
	  <BannerText />
	  <ClubSummary />
    </React.Fragment>
  );
};

export default Home;
