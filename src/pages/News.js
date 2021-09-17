import React, { useEffect } from "react";
import NewsItems from "../components/news/NewsItems";
import PageHeader from "../components/UI/PageHeader";

const News = () => {
  useEffect(() => {
    document.title = "News | Titwood Tennis";
  });
  return (
    <div className="padding">
      <PageHeader title="News &amp; Events" />
      <NewsItems />
    </div>
  );
};

export default News;
