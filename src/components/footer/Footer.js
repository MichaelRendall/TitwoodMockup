import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className={`${classes.footer} padding`}>
      <div>
        <p>
          <FontAwesomeIcon icon={["fas", "mobile-alt"]} /> 0141 552 4800
        </p>

        <p>
          <FontAwesomeIcon icon={["fas", "envelope"]} />{" "}
          info@titwoodlawntennisclub.co.uk
        </p>
      </div>
      <div>
        <FontAwesomeIcon icon={["fab", "facebook-f"]} />
        <FontAwesomeIcon icon={["fab", "twitter"]} />
        <FontAwesomeIcon icon={["fab", "instagram"]} />
      </div>
      <div>
        <p>
          Titwood Lawn Tennis Club,
          <br />
          Glencairn Gardens,
          <br />
          Glasgow,
          <br />
          G41 4LN
        </p>
      </div>
    </footer>
  );
};

export default Footer;
