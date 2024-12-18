import Slider from "react-slick";
import styles from "./List.module.css";
import PostCard from "./PostCard";
import { SEC2_SLICE_SETTINGS } from "../../../constant/CarouselSettings";

function CarouselSec2() {
  return (
    <>
      <div className={`${styles.section} ${styles.section2}`}>
        <p className={styles.secTitle}>최근에 만든 롤링 페이퍼 ⭐️️</p>
        <Slider {...SEC2_SLICE_SETTINGS}>
          {/* 데이터 부족으로 넣은 테스트 코드입니다 (추후 삭제 필요 _12.18 혜림) */}
          <div>...</div>
          <div>...</div>
          <div>...</div>
          {/* 여기까지 */}
        </Slider>
      </div>
    </>
  );
}

export default CarouselSec2;
