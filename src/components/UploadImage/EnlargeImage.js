import React from "react";
import ReactDOM from 'react-dom';
import './UploadImage.css';
import '../../App.css';
import '.././Modal/Modal.css';
import {AiOutlineClose, AiOutlineCloudDownload} from "react-icons/ai";
import { useTheme } from "../../ThemeContext";
import { saveAs } from 'file-saver'


const EnlargeImage = ({modalVisible, hide, imgPreview}) => {
  const {theme} = useTheme();
  const downloadImage = () => {
    saveAs(imgPreview, 'image.jpg') // Put your image url here.
  }
  if(modalVisible){
    return(
      ReactDOM.createPortal (
      <div className="modal-container">
          <div className="modal-overlay"  onClick={hide}/>
          <div className="modal-wrapper">
                <img src={imgPreview}></img>
                <button className="modal-button download-button" onClick={downloadImage}>
                  <AiOutlineCloudDownload size="100%" color={theme==='dark' ? '#fff' : '#000'}/>
                </button>
                <button className="modal-button close-button" onClick={hide}>
                  <AiOutlineClose size="60%" color={theme==='dark' ? '#fff' : '#000'}/>
                </button>
          </div>
      </div>, document.body
    ))
  }
  else return (<></>)
}

export default EnlargeImage;