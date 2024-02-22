import { commonRequest } from "./ApiCall";
import { BASE_URL } from "./helper";

export const getProducts = async (page, limit, search) => {
  return await commonRequest("GET", `${BASE_URL}/?page=${page}&limit=${limit}&search=${search}`, "");
};

export const editProduct = async (id) => {
  return await commonRequest("GET", `${BASE_URL}/edit/${id}`, "");
};

export const addUserFunction = async (data, header) => {
  return await commonRequest("POST", `${BASE_URL}/add_user`, data, header);
};

export const checkUser = async (data, check) => {
  return await commonRequest("POST", `${BASE_URL}/validate_user`, data,null, check);
}
export const refreshUser = async (check) => {
  return await commonRequest("GET", `${BASE_URL}/refresh`,"",null, check);
}
export const logoutUser = async (check) => {
  return await commonRequest("GET", `${BASE_URL}/logout`,"",null, check)
}
