import React from "react";
import posts from "./data/posts";
import { Link } from "react-router-dom";

export default function BlogApp() {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}/${month}/${day}`;
  };

  return (
    <>
      {/* ヘッダー */}
      <header className="bg-gray-600 text-white py-10 px-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white no-underline">
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-white text-xl hover:text-gray-300 transition-colors duration-200 no-underline bg-transparent border-none cursor-pointer"
          >
            お問い合わせ
          </Link>
        </div>
      </header>

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
