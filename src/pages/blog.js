import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const PostList = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const currentPosts = data
    ? data.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
    : [];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil((data?.length || 0) / postsPerPage);
  const pageButtons = [];

  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(i);
  }

  return (
    <div className="font-mooli">
      <Head>
        <title>Blog List</title>
      </Head>
      <h1 className="text-center py-7 text-3xl">Blog List</h1>

      <div className="flex flex-wrap justify-center">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <div className="mx-2 mb-4 max-w-md overflow-hidden rounded-lg bg-white shadow p-4 hover:bg-gray-100 transition duration-300 ease-in-out">
                <Image
                  src="https://www.hostinger.co.id/tutorial/wp-content/uploads/sites/11/2019/03/apa-itu-blog-dan-pengertian-blog.webp"
                  alt=""
                  width={1000}
                  height={600}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="mb-1 text-sm text-primary-500">
                    Post ID: {post.userId} • <time>30 September 2023</time>
                  </p>
                  <h3 className="text-xl font-medium text-gray-900">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-gray-500">{post.body}</p>
                  <div className="mt-4 flex gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="flex justify-center mt-4">
        {pageButtons.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`mx-2 px-3 py-2 rounded ${
              currentPage === pageNumber
                ? "bg-gray-300 text-gray-700"
                : "bg-gray-400 text-gray-700"
            }`}
            onClick={() => paginate(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const res = await fetch("https://dummyjson.com/posts");
    const result = await res.json();
    const data = result.posts;

    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: [] } };
  }
};

export default PostList;
