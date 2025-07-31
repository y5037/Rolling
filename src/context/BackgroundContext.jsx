// src/context/BackgroundContext.js
import { createContext, useContext, useState } from "react";

// 배경 상태를 관리할 Context 생성
const BackgroundContext = createContext();

// Context를 제공하는 컴포넌트
export const BackgroundProvider = ({ children }) => {
  const [selectBackgroundColor, setSelectBackgroundColor] = useState();
  const [selectBackgroundImage, setSelectBackgroundImage] = useState();

  return (
    <BackgroundContext.Provider
      value={{
        selectBackgroundColor,
        setSelectBackgroundColor,
        selectBackgroundImage,
        setSelectBackgroundImage,
      }}
    >
      {children}
    </BackgroundContext.Provider>
  );
};

// Context 값을 사용하는 커스텀 훅
export const useBackground = () => useContext(BackgroundContext);
