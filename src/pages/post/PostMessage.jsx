import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/GlobalStyle";
import "./PostMessage.css";
import Input from "../../../src/components/ui/input/Input";
import PrimaryButton from "../../../src/components/ui/button/PrimaryButton";
import CustomSelect from "../../../src/components/ui/select/CustomSelect";
import Navigation from "../../../src/components/ui/nav/Navigation";
import ProfileImageSelect from "../../components/domain/post/ProfileImageSelect";
import defaultProfile from "../../assets/images/common/defaultProfile.png";

function PostMessage() {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [selectedRelationship, setSelectedRelationship] = useState("친구");
  const [selectedFont, setSelectedFont] = useState("");
  const [profileImage, setProfileImage] = useState(defaultProfile);
  const [nameError, setNameError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 550);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isButtonDisabled = !name || !content;

  const fetchRecipientId = async () => {
    try {
      const response = await fetch(
        "https://rolling-api.vercel.app/12-4/recipients",
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        console.error("recipientId 목록 조회 실패:", response.status);
        return null;
      }

      const data = await response.json(); // 서버에서 받은 데이터
      return data.recipientId; // 서버가 제공하는 recipientId 반환
    } catch (error) {
      console.error("API 요청 실패:", error);
      return null;
    }
  };

  const handleSubmit = async () => {
    if (isButtonDisabled) {
      if (!name) setNameError(true);
      if (!content) setContentError(true);
      return;
    }

    try {
      // 서버에서 recipientId 가져오기
      const recipientId = await fetchRecipientId();

      if (!recipientId) {
        console.error("유효한 recipientId를 가져오지 못했습니다.");
        return;
      }

      const payload = {
        team: "12-4", // 팀 이름
        recipientId, // 서버에서 가져온 recipientId
        sender: name, // 작성자 이름
        profileImageURL: profileImage, // 선택된 프로필 이미지 URL
        relationship: selectedRelationship, // 선택된 관계
        content, // 메시지 내용
        font: selectedFont, // 선택된 글꼴
      };

      const url = `https://rolling-api.vercel.app/12-4/messages/${recipientId}/`;

      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("메시지가 성공적으로 생성되었습니다.");
      } else {
        console.error("서버 오류:", response.status);
      }
    } catch (error) {
      console.error("API 요청 실패:", error);
    } finally {
      navigate(`/post/12-4`);
    }
  };

  return (
    <>
      {!isMobile && <Navigation className="navigation" />}
      <div className="container">
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
              if (!name) setNameError(true);
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
            options={["친구", "지인", "동료", "가족"]}
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
                if (!content) setContentError(true);
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
            options={[
              "Noto Sans",
              "Pretendard",
              "나눔명조",
              "나눔손글씨 손편지체",
            ]}
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
