import classes from "./NewsItem.module.scss";

const NewsItems = () => {
  return (
    <div className={classes.NewsItem}>
      <h2 className={classes.NewsItem__header}>Work on Floodlights</h2>
      <small className={classes.NewsItem__date}>
        Thursday 2 September 2021
      </small>
      <p className={classes.NewsItem__body}>
        Work on the floodlights will be undertaken on Wednesday (August 18) and
        Thursday (August 19.) This means that courts 1, 2 and 3 will be out of
        use from 8 am to 5 pm on both dates. Sorry for any inconvenience.
      </p>
    </div>
  );
};

export default NewsItems;
