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
  initialSlide: 0,
  edgeFriction: 0.15,
  responsive: [
    {
      breakpoint: 1248,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 469,
      settings: {
        slidesToShow: 1.3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
      },
    },
  ],
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
