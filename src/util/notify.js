import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (type, msg) => {
    const position = window.innerWidth < 640 ? "bottom-right" : "top-right";
    const width = window.innerWidth < 640 ? "bottom-right" : "top-right";
    switch (type) {
        case "success":
            toast.success(msg, {
                position: position,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            break;
        case "error":
            toast.error(msg, {
                position: position,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            break;
        case "info":
            toast.info(msg, {
                position: position,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            break;
        case "warning":
            toast.warn(msg, {
                position: position,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            break;

        default:
            break;
    }
};
