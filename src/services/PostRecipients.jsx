import { API_URL } from "../constant/VariableSettings";

async function PostRecipients({
  name = "",
  backgroundColor = "beige",
  backgroundImageURL = null,
} = {}) {
  const bodyData = {
    team: "12-4",
    name: name,
    backgroundColor: backgroundColor,
    backgroundImageURL: backgroundImageURL,
  };

  const response = await fetch(`${API_URL}/12-4/recipients/`, {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("롤링 페이퍼를 생성하는데 실패했습니다.");
  }

  const responseBody = await response.json();

  return responseBody;
}

export default PostRecipients;
