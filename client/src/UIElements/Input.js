import React, { Fragment } from "react";

import "./Input.css";

const log = console.log;
const Input = (props) => {
  const inputStyles = {
    width: "100%",
    height: "2.5vw",
    // border: "1px solid black",
    // borderRadius: "3px",
  };

  return (
    <Fragment>
      <div className="input__container">
        <label>{props.for}</label>
        {/* <span>$</span> */}
        {props.tag === "input" ? (
          <span className="unit-input">
            <span className="unit-input__prepend">$</span>
             <input
            value={props.value}
            name={props.name}
            type={props.type}
            placeholder={props.placeholder || "placeholder"}
            onChange={(e) => props.handleChange(e)}
            style={inputStyles}
            className="input__input unit-input__input"
          />
          </span>
         
        ) : (
          // show dropdown option here
          props.children
        )}
      </div>
    </Fragment>
  );
};

export default Input;
