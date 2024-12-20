import { API_URL } from "../constant/VariableSettings";

async function GetPostCard() {
  const response = await fetch(`${API_URL}/12-4/recipients/`);

  if (!response.ok) {
    throw new Error("메시지 카드를 가져오는데 실패했습니다.");
  }

  const responseBody = await response.json();
  console.log("Response 데이터 형식은? ", typeof responseBody);

  return responseBody;
}

export default GetPostCard;
