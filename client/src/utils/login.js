import { jwtDecode } from "jwt-decode";
import { getToken } from "./token";
import moment from "moment";

export const verifyLogin = () => {
  try {
    const token = getToken();

    if (!token) {
      return false;
    }

    const { exp } = jwtDecode(token);
    const expDate = moment.unix(exp);
    const now = moment(new Date().valueOf());

    if (now < expDate) return true;
    return false;
  } catch (error) {
    localStorage.removeItem("access_token");
    return false;
  }
};

export const verifyRole = (roles = {}) => {
  try {
    if (roles === "") return true;
    const token = getToken();
    if (!token) return false;
    const { data: user } = jwtDecode(token);
    const isValidRole = roles.some((r) => user.role.includes(r));
    if (!isValidRole) return false;
    return true;
  } catch (error) {
    localStorage.removeItem("access_token");
    return false;
  }
};

export const currentUser = () => {
  const token = getToken();
  const { data: user } = jwtDecode(token);
  localStorage.setItem("current_user", JSON.stringify(user));
};
