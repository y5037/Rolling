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
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </Slider>
      </div>
    </>
  );
}

export default CarouselSec2;
