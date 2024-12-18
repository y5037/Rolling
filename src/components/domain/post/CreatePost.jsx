import { useState, useEffect } from "react";
import PostBackground from "./PostBackground";
import GetBackgoundImages from "../../../services/GetBackgroundImages";
import enableImage from "../../../assets/images/button/enabled.png";
import "./CreatePost.css";

function CreatePost() {
  // 배경 컬러를 설정하기 위함.
  const colors = ["orange", "purple", "blue", "green"];

  // 받는 사람 입력을 위함.
  const [name, setName] = useState("");

  // 받는 사람의 입력값의 따라서 에러 메시지 처리하기 위함.
  const [isNameStatus, setIsNameStatus] = useState(false);

  // 배경화면(컬러 / 이미지) 선택을 위함.
  const [selectedOption, setSelectedOption] = useState("color");

  // 배경화면의 설정값을 담기 위함
  const [background, setBackground] = useState(colors);

  // 배경화면 리스트 중 선택에 따른 체크박스 처리를 위함.
  const [selectBackgroundColor, setSelectBackgroundColor] = useState(colors[0]);
  const [selectBackgroundImage, setSelectBackgroundImage] = useState("");

  // 이름 입력에 대한 이벤트 처리
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // 포커스 아웃 시 "받는 사람" 입력값 체크를 위함.
  const handleBlur = () => {
    setIsNameStatus(true);
  };

  /* ****************************************************************************************** */
  // 배경화면 옵션(컬러, 이미지) 클릭 처리
  const handleOptionClick = (value) => {
    setSelectedOption(value);
    if (value === "color") {
      setSelectBackgroundColor(colors[0]);
      setSelectBackgroundImage("");
    } else if (value === "image") {
      setSelectBackgroundColor("");
      handleLoadbackgroundImages();
    }
  };

  // 설정할 배경화면 클릭 처리 (컬러, 이미지)
  const handleBackgroundClick = (value) => {
    if (selectedOption === "color") {
      console.log("배경 컬러 선택 시: ", value);
      setSelectBackgroundColor(value);
    } else if (selectedOption === "image") {
      console.log("배경 이미지 선택 시: ", value);
      setSelectBackgroundImage(value);
    }
  };

  // 배경화면을 [이미지]로 선택할 때 API로 데이터를 불러와서 노출.
  const handleLoadbackgroundImages = async () => {
    try {
      const response = await GetBackgoundImages();
      setBackground(response.imageUrls);
      setSelectBackgroundImage(response.imageUrls[0]);
    } catch (e) {
      console.log(e.message);
    }
  };

  // 선택되는 배경 옵션에 따라서 변경하기 위함.
  useEffect(() => {
    setBackground(colors);
  }, [selectedOption]);

  /* ****************************************************************************************** */

  // [생성하기] 버튼 클릭 시 Post API 동작을 위함.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit 결과: ", name);
    // console.log("submit 배경 결과: ", selectBackground);
  };

  return (
    <div className="Container">
      <div className="Content">
        <div className="RecieverInfo">
          <h2 className="RecieverTo">To.</h2>
          <input
            className="InputRecieverName"
            placeholder="받는 사람 이름을 입력해 주세요."
            onChange={handleNameChange}
            value={name}
            onBlur={handleBlur}
          />
          {isNameStatus && name === "" && (
            <p className="VerifyName">값을 입력해주세요.</p>
          )}
        </div>
        <div className="BackgroundInfo">
          <h2 className="BackgroundInfoTitle">배경화면을 선택해 주세요.</h2>
          <p className="BackgroundDescription">
            컬러를 선택하거나, 이미지를 선택할 수 있습니다.
          </p>
        </div>
        <div className="BackgroundOptionBtn">
          <button
            className={`ColorBackgroundBtn ${
              selectedOption === "color" ? "selected" : ""
            }`}
            value="color"
            type="button"
            onClick={() => handleOptionClick("color")}
          >
            컬러
          </button>
          <button
            className={`ImageBackgroundBtn ${
              selectedOption === "image" ? "selected" : ""
            }`}
            value="image"
            type="button"
            onClick={() => handleOptionClick("image")}
          >
            이미지
          </button>
        </div>
        <div className="BackgroundOption">
          {background.map((bg) => (
            <div className="BackgroundForm" key={bg}>
              <PostBackground
                className={`Background ${
                  (selectedOption === "color" &&
                    selectBackgroundColor === bg) ||
                  (selectedOption === "image" && selectBackgroundImage === bg)
                    ? "selected"
                    : ""
                }`}
                option={selectedOption}
                value={bg}
                onClick={() => handleBackgroundClick(bg)}
              />
              {(selectBackgroundColor === bg ||
                selectBackgroundImage === bg) && (
                <img className="selectBtn" src={enableImage} alt="Selected" />
              )}
            </div>
          ))}
        </div>
        <form className="CreateButton" onSubmit={handleSubmit}>
          <button className="SubmitBtn" type="submit" disabled={!name.trim()}>
            생성하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
