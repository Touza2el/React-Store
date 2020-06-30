import React from "react";
import "./styles.scss";
import SignIn from "./../../components/SignIn";

function Login(props) {
  return (
    <div className="login">
      <div className="container">
        <SignIn />
      </div>
    </div>
  );
}
export default Login;
