import Modal from "react-modal";
import css from "./Modal.module.css";

Modal.setAppElement("#App");

const CustomModal = ({ closeModal, modalIsOpen, type, deleteContact }) => {
  return (
    <Modal 
      isOpen={modalIsOpen} 
      onRequestClose={closeModal}
      className={css.modal}
      overlayClassName="custom-overlay"
    >
      {type === "deleteContactModal" && (
        <>
          <div className="modal-header">
            <span>Are you sure you want to delete this contact?</span>
            <button 
              onClick={closeModal} 
              className="close-button"
            >
              X
            </button>
          </div>
          <div className="modal-actions">
            <button 
              onClick={deleteContact} 
              className="delete-button"
            >
              Delete the contact
            </button>
            <button 
              onClick={closeModal} 
              className="cancel-button"
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default CustomModal;
