import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    if (response) {
      if (response.status >= 500) {
        // todo: need to add toast notification here
        console.error("Server error");
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
