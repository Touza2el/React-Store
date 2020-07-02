import React, { Component } from "react";
import "./styles.scss";
import Button from "./../Forms/Button";
import { signInWithGoogle } from "./../../firebase/Utils";

class SignIn extends Component {
  handleSubmit = async (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="sign-in">
        <div className="sign-in-content">
          <h3 className="sign-in-title">login</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="social-sign-in">
              <Button onClick={signInWithGoogle}>Sign In With Google</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
