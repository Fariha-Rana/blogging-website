"use client";
import useAuth from "@/context/useAuth";
import Blog from "@/components/blog";
import React, { useEffect, useState } from "react";

const CustomLayout = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const { authStatus } = useAuth();

  useEffect(() => {
    if (authStatus) setLoader(false);
  }, [authStatus]);

  return (
    <>
      {loader && (
        <div className="text-primary">
          <div className="fixed -z-[1] left-1/3 w-12 top-2/3 blur-2xl">
            <Blog blur />
          </div>
          <div className="fixed -z-[1] left-2/3 w-12 top-1/3 blur-2xl">
            <Blog blur />
          </div>
          <div className="fixed -z-[1] left-1/4 w-40 top-1/4 blur-2xl opacity-50">
            <Blog blur />
          </div>
          <div className="fixed -z-[1] left-1/2 w-32 top-1/2 blur-2xl opacity-60">
            <Blog blur />
          </div>
          <div className="fixed -z-[1] left-[45%] w-12 top-1/3 blur-2xl">
            <Blog blur />
          </div>
          <div className="fixed -z-[1] left-3/4 w-60 top-1/3 opacity-20 blur-2xl">
            <Blog blur />
          </div>
        </div>
      )}
      <main className="px-2 py-4">{children}</main>
    </>
  );
};

export default CustomLayout ;
