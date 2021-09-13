import classes from "./Form.module.scss";
import React from "react";
/* import Button from "../UI/Button"; */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = (props) => {
  return (
    <div className={classes.form__container}>
      <form className={classes.form}>
        <div className={classes.form__input_container}>
          <input
            id="name"
            placeholder="Full Name"
            className={classes.form__input}
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
            className={classes.form__input}
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
            className={classes.form__input}
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
            className={classes.form__textarea}
          ></textarea>
          <label htmlFor="message" className={classes.form__label}>
            <FontAwesomeIcon
              icon={["fas", "comment"]}
              className={classes.contactIcon}
            />
          </label>
        </div>
        <button className={classes.form__button}>Send Message</button>
      </form>
    </div>
  );
};

export default Form;
