// 롤링페이퍼 리스트 페이지
import {
  Sec1NextArrow,
  Sec1PrevArrow,
  Sec2NextArrow,
  Sec2PrevArrow,
} from "../components/domain/list/ArrowButton";

export const SEC1_SLICE_SETTINGS = {
  infinite: false,
  speed: 500,
  autoplay: false,
  slidesToShow: 4,
  // centerMode: true,
  centerPadding: "0px",
  slidesToScroll: 4,
  arrows: true,
  prevArrow: <Sec1PrevArrow />,
  nextArrow: <Sec1NextArrow />,
  useTransform: false, // 깜빡임 제어
};

export const SEC2_SLICE_SETTINGS = {
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToShow: 4,
  // centerMode: true,
  centerPadding: "0px",
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <Sec2PrevArrow />,
  nextArrow: <Sec2NextArrow />,
  useTransform: false, // 깜빡임 제어
};
