import React from "react";
import  "./LoginButton.css";
import PropTypes from "prop-types";

const LoginButton = ({ property1, className, text = "Button"}) => {
  return (
    <a href="/home" className={`big-button ${property1} ${className}`}>
      <div className="label">{text}</div>

    </a>
  );
}

export default LoginButton

LoginButton.propTypes = {
  property1: PropTypes.oneOf(["disable", "hover", "default"]),
  text: PropTypes.string,
  hasIconGeneralArrow: PropTypes.bool,
};