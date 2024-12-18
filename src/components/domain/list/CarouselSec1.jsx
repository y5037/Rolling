import Slider from "react-slick";
import styles from "./List.module.css";
import PostCard from "./PostCard";
import { SEC1_SLICE_SETTINGS } from "../../../constant/CarouselSettings";
import { useEffect, useState } from "react";
import GetPostCard from "../../../services/GetRecipients";
import { Link } from "react-router-dom";

function CarouselSec1() {
  const [card, setCard] = useState();

  const handleLoad = async () => {
    try {
      const { results } = await GetPostCard();
      // 인기순 정렬
      const sortedData = results.sort(
        (a, b) => b.messageCount - a.messageCount
      );
      setCard(sortedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleLoad({
      limit: 8,
    });
  }, []);

  return (
    <>
      <div className={`${styles.section} ${styles.section1}`}>
        <p className={styles.secTitle}>인기 롤링 페이퍼 🔥</p>
        <Slider {...SEC1_SLICE_SETTINGS}>
          {card &&
            card.map((item) => {
              return (
                <Link key={item.id} to={`/${item.id}`}>
                  <PostCard item={item} />
                </Link>
              );
            })}
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

export default CarouselSec1;
