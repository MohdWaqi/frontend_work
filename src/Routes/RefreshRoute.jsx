import { useContext } from "react"
import { AuthContext } from "../Context/AuthContextProvider"
import { refreshUser } from "../services/Api"


const RefreshRoute = () => {
    const {setAuth} = useContext(AuthContext)
    const refresh = async () => {
        try {
            const response = await refreshUser(true)
            setAuth(prev =>{
                return{...prev, accessToken: response.data.accessToken}
            })
            return response.data.accessToken
        } catch (error) {
            console.log(error)
        }
    }
  return refresh
}

export default RefreshRoute