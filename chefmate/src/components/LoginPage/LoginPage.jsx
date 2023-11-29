import React from 'react'
import  "./LoginPage.css";
import InputField from '../InputField/InputField';
import LoginButton from '../LoginButton/LoginButton';
const LoginPage = () => {
    return (
        <div className="login">
          <div className="div">
            <div className="titttle">
              <div className="text-wrapper-2">Hello,</div>
            </div>
            <div className="titttle-2">
              <div className="text-wrapper-4">Let’s make cooking easier.</div>
              <p className="p">
                Sign in to personalize your Chefmate experience. Discover recipes tailored to your taste, save your
                favorites, and join our community of cooking enthusiasts
              </p>
            </div>
            <div className='centered'>
                <InputField className="input-field-instance" property1="default" text="Enter Email" text1="Email" />
                <InputField
                className="design-component-instance-node"
                property1="default"
                text="Enter Password"
                text1="Enter Password"
                />
            </div>
            <div className='centered'>
                <div className='centered'>
                <LoginButton property1="default" text="Login" />
                </div>
                <div>
                <LoginButton
                property1="default"
                text="Create an account."
                />
                </div>
                
            </div>
            
            <div className="forgot-password">
              <div className="text-wrapper-3">Forgot Password?</div>
            </div>
            
          </div>
        </div>
      );
}

export default LoginPage