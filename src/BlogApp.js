import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import formatDate from "./utilities/formatDate";

export default function BlogApp() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts"
      );
      const data = await res.json();
      console.log(data);
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <>
      {/* メインコンテンツ */}
      <main className="max-w-6xl mx-auto py-10 px-10">
        <div className="flex flex-col gap-5">
          {posts.map((post) => (
            <Link
              to={`/post/${post.id}`}
              key={post.id}
              className="w-3/5 mx-auto bg-white border border-gray-300 p-5"
            >
              {/* メタ情報（日付とカテゴリ） */}
              <div className="flex justify-between items-center mb-5">
                <time className="text-gray-500 text-xs">
                  {formatDate(post.createdAt)}
                </time>
                <div className="flex gap-2.5">
                  {post.categories.map((category, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded text-xs bg-gray-500 text-white font-medium tracking-wide"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* タイトルと内容 */}
              <h2 className="text-xl font-bold mb-5">{post.title}</h2>
              <p className="text-gray-800 leading-relaxed">{post.content}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
