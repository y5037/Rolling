import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import GlobalStyle from "./styles/GlobalStyle";
import PostMessage from "./pages/post/message/PostMessage";

function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/message" element={<PostMessage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
