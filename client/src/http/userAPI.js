import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (email, password) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    role: "USER",
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post("api/user/login", {
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const getUserRole = async () => {
  const { data } = await $authHost.get("api/user/auth");
  return data.role;
};

export const createAdmin = async (userEmail) => {
  try {
    const { data } = await $authHost.post("api/user/admin", userEmail);
    return data;
  } catch (e) {
    alert(e.response.data.message);
    return e;
  }
};
