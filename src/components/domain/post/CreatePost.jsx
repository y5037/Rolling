import { useState, useEffect } from "react";
import PostBackground from "./PostBackground";
import GetBackgoundImages from "../../../services/GetBackgroundImages";
import "./CreatePost.css";
import testImage from "../../../assets/images/button/enabled.png";

function CreatePost() {
  const colors = ["orange", "purple", "blue", "green"];
  const [name, setName] = useState("");
  const [isNameStatus, setIsNameStatus] = useState(false);
  const [selectedOption, setSelectedOption] = useState("color");
  const [background, setBackground] = useState(colors);
  const [selectBackground, setSelectBackground] = useState(background[0]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleOptionClick = (value) => {
    setSelectedOption(value);
  };

  const handleBackgroundClick = (value) => {
    setSelectBackground(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  const handleBlur = () => {
    setIsNameStatus(true);
  };

  const handleLoadbackgroundImages = async () => {
    const response = await GetBackgoundImages();
    setBackground(response.imageUrls);
    setSelectBackground([background]);
    // console.log(response.imageUrls);
  };

  useEffect(() => {
    if (selectedOption === "color") {
      setBackground(colors);
    } else if (selectedOption === "image") {
      handleLoadbackgroundImages();
    }
  }, [selectedOption]);

  return (
    <form className="Container" onSubmit={handleSubmit}>
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
            // onChange={handleLoadbackgroundImages}
          >
            이미지
          </button>
        </div>
        <div className="BackgroundOption">
          {background.map((background) => (
            <div className="BackgroundForm">
              <PostBackground
                className={`Background ${
                  selectBackground === background ? "selected" : ""
                }`}
                key={background}
                option={selectedOption}
                value={background}
                onClick={() => handleBackgroundClick(background)}
              />
              {selectBackground === background && (
                <img className="selectBtn" src={testImage} alt="Selected" />
              )}
            </div>
          ))}
        </div>
        <div className="CreateButton">
          <button className="SubmitBtn" type="submit" disabled={!name.trim()}>
            생성하기
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreatePost;
