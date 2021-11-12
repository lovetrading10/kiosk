import React from "react";
import "../styles/tailwind.css";

import { useSelector, useDispatch } from "react-redux";

import { TEST_ACTION } from "../utils/redux/reducers/test";

const Test = (props) => {
  const dispatch = useDispatch();
  const testValue = useSelector((state) => state.testReducer);
  console.log(testValue);
  return (
    <div className="text-xl p-8">
      <div>Hello</div>
      <br />
      <div>
        <button onClick={() => dispatch(TEST_ACTION(1))}>TEST CLICK</button>
      </div>
      <br />
      <div class="flex flex-row">
        {testValue.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Test;
