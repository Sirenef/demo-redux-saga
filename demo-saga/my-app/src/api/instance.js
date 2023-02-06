import axios from "axios";

const baseURL = "http://localhost:3000/";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getUserApi = () => {
  const url = "/users";
  return instance.get(url);
};

export const addUserApi = (params) => {
  const url = "/users";
  return instance.post(url, params);
};

export const deleteUserApi = (id) => {
  const url = `users/${id};`;
  return instance.delete(url);
};
