import {useState} from "react";

const useToast = () => {
    const [toastList, setToastList] = useState([]);
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         if (toastList.length) {
    //             deleteToastHandler(toastList[0].id);
    //         }
    //     }, 2000);
    //     return () => {
    //         clearTimeout(timer);
    //     }
    // });
    function addToastHandler(clickedToastButton){
        setToastList(currentToastList => {
            const newToastId = Math.random().toString();

            const newToastList = [
                ...currentToastList,
                {
                    message: clickedToastButton.message, 
                    type: clickedToastButton.type, 
                    id: newToastId
                },
            ];

            setTimeout(() =>{
                deleteToastHandler(newToastId)
            },3000);

            return newToastList
        });
        
    }
    function deleteToastHandler(id){
        setToastList(currentToastList => {
            return currentToastList.filter((toast) => toast.id !== id);
        });
    }
    return {
        toastList,
        addToastHandler,
        deleteToastHandler,
    }
}

export default useToast;