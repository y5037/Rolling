import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import GlobalStyle from "./styles/GlobalStyle";
import PostMessage from "./components/domain/post/PostMessage";

function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/message" element={<PostMessage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
