import Modal from "react-modal";

Modal.setAppElement("#App");

const CustomModal = ({ closeModal, modalIsOpen, type }) => {
  return (
    <Modal 
      isOpen={modalIsOpen} 
      onRequestClose={closeModal}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }
      }}
    >
      {type === "deleteContactModal" && (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>Are you sure you want to delete this contact? Please, confirm if yes.</div>
            <button onClick={closeModal} style={{ marginLeft: '10px', cursor: 'pointer' }}>X</button>
          </div>
          <button 
            onClick={closeModal} 
            style={{ 
              marginTop: '20px', 
              backgroundColor: '#f44336', 
              color: 'white', 
              padding: '10px 20px', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer' 
            }}
          >
            Delete the contact
          </button>
        </>
      )}
    </Modal>
  );
};

export default CustomModal;
