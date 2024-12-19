import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import GlobalStyle from "./styles/GlobalStyle";
import PostId from "./pages/postID/PostId";

function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/post" element={<PostId />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
