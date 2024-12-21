import { useState, useEffect } from "react";
import PostBackground from "./PostBackground";
import GetBackgoundImages from "../../../services/GetBackgroundImages";
import "./CreatePost.css";
import testImage from "../../../assets/images/common/defaultProfile.png";

function CreatePost() {
  const colors = ["orange", "purple", "blue", "green"];
  // const images = [testImage, testImage, testImage, testImage];

  const [name, setName] = useState("");
  const [isNameStatus, setIsNameStatus] = useState(false);
  const [selectedOption, setSelectedOption] = useState("color");
  const [backgroundColor, setBackgroundColor] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleOptionClick = (value) => {
    setSelectedOption(value);
  };

  // const clickBackgroundOption = async (e) => {
  //   setBackgroundOption(e.target.value);
  //   const setBackgroundOption = await GetBackgoundImages();
  // };

  // const GetBackgoundValue = () => {
  //   setBackgroundValue(backgroundOption);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  const handleBlur = () => {
    setIsNameStatus(true);
  };

  // useEffect(() => {
  //   if (backgroundOption === "color") {
  //     setBackgroundValue(colors);
  //   } else if (backgroundOption === "image") {
  //     setBackgroundValue(images);
  //   }
  // }, [backgroundOption]);

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
        <div className="SelectBackground">
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
        <div className="BackgoundOption">
          {colors.map((color) => (
            <PostBackground key={color} option="color" value={color} />
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
