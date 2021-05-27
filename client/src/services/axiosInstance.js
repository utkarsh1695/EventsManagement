import Axios from "axios";

const instance = Axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

const fetch = async ({ query }) => {
  const response = await instance.post("/api", { query });
  return response?.data?.data;
};

export { fetch };
