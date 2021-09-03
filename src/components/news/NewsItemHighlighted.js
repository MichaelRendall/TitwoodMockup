import classes from "./NewsItemHighlighted.module.scss";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const NewsItemsHighlighted = (props) => {
  /* let paragrpahs = props.body.split("<br>"); */

  return (
    <div className={classes.newsHighlighted__container}>
      <p>{props.body}</p>
      <Link to="/news">
        <Button text="Back to News List" />
      </Link>
    </div>
  );
};

export default NewsItemsHighlighted;
