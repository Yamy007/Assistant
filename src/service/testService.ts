import axios from "axios";
import { baseURL } from "../constant";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const apiTestService = axios.create({
  baseURL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${cookies.get("access")}`,
  },
});
