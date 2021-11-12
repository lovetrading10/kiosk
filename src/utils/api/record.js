import axios from "axios";
import { BASE_URL } from "./base";
import { mockRecord } from "../data/mockRecord";

const FetchRecord = async () => {
  // console.log(BASE_URL);
  // console.log(BASE_URL + "/records");
  const response = await axios.get(BASE_URL + "/records");

  if (response) {
    return response.data;
  }
  return null;
};

// Post request
const RepopulateRecord = async () => {
  console.log("Repopulating record");
  axios
    .post(BASE_URL + "/records/admin/repopulate", { records: mockRecord })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};

export { FetchRecord, RepopulateRecord };

// <Link to={`/${props.link}`}>{props.text}</Link>
