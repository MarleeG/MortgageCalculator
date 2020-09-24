import React, { Fragment } from "react";

import "./Input.css";

const Input = (props) => {

  const inputStyles ={
    width: "17vw",
    height: "2.5vw",
    border: "1px solid black",
    margin: "10px",
    borderRadius: "3px"


  };


  return (
    <Fragment>
        <label>{props.for}</label>
      <input style={inputStyles} value={props.value || ""} placeholder={props.placeholder || ""} />
    </Fragment>
  );
};

export default Input;
