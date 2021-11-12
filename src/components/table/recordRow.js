import React, { useState, useEffect } from "react";
// import HistoryModal from "../modals/historyModal";
import Modal from "react-modal";

import { SET_FLAGGED } from "../../utils/redux/reducers/record";

const HistoryModalSetting = {
  content: {
    width: "600px",
    height: "300px",
    marginTop: "100px",
    marginLeft: "auto",
    marginRight: "auto",
    border: "solid",
    borderWidth: "2px",
    borderColor: "grey",
  },
};

const setStatusColor = (name) => {
  if (name === "Processed") {
    return "#E5FAFF";
  } else if (name === "Failed") {
    return "#FFE5E5";
  } else if (name === "Processing") {
    return "#D8FFD8";
  }
};

//History Modal
const HistoryModal = (props) => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setFlag(props.item.flagged);
  }, [props.item]);

  const toggleFlag = () => {
    setFlag(!flag);
    props.setFlag(!flag);
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      style={HistoryModalSetting}
      contentLabel="Example Modal"
    >
      <div>Order information</div>
      <div>ID: {props.item.id}</div>
      <div></div>
      <div>
        Flag suspicious:{" "}
        <input type="checkbox" onChange={toggleFlag} checked={flag} />
      </div>
      <button className="p-3 bg-gray-200" onClick={props.onRequestClose}>
        Close Modal
      </button>
    </Modal>
  );
};

//Record Row
const RecordRow = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [flag, setFlag] = useState(true);

  // on landing

  // useEffect(() => {
  //   setFlag(props.item.flagged);
  // }, [props.item]);

  useEffect(() => {
    console.log(flag);
  }, [flag]);

  const toggleFlag = () => {
    setFlag(!flag);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div
        className="grid grid-cols-5 bg-gray-100 w-full mb-1 mt-1 p-3 cursor-pointer hover:bg-gray-300 items-center"
        onClick={openModal}
      >
        <div>{props.item.id}</div>
        <div>{props.item.amount}</div>
        <div>{props.item.time}</div>
        <div>{props.item.size}</div>
        <div>
          <div
            className="inline-block p-3 bg-gray-200 rounded-lg"
            style={{ backgroundColor: setStatusColor(props.item.status) }}
          >
            {props.item.status}
          </div>
        </div>
      </div>
      <HistoryModal
        item={props.item}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        setFlag={setFlag}
        flagState={flag}
      />
    </div>
  );
};

export default RecordRow;
