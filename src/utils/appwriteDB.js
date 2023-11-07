// "use client"
import { Databases, ID, Query } from "appwrite";
import { client } from "./appwriteConfig";
require("dotenv").config();

const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID
const COL_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID

const databases = new Databases(client);

export const _listDocument = async function(id)  {

    try {
       const list = await databases.listDocuments(DB_ID, COL_ID, [
         Query.equal("userid", id)
       ]);
       if (list.documents.length !== 0) {
         return list;
      };
    } catch (error) {
        console.log(error);
    }
}

export const _deleteDocument = async function(postId, id)  {
   try {
     const list = await databases.listDocuments(DB_ID, COL_ID, [
      Query.equal("userid", id),
      Query.equal("postid", postId)
    ]);
      await databases.deleteDocument(DB_ID, COL_ID, list.documents[0].$id);
   } catch (error) {
       console.log(error);
   }
}

export const _createDocument = async function(_BlogData){
     try{
      let response  = await databases.listDocuments(DB_ID, COL_ID, [
         Query.equal("title", _BlogData.title),
         Query.equal("userid", _BlogData.userid)
      ]) 
      if (response.documents.length !== 0) {
         return;
      };
      return await databases.createDocument(DB_ID, COL_ID, ID.unique(), _BlogData);
     }
     catch(error){
        console.log(error)
     }
}