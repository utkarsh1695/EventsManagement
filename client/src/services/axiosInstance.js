import Axios from "axios";

const instance = Axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

const fetch = async ({ query, headers }) => {
  try {
    const response = await instance.post("/api", { query }, { headers });
    return response?.data;
  } catch (err) {
    return err?.response?.data;
  }
};

export { fetch };
