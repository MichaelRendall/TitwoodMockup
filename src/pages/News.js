import React from "react";
import NewsItems from "../components/news/NewsItems";
import PageHeader from "../components/UI/PageHeader";

const News = () => {
  return (
    <div className="padding">
      <PageHeader title="News &amp; Events" />
      <NewsItems />
    </div>
  );
};

export default News;
