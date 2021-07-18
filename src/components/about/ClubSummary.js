import classes from "./ClubSummary.module.css";
import gate from "../../assets/club-gate.jpg";

const ClubSummary = () => {
  return (
    <div className={`${classes.ClubSummary} padding`}>
      <h2 className={classes.h2}>The Club</h2>
      <div>
        <div>
          <p>
            With a history dating back to 1890, we are a vibrant private
            members’ club in a conservation area in Pollokshields on Glasgow’s
            South side.
          </p>
          <p>
            We are registered as a venue by the Lawn Tennis Association and
            Tennis Scotland.
          </p>
          <p>
            Membership is open to all ages and abilities. There is an active
            programme of social and competitive tennis.
          </p>
          <p>
            We have five floodlit all-weather courts – three synthetic turf
            (resurfaced in 2018) and two artificial clay (laid in 2021). There
            are also two blaes courts.
          </p>
          <p>
            Titwood runs six senior men’s and six senior women’s and junior
            teams in various regional leagues.
          </p>
          <p>
            Any membership enquiries should be emailed to
            martine.membership@gmail.com.
          </p>
          <p>
            For all other enquiries, please email
            info@titwoodlawntennisclub.co.uk
          </p>
        </div>
        <div>
          <img src={gate} alt="The entrance into the club" />
        </div>
      </div>
    </div>
  );
};

export default ClubSummary;
