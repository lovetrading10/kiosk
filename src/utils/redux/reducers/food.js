import { Foodmaster } from "../../data/foodmaster";
import axios from "axios";
import { fetchFake } from "../../../services/mock";
import { Dispatch } from "redux";
import { SETLOADING } from "./loading";
// Actions

// Thunk returns a function
const Fetching = (dispatch) => {
  return (dispatch) => {
    dispatch(SETLOADING(1));
    fetchFake()
      .then((fakeData) => {
        console.log(fakeData);
        dispatch(SETLOADING(0));
      })
      .catch(() => console.log("Kevin"));
  };
};

const foodReducer = (state = Foodmaster, action) => {
  let index = -1;
  switch (action.type) {
    case "ADD_TO_CART":
      index = -1;

      for (var i = 0; i < state.length; i++) {
        if (state[i].name == action.item.name) {
          index = i;
        }
      }

      // console.log(index);

      if (index == -1) {
        return [...state, { ...action.item, count: 1 }];
      }

      //   already in array
      return state.map((item, i) => {
        if (i !== index) {
          // This isn't the item we care about - keep it as-is
          return item;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          count: state[index].count + 1,
        };
      });

    case "REMOVE_FROM_CART":
      index = -1;

      for (var i = 0; i < state.length; i++) {
        if (state[i].name == action.item.name) {
          index = i;
        }
      }

      console.log(index);

      if (index == -1) {
        return state;
      }

      return state.map((item, i) => {
        if (i !== index) {
          // This isn't the item we care about - keep it as-is
          return item;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          count: state[index].count - 1,
        };
      });

    case "CHANGE_OPTION_AMOUNT":
      let objIndex;
      let optionIndex;

      objIndex = state.findIndex((object) => object.name == action.foodName);

      optionIndex = state[objIndex].options.findIndex(
        (option) => option.name == action.optionName
      );

      // edge case 0 detect
      if (
        state[objIndex].options[optionIndex].count == 0 &&
        action.amount == -1
      ) {
        return state;
      }

      // changing item in array
      return state.map((item, i) => {
        if (i != objIndex) {
          return item;
        }

        let optionsCopy = state[i].options;
        optionsCopy[optionIndex].count += action.amount;

        // Otherwise
        return {
          ...item,
          options: optionsCopy,
        };
      });

    default:
      return state;
  }
};

export { foodReducer, Fetching };
