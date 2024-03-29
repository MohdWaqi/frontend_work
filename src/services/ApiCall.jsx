import axios from "axios";
import { BASE_URL } from "./helper";

export const commonRequest = async (methods, url, body, header, check) => {
  let config = {
    method: methods,
    url,
    headers: header
      ? header
      : {
          "Content-Type": "application/json",
        },
    withCredentials:check?check:false,    
    data: body,
  };

  return axios(config)
};

export const privateRefresh = axios.create({
  baseURL:BASE_URL,
  withCredentials:true
})
