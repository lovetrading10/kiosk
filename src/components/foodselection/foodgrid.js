import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { SETLOADING } from "../../utils/redux/reducers/loading";
import { CHANGE_OPTION_AMOUNT } from "../../utils/redux/actions/cartAction";
import MoonLoader from "react-spinners/MoonLoader";

// Styles
import "../../styles/tailwind.css";

// Components
import Foodcard from "./foodcard";
import Foodmodal from "./foodmodal";

// Redux
import { Fetching } from "../../utils/redux/reducers/food.js";

const mapDispatchToProps = (dispatch) => {
  bindActionCreators({ Fetching }, dispatch);
};

// const connector = connect(mapStateToProps, mapDispatchToProps);

const Foodgrid = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loadingReducer);
  const [hasFetchedData, setFetchedData] = useState(false);

  const selectedNavstate = useSelector((state) => state.NavselectReducer);

  const foodList = useSelector((state) => state.foodReducer).filter(
    (item) => item.type == selectedNavstate
  );

  const fetchFake = () => {
    dispatch(Fetching(1));
  };

  return (
    <div className="w-full p-8">
      <div>
        <button onClick={() => fetchFake()}>Fetch Fake</button>
        <button
          onClick={() =>
            dispatch(
              CHANGE_OPTION_AMOUNT({
                foodName: "Burger",
                optionName: "Ketchup",
                amount: 1,
              })
            )
          }
        >
          Fake option increase
        </button>
      </div>

      {loading ? (
        <div className="flex w-full mt-32 content-center">
          <div className="m=0 m-auto">
            <MoonLoader size={70} color={"#123abc"} />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {foodList.map((foodItem) => (
            <Foodmodal item={foodItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Foodgrid;
