import { URLs } from "./constant";
import axios from "axios";
// config for mock api
export const mock_api = axios.create({
  baseURL: URLs.mock_baseUrl,
  headers: {
    "x-mock-response-code": 200
  }
});
// config for alternate mock api
export const mock_api_alt = axios.create({
  baseURL: URLs.mock_baseUrl_alt,
  headers: {
    "x-mock-response-code": 200
  }
});
// config for the actual backend api
export const api = axios.create({
  baseURL: "https://testcodex.com/elevr/public/api/"
});
