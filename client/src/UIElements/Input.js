import React, { Fragment } from "react";

import "./Input.css";

const log = console.log;
const Input = (props) => {
  log(props);

  const inputStyles = {
    width: "17vw",
    height: "2.5vw",
    border: "1px solid black",
    margin: "10px",
    borderRadius: "3px",
  };

  return (
    <Fragment>
      <label>{props.for}</label>
      <input
        value={props.value}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder || "placeholder"}
        onChange={(e) => props.handleChange(e)}
        style={inputStyles}
      />
    </Fragment>
  );
};

export default Input;
