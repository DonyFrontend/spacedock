import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
});

export { instance };
