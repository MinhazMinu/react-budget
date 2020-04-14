import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifySuccess = () => {
  toast.success("Item Added!", {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};
export const notifyError = () => {
  toast.error("Enter Charge and amount correctly !", {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

// export const Alert = () => {
//   return (
//     <div>
//       <ToastContainer />
//     </div>
//   );
// };
