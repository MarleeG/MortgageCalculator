import React, { useState } from "react";
import Modal from "../UIElements/Modal";
import Fields from "./components/Fields";

import "./Home.css";
const log = console.log;
const Base = () => {
  const [showModal, showModalHandler] = useState(false);

  const toggleModal = (bool) => {
    log(`bool: ${bool}`);
    bool ? showModalHandler(false) : showModalHandler(true);
  };

  return (
    <div className="home__container">
      <div className="home__main center">
        <h1>Mortgage Calculator</h1>
        <div className="container__home-fields">
          {/* {showModal && } */}

          <Fields toggleModal={toggleModal} />
        </div>
      </div>

      <Modal show={showModal} classes='center'/>
    </div>
  );
};

export default Base;
