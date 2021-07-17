import classes from "./BannerText.module.css";

const BannerText = () => {
  return (
    <div className={classes.BannerText}>
      <div>
		  <small>EST 1890</small>
        <h1>Welcome to Titwood Lawn Tennis Club</h1>
      </div>
    </div>
  );
};

export default BannerText;
