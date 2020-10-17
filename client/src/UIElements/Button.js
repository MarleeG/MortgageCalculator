import React, { useState, useEffect } from "react";

import "./Button.css";
const log = console.log;
const Button = (props) => {
  const { type, text, animate, classes, handleCloseModal } = props;

  if (typeof animate === "boolean") {
    log(props);
  }
  const [buttonClasses, updateButtonClasses] = useState(
    "button box-shadow animate__animated"
  );

  const addAnimation = () => {
    let currentClasses = buttonClasses;
    currentClasses = currentClasses + " animate__shakeX";
    updateButtonClasses(currentClasses);

    if (typeof animate === "boolean") {
      if (animate || animate === undefined) {
        updateButtonClasses(currentClasses);
      }else{
        removeAnimation();
      }
    }
  };

  const removeAnimation = () => {
    // if (typeof animate === "boolean" || animate === undefined) {
    //   if (animate) {
    //     updateButtonClasses("button box-shadow animate__animated");
    //   }
    // }

    updateButtonClasses("button box-shadow animate__animated");
  };

  useEffect(() => {}, []);
  return (
    <button
      type={type}
      className={buttonClasses && ` ${classes}`}
      onMouseEnter={() => addAnimation()}
      onMouseLeave={() => removeAnimation()}
      onClick={() => {
        if (handleCloseModal) {
          handleCloseModal(false, {});
        }
      }}
    >
      {text}
    </button>
  );
};

export default Button;
