import classes from "./NewsItems.module.scss";
import NewsItem from "./NewsItem";

const NewsItems = () => {
  return (
    <div className="padding">
      <h1 className={classes.NewsItems__header}>News &amp; Events</h1>
      <div className={classes.NewsItems}>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </div>
  );
};

export default NewsItems;
