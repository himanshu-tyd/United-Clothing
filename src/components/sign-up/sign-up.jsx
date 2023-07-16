import React, { useState } from "react";
import CustomBtn from "../custom-button/custome-button";
import FormInput from "../form-input/form-input";
import "./sign-up.styles.scss";
import { createUserProfile } from "../../firebase/firebase.utils";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const auth=getAuth();
      const { user } = await createUserWithEmailAndPassword(auth,email,password);
      createUserProfile(user, { displayName });

      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
  
    const stateUpdaterMap = {
      displayName: setDisplayName,
      email: setEmail,
      password: setPassword,
      confirmPassword: setConfirmPassword,
    };
  
    const stateUpdater = stateUpdaterMap[name];
    if (stateUpdater) {
      stateUpdater(value);
    }
  };
  

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span className="subtitle">Sign up with email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
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
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomBtn type="submit">SIGN UP</CustomBtn>
      </form>
    </div>
  );
};

export default SignUp;
