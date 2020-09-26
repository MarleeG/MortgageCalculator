import React, { useState, useEffect } from "react";
import Input from "../../UIElements/Input";

import "./Field.css";

const log = console.log;
const Field = (props) => {
  // input fields
  const [homeValue, updateHomeValue] = useState(100000);

  const handleChange = (e) => {
    const { value, name } = e.target;
    // log(`name: ${name} | value: ${value}`);

    switch (name) {
      case "home-value":
        updateHomeValue(value);
        break;

      default:
        alert("err");
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="field__container">
      <form>
        <Input
          value={homeValue}
          name="home-value"
          type="text"
          for="Home Value"
          handleChange={handleChange}
        />
        {/* <Input value={inputValue} name="This is the name" type="text" for="Test" handleChange={handleChangeTwo}/> */}
      </form>
    </div>
  );
};

export default Field;
