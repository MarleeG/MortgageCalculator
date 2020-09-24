import React, { Fragment } from "react";

import "./Input.css";

const Input = (props) => {
  return (
    <Fragment>
        <label>{props.for}</label>
      <input value={props.value || ""} placeholder={props.placeholder || ""} />
    </Fragment>
  );
};

export default Input;
