import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/membership">Membership</NavLink>
          </li>
          <li>
            <NavLink to="/the-club">The Club</NavLink>
          </li>
          <li>
            <NavLink to="/news">News &amp; Events</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Get in Touch</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
