import classes from "./Prices.module.scss";
import Modal from "../UI/Modal";
import Backdrop from "../UI/Backdrop";
import PricesTable from "./PricesTable";
import React, { useState } from "react";

const Prices = () => {
  const [modalShowing, setModalShowing] = useState(false);
  const [activeInfo, setActiveInfo] = useState(null);

  const showInfoHandler = (infoId) => {
    setModalShowing(true);
    setActiveInfo(infoId);
  };

  const hideInfoHandler = () => {
    setModalShowing(false);
  };

  return (
    <React.Fragment>
      {modalShowing && <Backdrop clicked={hideInfoHandler} />}
      <Modal infoId={activeInfo} open={modalShowing} />
      <div className={classes.Prices}>
        <p>
          Here at Titwood we welcome both players interested in playing
          competitively as part of our teams in the West of Scotland leagues and
          people interested in playing socially. We welcome beginners and more
          advanced players. New members are always welcome!
        </p>
        <PricesTable
          showInfoHandler={showInfoHandler}
          hideInfoHandler={hideInfoHandler}
        />
      </div>
    </React.Fragment>
  );
};

export default Prices;
