import React, { useState, useEffect } from "react";
import Modal from "../UIElements/Modal";
import Fields from "./components/Fields";

import "./Home.css";
const log = console.log;
const Base = () => {
  const [showModal, showModalHandler] = useState(false);
  const [modalData, modalDataHandler] = useState({});

  const toggleModal = (bool, data) => {
    showModalHandler(bool);
    if (bool) {
      // showModalHandler(bool);
      modalDataHandler(data);
      log(`bool: ${bool}`);
      log(data);
    } else {
      log("close MODAL");
      showModalHandler(false);

      // log(`bool: ${bool}`);
      log(data);
    }
  };

  useEffect(() => {}, [modalData]);

  return (
    <div className="home__container">
      <div className="home__main center">
        <h1 className="home__header font-lobster">Mortgage Calculator</h1>
        <div className="container__home-fields">
          {/* {showModal && } */}

          <Fields toggleModal={toggleModal} />
        </div>
      </div>

      <Modal
        show={showModal}
        modalInfo={modalData}
        classes="center"
        toggleModal={toggleModal}
      />
    </div>
  );
};

export default Base;
