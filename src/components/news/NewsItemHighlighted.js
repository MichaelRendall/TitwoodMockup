import classes from "./NewsItemHighlighted.module.scss";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const NewsItemsHighlighted = (props) => {
  let body;
  const paragrpahs = props.body.split("<br />");
  body = paragrpahs.map((paragrpah, index) => {
    return <p key={index}>{paragrpah}</p>;
  });

  return (
    <div className={classes.newsHighlighted__container}>
      {body}
      <Link to="/news">
        <Button text="Back to News List" />
      </Link>
    </div>
  );
};

export default NewsItemsHighlighted;
