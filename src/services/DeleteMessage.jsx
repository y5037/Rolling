import { API_URL } from "../constant/VariableSettings";

async function DeleteMessage({ messageId = null } = {}) {
  console.log("api에서 messageId값 확인: ", messageId);
  const response = await fetch(`${API_URL}/12-4/messages/${messageId}/`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("데이터를 삭제하는데 실패했습니다.");
  }

  const responseBody = await response;

  return responseBody;
}

export default DeleteMessage;
