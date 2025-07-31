import { useEffect, useState } from "react";
import "./ProfileImageSelect.css";

const ProfileImageSelect = ({ onSelect }) => {
  const [images, setImages] = useState([]); // API로 가져온 이미지 목록
  const [selectedImage, setSelectedImage] = useState(""); // 선택된 이미지

  // 이미지 목록 불러오기
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://rolling-api.vercel.app/profile-images/"
        );
        if (!response.ok) throw new Error("Failed to fetch images");
        const data = await response.json();

        setImages(data.imageUrls); // imageUrls 배열을 상태에 저장

        // 선택된 이미지가 없을 경우에만 기본값 설정
        if (!selectedImage && data.imageUrls.length > 0) {
          const firstImage = data.imageUrls[0];
          setSelectedImage(firstImage);
          onSelect(firstImage); // 부모 컴포넌트에 전달
        }
      } catch (error) {
        console.error("이미지 불러오기 실패:", error);
      }
    };

    fetchImages();
  }, [onSelect, selectedImage]); // selectedImage를 의존성에 추가

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
