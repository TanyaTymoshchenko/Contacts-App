import React from "react";
import Modal from "react-modal";
import css from "./Modal.module.css";

Modal.setAppElement("#App");

const CustomModal = ({ closeModal, modalIsOpen, type, deleteContact }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "1000px", // Adjust width as needed
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: "#e0f2f1", // Light blue background
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
    },
  };

  const handleDelete = () => {
    deleteContact();
    closeModal();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Delete Contact Modal"
    >
      {type === "deleteContactModal" && (
        <>
          <div className={css["modal-header"]}>
            <span>Are you sure you want to delete this contact?</span>
            <button onClick={closeModal} className={css["close-button"]}>
              X
            </button>
          </div>
          <div className={css["modal-actions"]}>
            <button onClick={handleDelete} className={css["delete-button"]}>
              Delete the contact
            </button>
            <button onClick={closeModal} className={css["cancel-button"]}>
              Cancel
            </button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default CustomModal;
