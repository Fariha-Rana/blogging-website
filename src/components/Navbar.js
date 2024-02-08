"use client";
import Link from "next/link";
import useAuth from "@/context/useAuth";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiLogIn, FiLogOut } from "react-icons/fi";

const menuItems = [
  {
    name: "Home",
    href: "/",
    icon: <FaHome />,
  },
];

export default function Navbar() {
  const { authStatus } = useAuth();

  return (
    <div className="relative w-full p-2 border-solid border-b-2 text-purple-600 sm-text-sm ">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-2 sm:px-6 lg:pl-8 ">
        <div className="lg:flex items-start">
          <ul className="ml-2 lg:ml-12 inline-flex space-x-2 lg:space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="inline-flex items-center text-md text-lg font-bold hover:text-primary"
                >
                  {item.icon} <i> {item.name}</i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2 lg:flex">
          <Link
            href={
              authStatus
                ? "/useraccount/profile/userprofile"
                : "/useraccount/signup"
            }
            className="flex items-center rounded-md bg-transparent px-3 py-2 text-md font-bold text-primary hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {authStatus ? (
              <>
                <CgProfile className="mr-2 " />
                <i>Profile</i>
              </>
            ) : (
              <>
                <FiLogIn className="mr-2 " />
                <i> Sign up</i>
              </>
            )}
          </Link>
          <Link
            href={authStatus ? "/useraccount/logout" : "/useraccount/login"}
            className="flex items-center rounded-md border border-primary px-3 py-2 text-md font-bold text-primary shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {authStatus ? (
              <>
                <FiLogOut className="mr-2" />
                <i>Logout</i>
              </>
            ) : (
              <>
                <FiLogIn className="mr-2" />
                <i>Log In</i>
              </>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
