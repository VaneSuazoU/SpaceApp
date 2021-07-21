import React from "react";
import Logo from "../img/logo.png";
import { BrowserRouter as Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="headerBc">
      <div className="container">
          <Link to="/" className="headerA" activeClassName="active">
            <img src={Logo} alt="everis" />
          </Link>
          <Link to="/logout" className="headerB">
            {" "}
            Nombre usuario{" "}
          </Link>
          <div className="separate mt-2"></div>
        </div>
    </nav>
  );
};

export default Header;