import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="wrap">
          <div className="logo">
            <Link to="/">
              <h4>shoppingfor</h4>
            </Link>
          </div>
          <div className="registration-link">
            <Link to="/registration">
              <h4>register</h4>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
