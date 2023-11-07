"use client"
import { createContext, useState, useEffect} from "react";
import appwriteAuth from "@/utils/appwriteConfig";
export const AuthContext = createContext()

export default function AuthProvider({children}) {
  const [authStatus, setAuthStatus] = useState(false);
  useEffect(() => {
    async function checkLogInStatus(){
     try{
      const isLogIn = await appwriteAuth.isLoggedIn();
      if(isLogIn) setAuthStatus(true)
     }catch(err){
        console.log(err);
     }
    }
    checkLogInStatus()
  }, [])
  return (
    <AuthContext.Provider value={{ authStatus, setAuthStatus}}>
    {children}
    </AuthContext.Provider>
  );
}