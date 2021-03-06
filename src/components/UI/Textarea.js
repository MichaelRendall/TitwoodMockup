import React from "react";
import classes from "../../styles/FormFields.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Textarea = (props) => {
  return (
    <div className={classes.form__input_container}>
      <textarea
        id={props.id}
        placeholder={props.placeholder}
        className={`${classes.form__textarea} ${
          props.inputHasError && classes.form__invalid
        } `}
        value={props.enteredValue}
        onBlur={props.blurHandler}
        onChange={props.changeHandler}
      ></textarea>
      <label
        htmlFor={props.id}
        className={`${classes.form__label} ${classes.isactive}`}
      >
        <FontAwesomeIcon
          icon={["fas", props.icon]}
          className={classes.contactIcon}
        />
      </label>
    </div>
  );
};

export default Textarea;
