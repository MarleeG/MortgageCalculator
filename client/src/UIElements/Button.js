import React, { useState, useEffect } from "react";

import "./Button.css";
const Button = (props) => {
  const [buttonClasses, updateButtonClasses] = useState(
    "button box-shadow animate__animated"
  );

  const addAnimation = () => {
    let currentClasses = buttonClasses;
    currentClasses = currentClasses + " animate__shakeX";
    updateButtonClasses(currentClasses);
  };

  const removeAnimation = () => {
    updateButtonClasses("button box-shadow animate__animated");
  };

  useEffect(() => {},[])
  return (
    <button
      type={props.type}
      className={buttonClasses}
      onMouseEnter={() => addAnimation()}
      onMouseLeave={() => removeAnimation()}
    >
      {props.text}
    </button>
  );
};

export default Button;
