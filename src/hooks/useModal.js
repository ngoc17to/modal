import {useState} from "react";

const useModal = () => {
    const [modelVisible, setModelVisible] = useState(false);
    function show() {
        setModelVisible(!modelVisible);
    }
    
    return {
        modelVisible,
        show,
    }
}

export default useModal;