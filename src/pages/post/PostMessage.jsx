import React, { useState, useEffect } from "react";
import "../../styles/GlobalStyle";
import "./PostMessage.css";
import Input from "../../../src/components/ui/input/Input";
import PrimaryButton from "../../../src/components/ui/button/PrimaryButton";
import CustomSelect from "../../../src/components/ui/select/CustomSelect";
import Navigation from "../../../src/components/ui/nav/Navigation";
import ProfileImageSelect from "../../components/domain/post/ProfileImageSelect";
import defaultProfile from "../../assets/images/common/defaultProfile.png"; // 기본 이미지

function PostMessage() {
  // 상태 선언
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [selectedRelationship, setSelectedRelationship] = useState("");
  const [selectedFont, setSelectedFont] = useState("");
  const [profileImage, setProfileImage] = useState(defaultProfile); // 프로필 이미지 상태
  const [nameError, setNameError] = useState(false);
  const [contentError, setContentError] = useState(false);

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
      console.log("선택된 프로필 이미지:", profileImage);
    }
  };

  return (
    <>
      <Navigation />
      <div className="container" style={{ marginTop: "111px" }}>
        {/* 이름 입력 */}
        <div className="input-container">
          <h3 className="title">From.</h3>
          <Input
            placeholder="이름을 입력해 주세요."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError(false);
            }}
            onBlur={() => {
              if (!name.trim()) setNameError(true);
            }}
            className={`input-field ${nameError ? "error-border" : ""}`}
          />
          {nameError && <p className="error-message">이름을 입력해 주세요.</p>}
        </div>

        {/* 프로필 이미지 */}
        <div className="input-container">
          <h3 className="title">프로필 이미지</h3>
          <ProfileImageSelect onSelect={(image) => setProfileImage(image)} />
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
            className={`textarea-wrapper ${contentError ? "error-border" : ""}`}
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
