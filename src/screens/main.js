import React from "react";

// Styles
import "../styles/tailwind.css";

// Components
import Appbar from "../components/appbar";
import Itemlist from "../components/itemlist";
import Foodgrid from "../components/foodselection/foodgrid";

const Main = (props) => {
  return (
    <div>
      <Appbar />
      <div className="flex flex-row">
        <Itemlist />
        <Foodgrid />
      </div>
    </div>
  );
};

export default Main;
