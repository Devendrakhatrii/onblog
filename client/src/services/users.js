import instance from "../utils/axios";
import { APIs } from "../constants";

const login = (payload) => {
  return instance.post(APIs.USERS + "/login", payload);
};
export const register = (payload) => {
  return instance.post(APIs.USERS + "/register", payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export const generateFPT = (payload) => {
  return instance.post(APIs.USERS + "/generate-fp-token", payload);
};
export const verifyFPT = (payload) => {
  return instance.post(APIs.USERS + "/verify-fp-token", payload);
};
export const changePassword = (payload) => {
  return instance.post(APIs.USERS + "/change-password", payload, {
    headers: {
      access_token: JSON.parse(localStorage.getItem("access_token")),
    },
  });
};
export const getAllUsers = ({ page, limit, name }) => {
  return instance.get(
    APIs.USERS + `?page=${page}&limit=${limit}&name=${name}`,
    {
      headers: {
        access_token: JSON.parse(localStorage.getItem("access_token")),
      },
    }
  );
};
export const getOneUser = (id) => {
  return instance.get(APIs.USERS + `${id}`, {
    headers: {
      access_token: localStorage.getItem("access_token"),
    },
  });
};
export const addUser = (payload) => {
  return instance.post(APIs.USERS, payload, {
    headers: {
      access_token: JSON.parse(localStorage.getItem("access_token")),
    },
  });
};
// export const blockUser = (email) => {
//   return instance.patch(APIs.USERS + `/block-user`, email, {
//     headers: {
//       access_token: JSON.parse(localStorage.getItem("access_token")),
//     },
//   });
// };
export const blockUser = (email) => {
  return instance.patch(
    `${APIs.USERS}/block-user`,
    {
      email,
    },
    {
      headers: {
        access_token: JSON.parse(localStorage.getItem("access_token")),
      },
    }
  );
};
export const getMyProfile = () => {
  return instance.get(APIs.USERS + `/get-profile`, {
    headers: {
      access_token: JSON.parse(localStorage.getItem("access_token")),
    },
  });
};

export default login;
