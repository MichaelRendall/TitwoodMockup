import classes from "./Form.module.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useInput from "../../hooks/use-validation";

const isNotEmpty = (value) => value.trim() !== "";

const Form = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (
    enteredNameIsValid &&
    enteredPhoneIsValid &&
    enteredEmailIsValid &&
    enteredMessageIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    alert("all valid");
    resetNameInput();
    resetPhoneInput();
    resetEmailInput();
    resetMessageInput();
  };

  return (
    <div className={classes.form__container}>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div className={classes.form__input_container}>
          <input
            id="name"
            placeholder="Full Name"
            className={`${classes.form__input} ${
              nameHasError && classes.form__invalid
            } `}
            value={enteredName}
            onBlur={nameBlurHandler}
            onChange={nameChangeHandler}
          />
          <label
            htmlFor="name"
            className={`${classes.form__label} ${classes.isactive}`}
          >
            <FontAwesomeIcon
              icon={["fas", "user"]}
              className={classes.contactIcon}
            />
          </label>
        </div>
        <div className={classes.form__input_container}>
          <input
            id="phone"
            placeholder="Phone Number"
            className={`${classes.form__input} ${
              phoneHasError && classes.form__invalid
            } `}
            value={enteredPhone}
            onBlur={phoneBlurHandler}
            onChange={phoneChangeHandler}
          />
          <label htmlFor="phone" className={classes.form__label}>
            <FontAwesomeIcon
              icon={["fas", "mobile-alt"]}
              className={classes.contactIcon}
            />
          </label>
        </div>
        <div className={classes.form__input_container}>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className={`${classes.form__input} ${
              emailHasError && classes.form__invalid
            } `}
            value={enteredEmail}
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
          />
          <label htmlFor="email" className={classes.form__label}>
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className={classes.contactIcon}
            />
          </label>
        </div>
        <div className={classes.form__input_container}>
          <textarea
            id="message"
            placeholder="Your Message"
            className={`${classes.form__textarea} ${
              messageHasError && classes.form__invalid
            } `}
            value={enteredMessage}
            onBlur={messageBlurHandler}
            onChange={messageChangeHandler}
          ></textarea>
          <label htmlFor="message" className={classes.form__label}>
            <FontAwesomeIcon
              icon={["fas", "comment"]}
              className={classes.contactIcon}
            />
          </label>
        </div>
        <button disabled={!formIsValid} className={classes.form__button}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
