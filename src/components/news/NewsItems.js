import classes from "./NewsItems.module.scss";
import NewsItem from "./NewsItem";
import DUMMY_NEWS from "../../lib/dummy-news";

const NewsItems = () => {
  const newsList = DUMMY_NEWS.map((news) => {
    let body = news.body;
    body = body.replace("<br />", "");
    if (body.length > 200) {
      body = `${body.substring(0, 200)}...`;
    }

    return (
      <NewsItem
        key={news.id}
        id={news.id}
        title={news.title}
        date={news.date}
        body={body}
      />
    );
  });

  return <div className={classes.NewsItems}>{newsList}</div>;
};

export default NewsItems;
