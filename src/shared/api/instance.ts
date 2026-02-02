import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API || "https://api.nasa.gov",
  params: {
    api_key: import.meta.env.VITE_API_KEY || "DEMO_KEY",
  },
});

export { instance };
