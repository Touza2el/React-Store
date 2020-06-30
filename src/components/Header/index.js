import React from "react";
import { Link } from "react-router-dom";
import { auth } from "./../../firebase/Utils";

import "./styles.scss";

const Header = (props) => {
  const { currentUser } = props;
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
            {currentUser && (
              <h4 className="logout-link" onClick={() => auth.signOut()}>
                logout
              </h4>
            )}
            {!currentUser && (
              <React.Fragment>
                <Link to="/registration">
                  <h4 className="register-link">register</h4>
                </Link>
                <Link to="/login">
                  <h4 className="login-link">login</h4>
                </Link>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};
export default Header;
