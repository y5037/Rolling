import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "./List.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import CarouselSec1 from "./CarouselSec1";
import CarouselSec2 from "./CarouselSec2";
import PrimaryButton from "../../ui/button/PrimaryButton";

const LinkButton = styled(PrimaryButton)`
  width: auto;
  min-width: 280px;
  margin-top: 65px;
  height: 56px;

  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: calc(env(safe-area-inset-bottom) + 24px);
  }
`;

function blockWhileDragging(isDragging) {
  let slides = document.getElementsByClassName("slick-slide");

  if (isDragging) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.add("is-dragging"); // is-dragging 클래스 추가
    }
  } else {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("is-dragging"); // is-dragging 클래스 제거
    }
  }
}

// mousedown 여부를 판단할 변수
let isMouseDown = false;

// mousedown 이벤트에서 isMouseDown을 true로 변환
document.addEventListener("mousedown", () => {
  isMouseDown = true;
});

// mousemove 이벤트에서 isMouseDown을 판단해 blockWhileDragging 함수 실행
document.addEventListener("mousemove", () => {
  if (isMouseDown) {
    blockWhileDragging(true);
  } else {
    blockWhileDragging(false);
  }
});

// mouseup 이벤트에서 mousedown 이전 상태로 초기화
document.addEventListener("mouseup", () => {
  isMouseDown = false;
  blockWhileDragging(false);
});

function ListContainer() {
  return (
    <div className={`container ${styles.carouselContainer}`}>
      <div className={styles.contents}>
        <CarouselSec1 />
        <CarouselSec2 />
        <div className={styles.buttonContainer}>
          <Link to="/post">
            <LinkButton>나도 만들어보기</LinkButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ListContainer;
