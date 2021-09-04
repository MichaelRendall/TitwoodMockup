import classes from "./PricesTable.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PricesTable = (props) => {
  return (
    <React.Fragment>
      <table className={classes.Prices__table}>
        <thead>
          <tr className={classes.Prices__table_row}>
            <th colSpan="2">Annual Fees</th>
          </tr>
        </thead>
        <tbody>
          <tr className={classes.Prices__table_row}>
            <td>
              Senior
              <br />
              <small>Age 21 and over on 1st April</small>
            </td>
            <td>&pound;240</td>
          </tr>
          <tr className={classes.Prices__table_row}>
            <td>
              Country
              <br />
              <small>Living over 30 miles from club</small>
            </td>
            <td>&pound;125</td>
          </tr>
          <tr className={classes.Prices__table_row}>
            <td>
              Mini
              <br />
              <small>Age 5-7 on 1st April</small>
            </td>
            <td>&pound;47</td>
          </tr>
          <tr className={classes.Prices__table_row}>
            <td>
              Junior
              <br />
              <small>Age 8-15 on 1st April</small>
            </td>
            <td>&pound;120</td>
          </tr>
          <tr className={classes.Prices__table_row}>
            <td>
              Intermediate
              <br />
              <small>Age 16-20 on 1st April</small>
            </td>
            <td>&pound;130</td>
          </tr>
          <tr className={classes.Prices__table_row}>
            <td>
              Non-Playing
              <br />
              <small>At discretion of TLTC committee</small>
            </td>
            <td>&pound;20</td>
          </tr>
          <tr className={classes.Prices__table_row}>
            <td>
              Family
              <FontAwesomeIcon
                icon={["far", "question-circle"]}
                className={classes.info_icon}
                onClick={() => props.showInfoHandler(1)}
              />
              <br />
              <small>Includes one free Saturday morning coaching place</small>
            </td>
            <td>&pound;480</td>
          </tr>
          <tr className={classes.Prices__table_row}>
            <td>
              Day
              <FontAwesomeIcon
                icon={["far", "question-circle"]}
                className={classes.info_icon}
                onClick={() => props.showInfoHandler(2)}
              />
              <br />
              <small>At discretion of TLTC committee</small>
            </td>
            <td>&pound;125</td>
          </tr>
          <tr className={classes.Prices__table_row}>
            <td>
              Parent and Child{" "}
              <FontAwesomeIcon
                icon={["far", "question-circle"]}
                className={classes.info_icon}
                onClick={() => props.showInfoHandler(3)}
              />
            </td>
            <td>&pound;130</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default PricesTable;
