import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifySuccess = () => {
  toast.success("Item Added!", {
    position: toast.POSITION.TOP_RIGHT,
  });
};
export const notifyInfo = () => {
  toast.info("Item Edited!", {
    position: toast.POSITION.TOP_RIGHT,
  });
};
export const notifyWarning = () => {
  toast.warning("Item Deleted", {
    position: toast.POSITION.TOP_RIGHT,
  });
};
export const notifyError = () => {
  toast.error("Enter Charge and Amount correctly !", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

// export const Alert = () => {
//   return (
//     <div>
//       <ToastContainer />
//     </div>
//   );
// };
