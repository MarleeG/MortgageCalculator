import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Button from "./Button";
// import Backdrop from "./Backdrop";

import "./Modal.css";

const log = console.log;
const ModalOverlay = (props) => {
  // log('Props');
  // log(props);
  const {
    classes,
    modalInfo: { title, msg },
  } = props;

  useEffect(() => {}, [props.show, title]);

  const content = (
    <div className={`modal__container ${classes}`}>
      <span
        className="modal_exit-x"
        onClick={() => props.toggleModal(false, {})}
      >
        X
      </span>
      {title && <h1 className="modal__header font-lobster">{title}</h1>}

      {msg && <p>{msg}</p>}

      <Button
        text="CLOSE"
        type="text"
        handleCloseModal={props.toggleModal}
        animate={false}
        classes="modal__btn"
      />
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <Fragment>
      {props.show && (
        // <Backdrop onClick={props.onHide} style={{ zIndex: 105 }} />

        <CSSTransition
          in={props.show}
          mountOnEnter
          unmountOnExit
          timeout={200}
          classNames="modal"
        >
          <ModalOverlay {...props} />
        </CSSTransition>
      )}
    </Fragment>
  );
};

export default Modal;
