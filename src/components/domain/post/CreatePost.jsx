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
<<<<<<< HEAD
  const [backgroundValue, setBackgroundValue] = useState([]);
=======
  const [backgroundValue, setBackgroundValue] = useState(colors);
>>>>>>> 6419a54d (fix: Navigation hide 처리 누륵으로 인한 작업)

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

<<<<<<< HEAD
  // const clickBackgroundOption = async (e) => {
  //   setBackgroundOption(e.target.value);
  //   const setBackgroundOption = await GetBackgoundImages();
  // };
=======
  const clickBackgroundOption = async (e) => {
    setBackgroundOption(e.target.value);
    // const setBackgroundOption = await GetBackgoundImages();
  };
>>>>>>> 6419a54d (fix: Navigation hide 처리 누륵으로 인한 작업)

  // const GetBackgoundValue = () => {
  //   setBackgroundValue(backgroundOption);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

<<<<<<< HEAD
  // useEffect(() => {
  //   if (backgroundOption === "color") {
  //     setBackgroundValue(colors);
  //   } else if (backgroundOption === "image") {
  //     setBackgroundValue(images);
  //   }
  // }, [backgroundOption]);
=======
  useEffect(() => {
    if (backgroundOption === "color") {
      setBackgroundValue(colors);
    } else if (backgroundOption === "image") {
      setBackgroundValue(images);
    }
  }, [backgroundOption]);
>>>>>>> 6419a54d (fix: Navigation hide 처리 누륵으로 인한 작업)

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
<<<<<<< HEAD
            className="ColorBackgroundBtn"
            value="color"
            type="button"

            // onClick={clickBackgroundOption}
=======
            className="ColorBackground"
            value="color"
            type="button"
            onClick={clickBackgroundOption}
>>>>>>> 6419a54d (fix: Navigation hide 처리 누륵으로 인한 작업)
          >
            컬러
          </button>
          <button
<<<<<<< HEAD
            className="ImageBackgroundBtn"
            value="image"
            type="button"
            // onClick={clickBackgroundOption}
=======
            className="ImageBackground"
            value="image"
            type="button"
            onClick={clickBackgroundOption}
>>>>>>> 6419a54d (fix: Navigation hide 처리 누륵으로 인한 작업)
          >
            이미지
          </button>
        </div>
        <div className="BackgoundOption">
<<<<<<< HEAD
          {colors.map((color) => (
            <PostBackground key={color} option="color" value={color} />
          ))}
        </div>
        <div className="CreateButton">
          <button className="SubmitBtn" type="submit" disabled={!name.trim()}>
=======
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
>>>>>>> 6419a54d (fix: Navigation hide 처리 누륵으로 인한 작업)
            생성하기
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreatePost;
