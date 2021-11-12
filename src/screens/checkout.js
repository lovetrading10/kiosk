import React from "react";

// Styles
import "../styles/tailwind.css";

// Components
import Checkoutbar from "../components/checkout/checkoutbar";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Functions
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_OPTION_AMOUNT,
} from "../utils/redux/actions/cartAction";

const Checkout = () => {
  const dispatch = useDispatch();

  const foodState = useSelector((state) => state.foodReducer).filter(
    (item) => item.count > 0
  );
  console.log(foodState);

  // process data

  return (
    <div>
      <Checkoutbar />
      <div className="mx-auto">
        <div style={{ width: "60%" }} className="p-8 shadow-md">
          {foodState.map((item) => (
            <div className="flex flex-col">
              <div className="flex items-center flex-row">
                <div className="mr-8">{item.name}</div>
                <div className="flex flex-row items-center">
                  <button
                    className="p-4 bg-gray-200"
                    onClick={() => dispatch(REMOVE_FROM_CART(item))}
                  >
                    -
                  </button>
                  <div className="p-4 bg-gray-200">{item.count}</div>
                  <button
                    className="p-4 bg-gray-200"
                    onClick={() => dispatch(ADD_TO_CART(item))}
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                {item.options.map((option) => (
                  <div className="flex flex-row align-items-center">
                    <div>{option.name} </div>
                    <button
                      onClick={() =>
                        dispatch(
                          CHANGE_OPTION_AMOUNT({
                            foodName: item.name,
                            optionName: option.name,
                            amount: -1,
                          })
                        )
                      }
                      className="p-4 bg-gray-700 pl-3 pr-3 pt-3 pb-3 rounded-lg font-semibold text-xl text-gray-100"
                    >
                      -
                    </button>
                    <div>{option.count}</div>

                    <button
                      onClick={() =>
                        dispatch(
                          CHANGE_OPTION_AMOUNT({
                            foodName: item.name,
                            optionName: option.name,
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
