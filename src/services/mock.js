import axios from "axios";

export const fetchFake = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (response) {
    return response.data;
  } else {
    return null;
  }
};
