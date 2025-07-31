import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  return null; // UI를 렌더링하지 않음
};

export default ScrollToTop;
