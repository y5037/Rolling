import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import GlobalStyle from "./styles/GlobalStyle";
import Modal from "./components/ui/modal/Modal";

function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/modal" element={<Modal />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
