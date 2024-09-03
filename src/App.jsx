import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/page/homePage.jsx";
import NewsPage from "./components/page/newsPage.jsx";
import ForumPage from "./components/page/forumPage.jsx";

const App = () => {
  return (
    <div className="min-h-full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/forum" element={<ForumPage />} />
      </Routes>
    </div>
  );
};

export default App;
