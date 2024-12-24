import { API_URL } from "../constant/VariableSettings";

async function GetMessages(recipientId) {
  const response = await fetch(
    `${API_URL}/12-4/recipients/${recipientId}/messages/`
  );

  if (!response.ok) {
    throw new Error("메시지 데이터를 가져오는데 실패했습니다.");
  }

  const responseBody = await response.json();

  return responseBody;
}

export default GetMessages;
