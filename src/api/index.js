import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const loginUser = async ({ email, password }) => {
  try {
    const { data } = await api.post("/users/login", { email, password });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const signupUser = async ({ name, email, password }) => {
  try {
    const { data } = await api.post("/users/signup-public", {
      name,
      email,
      password,
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const getProduct = async () => {
  try {
    const { data } = await api.get("/products");
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
