import classes from "./Form.module.scss";
import React from "react";
import Input from "../UI/Input";
import Textarea from "../UI/Textarea";
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
        <Input
          id="name"
          placeholder="Your Name"
          inputHasError={nameHasError}
          enteredValue={enteredName}
          blurHandler={nameBlurHandler}
          changeHandler={nameChangeHandler}
        />
        <Input
          id="phone"
          placeholder="Phone Number"
          inputHasError={phoneHasError}
          enteredValue={enteredPhone}
          blurHandler={phoneBlurHandler}
          changeHandler={phoneChangeHandler}
        />
        <Input
          id="email"
          placeholder="Email"
          inputHasError={emailHasError}
          enteredValue={enteredEmail}
          blurHandler={emailBlurHandler}
          changeHandler={emailChangeHandler}
        />
        <Textarea
          id="message"
          placeholder="Your Message"
          inputHasError={messageHasError}
          enteredValue={enteredMessage}
          blurHandler={messageBlurHandler}
          changeHandler={messageChangeHandler}
        />
        <button disabled={!formIsValid} className={classes.form__button}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
