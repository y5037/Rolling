import { useState, useEffect } from "react";
import PostBackground from "./PostBackground";
import GetBackgoundImages from "../../../services/GetBackgroundImages";
import "./CreatePost.css";
import testImage from "../../../assets/images/common/defaultProfile.png";

function CreatePost() {
  const colors = ["orange", "purple", "blue", "green"];
  const images = [testImage, testImage, testImage, testImage];

  const [name, setName] = useState("");
  const [backgroundOption, setBackgroundOption] = useState([]);
  const [backgroundValue, setBackgroundValue] = useState(colors);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const clickBackgroundOption = async (e) => {
    setBackgroundOption(e.target.value);
    // const setBackgroundOption = await GetBackgoundImages();
  };

  // const GetBackgoundValue = () => {
  //   setBackgroundValue(backgroundOption);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  useEffect(() => {
    if (backgroundOption === "color") {
      setBackgroundValue(colors);
    } else if (backgroundOption === "image") {
      setBackgroundValue(images);
    }
  }, [backgroundOption]);

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
          />
        </div>
        <div className="BackgroundInfo">
          <h2 className="BackgroundInfoTitle">배경화면을 선택해 주세요.</h2>
          <p className="BackgroundDescription">
            컬러를 선택하거나, 이미지를 선택할 수 있습니다.
          </p>
        </div>
        <div className="SelectBackground">
          <button
            className="ColorBackground"
            value="color"
            type="button"
            onClick={clickBackgroundOption}
          >
            컬러
          </button>
          <button
            className="ImageBackground"
            value="image"
            type="button"
            onClick={clickBackgroundOption}
          >
            이미지
          </button>
        </div>
        <div className="BackgoundOption">
          {backgroundValue.map((value) => (
            <PostBackground
              key={value}
              option={backgroundOption}
              value={value}
            />
          ))}
        </div>
        <div className="CreateButton">
          <button className="Submit" type="submit" disabled={!name.trim()}>
            생성하기
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreatePost;
