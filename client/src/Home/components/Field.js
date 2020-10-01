import React, { useState, useEffect } from "react";
import Button from "../../UIElements/Button";
import Input from "../../UIElements/Input";

import "./Field.css";

const log = console.log;
const Field = (props) => {
  // input fields
  const [homeValue, updateHomeValue] = useState(100000);
  const [downPayment, updateDownPayment] = useState(20000);
  const [interestRate, updateInterestRate] = useState(3.05);
  const [homeownersInsurance, updateHomeownersInsurance] = useState(85);
  const [propertyTax, updatePropertyTax] = useState(110);
  const [hoa, updateHOA] = useState(150);
  const [loanLength, updateLoanLength] = useState();
  const [currentKey, updateCurrentKey] = useState("");
  const [currentKeyCode, updateCurrentKeyCode] = useState(null);

  const handleChange = (e) => {
    const { value, name } = e.target;

    const isNumber = parseInt(currentKey);
    const isBackspace = currentKeyCode === 8;
    const isDot = currentKeyCode === 190;
    const isDash = currentKeyCode === 173;

    if (!isDash) {
      log("NUMBER");
      switch (name) {
        case "home-value":
          if (
            isNumber ||
            isBackspace ||
            homeValue.toString().split("").indexOf(".") === -1
          ) {
            updateHomeValue(value);
          }
          break;
        case "down-payment":
          if (
            isNumber ||
            isBackspace ||
            downPayment.toString().split("").indexOf(".") === -1
          ) {
            updateDownPayment(value);
          }
          break;

        case "interest-rate":
          if (
            isNumber ||
            isBackspace ||
            interestRate.toString().split("").indexOf(".") === -1
          ) {
            updateInterestRate(value);
          }
          break;
        case "homeowners-insurance":
          if (
            isNumber ||
            isBackspace ||
            homeownersInsurance.toString().split("").indexOf(".") === -1
          ) {
            updateHomeownersInsurance(value);
          }
          break;

        case "property-tax":
          if (
            isNumber ||
            isBackspace ||
            propertyTax.toString().split("").indexOf(".") === -1
          ) {
            updatePropertyTax(value);
          }

          break;

        case "homeowners-association":
          if (
            isNumber ||
            isBackspace ||
            hoa.toString().split("").indexOf(".") === -1
          ) {
            updateHOA(value);
          }

          updateHOA(value);
          break;

        default:
          alert("err");
      }
    }
  };

  const keyDown = (e) => {
    // handleChange(e);
    // log(e.target);

    const { key, keyCode } = e;
    log(`keycode: ${keyCode}`);

    updateCurrentKey(key);
    updateCurrentKeyCode(keyCode);

    // const isNumber = parseInt(e.key);

    // if (isNumber) {
    //   log("number");
    // }
  };

  const getLoanLength = (e) => {
    let val = document.getElementById("loan-length").value;
    updateLoanLength(val);

    return val;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    log("-----------------");
    log(`homeValue: ${homeValue}`);
    log(`downPayment: ${downPayment}`);
    log(`interestRate: ${interestRate}`);
    log(`homeownersInsurance: ${homeownersInsurance}`);
    log(`propertyTax: ${propertyTax}`);
    log(`hoa: ${hoa}`);
    log(`loanLength: ${getLoanLength()}`);
    log("-----------------");
  };

  useEffect(() => {}, []);

  return (
    <div className="field__container">
      <form className="field__form" onSubmit={handleSubmit}>
        <Input
          value={homeValue}
          name="home-value"
          type="text"
          for="Home Value"
          tag="input"
          handleChange={handleChange}
          onKeyDown={keyDown}
        />

        {/* amount or % - additional feature */}
        <Input
          value={downPayment}
          name="down-payment"
          type="text"
          tag="input"
          for="Down payment"
          placeholder="20000"
          handleChange={handleChange}
          onKeyDown={keyDown}
        />

        {/* interest rate */}
        <Input
          value={interestRate}
          name="interest-rate"
          type="text"
          tag="input"
          for="Interest rate"
          placeholder="3.05"
          handleChange={handleChange}
          onKeyDown={keyDown}
        />

        {/* Homeowners insurance */}
        <Input
          value={homeownersInsurance}
          name="homeowners-insurance"
          type="text"
          tag="input"
          for="Homeowner's Insurance"
          placeholder="85"
          handleChange={handleChange}
          onKeyDown={keyDown}
        />

        {/* Property Tax */}

        <Input
          value={propertyTax}
          name="property-tax"
          type="text"
          tag="input"
          for="Property tax"
          placeholder="110"
          handleChange={handleChange}
          onKeyDown={keyDown}
        />

        {/* HOA fees */}
        <Input
          value={hoa}
          name="homeowners-association"
          type="text"
          tag="input"
          for="HOA"
          placeholder="150"
          handleChange={handleChange}
          onKeyDown={keyDown}
        />

        {/* drop down options */}
        {/* length of loan */}
        <Input for="Length of loan" tag="dropdown">
          <select id="loan-length" name="loan-length">
            <option value="30">30 Years</option>
            <option value="20">20 Years</option>
            <option value="15">15 Years</option>
            <option value="10">10 Years</option>
          </select>
        </Input>

        {/* dropdrop value  */}
        {/* <button onClick={(e) => getVal(e)} type="submit">
          {" "}
          Get dropdown value
        </button> */}

        <div className="field__break"></div>
        {/* Submit Button Here */}
        <Button type="submit" text="SUBMIT" />
      </form>
    </div>
  );
};

export default Field;
