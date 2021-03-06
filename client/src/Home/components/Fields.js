import React, { useState, useEffect } from "react";
import Button from "../../UIElements/Button";
import Input from "../../UIElements/Input";

import "./Fields.css";

const log = console.log;
// let loanLength = undefined;
const Fields = (props) => {
  // input fields
  const [homeValue, updateHomeValue] = useState(100000);
  const [downPayment, updateDownPayment] = useState(20000);
  const [interestRate, updateInterestRate] = useState(3.05);
  const [homeownersInsurance, updateHomeownersInsurance] = useState(85);
  const [propertyTax, updatePropertyTax] = useState(110);
  const [hoa, updateHOA] = useState(150);
  const [loanLength, updateLoanLength] = useState(undefined);

  const [currentKey, updateCurrentKey] = useState("");
  const [currentKeyCode, updateCurrentKeyCode] = useState(null);

  const [showModalStatus, showModalStatusHandler] = useState(false);
  const [modalData, modalDataHandler] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;

    const isNumber = Number.isInteger(
      parseInt(String.fromCharCode(currentKeyCode))
    );

    const isBackspace = currentKeyCode === 8;
    const isDash = currentKeyCode === 173;
    const isDot = currentKeyCode === 190;

    if (!isDash) {
      // log("NUMBER");
      switch (name) {
        case "home-value":
          if (isDot && homeValue.toString().split("").indexOf(".") === -1) {
            updateHomeValue(value);
          } else if (isNumber || isBackspace) {
            updateHomeValue(value);
          }

          break;
        case "down-payment":
          if (isDot && downPayment.toString().split("").indexOf(".") === -1) {
            updateDownPayment(value);
          } else if (isNumber || isBackspace) {
            updateDownPayment(value);
          }
          break;
        case "interest-rate":
          if (isDot && interestRate.toString().split("").indexOf(".") === -1) {
            updateInterestRate(value);
          } else if (isNumber || isBackspace) {
            updateInterestRate(value);
          }
          break;
        case "homeowners-insurance":
          if (
            isDot &&
            homeownersInsurance.toString().split("").indexOf(".") === -1
          ) {
            updateHomeownersInsurance(value);
          } else if (isNumber || isBackspace) {
            updateHomeownersInsurance(value);
          }

          break;

        case "property-tax":
          if (isDot && propertyTax.toString().split("").indexOf(".") === -1) {
            updatePropertyTax(value);
          } else if (isNumber || isBackspace) {
            updatePropertyTax(value);
          }
          break;
        case "homeowners-association":
          if (isDot && hoa.toString().split("").indexOf(".") === -1) {
            updateHOA(value);
          } else if (isNumber || isBackspace) {
            updateHOA(value);
          }
          break;

        default:
          // adjust this later
          alert("err");
      }
    }
  };

  const keyDown = (e) => {
    const { key, keyCode } = e;

    updateCurrentKey(key);
    updateCurrentKeyCode(keyCode);
  };

  const getLoanLength = (e) => {
    let val = document.getElementById("loan-length").value;
    updateLoanLength(val);

    // loanLength = val;

    return val;
  };

  const checkAllInputValues = () => {
    const inputValues = [
      { name: "homeValue", val: homeValue },
      { name: "downPayment", val: downPayment },
      { name: "interestRate", val: interestRate },
      { name: "homeownersInsurance", val: homeownersInsurance },
      { name: "propertyTax", val: propertyTax },
      { name: "hoa", val: hoa },
      { name: "loanLength", val: loanLength },
    ];

    // check if values are empty
    inputValues.map((valInfo) => {
      const { name, val } = valInfo;
      const emptyValue = val === "" || val === ".";
      // log(`emptyValue: ${emptyValue}`);

      if (emptyValue) {
        switch (name) {
          case "homeValue":
            updateHomeValue(0);
            break;
          case "downPayment":
            updateDownPayment(0);
            break;

          case "interestRate":
            updateInterestRate(0);
            break;

          case "homeownersInsurance":
            updateHomeownersInsurance(0);
            break;

          case "propertyTax":
            updatePropertyTax(0);
            break;

          case "hoa":
            updateHOA(0);
            break;
          // case "loanLength":

            // if (!loanLength) {
            //   updateLoanLength(loanLength);
            // }
            // break;

          default:
            updateHomeValue(0);
            updateDownPayment(0);
            updateInterestRate(0);
            updateHomeownersInsurance(0);
            updatePropertyTax(0);
            updateHOA(0);
        }
      }
    });

    const homeValueInputted = inputValues[0].val;
    const downPaymentValueInputted = inputValues[1].val;

    if (homeValueInputted < downPaymentValueInputted) {
      log("DOWN PAYMENT IS LARGER THAN HOME VALUE");

      showModalStatusHandler(true);
      modalDataHandler({
        ...modalData,
        title: "Quick Reminder!",
        msg:
          "You're home value must be greater than or equal to your down payment.",
        showInputValues: false,
      });

      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    log("SUBMITTED");
    e.preventDefault();

    // log("-----------------");
    // log(`homeValue: ${homeValue}`);
    // log(`downPayment: ${downPayment}`);
    // log(`interestRate: ${interestRate}`);
    // log(`homeownersInsurance: ${homeownersInsurance}`);
    // log(`propertyTax: ${propertyTax}`);
    // log(`hoa: ${hoa}`);
    // log(`loanLength: ${getLoanLength()}`);
    // log("-----------------");

    checkAllInputValues();

    if (checkAllInputValues() && loanLength) {
      showModalStatusHandler(true);
      modalDataHandler({
        ...modalData,
        title: "Review",
        msg: "Received",
        width: "70vw",
        height: "60vh",
        showInputValues: true,
        data: {
          homeValue,
          downPayment,
          interestRate,
          homeownersInsurance,
          propertyTax,
          hoa,
          loanLength: getLoanLength(),
        },
      });
    }

    calculateMonthlyPayment();

    
  };

  const calculateMonthlyPayment =() => {
    const principalLoanAmount = parseFloat(homeValue) - parseFloat(downPayment);
    const monthDurationOfLoan = parseFloat(getLoanLength()) * 12;

    const rate = parseFloat(interestRate) / 100;

    // formula
    // M = P[r(1+r)^n/((1+r)^n)-1)]

    // numerator
    // r(1+r)^n
    const numerator =
      (rate / 12) * Math.pow(1 + rate / 12, monthDurationOfLoan);

    // log("numerator: ", numerator);

    // denomintor
    // ((1+r)^n)-1)
    let denomintor = parseFloat(Math.pow(1 + rate / 12, monthDurationOfLoan));

    denomintor = parseFloat(denomintor - 1);
    // log("denominator: ", denomintor);

    const fraction = parseFloat(numerator) / parseFloat(denomintor);

    const principalAndInterest = principalLoanAmount * parseFloat(fraction);

    // log(principalAndInterest);

    const monthlyPayment =
      principalAndInterest + hoa + propertyTax + homeownersInsurance;

    // props.toggleModal(true, {modalInfo: {title: 'Estimated Mortgage', msg: 'Message here'}});
    // log("monthly payment: ", monthlyPayment);
  }

  useEffect(() => {
    // log("Modal Data:: ", modalData);

    log(`modalData.title:: ${modalData.title}`);

    if (showModalStatus && modalData.title) {
      props.toggleModal(showModalStatus, modalData);
    }

  }, [modalData, showModalStatus]);

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
          sign="$"
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
          sign="$"
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
          sign="%"
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
          sign="$"
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
          sign="$"
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
          sign="$"
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

        <div className="field__break"></div>
        {/* Submit Button Here */}
        <Button type="submit" text="SUBMIT" />
      </form>
    </div>
  );
};

export default Fields;
