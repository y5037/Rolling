import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import CreatePage from "./pages/post/CreatePost";
import GlobalStyle from "./styles/GlobalStyle";
import ListPage from "./pages/list/ListPage";
import PostId from "./pages/postID/PostId";

function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/post" element={<CreatePage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/post/:id" element={<PostId />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
