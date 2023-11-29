import React from 'react'
import PropTypes from "prop-types";
import  "./InputField.css";
const InputField = ({ property1, text = "Placeholder", text1 = "Label" }) => {
    return (
        <div className="input-field">
          <div className={`overlap-group ${property1}`}>
            
            <input className="placeholder" type="text"placeholder= {text} />
          </div>
          <div className="label">{text1}</div>
        </div>
      );
}

export default InputField

InputField.propTypes = {
    property1: PropTypes.oneOf(["filled-focus", "default", "focus", "disable", "fiiled"]),
    text: PropTypes.string,
    text1: PropTypes.string,
  };