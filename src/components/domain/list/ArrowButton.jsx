import iconPrevButton from "../../../assets/images/list/arrow_left.svg";
import iconNextButton from "../../../assets/images/list/arrow_right.svg";

export const Sec1PrevArrow = (props) => {
  const { className, onClick, currentSlide } = props;
  if (currentSlide === 0) {
    return "";
  } else {
    return (
      <div className={className} onClick={onClick}>
        <img src={iconPrevButton} alt="<" />
      </div>
    );
  }
};
export const Sec1NextArrow = (props) => {
  const { className, onClick } = props;
  if (onClick === null) {
    return "";
  } else {
    return (
      <div className={className} onClick={onClick}>
        <img src={iconNextButton} alt=">" />
      </div>
    );
  }
};
export const Sec2PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={iconPrevButton} alt="<" />
    </div>
  );
};
export const Sec2NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={iconNextButton} alt=">" />
    </div>
  );
};
