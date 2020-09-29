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

  const handleChange = (e) => {
    const { value, name } = e.target;
    // log(`name: ${name} | value: ${value}`);

    switch (name) {
      case "home-value":
        updateHomeValue(value);
        break;
      case "down-payment":
        updateDownPayment(value);
        break;

      case "interest-rate":
        updateInterestRate(value);
        break;

      case "homeowners-insurance":
        updateHomeownersInsurance(value);
        break;

      case "property-tax":
        updatePropertyTax(value);
        break;

      case "homeowners-association":
        updateHOA(value);
        break;

      default:
        alert("err");
    }
  };

    // for dropdown test
    const getLoanLength = (e) => {
      // e.preventDefault();
      let val = document.getElementById('loan-length').value;
      updateLoanLength(val);

      return val;
    };

  const handleSubmit = e => {
    e.preventDefault();


    log('-----------------');
    log(`homeValue: ${homeValue}`);
    log(`downPayment: ${downPayment}`);
    log(`interestRate: ${interestRate}`);
    log(`homeownersInsurance: ${homeownersInsurance}`);
    log(`propertyTax: ${propertyTax}`);
    log(`hoa: ${hoa}`);
    log(`loanLength: ${getLoanLength()}`);
    log('-----------------');

  }

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
        <Button type="submit" text="SUBMIT"  />
      </form>
    </div>
  );
};

export default Field;
