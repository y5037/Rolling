import React, { useState } from "react";
import "../../../styles/GlobalStyle";
import "./PostMessage.css";
import Input from "../../../components/ui/input/Input";
import PrimaryButton from "../../../components/ui/button/PrimaryButton";
import CustomSelect from "../../../components/ui/select/CustomSelect";
import Navigation from "../../ui/nav/Navigation";

function PostMessage() {
  // 상태 선언
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [selectedRelationship, setSelectedRelationship] = useState("");
  const [selectedFont, setSelectedFont] = useState("");
  const [nameError, setNameError] = useState(false); //값 없이 focus out시 에러 처리
  const [contentError, setContentError] = useState(false); //값 없이 focus out시 에러 처리

  // 옵션 목록
  const relationshipOptions = ["친구", "지인", "동료", "가족"];
  const fontOptions = [
    "Noto Sans",
    "Pretendard",
    "나눔명조",
    "나눔손글씨 손편지체",
  ];

  // 버튼 비활성화 여부
  const isButtonDisabled = !name.trim() || !content.trim();

  // 제출 핸들러
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
      <Navigation />
      <div className="container">
        {/* 이름 입력 */}
        <div className="input-container">
          <h3 className="title">From.</h3>
          <Input
            placeholder="이름을 입력해 주세요."
            value={name}
            onChange={(e) => {
              setName(e.target.value); //입력값 저장
              setNameError(false); // 입력 시 에러 해제
            }}
            onBlur={() => {
              if (!name.trim()) setNameError(true); // 포커스 아웃 시 에러 처리
            }}
            className={`input-field ${nameError ? "error-border" : ""}`} // 에러 시 클래스 추가
          />
          {nameError && <p className="error-message">이름을 입력해 주세요.</p>}
        </div>

        {/* 프로필 이미지 */}
        <div className="input-container">
          <h3 className="title">프로필 이미지</h3>
        </div>

        {/* 상대와의 관계 */}
        <div className="input-container">
          <h3 className="title">상대와의 관계</h3>
          <CustomSelect
            defaultValue="친구"
            options={relationshipOptions}
            value={selectedRelationship}
            onChange={(value) => setSelectedRelationship(value)}
          />
        </div>

        {/* 내용 입력 */}
        <div className="input-container">
          <h3 className="title">내용을 입력해 주세요</h3>
          <div
            className={`textarea-wrapper ${contentError ? "error-border" : ""}`} //값 없이 focus out시 에러
          >
            <textarea
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
                setContentError(false);
              }}
              onBlur={() => {
                if (!content.trim()) setContentError(true);
              }}
              placeholder="내용을 입력해 주세요"
            />
          </div>
          {contentError && (
            <p className="error-message">내용을 입력해 주세요.</p>
          )}
        </div>

        {/* 폰트 선택 */}
        <div className="input-container">
          <h3 className="title">폰트 선택</h3>
          <CustomSelect
            defaultValue="Noto Sans"
            options={fontOptions}
            value={selectedFont}
            onChange={(value) => setSelectedFont(value)}
          />
        </div>

        {/* 생성하기 버튼 */}
        <PrimaryButton onClick={handleSubmit} disabled={isButtonDisabled}>
          생성하기
        </PrimaryButton>
      </div>
    </>
  );
}

export default PostMessage;
