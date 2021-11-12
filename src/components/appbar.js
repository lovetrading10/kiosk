import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

// Styles
import "../styles/tailwind.css";

// Redux
import { useSelector } from "react-redux";

const Appbar = (props) => {
  const foodState = useSelector((state) => state.foodReducer);
  const [localData, setLocalData] = useState({ count: 0, price: 0 });

  useEffect(() => {
    let price = 0;
    let count = 0;

    for (var i = 0; i < foodState.length; i++) {
      if (foodState[i].count > 0) {
        count += foodState[i].count;
        price += foodState[i].count * foodState[i].price;
        for (var j = 0; j < foodState[i].options.length; j++) {
          if (foodState[i].options[j].count > 0) {
            // console.log(foodState[i].options[j].name);
            price +=
              foodState[i].options[j].count * foodState[i].options[j].price;
          }
        }
      }
    }
    // console.log(foodState);

    setLocalData({ count, price });
  }, [foodState]);

  return (
    <div className="flex items-center flex-row p-8 shadow-md bg-gray-800 text-gray-100">
      <div className="text-2xl mr-8">Kev's Diner</div>
      <div className="flex flex-col">
        <div>Items: {localData.count}</div>
        <div>Price: {localData.price}</div>
      </div>
      <div className="float-right ml-5 cursor-pointer float-right bg-gray-700 pl-3 pr-3 pt-3 pb-3 rounded-lg hover bg-gray-400">
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
};

export default Appbar;
