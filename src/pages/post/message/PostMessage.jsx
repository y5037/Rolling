import React, { useState } from "react";
import "../../../styles/GlobalStyle";
import "../message/PostMessage.css";
import Input from "../../../components/ui/input/Input";
import PrimaryButton from "../../../components/ui/button/PrimaryButton";
import CustomSelect from "../../../components/ui/select/CustomSelect";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function PostMessage() {
  const [content, setContent] = useState("");

  return (
    <>
      <div className="container" style={{ margin: "auto 300px" }}>
        <div className="input-container">
          <h3 className="title">From.</h3>
          <Input placeholder="이름을 입력해 주세요." />
        </div>
        <div className="input-container">
          <h3 className="title">프로필 이미지</h3>
        </div>
        <div className="input-container">
          <h3 className="title">상대와의 관계</h3>
          <CustomSelect />
        </div>
        <div className="input-container">
          <h3 className="title">내용을 입력해 주세요</h3>
          <div className="textarea">
            <ReactQuill
              value={content}
              onChange={setContent}
              placeholder="내용을 입력해 주세요"
            />
          </div>
        </div>
        <div className="input-container">
          <h3 className="title" style={{ marginTop: "50px" }}>
            폰트선택
          </h3>
          <CustomSelect />
        </div>
        <PrimaryButton>생성하기</PrimaryButton>
      </div>
    </>
  );
}

export default PostMessage;
