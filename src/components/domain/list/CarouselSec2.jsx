import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SEC2_SLICE_SETTINGS } from "../../../constant/CarouselSettings";
import Slider from "react-slick";
import styles from "./List.module.css";
import PostCard from "./PostCard";
import GetPostCard from "../../../services/GetRecipients";
import Skeleton from "./Skeleton";

function CarouselSec2() {
  const [cardList, setCardList] = useState();
  const [count, setCount] = useState();
  const [loading, setLoading] = useState(true);

  const handleLoad = async (options) => {
    try {
      const { results, count } = await GetPostCard(options);
      setCount(count);
      setCardList(results);
    } catch (error) {
      console.log(error);
    } finally {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 700);

      return () => clearTimeout(timer);
    }
  };

  useEffect(() => {
    handleLoad({
      limit: count,
    });
  }, [count]);

  return (
    <>
      <div className={`${styles.section} ${styles.section2}`}>
        <p className={styles.secTitle}>최근에 만든 롤링 페이퍼 ⭐️️</p>
        {loading ? (
          <Skeleton />
        ) : (
          <Slider {...SEC2_SLICE_SETTINGS}>
            {cardList &&
              cardList.map((item) => {
                return (
                  <Link key={item.id} to={`/post/${item.id}`}>
                    <PostCard item={item} />
                  </Link>
                );
              })}
          </Slider>
        )}
      </div>
    </>
  );
}

export default CarouselSec2;
