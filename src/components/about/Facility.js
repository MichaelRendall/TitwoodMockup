import classes from "./Facility.module.scss";

const Facility = (props) => {
  return (
    <div className={classes.facility}>
      <h3>{props.header}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default Facility;
