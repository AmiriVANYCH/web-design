import axios from "axios";

export default axios.create({
  baseURL: "http://ivan.zeleniak.net:8081/api",
  headers: {
    "Content-type": "application/json"
  }
});
