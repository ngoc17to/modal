import {useState} from "react";

const useModal = () => {
    const [modalVisible, setmodalVisible] = useState(false);
    function show() {
        setmodalVisible(!modalVisible);
    }
    
    return {
        modalVisible,
        show,
    }
}

export default useModal;