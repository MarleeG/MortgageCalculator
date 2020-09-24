import React from "react";
import Input from "../../UIElements/Input";

import "./Field.css";

const Field = (props) => {
  return (
    <div className="field__container">
      <form>
        <Input value="value" for="Test" placeholder="placeholder"/>
      </form>
    </div>
  );
};

export default Field;
