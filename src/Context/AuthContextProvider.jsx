import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()
const AuthContextProvider = ({children}) => {
    const [isAuth, setAuth] = useState(() => {
      const authData = sessionStorage.getItem('authData');
      return authData ? JSON.parse(authData) : null;
    })
    useEffect(() => {
      sessionStorage.setItem('authData', JSON.stringify(isAuth));
    }, [isAuth]);
  return (
    <AuthContext.Provider value={{isAuth, setAuth}}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider