import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import CreatePage from "./pages/post/CreatePost";
import GlobalStyle from "./styles/GlobalStyle";
import ListPage from "./pages/list/ListPage";
import PostId from "./pages/postID/PostId";
import PostMessage from "./pages/post/message/PostMessage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/post/">
            <Route index element={<CreatePage />} />
            <Route path=":id" element={<PostId />} />
            <Route path=":id/messages/" element={<PostMessage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
