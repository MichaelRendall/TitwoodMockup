import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NewsItemsHighlighted from "../components/news/NewsItemHighlighted";
import PageHeader from "../components/UI/PageHeader";
import DUMMY_NEWS from "../lib/dummy-news";

const NewsHighlighted = () => {
  const params = useParams();
  const { newsId } = params;

  const highlightedNews = DUMMY_NEWS.find(
    (news) => news.id === parseInt(newsId)
  );

  useEffect(() => {
    document.title = `${highlightedNews.title} | Titwood Tennis`;
  });

  return (
    <div className="padding">
      <PageHeader title={highlightedNews.title} />
      <NewsItemsHighlighted
        date={highlightedNews.date}
        body={highlightedNews.body}
        image={highlightedNews.image}
      />
    </div>
  );
};

export default NewsHighlighted;
