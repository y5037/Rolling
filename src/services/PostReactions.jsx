import { API_URL } from "../constant/VariableSettings";

async function PostReactions({ userId, emoji }) {
  const bodyData = {
    emoji: emoji,
    type: "increase",
  };

  const response = await fetch(
    `${API_URL}/12-4/recipients/${userId}/reactions/`,
    {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("리액션을 생성하는데 실패했습니다.");
  }

  const responseBody = await response.json();

  return responseBody;
}

export default PostReactions;
