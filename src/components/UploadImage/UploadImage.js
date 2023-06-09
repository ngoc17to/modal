import React from 'react';
import { AiOutlineCloudUpload, AiOutlineFullscreen } from "react-icons/ai";
import '../../App.css';
import './UploadImage.css';
import UploadImg from '../../img/upload.png';
import { useTheme } from "../../ThemeContext";
import useImage from '../../hooks/useImage';
import useModal from '../../hooks/useModal';
import EnlargeImage from './EnlargeImage';
function UploadImage(src){
    const {theme} = useTheme();
    const {show, modalVisible} = useModal();
    const{
        hiddenFileInput,
        selectedImage,
        imgPreview,
        visibleUpload,
        ChangeHandler,
        handleClick,
        setVisibleUpload,
        onMouseEnterHandler,
        onMouseLeaveHandler} = useImage(src);
    return(
        <div>
            <div className='upload-container'>
                <div className='upload-wrapper'>
                {
                    selectedImage || src
                    ? <div className='image-container'
                            onMouseEnter={onMouseEnterHandler} 
                            onMouseLeave={onMouseLeaveHandler}>
                        <img className='image-upload' 
                            src={ 
                                imgPreview} 
                            alt='img-upload' 
                            />
                        </div>
                    : <button className='image-container' onClick={handleClick}>
                            <AiOutlineCloudUpload size="50%" color={theme==='dark' ? '#fff' : '#000'}/>
                    </button>
                }
                {
                    visibleUpload 
                    ?
                    <button className='enlarge-button' onClick={show}
                    onMouseEnter={() => setVisibleUpload(true)}
                    onMouseLeave={() => setVisibleUpload(false)} >
                        <AiOutlineFullscreen size="100%" color={theme==='dark' ? '#fff' : '#000'}/>

                    </button>
                    : <></>
                }
                </div>
                {
                    visibleUpload 
                    ? <button 
                        className='upload-button' 
                        onMouseEnter={() => setVisibleUpload(true)}
                        onMouseLeave={() => setVisibleUpload(false)} 
                        onClick={handleClick}
                    >
                        <img src={UploadImg} alt='UploadImg' width={"25px"}/>
                        <p style={{marginLeft: "5px"}}>Upload Image</p>
                    </button>
                    : <></>
                }


            </div>
            
            <input type='file' name='image-upload' accept=".jpg, .png, .jpeg" style={{display:'none'}} ref={hiddenFileInput}  onChange={ChangeHandler}/>
            <EnlargeImage 
                            hide={show}
                            modalVisible={modalVisible}
                            imgPreview={imgPreview}
                        />
        </div>
    )
}

export default UploadImage;