"use client";
import useAuth from "@/context/useAuth";
import Signup from "@/components/signup";

const SignupPage = () => {
    const { authStatus } = useAuth();
    if (authStatus) {
       return <div className="flex items-center justify-center h-screen">
        <p className="text-2xl">Click on Home Button</p>
      </div>
       
    }

    return(
        <section className="px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <Signup/>
        </section>
    )
}

export default SignupPage;