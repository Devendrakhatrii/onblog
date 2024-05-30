import instance from "../utils/axios";
import { APIs } from "../constants";

const login = (payload) => {
  return instance.post(APIs.USERS + "/login", payload);
};
export  const register = (payload) => {
  return instance.post(APIs.USERS + "/register", payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export default login;
