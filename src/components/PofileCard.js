"use client";
import appwriteAuth from "@/utils/appwriteConfig";
import Link from "next/link";
import { useEffect, useState } from "react";
import { _listDocument, _deleteDocument } from "@/utils/appwriteDB";
import Image from "next/image";

const ProfileCard = () => {
  const [user, setUser] = useState(null);
  const [savedPosts, setSavedPosts] = useState([]);
  const [loadingStates, setLoadingStates] = useState({});

  async function deletePost(postId) {
    setLoadingStates((prevStates) => ({ ...prevStates, [postId]: true }));
    await _deleteDocument(postId, user.$id);
    await fetchData();
    setLoadingStates((prevStates) => ({ ...prevStates, [postId]: false }));
  }

  const fetchData = async () => {
    try {
      const userData = await appwriteAuth.getCurrentUser();
      if (userData) {
        setUser(userData);
        const _savedPosts = await _listDocument(userData.$id);
        setSavedPosts(_savedPosts.documents);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    user && (
      <>
        <div className="flex gap-y-6 flex-wrap">
          <div className="bg-gray-200/70 rounded-xl px-8 py-8 w-full flex gap-y-4 flex-wrap">
            <div className="relative w-full">
              <p className="text-sm text-gray-700">Display Name</p>
              <p className="font-semibold">{user.name}</p>
            </div>
            <div className="relative w-full">
              <p className="text-sm text-gray-700">Email Id</p>
              <p className="font-semibold">{user.email}</p>
            </div>
          </div>
          <div className="w-full flex justify-center text-white">
            <Link
              href={"/useraccount/logout"}
              className="bg-pink-500 rounded-xl px-6 py-3 font-bold inline-block hover:bg-pink-400 duration-150"
            >
              Logout
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center">
          {savedPosts && savedPosts.length > 0 ? (
            <ul>
              {savedPosts.map((post, index) => (
                <li key={index} className="mb-4 pb-5">
                  <div className="mb-4 shadow-lg rounded-lg overflow-hidden">
                    <div className="relative h-auto">
                      <img
                        className="object-cover"
                        src={`/${post.imageurl}`}
                        alt="poster"
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <Link
                        href={`/${post.postid}`}
                        className="block text-xl font-bold text-blue-500 hover:underline"
                      >
                        {post.title}
                      </Link>
                    </div>
                  </div>
                  <button
                    className="rounded-lg bg-pink-500 py-3 px-6 font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-4"
                    onClick={() => deletePost(post.postid)}
                  >
                    {loadingStates[post.postid] ? "deleting..." : "delete"}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <span className="container mx-auto">
              <p className="text-2xl">No saved posts found.</p>
            </span>
          )}
        </div>
      </>
    )
  );
};

export default ProfileCard;
