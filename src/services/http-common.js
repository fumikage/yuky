import axios from "axios";
import config from "../config";

const HTTP = axios.create({
  baseURL: `${config.api}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export { HTTP };
