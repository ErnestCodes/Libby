import axios from "axios";

const setAuthToken = (token) => {
  // This function checks for the token and assign it to the header ('x-auth-token')
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
