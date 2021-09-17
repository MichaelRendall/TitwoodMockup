import classes from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className={`${classes.footer} padding`}>
      <div className={classes.footerRow}>
        <div>
          <p>
            <FontAwesomeIcon
              icon={["fas", "mobile-alt"]}
              className={classes.contactIcon}
            />
            0141 552 4800
          </p>

          <p>
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className={classes.contactIcon}
            />
            info@titwoodtennis.co.uk
          </p>
        </div>
        <div>
          <ul className={classes.ul}>
            <li>
              <a
                className={classes.socialMedia}
                href="https://www.facebook.com/TitwoodLTC/"
                target="new"
              >
                <FontAwesomeIcon
                  icon={["fab", "facebook-f"]}
                  className={classes.mediaIcon}
                />
              </a>
            </li>
            <li>
              <a
                className={classes.socialMedia}
                href="https://twitter.com/titwoodtennis"
                target="new"
              >
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  className={classes.mediaIcon}
                />
              </a>
            </li>
            <li>
              <a
                className={classes.socialMedia}
                href="https://www.instagram.com/titwoodlawntennis/"
                target="new"
              >
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  className={classes.mediaIcon}
                />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p>
            Titwood Lawn Tennis Club,
            <br />
            Glencairn Gardens,
            <br />
            Glasgow, G41 4LN
          </p>
        </div>
      </div>
      <div className={classes.footerRow}>
        <div>
          <small>© 2021 Titwood Lawn Tennis Club</small>
        </div>
        <div className="centerText">
          <small>Privacy Policy</small>
        </div>
        <div>
          <small>Designed &amp; Developed by Michael Rendall</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
