import classes from "./ClubSummary.module.scss";
import OpeningHours from "./OpeningHours";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClubSummary = () => {
  return (
    <div className={`${classes.ClubSummary} padding`}>
      <h2 className="h2">THE CLUB</h2>
      <div className="flex">
        <div>
          <p>
            <FontAwesomeIcon
              icon={["fas", "chevron-circle-right"]}
              className={classes.svg}
            />
            We are registered as a venue by the Lawn Tennis Association and
            Tennis Scotland.
          </p>
          <p>
            <FontAwesomeIcon
              icon={["fas", "chevron-circle-right"]}
              className={classes.svg}
            />
            Membership is open to all ages and abilities. There is an active
            programme of social and competitive tennis.
          </p>
          <p>
            <FontAwesomeIcon
              icon={["fas", "chevron-circle-right"]}
              className={classes.svg}
            />
            We have five floodlit all-weather courts – three synthetic turf
            (resurfaced in 2018) and two artificial clay (laid in 2021). There
            are also two blaes courts.
          </p>
          <p>
            <FontAwesomeIcon
              icon={["fas", "chevron-circle-right"]}
              className={classes.svg}
            />
            Titwood runs six senior men’s and six senior women’s and junior
            teams in various regional leagues.
          </p>
          <p>
            <FontAwesomeIcon
              icon={["fas", "chevron-circle-right"]}
              className={classes.svg}
            />
            Any membership enquiries should be emailed to
            martine.membership@gmail.com.
          </p>
          <p>
            <FontAwesomeIcon
              icon={["fas", "chevron-circle-right"]}
              className={classes.svg}
            />
            For all other enquiries, please email
            info@titwoodlawntennisclub.co.uk
          </p>
        </div>
        <OpeningHours />
      </div>
    </div>
  );
};

export default ClubSummary;
