import { getPostData, getAllPostIds } from "@/utils/readBlogPosts";
import Image from "next/image";
import Button from "@/components/Button";

export default async function BlogPost({ params: { id } }) {
  const postsData = await getPostData(id);
  const metaData = postsData.otherMetadata;
  return (
    <div className="p-4 mx-auto max-w-screen-lg">
      <h1 className="text-xl lg:text-5xl md:text-3xl sm:text-2xl font-bold m-4 p-4 text-center bg-gradient-to-r from-gray-600 to-cyan-600 bg-clip-text text-transparent">
        {postsData.otherMetadata.title}
      </h1>
      <div className="mb-8 flex justify-center items-center">
        <img
          src={`/${postsData.otherMetadata.BackgroundImage}`}
          alt="poster"
          className="rounded h-auto w-auto"
        />
      </div>
      <div className="text-sm lg:text-xl flex flex-col items-center gap-6 space-y-0 md:space-y-0 md:space-x-4">
        <span className="text-md text-gray-600 ">
          <b>Published Date:</b> {postsData.otherMetadata.date}
        </span>
        <div className=" flex gap-4 text-md text-gray-600 items-center justify-center">
        <span className=" ">
          <b>Author:</b> {postsData.otherMetadata.Author}
        </span>
        <img
          src={`/${postsData.otherMetadata.AuthorImage}`}
          alt="Author"
          className="rounded-full h-16 w-16"
        />
        </div>
        <span className=" text-md sm:text-lg md:text-lg lg:text:lg font-thin">
          <b> Save this blog </b>
          <Button postId={id} postsData={metaData} />
        </span>
      </div>

      <div
        className="postData"
        dangerouslySetInnerHTML={{ __html: postsData.contentHtml }}
      />
    </div>
  );
}

export async function generateStaticParams() {
  const allPostsIds = getAllPostIds().map((item) => ({ id: item.params.id }));
  return allPostsIds;
}
