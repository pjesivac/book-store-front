import axios from "axios";
import { auth } from "./Auth";
const apiUrl = "http://92dbcf584461.ngrok.io/";

const instance = axios.create({
  baseURL: apiUrl,
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (401 === error.response.status) {
      console.log(error);
      auth.logout();
    } else {
      return Promise.reject(error);
    }
  }
);

export default instance;
