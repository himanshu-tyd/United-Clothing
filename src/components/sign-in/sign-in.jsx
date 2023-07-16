import React, { useState } from "react";
import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import CustomBtn from "../custom-button/custome-button";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";



const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const isValidEmail = validateEmail(email);
      if (!isValidEmail) {
        throw new Error("Not a valid Email");
      } else {
        const authInstance=getAuth();
        await signInWithEmailAndPassword(authInstance,email, password);
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value)
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span className="title">Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <div className="btns">
          <CustomBtn type="submit">Sign in</CustomBtn>
          <CustomBtn isGoogleSignIn onClick={signInWithGoogle}>
            Sign in with Google
          </CustomBtn>
        </div>
        <Link to="/signup" className="no-ac">
          I don't have an account
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
