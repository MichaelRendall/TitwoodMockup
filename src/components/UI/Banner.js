import classes from "./Banner.module.scss";

const BannerText = () => {
  return (
    <div className={`${classes.Banner} padding`}>
      <div>
        <small>EST 1890</small>
        <h1>Welcome to Titwood Lawn Tennis Club</h1>
        <h2>
          We are a friendly, private tennis club in Pollokshields, Glasgow, with
          5 floodlit all-weather courts and 2 blaes courts.
        </h2>
        <h2>New members are always welcome.</h2>
      </div>
    </div>
  );
};

export default BannerText;
