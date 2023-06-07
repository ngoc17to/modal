import React from "react";
import ReactDOM from 'react-dom';
import "../App.css";

const Toast = ({toastList, deleteToast}) => (toastList !== null) ? ReactDOM.createPortal(
  <div className="toast-container">
    <div className="toast-wrapper">
      {toastList.map(({ message, type, id }) => (
          <div className={type} key={id}>
              <img src={require('../img/' + type + '.png')} style={{width: "25px", height: "25px", marginRight:'10px'}}/>
              <p>{message}</p>
              <button className="close-button toast-close-button" onClick={() => deleteToast(id)}>
                <div>&times;</div>
              </button>
          </div>
      ))}
    </div>
  </div>, document.body
):null;

export default Toast;