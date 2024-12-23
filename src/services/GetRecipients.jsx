import { API_URL } from "../constant/VariableSettings";

async function GetPostCard(params = {}) {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${API_URL}/12-4/recipients/?${query}`);

  if (!response.ok) {
    throw new Error("메시지 카드를 가져오는데 실패했습니다.");
  }

  const responseBody = await response.json();

  return responseBody;
}

export default GetPostCard;
