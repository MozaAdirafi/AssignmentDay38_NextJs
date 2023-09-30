import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";

const Blog = ({ post }) => {
  const router = useRouter();

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="h-full">
      <Head>
        <title>Blog List</title>
      </Head>
      <h1 className="text-center py-7 text-3xl">Blog List</h1>
      <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
        <Image
          src="https://www.hostinger.co.id/tutorial/wp-content/uploads/sites/11/2019/03/apa-itu-blog-dan-pengertian-blog.webp"
          alt=""
          width={1000}
          height={600}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <p className="mb-1 text-sm text-primary-500">
            Andrea Felsted • <time>18 Nov 2022</time>
          </p>
          <h3 className="text-xl font-medium text-gray-900">{post.title}</h3>
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

      <Link legacyBehavior href="/blog">
        <a className="block mt-4 ml-8 text-blue-500 hover:underline">
          {" "}
          Go Back to Main Page
        </a>
      </Link>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const postId = context.query.id;

  try {
    // Fetch the specific post using the provided API
    const res = await fetch(`https://dummyjson.com/posts/${postId}`);
    const post = await res.json();

    return { props: { post } };
  } catch (error) {
    console.error("Error fetching post:", error);
    return { props: { post: null } };
  }
};

export default Blog;
