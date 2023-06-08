import React from "react";
import ReactDOM from 'react-dom';
import "../../App.css";
import "./Toast.css";
import { useTheme } from "../../ThemeContext";

const Toast = ({toastList, deleteToast}) => {
  const {theme} = useTheme();
  if(toastList !==null){
    return(
      ReactDOM.createPortal(
      <div className="toast-container">
          <div className="toast-wrapper">
            {toastList.map(({ message, type, id }) => (
                <div className={type} key={id}>
                    <img src={  require('../../img/' + type + '_' + theme + '.png')}
                      style={{width: "25px", height: "25px", marginRight:'10px'}} alt={type}/>
                    <p>{message}</p>
                    <button className="close-button toast-close-button" onClick={() => deleteToast(id)}>
                      <img src={  require('../../img/close_' + theme + '.png')} alt="close_btn"/>
                    </button>
                </div>
            ))}
          </div>
        </div>, document.body
      )
    )
  }
  else return (<></>)
}
export default Toast;

//hree