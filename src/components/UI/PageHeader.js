import classes from "./PageHeader.module.scss";

const PageHeader = (props) => {
  return <h1 className={classes.page_header}>{props.title}</h1>;
};

export default PageHeader;
