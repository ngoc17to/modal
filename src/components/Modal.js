import React from "react";
import ReactDOM from 'react-dom';
import "../App.css";

const Modal = ({modalVisible, hide, text}) => modalVisible ? ReactDOM.createPortal (
  <div className="modal-container">
      <div className="modal-overlay"  onClick={hide}/>
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-header">
            <p style={{fontWeight: "bold", backgroundColor: "None"}}>{text.title}</p>
            <button className="close-button" onClick={hide}>
              <div>&times;</div>
            </button>
          </div>
          <div className="modal-message">
            <p>{text.message}</p>
          </div>
          <div className="modal-footer">
            <button className="button-default cancel-button" onClick={hide}>
              <p style={{color: "black"}}>Hủy</p>
            </button>
            <button className="button-default submit-button" onClick={hide}>
              <p>Xác nhận</p>
            </button>
          </div>
        </div>
      </div>
  </div>, document.body
) : null;

export default Modal;