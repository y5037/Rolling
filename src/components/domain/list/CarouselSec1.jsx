import Slider from "react-slick";
import styles from "./List.module.css";
import PostCard from "./PostCard";
import { SEC1_SLICE_SETTINGS } from "../../../constant/CarouselSettings";

function CarouselSec1() {
  return (
    <>
      <div className={`${styles.section} ${styles.section1}`}>
        <p className={styles.secTitle}>인기 롤링 페이퍼 🔥</p>
        <Slider {...SEC1_SLICE_SETTINGS}>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
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

export default CarouselSec1;
