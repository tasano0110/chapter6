import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import formatDate from "./utilities/formatDate";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPostDetail = async () => {
      const res = await fetch(
        `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`
      );
      const data = await res.json();
      setPost(data.post);
    };
    fetchPostDetail();
  }, [id]);

  if (!post) return <div>読み込み中...</div>;

  return (
    <>
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
