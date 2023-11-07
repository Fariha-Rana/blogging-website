"use client";
import useAuth from "@/context/useAuth";
import Login from "@/components/login";

const LoginPage = () => {
  const { authStatus } = useAuth();
  if (authStatus) {
    return <div className="flex items-center justify-center h-screen">
      <p className="text-2xl">Go to your profile</p>
    </div>;
  }

  return (
    <section className="px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <Login />
    </section>
  );
};

export default LoginPage;
