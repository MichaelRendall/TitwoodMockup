import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <button className={classes.button} onClick={props.clicked}>
      {props.text}
    </button>
  );
};

export default Button;
