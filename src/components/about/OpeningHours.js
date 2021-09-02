import classes from "./OpeningHours.module.scss";

const OpeningHours = () => {
  return (
    <div className={classes.OpeningHours}>
      <div>
        <div className={classes.section}>
          <h3>Opening Hours</h3>
          <p className={classes.bodyText}>We are open everyday 8am till 10pm</p>
        </div>
        <div className={classes.section}>
          <h3>Contact Us</h3>
          <p className={classes.bodyText}>0141 552 4800</p>
        </div>
        <div className={classes.section}>
          <h3>Find Us</h3>
          <p className={classes.bodyText}>
            Titwood Lawn Tennis Club,
            <br />
            Glencairn Gardens,
            <br />
            Glasgow, G41 4LN
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
