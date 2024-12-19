import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SEC1_SLICE_SETTINGS } from "../../../constant/CarouselSettings";
import Slider from "react-slick";
import styles from "./List.module.css";
import PostCard from "./PostCard";
import GetPostCard from "../../../services/GetRecipients";

function CarouselSec1() {
  const [cardList, setCardList] = useState();
  const [count, setCount] = useState();

  const handleLoad = async (options) => {
    try {
      const { results, count } = await GetPostCard(options);
      setCount(count);
      // 인기순 정렬
      const sortedData = results.sort(
        (a, b) => b.messageCount - a.messageCount
      );
      // 인기순 8개만 출력
      const popularity = sortedData.slice(0, 8);
      setCardList(popularity);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleLoad({
      limit: count,
    });
  }, [count]);

  return (
    <>
      <div className={`${styles.section} ${styles.section1}`}>
        <p className={styles.secTitle}>인기 롤링 페이퍼 🔥</p>
        <Slider {...SEC1_SLICE_SETTINGS}>
          {cardList &&
            cardList.map((item) => {
              return (
                <Link key={item.id} to={`/post/${item.id}`}>
                  <PostCard item={item} />
                </Link>
              );
            })}
        </Slider>
      </div>
    </>
  );
}

export default CarouselSec1;
