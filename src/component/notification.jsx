import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isHideNotification } from "../redux-store/features/notification/notificationSlice";
const Notification = ({ open, message, type }) => {
    const dispatch = useDispatch();
  
    const notify = () => {
      if (type === "error") {
        toast.success(message, {
          position: toast.TOP_RIGHT,
          onClose: () => dispatch(isHideNotification(false)) // Wrap dispatch in a function
        });
      } else if (type === "success") {
        toast.success(message, {
          position: toast.TOP_RIGHT,
          onClose: () => dispatch(isHideNotification(false)) // Wrap dispatch in a function
        });
      } else {
        toast.info(message, {
          position: toast.TOP_RIGHT,
          onClose: () => dispatch(isHideNotification(false)) // Wrap dispatch in a function
        });
      }
    };
  
    useEffect(() => {
      if (open) {
        notify();
      }
    }, [open]);
  
    return <ToastContainer />;
  };
  

export default Notification;
