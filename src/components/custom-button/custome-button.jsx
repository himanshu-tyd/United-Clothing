import React from 'react';
import './custome-button.scss';

const CustomBtn = ({ children, isGoogleSignIn, ...otherprops }) => {
    const buttonClass = isGoogleSignIn ? 'google-sign-in custom-btn' : 'custom-btn';
  
    return (
      <button className={buttonClass} {...otherprops}>
        {children}
      </button>
    );
  };
  

export default CustomBtn;
