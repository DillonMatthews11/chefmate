import React from "react";
import  "./StartPage.css";


const StartPage = () => {
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '15px 30px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };
  return (
  <div style={{ textAlign: 'center', marginTop: '100px' }}>
    <h1>Welcome to the Getting Started Page</h1>
    <p>Click the button below to get started:</p>
    <button style={buttonStyle}>Get Started</button>
  </div>
  );
}

export default StartPage
// {/* <MediumButton
//             className="medium-button-instance"
//             iconGeneralArrow="image.svg"
//             iconGeneralArrowClassName="medium-button-2"
//             labelClassName="design-component-instance-node"
//             property1="default"
//             text="Explore Recipes"
//           /> */}