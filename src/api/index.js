import axios from "axios";
import { API_ENDPOINTS } from "../utils";

export const httpClient = axios.create({
  baseURL: API_ENDPOINTS.BASE_URL,
});
