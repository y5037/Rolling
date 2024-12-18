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
  min-width: calc(100vw * (280 / 1200));
  margin-top: 65px;
  height: 56px;

  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: calc(env(safe-area-inset-bottom) + 24px);
  }
`;

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
