import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
// import Backdrop from "./Backdrop";

import "./Modal.css";

const log = console.log;
const ModalOverlay = (props) => {
  const {
    classes,
    modalInfo: { title },
  } = props;
  useEffect(() => {}, [props.show, title]);

  const content = (
    <div className={`modal__container ${classes}`}>
      {/* <h1>{}</h1> */}
      {title && <h1>{title}</h1>}I am the Modal
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  log(props);
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
