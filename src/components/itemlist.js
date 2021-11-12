import React from "react";

// Styles
import "../styles/tailwind.css";

// Data
import { Categories } from "../utils/data/categories";

// Redux
import { SELECT_NAVSTATE } from "../utils/redux/actions/navselectAction";
import { useDispatch } from "react-redux";

const Itemlist = (props) => {
  const dispatch = useDispatch();

  const Item = (props) => {
    return (
      <div>
        <div
          onClick={() => dispatch(SELECT_NAVSTATE(props.name))}
          className="p-8 flex flex-row text-2xl cursor-pointer"
        >
          {props.name}
        </div>
        <hr />
      </div>
    );
  };

  return (
    <div className="w-3/12 shadow-md min-h-screen">
      {Categories.map((item) => (
        <Item name={item} />
      ))}
    </div>
  );
};

export default Itemlist;
