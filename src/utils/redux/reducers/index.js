import { combineReducers } from "redux";

// Reducers
import { foodReducer } from "./food";
import { cartReducer } from "./cart";
import { NavselectReducer } from "./navselect";
import { loadingReducer } from "./loading";
import { testReducer } from "./test";
import {
  recordReducer,
  tagReducer,
  filterInputReducer,
  priceRangeReducer,
} from "./record";
import { campaignReducer } from "./campaign";

const masterReducer = combineReducers({
  recordReducer,
  campaignReducer,
  loadingReducer,
  testReducer,
  foodReducer,
  cartReducer,
  NavselectReducer,
  tagReducer,
  filterInputReducer,
  priceRangeReducer,
});

export default masterReducer;
