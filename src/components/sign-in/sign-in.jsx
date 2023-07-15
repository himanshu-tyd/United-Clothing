import React from "react";
import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import CustomeBtn from "../custom-button/custome-button";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sing-in">
        <h2>I already have an account</h2>
        <span className="title">Sing in with your email and password</span>
        <form value="" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="btns">
            <CustomeBtn type="submit">Sing in</CustomeBtn>
            <CustomeBtn isGoogleSignIn={true} onClick={signInWithGoogle}>
              Sing in with Google
            </CustomeBtn>
          </div>
            <Link to="/signup" className="no-ac">I don't have a account</Link>
        </form>
      </div>
    );
  }
}

export default SignIn;
