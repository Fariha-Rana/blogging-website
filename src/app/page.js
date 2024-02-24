import Link from "next/link";
import { getSortedPostsData } from "@/utils/readBlogPosts";
import Image from "next/image";

export default function BlogList() {
  const posts = getSortedPostsData();
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl sm-text-xl font-light m-4 p-4 text-center bg-gradient-to-r from-fuchsia-600 to-cyan-700 bg-clip-text text-transparent">
        Blog Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-center align-middle">
        {posts.map(({ id, title, BackgroundImage }) => (
          <div key={id} className="p-4 mb-4 shadow-lg rounded-lg bg-gradient-to-r from-neutral-200 to-stone-100">
            <div className="m-6 rounded-md overflow-hidden flex items-center object-cover">
              <img
                src={`/${BackgroundImage}`}
                alt={BackgroundImage}
                sizes="(max-width: 640px) 80vw, 300px"
                style={{
                  width: "100%",
                  height: "auto"
                }}
              />
            </div>
            <Link
              href={`/${id}`}
              className="text-lg md:text-xl lg:text-1xl font-semibold text-blue-600 hover:underline"
            >
              {title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
