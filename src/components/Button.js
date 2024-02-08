"use client";
import React, { useState} from "react";
import appwriteAuth from "@/utils/appwriteConfig";
import { useRouter } from "next/navigation";
import { _createDocument } from "@/utils/appwriteDB";

const Button = ({ postId, postsData }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isAlreadySaved, setAlreadyIsSaved] = useState(false);
  const [isLoading , setLoading] = useState(false);
  const router = useRouter();

  const storeBlogPost = async() => {
    let id = await appwriteAuth.getCurrentUser()
    if(!id) return
    let data = {
      title: postsData.title,
      imageurl : postsData.BackgroundImage,
      userid: id.$id,
      postid: postId
    }
     const result = await _createDocument(data)
      if(!result) {
        setAlreadyIsSaved(true)
        setIsSaved(true)
      }
      else setIsSaved(true)
      setLoading(false)
     return
   }

  const saveBlogPost = async () => {
    try{
      setLoading(true)
      let _isLoggedIn =  await appwriteAuth.isLoggedIn();
      if(!_isLoggedIn)  {
        router.push(`/useraccount/login/?id=${postId}`)
        return 
      }
       await storeBlogPost()
    }catch(error){
      console.log(error)
    }
  };

  return (
    <span className="rounded-full bg-pink-500 py-3 px-6 font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-4">

    { isLoading ? (
     "saving..."
    ) : (
      <button
    onClick={saveBlogPost}
  >
    {!isSaved ? "Save" : isAlreadySaved ? "Already Saved" : "Saved!"}
  </button>
    )}
    </span>
  );
};

export default Button;
