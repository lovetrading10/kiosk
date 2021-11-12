import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_OPTION_AMOUNT,
} from "../../utils/redux/actions/cartAction";

import { Fetching } from "../../utils/redux/reducers/food.js";

// Styles
import "../../styles/tailwind.css";

// Functions

const customStyles = {
  content: {
    width: "70%",
    height: "75%",
    margin: "auto",
    border: "solid",
    borderRadius: "20px",
    borderColor: "grey",
  },
};

const Foodmodal = (props) => {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  // const objectData = useSelector

  // Redux
  const dispatch = useDispatch();

  //   Modal control
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="cursor-pointer">
      <div
        className="p-4 shadow-md border-4 border-gray-500 rounded-lg"
        onClick={openModal}
      >
        <div className="h-64">
          <img className="h-full rounded-lg" src={props.item.image} />
        </div>
        {props.item.count != 0 ? (
          <div className="float-right p-2 bg-gray-300">{props.item.count}</div>
        ) : null}
        <br />
        <div className="text-2xl font-bold">{props.item.name}</div>
        <div>{props.item.price} </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="h-64">
          <img className="h-full rounded-lg" src={props.item.image} />
        </div>
        <div className="text-2xl font-bold">{props.item.name}</div>
        <div className="text-xl">{props.item.price}</div>
        <div className="flex flex-row">
          {props.item.count == 0 ? (
            <button
              onClick={() => dispatch(ADD_TO_CART(props.item))}
              className="p-4 bg-gray-700 pl-3 pr-3 pt-3 pb-3 rounded-lg font-semibold text-xl text-gray-100"
            >
              Add to cart
            </button>
          ) : (
            <div className="flex flex-row items-center">
              <button
                className="p-4 bg-gray-200"
                onClick={() => dispatch(REMOVE_FROM_CART(props.item))}
              >
                -
              </button>
              <div className="p-4 bg-gray-200">{props.item.count}</div>
              <button
                className="p-4 bg-gray-200"
                onClick={() => dispatch(ADD_TO_CART(props.item))}
              >
                +
              </button>
            </div>
          )}
        </div>
        <div className="text-2xl font-bold">Additional options:</div>
        <br />
        <div>
          {props.item.options.map((item) => (
            <div className="flex flex-row text-xl font-bold">
              <div className="mr-8">{item.name}</div>
              <div>{item.price}</div>
              <button
                onClick={() =>
                  dispatch(
                    CHANGE_OPTION_AMOUNT({
                      foodName: props.item.name,
                      optionName: item.name,
                      amount: -1,
                    })
                  )
                }
                className="p-4 bg-gray-700 pl-3 pr-3 pt-3 pb-3 rounded-lg font-semibold text-xl text-gray-100"
              >
                -
              </button>
              <div>{item.count}</div>

              <button
                onClick={() =>
                  dispatch(
                    CHANGE_OPTION_AMOUNT({
                      foodName: props.item.name,
                      optionName: item.name,
                      amount: 1,
                    })
                  )
                }
                className="p-4 bg-gray-700 pl-3 pr-3 pt-3 pb-3 rounded-lg font-semibold text-xl text-gray-100"
              >
                +
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={closeModal}
          className="p-4 bg-gray-700 pl-3 pr-3 pt-3 pb-3 rounded-lg font-semibold text-xl text-gray-100 mr-2"
        >
          close
        </button>
      </Modal>
    </div>
  );
};

export default Foodmodal;
