import classes from "./SocialTennis.module.scss";
import tableClasses from "../../styles/Tables.module.scss";
import BannerImg from "../../assets/group-pic.jpg";
import React from "react";

const SocialTennis = (props) => {
  return (
    <div className="section-container">
      <div className={classes.facilities__img_container}>
        <img src={BannerImg} alt="Two tennis courts" />
      </div>
      <table className={tableClasses.table}>
        <tbody>
          <tr className={tableClasses.table_row}>
            <td>
              Tuesdays
              <br />
              <small>Ladies Only</small>
            </td>
            <td>10am - noon</td>
          </tr>
          <tr className={tableClasses.table_row}>
            <td>
              Thursdays
              <br />
              <small>Supervised by club coach Stuart Clark</small>
            </td>
            <td>7pm - 9pm</td>
          </tr>
          <tr className={tableClasses.table_row}>
            <td>
              Saturdays
              <br />
              <small>Informal session for all abilities</small>
            </td>
            <td>2pm - 4pm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SocialTennis;
