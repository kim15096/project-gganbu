import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 1000,
    headers: {
		Accept: 'application/json'
    }
  });

export default instance