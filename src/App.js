import React from "react";
import useModal from './hooks/useModal';
import useToast from './hooks/useToast';
import Modal from "./components/Modal/Modal.js";
import Toast from "./components/Toast/Toast.js";
import "./App.css";
import { useTheme } from "./ThemeContext";

function App() {
  const {theme, toggleTheme} = useTheme();
  const {modalVisible, show} = useModal();
  const {addToastHandler, deleteToastHandler, toastList} = useToast();
  const text = {
      title: 'Title',
      message: 'Message',
  }
  const toastText = [
    { message: 'This is success toast', type: 'success' },
    { message: 'This is warning toast', type: 'warning' },
    { message: 'This is error toast', type: 'error' },
  ]
  

  return (
    <div className="App">
      <button className="button-default" onClick={show}>
        <p>Confirm</p>
      </button>
      <Modal
        modalVisible={modalVisible}
        hide={show}
        text={text}
        theme = {theme}
      />
      <button 
        className="button-default success-button" 
        onClick={() => addToastHandler(toastText[0])}
      > <p>Success</p> </button>

      <button 
        className="button-default warning-button" 
        onClick={() => addToastHandler(toastText[1])}
      > <p>Warning</p> </button>

      <button 
        className="button-default error-button" 
        onClick={() => addToastHandler(toastText[2])}
      > <p>Error</p> </button>

      <Toast
        toastList={toastList}
        deleteToast={deleteToastHandler}
        theme = {theme}
      />
      <button className="mode_btn" onClick={toggleTheme}>
        <img src={require('./img/' + theme + '_mode.png')} alt="theme_mode"/>
      </button>
    </div>
  );
}

export default App;
