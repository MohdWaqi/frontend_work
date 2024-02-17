import axios from "axios";

export const commonRequest = async (methods, url, body, header, check=false) => {
  let config = {
    method: methods,
    url,
    headers: header
      ? header
      : {
          "Content-Type": "application/json",
        },
    withCredentials:check,    
    data: body,
  };

  return axios(config)
};
