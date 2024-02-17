import { commonRequest } from "./ApiCall";
import { BASE_URL } from "./helper";

export const addFunction = async (data, header) => {
  return await commonRequest("POST", `${BASE_URL}/add`, data, header);
};

export const getProducts = async () => {
  return await commonRequest("GET", `${BASE_URL}/`, "");
};

export const editProduct = async (id) => {
  return await commonRequest("GET", `${BASE_URL}/edit/${id}`, "");
};

export const updateProduct = async (id, data, header) => {
  return await commonRequest("PUT", `${BASE_URL}/edit/${id}`, data, header);
};

export const removeFunction = async (id) => {
  return await commonRequest("DELETE", `${BASE_URL}/delete/${id}`, {});
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
