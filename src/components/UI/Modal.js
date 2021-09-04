import classes from "./Modal.module.scss";
import DUMMY_MEMBERSHIP_INFO from "../../lib/dummy-membership-info";
import CSSTransition from "react-transition-group/CSSTransition";

const animationTiming = {
  enter: 200,
  exit: 200,
};

const Modal = (props) => {
  let title;
  let bodyFormatted;

  if (props.infoId !== null) {
    const selectedInfo = DUMMY_MEMBERSHIP_INFO.find(
      (info) => info.id === parseInt(props.infoId)
    );

    title = selectedInfo.title;

    const paragrpahs = selectedInfo.body.split("<br />");
    bodyFormatted = paragrpahs.map((paragrpah, index) => {
      return <p key={index}>{paragrpah}</p>;
    });
  }

  return (
    <CSSTransition
      in={props.open}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames={{ enterActive: classes.Open, exitActive: classes.Close }}
    >
      <div className={classes.modal}>
        <h2 className={classes.modal__header}>{title}</h2>
        {bodyFormatted}
      </div>
    </CSSTransition>
  );
};

export default Modal;
