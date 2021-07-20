import React from "react";
import Logo from "../img/logo.png";
import { BrowserRouter as Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="headerBc">
      <div className="container">
        <div className="btn-group">
          <Link to="/" className="btn btnNav" activeClassName="active">
            <img src={Logo} alt="everis" />
          </Link>

          <Link to="/logout" className="btn btnNav">
            {" "}
            Nombre usuario{" "}
          </Link>
          <div className="separate mt-2"></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;