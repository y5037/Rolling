import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import GlobalStyle from "./styles/GlobalStyle";
import PostHead from "./components/domain/postId/postHead/PostHead";

function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/postHead" element={<PostHead />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
