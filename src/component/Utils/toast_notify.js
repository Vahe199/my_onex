import {toast} from "react-toastify";

export const notifyError = (msg) => toast.error(msg,{
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress:undefined,
    theme:"colored"
});
export const notifySuccess = (msg) => toast.success(msg,{
    position: "top-right",
    autoClose: 20000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme:"colored"
});
