import classes from "./Facilities.module.scss";
import BannerImg from "../../assets/courts-2and3-cropped.jpg";
import Facility from "./Facility";

const Facilities = () => {
  return (
    <div className={classes.facilities}>
      <div className={classes.facilities__img_container}>
        <img src={BannerImg} alt="Two tennis courts" />
      </div>
      <div className={classes.facility__section}>
        <Facility
          header="Tiger Turf &amp; Clay Courts"
          text="Five floodlit all-weather courts available for use all year round"
        />
        <Facility
          header="Blaes Courts"
          text="Two blaes courts available for use between April and October (not floodlit)"
        />
        <Facility
          header="Floodlights"
          text="Free to use. Switches off automatically at 10pm each night for the sake of local residents"
        />
        <Facility
          header="Club House"
          text="Good size kitchen, comfortable lounge with pool and table tennis. Male and female changing rooms include showers"
        />
        <Facility
          header="Practice"
          text="Two practice walls and one mini tennis court"
        />
        <Facility
          header="Decking"
          text="Social area with good view of courts 1 &amp; 2"
        />
      </div>
      {/* <p>
        Five floodlit all-weather courts available for use all year round. Both
        tiger turf and artificial clay surfaces.
      </p>
      <p>
        Two clay courts Available for use between April and October (not
        floodlit)
      </p>
      <p>Two practice walls</p>
      <p>One mini practice court</p>
      <p>
        Free floodlighting Switches off automatically at 10pm each night for the
        sake of local residents
      </p>
      <p>Decking with seating areas</p>
      <p>Ladies and gentlemen’s changing areas include showers</p> */}
    </div>
  );
};

export default Facilities;
