import React, { useState, useEffect } from "react";
import Modal from "../UIElements/Modal";
import Fields from "./components/Fields";

import "./Home.css";
const log = console.log;
const Base = () => {
  const [showModal, showModalHandler] = useState(false);
  const [modalData, modalDataHandler] = useState({});

  const toggleModal = (bool, data) => {
    log(`bool: ${bool}`);
    log(data);

    if (bool) {
      showModalHandler(bool);
      modalDataHandler(data);
    } else {
      showModalHandler(true);
    }
  };

  useEffect(() => {}, [modalData]);

  return (
    <div className="home__container">
      <div className="home__main center">
        <h1 className="home__header">Mortgage Calculator</h1>
        <div className="container__home-fields">
          {/* {showModal && } */}

          <Fields toggleModal={toggleModal} />
        </div>
      </div>

      <Modal show={showModal} modalInfo={modalData} classes="center" />
    </div>
  );
};

export default Base;
