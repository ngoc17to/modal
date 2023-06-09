import {useState, useEffect, useRef} from "react";

const useImage = (src) => {

    const hiddenFileInput = useRef(null);
    const[selectedImage, setSelectedImage] = useState();
    const[imgPreview, setImgPreview] = useState(src ? src : null)
    const[visibleUpload, setVisibleUpload] = useState(false);
    const[visibleEnlarge, setVisibleEnlarge] = useState(false);

    useEffect(() => {
        if (!selectedImage) {
            setImgPreview(undefined)
            return
        }
        const imgURL = URL.createObjectURL(selectedImage)
        setImgPreview(imgURL)
        return () => URL.revokeObjectURL(imgURL)
    }, [selectedImage])

    function ChangeHandler(event){
        if (!event.target.files || event.target.files.length === 0) {
            return
        }
        setSelectedImage(event.target.files[0]);
    }

    function handleClick(){
        hiddenFileInput.current.click();
    }
    function onMouseEnterHandler(){
        setVisibleUpload(true);
        setVisibleEnlarge(true);
    }
    function onMouseLeaveHandler(){
        setVisibleUpload(false);
        setVisibleEnlarge(false);
    }

    return{
        hiddenFileInput,
        selectedImage,
        imgPreview,
        visibleUpload,
        visibleEnlarge,
        setImgPreview,
        ChangeHandler,
        handleClick,
        setVisibleUpload,
        setVisibleEnlarge,
        onMouseEnterHandler,
        onMouseLeaveHandler
    }
}

export default useImage;