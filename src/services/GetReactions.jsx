import { API_URL } from "../constant/VariableSettings";

// 특정 ID 데이터 불러오기
async function GetReactions({ userId, isCount }) {
  const response = await fetch(
    `${API_URL}/12-4/recipients/${userId}/reactions/?limit=${isCount}`
  );

  if (!response.ok) {
    throw new Error("리액션 정보를 가져오는데 실패했습니다.");
  }

  const responseBody = await response.json();

  return responseBody;
}

export default GetReactions;
