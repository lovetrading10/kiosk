import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const HistoryModalSetting = {
  content: {
    width: "600px",
    height: "300px",
    marginTop: "100px",
    marginLeft: "auto",
    marginRight: "auto",
    border: "solid",
    borderWidth: "2px",
    // borderRadius: "20px",
    borderColor: "grey",
  },
};

const HistoryModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div>
        <button onClick={toggleModal}>Press me</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={HistoryModalSetting}
        contentLabel="Example Modal"
      >
        <div>
          <button className="p-3 bg-gray-200 rounded-md" onClick={closeModal}>
            Close Modal
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default HistoryModal;
