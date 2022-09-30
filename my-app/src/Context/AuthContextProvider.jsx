import React,{useState,createContext} from "react";

export const AuthContext=createContext()
const AuthContextProvider=({children})=> {
  const [isAuth,setIsAuth]=useState(false)
    function handleAuth(){
        setIsAuth(false)
    }
  return (
    <AuthContext.Provider value={{isAuth,setIsAuth,handleAuth}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider