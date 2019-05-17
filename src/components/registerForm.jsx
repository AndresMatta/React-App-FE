import React from "react";
import Joi from "joi-browser";

import { register } from "../services/userService";
import { loginWithJwt } from "../services/authService";

import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: { name: "", username: "", password: "" },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    username: Joi.string()
      .email()
      .required()
      .label("E-mail"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password")
  };

  doSubmit = async () => {
    try {
      const response = await register(this.state.data);
      loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="text-center">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("username", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
