import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogApp from "./BlogApp";
import PostDetail from "./PostDetail";
import Contact from "./Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogApp />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
