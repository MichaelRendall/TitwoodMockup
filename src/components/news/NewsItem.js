import classes from "./NewsItem.module.scss";
import { Link } from "react-router-dom";

const NewsItems = (props) => {
  return (
    <Link to={`/news/${props.id}`}>
      <div className={classes.NewsItem}>
        <h2 className={classes.NewsItem__header}>{props.title}</h2>
        <small className={classes.NewsItem__date}>{props.date}</small>
        <p className={classes.NewsItem__body}>{props.body}</p>
      </div>
    </Link>
  );
};

export default NewsItems;
