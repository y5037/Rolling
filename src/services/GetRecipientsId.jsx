import { API_URL } from "../constant/VariableSettings";

// 특정 ID 데이터 불러오기
async function GetRecipientsId(userId, setData) {
  const response = await fetch(`${API_URL}/12-4/recipients/${userId}/`);

  if (!response.ok) {
    throw new Error("유저 정보를 가져오는데 실패했습니다.");
  }

  const responseBody = await response.json();
  console.log("Response 데이터 형식은? ", typeof responseBody);

  setData(responseBody);
}

export default GetRecipientsId;
