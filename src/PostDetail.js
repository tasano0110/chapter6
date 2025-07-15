import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import posts from "./data/posts";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  // 日付フォーマット関数
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}/${month}/${day}`;
  };

  if (!post) {
    return <div>記事が見つかりませんでした。</div>;
  }

  return (
    <>
      {/* ヘッダー（BlogAppと同じ） */}
      <header className="bg-gray-600 text-white py-10 px-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white no-underline">
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-white text-xl hover:text-gray-300 transition-colors duration-200 no-underline"
          >
            お問い合わせ
          </Link>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto py-10 px-10">
        <article className="bg-white border border-gray-300 p-8">
          {/* メタ情報 */}
          <div className="flex justify-between items-center mb-8">
            <time className="text-gray-500 text-sm">
              {formatDate(post.createdAt)}
            </time>
            <div className="flex gap-2.5">
              {post.categories.map((category, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded text-sm bg-gray-500 text-white font-medium tracking-wide"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* タイトル */}
          <h1 className="text-3xl font-bold mb-8 text-gray-900">
            {post.title}
          </h1>

          {/* 本文 */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-800 leading-relaxed text-lg">
              {post.content}
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
