import React from "react";
import { Link } from "react-router-dom";

// Styles
import "../../styles/tailwind.css";

const Checkoutbar = () => {
  return (
    <div className="flex items-center flex-row p-8 shadow-md bg-gray-800 text-gray-100">
      <div className="text-2xl mr-8">
        <Link to="/">Resto name</Link>
      </div>
      <div className="ml-5 cursor-pointer" href="/">
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
};

export default Checkoutbar;
