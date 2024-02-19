import { useContext, useEffect } from "react"
import RefreshRoute from "./RefreshRoute"
import { AuthContext } from "../Context/AuthContextProvider"
import { privateRefresh } from "../services/ApiCall"


const ReissueToken = () => {
    const refresh = RefreshRoute()
    const {isAuth} =useContext(AuthContext)

    useEffect(()=>{
        const requestIntercept = privateRefresh.interceptors.request.use(
            config=>{
                if(!config.headers["Authorization"]){
                    config.headers["Authorization"] = `Bearer ${isAuth?.accessToken}`;
                }
                return config
            },(error)=>Promise.reject(error)
        )

        const responseIntercept = privateRefresh.interceptors.response.use(
            response => response,
            async(error)=>{
                const prevReq = error?.config;
                if(error?.response?.status === 403 && !prevReq?.sent){
                    prevReq.sent = true;
                    const newAccessToken = await refresh();
                    prevReq.headers["Authorization"] = `Bearer ${newAccessToken}`;
                    return privateRefresh(prevReq)
                }
                return Promise.reject(error);
            }
        )
        return () =>{
            privateRefresh.interceptors.request.eject(requestIntercept);
            privateRefresh.interceptors.response.eject(responseIntercept);
        }
    }, [isAuth, refresh])
  return privateRefresh
}

export default ReissueToken