import React from "react";
import classes from "../../styles/FormFields.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = (props) => {
  return (
    <div className={classes.form__input_container}>
      <input
        id={props.id}
        placeholder={props.placeholder}
        className={`${classes.form__input} ${
          props.inputHasError && classes.form__invalid
        } `}
        value={props.enteredValue}
        onBlur={props.blurHandler}
        onChange={props.changeHandler}
      />
      <label
        htmlFor={props.id}
        className={`${classes.form__label} ${classes.isactive}`}
      >
        <FontAwesomeIcon
          icon={["fas", "user"]}
          className={classes.contactIcon}
        />
      </label>
    </div>
  );
};

export default Input;
