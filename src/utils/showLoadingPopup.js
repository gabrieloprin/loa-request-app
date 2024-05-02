import Swal from "sweetalert2";
import "../assets/sweetalert2.css";

const showLoadingPopup = () => {
  Swal.fire({
    customClass: {
      popup: "custom-popup-container",
    },
    showConfirmButton: false,
    allowOutsideClick: false,
    willOpen: () => {
      Swal.showLoading();
    },
  });
};

export default showLoadingPopup;
