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
  const [name, setName] = useState("");
  const [selectedRelationship, setSelectedRelationship] = useState("");
  const [selectedFont, setSelectedFont] = useState("");
  const [nameError, setNameError] = useState(false); // 이름 에러
  const [contentError, setContentError] = useState(false); // 내용 에러

  // Enum 값
  const relationshipOptions = ["친구", "지인", "동료", "가족"];
  const fontOptions = [
    "Noto Sans",
    "Pretendard",
    "나눔명조",
    "나눔손글씨 손편지체",
  ];

  // 버튼 활성화 여부
  const isButtonDisabled = !name.trim() || !content.trim();

  const handleSubmit = () => {
    if (isButtonDisabled) {
      if (!name.trim()) setNameError(true);
      if (!content.trim()) setContentError(true);
    } else {
      setNameError(false);
      setContentError(false);
      console.log("메시지가 성공적으로 생성되었습니다.");
      // 메시지 생성 로직 추가
    }
  };

  return (
    <>
      <div className="container" style={{ margin: "auto 300px" }}>
        <div className="input-container">
          <h3 className="title">From.</h3>
          <Input
            placeholder="이름을 입력해 주세요."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError(false); // 입력 시 에러 해제
            }}
            onBlur={() => {
              if (!name.trim()) setNameError(true); // 포커스 아웃 시 에러 처리
            }}
            style={{
              border: nameError ? "1px solid red" : "1px solid #ccc", // 테두리 색상 변경
            }}
          />
          {nameError && <p className="error">이름을 입력해주세요.</p>}
        </div>
        <div className="input-container">
          <h3 className="title">프로필 이미지</h3>
        </div>
        <div className="input-container">
          <h3 className="title">상대와의 관계</h3>
          <CustomSelect
            defaultValue="친구"
            options={relationshipOptions}
            value={selectedRelationship}
            onChange={(value) => {
              setSelectedRelationship(value);
            }}
          />
        </div>
        <div className="input-container">
          <h3 className="title">내용을 입력해 주세요</h3>
          <div
            className="textarea"
            style={{
              border: contentError ? "1px solid red" : "1px solid #ccc", // 테두리 색상 변경
            }}
          >
            <ReactQuill
              value={content}
              onChange={(value) => {
                setContent(value);
                setContentError(false); // 입력 시 에러 해제
              }}
              onBlur={() => {
                if (!content.trim()) setContentError(true); // 포커스 아웃 시 에러 처리
              }}
              placeholder="내용을 입력해 주세요"
            />
          </div>
          {contentError && <p className="error">내용을 입력해주세요.</p>}
        </div>
        <div className="input-container">
          <h3 className="title">폰트선택</h3>
          <CustomSelect
            defaultValue="Noto Sans"
            options={fontOptions}
            value={selectedFont}
            onChange={(value) => {
              setSelectedFont(value);
            }}
          />
        </div>
        <PrimaryButton onClick={handleSubmit} disabled={isButtonDisabled}>
          생성하기
        </PrimaryButton>
      </div>
    </>
  );
}

export default PostMessage;
