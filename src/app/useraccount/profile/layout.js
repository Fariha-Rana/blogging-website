"use client"
import useAuth from "@/context/useAuth"


const ProtectedLayout = ({children}) => {
    const { authStatus } = useAuth();
    if (!authStatus) {
       return <div className="flex items-center justify-center h-screen">
        <p className="text-2xl">log in first to see your profile</p>
      </div>
    }
    return children

}

export default ProtectedLayout;