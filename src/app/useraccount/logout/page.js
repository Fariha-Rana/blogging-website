"use client";
import appwriteAuth from "@/utils/appwriteConfig";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";

const LogoutPage = () => {
    const router = useRouter();
    const {setAuthStatus} = useAuth();
       async function _logOut(){
        await appwriteAuth.logOut()
         setAuthStatus(false);
         router.replace("/")
       }
       _logOut()
    return(
        <></>
    )
}


export default LogoutPage;