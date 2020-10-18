import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Button from "./Button";
// import Backdrop from "./Backdrop";

import "./Modal.css";

const log = console.log;
const ModalOverlay = (props) => {
  // log('Props');
  const {
    classes,
    modalInfo: { title, msg, width, height },
    showInputValues,
    inputData: {
      homeValue,
      downPayment,
      interestRate,
      homeownersInsurance,
      propertyTax,
      hoa,
      loanLength,
    },
  } = props;
  log(`showInputValues:: ${showInputValues}`);

  log(`homeValue: ${homeValue}`);

  useEffect(() => {}, [props.show, title]);

  const content = (
    <Fragment>
      {showInputValues ? (
        <div
          className={`modal__container ${classes}`}
          style={{ width: width, height: height }}
        >
          <span
            className="modal_exit-x"
            onClick={() => props.toggleModal(false, {})}
          >
            X
          </span>
          {title && <h1 className="modal__header font-lobster">{title}</h1>}

          {/* {msg && <p>{msg}</p>} */}

          <table className="modal__table">
            <tbody>
              <tr>
                <th>Home Value</th>
                <th>Down Payment</th>
                <th>Interest Rate</th>
                <th>Homeowner's Insurance</th>
                <th>Property Tax</th>
                <th>HOA</th>
                <th>Length of loan</th>
              </tr>
              <tr>
                <td>${homeValue}</td>
                <td>${downPayment}</td>
                <td>{interestRate} %</td>
                <td>${homeownersInsurance}</td>
                <td>${propertyTax}</td>
                <td>${hoa}</td>
                <td>{loanLength} years</td>
              </tr>
            </tbody>
          </table>

          <div className="modal__btn-wrapper">
            <Button
              text="Calculate Mortgage"
              type="text"
              handleCloseModal={props.toggleModal}
              animate={false}
              classes="modal__btn modal__btn-calculate"
            />

            <Button
              text="Edit"
              type="text"
              handleCloseModal={props.toggleModal}
              animate={false}
              classes="modal__btn modal__btn-calculate-close"
            />
          </div>
        </div>
      ) : (
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
            text="Close"
            type="text"
            handleCloseModal={props.toggleModal}
            animate={false}
            classes="modal__btn"
          />
        </div>
      )}
    </Fragment>
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
