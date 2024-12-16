import PostBackground from "./PostBackground";
import "./CreatePost.css";

function CreatPost() {
  const colors = ["orange", "purple", "blue", "green"];

  return (
    <form className="Container">
      <div className="Content">
        <div className="RecieverInfo">
          <h2 className="RecieverTo">To.</h2>
          <input
            className="InputRecieverName"
            placeholder="받는 사람 이름을 입력해 주세요."
          />
        </div>
        <div className="BackgroundInfo">
          <h2 className="BackgroundInfoTitle">배경화면을 선택해 주세요.</h2>
          <p className="BackgroundDescription">
            컬러를 선택하거나, 이미지를 선택할 수 있습니다.
          </p>
        </div>
        <div className="SelectBackground">
          <button className="ColorBackground" value="color" type="button">
            컬러
          </button>
          <button className="ImageBackground" value="image" type="button">
            이미지
          </button>
        </div>
        <div className="BackgoundOption">
          {colors.map((color) => (
            <PostBackground key={color} value={color} />
          ))}
        </div>
        <div className="CreateButton">
          <button className="Submit" type="submit">
            생성하기
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreatPost;
