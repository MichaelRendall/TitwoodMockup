import React from "react";
import classes from "./AdditionalInfo.module.scss";

const AdditionalInfo = (props) => (
  <div className={classes.additionalInfo}>
    <p>Memberships run from 1st of April until 31st of March.</p>
    <p>For new members there is a £50 joining fee to join the club.</p>

    <p>
      For existing members a £25 administration fee will be charged for late
      payment beyond 30th April.
    </p>

    <p>
      There are no booking fees for courts and there is no cost for floodlights.
    </p>

    <p>
      A visitor fee is only £5 per day but they must be accompanied by a Titwood
      Lawn Tennis Club member.
    </p>

    <p>
      Upon joining or paying your yearly membership fee, each member will be
      given a shoe tag which must be visible at all times while on court.
    </p>

    <p>
      Members should ensure TLTC’s code of conduct are followed at all times.
      These can be viewed here:
    </p>

    <p>TLTC Adult Code of Conduct</p>

    <p>TLTC Children Code of Conduct</p>
  </div>
);

export default AdditionalInfo;
