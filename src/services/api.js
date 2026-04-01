import axios from "axios";

const API = axios.create({
  baseURL: "https://e-commerce-backend-production-b590.up.railway.app/api"
});

export default API;
