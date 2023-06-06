import React from "react";
import useModal from './hooks/useModal';
import Modal from "./components/Modal";
import "./index.css";

function App() {
  const {modalVisible, show} = useModal();
  const text = {
      title: 'Title',
      message: 'Message',
    }
  

  return (
    <div className="App">
      <button className="button-default" onClick={show}>
        <p>Confirm</p>
      </button>
      <Modal
        modalVisible={modalVisible}
        hide={show}
        text={text}
      />
    </div>
  );
}

export default App;
