import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto py-16 px-10">
        <div className="bg-white">
          <h1 className="text-3xl font-bold mb-12 text-gray-900 text-center">
            問い合わせフォーム
          </h1>

          {/* お問い合わせフォーム */}
          <form className="space-y-8">
            {/* お名前 */}
            <div className="flex items-center gap-8">
              <label className="block text-lg font-medium text-gray-900 w-24 text-left">
                お名前
              </label>
              <input
                type="text"
                className="flex-1 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
            </div>

            {/* メールアドレス */}
            <div className="flex items-center gap-8">
              <label className="block text-lg font-medium text-gray-900 w-24 text-left">
                メールアドレス
              </label>
              <input
                type="email"
                className="flex-1 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
            </div>

            {/* 本文 */}
            <div className="flex gap-8">
              <label className="block text-lg font-medium text-gray-900 w-24 text-left pt-4">
                本文
              </label>
              <textarea
                rows="8"
                className="flex-1 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg resize-none"
              ></textarea>
            </div>

            {/* ボタン */}
            <div className="flex justify-center gap-4 pt-8">
              <button
                type="submit"
                className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-700 transition-colors duration-200 text-lg font-medium"
              >
                送信
              </button>
              <button
                type="button"
                className="bg-gray-300 text-gray-800 px-8 py-3 rounded-md hover:bg-gray-400 transition-colors duration-200 text-lg font-medium"
              >
                クリア
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
