import React, { Component } from "react";
import "./styles.scss";

import Button from "./../Forms/Button";
import FormInput from "./../Forms/FormInput";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <div className="sign-up-content">
          <h3 className="sign-up-title">sign up</h3>
          <form>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              placeholder="Full Name"
              onChange={this.handleChange}
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={this.handleChange}
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={this.handleChange}
            />
            <Button type="submit">register</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
