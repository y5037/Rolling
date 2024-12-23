import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import GlobalStyle from "./styles/GlobalStyle";
import ListPage from "./pages/list/ListPage";
import { CreateMain } from "./components/domain/main/CreateMain";
import { CreateMainTwo } from "./components/domain/main/CreateMain";

function CreateMainPage() {
  return (
    <div>
      <CreateMain />
      <CreateMainTwo />
    </div>
  );
}

function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/main" element={<CreateMainPage />} />{" "}
          {/* 두 컴포넌트를 동시에 렌더링 */}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
