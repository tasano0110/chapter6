import React from "react";
import posts from "./data/posts";

const BlogApp = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}/${month}/${day}`;
  };

  return (
    <>
      <header>
        <div className="header-content">
          <h1>Blog</h1>
          <a href="#" className="nav-link">
            お問い合わせ
          </a>
        </div>
      </header>

      <main>
        <div className="posts-container">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="meta">
                <time className="date">{formatDate(post.createdAt)}</time>
                <div className="categories">
                  {post.categories.map((category, index) => (
                    <span key={index} className="category">
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="title">{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default BlogApp;
