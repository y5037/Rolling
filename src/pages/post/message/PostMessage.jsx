import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom"; // useParams로 URL 파라미터 추출
import styles from "./PostMessage.module.css";
import Input from "../../../components/ui/input/Input.jsx";
import PrimaryButton from "../../../components/ui/button/PrimaryButton.jsx";
import PageBackButton from "../../../components/ui/button/PageBackButton.jsx";
import CustomSelect from "../../../components/ui/select/CustomSelect";
import Navigation from "../../../components/ui/nav/Navigation";
import ProfileImageSelect from "../../../components/domain/post/ProfileImageSelect.jsx";
import { API_URL } from "../../../constant/VariableSettings.jsx";

const BackButton = styled(PageBackButton)`
  flex: 1;
`;

const CreateMessageButton = styled(PrimaryButton)`
  flex: 5;
`;

function PostMessage() {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [selectedRelationship, setSelectedRelationship] = useState("친구");
  const [selectedFont, setSelectedFont] = useState("Noto Sans");
  const [profileImage, setProfileImage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [contentError, setContentError] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams(); // URL에서 id 추출
  const recipientId = id;

  const isButtonDisabled = !name || !content;

  const handlePageBack = () => {
    navigate(`/post/${id}`);
  };

  const handleSubmit = async () => {
    console.log("handleSubmit called");

    if (isButtonDisabled) {
      console.log("Button is disabled");
      if (!name) setNameError(true);
      if (!content) setContentError(true);
      return;
    }

    console.log("Preparing payload...");

    try {
      const url = `${API_URL}/12-4/recipients/${recipientId}/messages/`;
      console.log("Request URL:", url);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.error(`현재 데이터를 불러오지 못했습니다: ${response.status}`);
        if (response.status === 404) {
          console.error("리소스를 찾을 수 없습니다.");
        }
        return;
      }

      const data = await response.json();
      console.log("Fetched Data:", data);

      const payload = {
        team: "12-4",
        recipientId,
        sender: name,
        profileImageURL: profileImage,
        relationship: selectedRelationship,
        content,
        font: selectedFont,
      };

      console.log(JSON.stringify(payload));

      const putResponse = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (putResponse.ok) {
        console.log("메시지가 성공적으로 생성되었습니다.");
        navigate(`/post/${recipientId}`);
      } else {
        console.error(`서버 오류: ${putResponse.status}`);
      }
    } catch (error) {
      console.error("API 요청 실패:", error);
    }
  };

  return (
    <>
      <Navigation />
      <div className={styles.container} style={{ marginTop: "111px" }}>
        {/* 이름 입력 */}
        <div className={`${styles.inputContainer}`}>
          <h3 className={styles.title}>From.</h3>
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
            className={`${styles.inputField} ${
              nameError ? styles.errorBorder : ""
            }`}
          />
          {nameError && (
            <p className={styles.errorMessage}>이름을 입력해 주세요.</p>
          )}
        </div>

        {/* 프로필 이미지 */}
        <div className={styles.inputContainer}>
          <h3 className={styles.title}>프로필 이미지</h3>
          <ProfileImageSelect onSelect={(image) => setProfileImage(image)} />
        </div>

        {/* 상대와의 관계 */}
        <div className={styles.inputContainer}>
          <h3 className={styles.title}>상대와의 관계</h3>
          <CustomSelect
            defaultValue="친구"
            options={["친구", "지인", "동료", "가족"]}
            value={selectedRelationship}
            onChange={(value) => setSelectedRelationship(value)}
          />
        </div>

        {/* 내용 입력 */}
        <div className={styles.inputContainer}>
          <h3 className={styles.title}>내용을 입력해 주세요</h3>
          <div
            className={`${styles.textareaWrapper} ${
              contentError ? styles.errorBorder : ""
            }`}
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
            <p className={styles.errorMessage}>내용을 입력해 주세요.</p>
          )}
        </div>

        {/* 폰트 선택 */}
        <div className={styles.inputContainer}>
          <h3 className={styles.title}>폰트 선택</h3>
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

        {/* 하단 버튼 */}
        <div className={styles.buttons}>
          <BackButton onClick={handlePageBack} />
          <CreateMessageButton
            onClick={handleSubmit}
            disabled={isButtonDisabled}
          >
            생성하기
          </CreateMessageButton>
        </div>
      </div>
    </>
  );
}

export default PostMessage;
