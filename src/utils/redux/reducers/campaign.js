// Actions
import { SETLOADING } from "./loading";

const SET_CAMPAIGN = (payload) => {
  return { type: "SET_CAMPAIGN", payload };
};

// Reducers
const campaignReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_CAMPAIGN":
      return action.payload;
    default:
      return state;
  }
};

const fetchingCampaign = (dispatch) => {
  return (dispatch) => {
    dispatch(SETLOADING(0));
    dispatch(SETLOADING(1));
  };
};

export { SET_CAMPAIGN, campaignReducer, fetchingCampaign };
