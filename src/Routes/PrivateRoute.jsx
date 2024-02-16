import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({allowedRoles}) => {
  const {isAuth} = useContext(AuthContext)
  return (isAuth?.roles?.find(role=> allowedRoles?.includes(role))?<Outlet/>:<Navigate to="/"/>)
}

export default PrivateRoute