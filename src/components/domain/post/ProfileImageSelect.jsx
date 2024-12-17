import React, { useEffect, useState } from "react";
import "./ProfileImageSelect.css";
import defaultProfile from "../../../assets/images/common/defaultProfile.png";

const ProfileImageSelect = ({ onSelect }) => {
  const [images, setImages] = useState([]); // API로 가져온 이미지 목록
  const [selectedImage, setSelectedImage] = useState(defaultProfile); // 기본 이미지

  // 이미지 목록 불러오기
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://rolling-api.vercel.app/profile-images/"
        );
        if (!response.ok) throw new Error("Failed to fetch images");
        const data = await response.json();

        // 올바른 키에 접근해서 상태 설정
        setImages(data.imageUrls); // imageUrls 배열을 상태에 저장
      } catch (error) {
        console.error("이미지 불러오기 실패:", error);
      }
    };

    fetchImages();
  }, []);

  // 이미지 선택 핸들러
  const handleImageSelect = (image) => {
    setSelectedImage(image);
    onSelect(image); // 부모 컴포넌트에 선택된 이미지 전달
  };

  return (
    <div className="profile-image-selector">
      <div className="image-container">
        <img
          src={selectedImage}
          alt="Selected Profile"
          className="selected-image"
        />
      </div>

      <div className="image-list">
        {/* 기본 이미지 */}
        <img
          src={defaultProfile}
          alt="Default Profile"
          onClick={() => handleImageSelect(defaultProfile)}
          className={`image-option ${
            selectedImage === defaultProfile ? "selected" : ""
          }`}
        />

        {/* API에서 가져온 이미지 */}
        {images.map((imgUrl, index) => (
          <img
            key={index}
            src={imgUrl}
            alt={`Profile ${index}`}
            onClick={() => handleImageSelect(imgUrl)}
            className={`image-option ${
              selectedImage === imgUrl ? "selected" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileImageSelect;
