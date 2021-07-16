import mainBackground from "../../assets/main-background-cropped.jpg";
import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={classes.Banner}>
      <img src={mainBackground} alt="The tennis clubhouse in the evening" />
    </div>
  );
};

export default Banner;
