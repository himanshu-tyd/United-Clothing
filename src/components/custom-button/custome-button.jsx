import React from 'react';
import './custome-button.scss';
const CustomBtn = ({ children, isGoogleSignIn,inverted, ...otherprops }) => {
    const buttonClass =  inverted ? 'inverted custom-btn': isGoogleSignIn ? 'google-sign-in custom-btn' : 'custom-btn';
  
    return (
      <button className={buttonClass} {...otherprops}>
        {children}
      </button>
    );
  };
  

export default CustomBtn;
