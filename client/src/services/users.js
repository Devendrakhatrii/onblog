import instance from "../utils/axios";
import { APIs } from "../constants";

const login = (payload) => {
  return instance.post(APIs.USERS + "/login", payload);
};

export default login;
