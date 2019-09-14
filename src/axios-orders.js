import axios from "axios";
const instance = axios.create({
  baseURL: "https://burger-builder-d9773.firebaseio.com/"
});

export default instance;
