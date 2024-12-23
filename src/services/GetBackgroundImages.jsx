import { API_URL } from "../constant/VariableSettings";

async function GetBackgoundImages() {
  const response = await fetch(`${API_URL}/background-images/`);

  if (!response.ok) {
    throw new Error("배경 이미지를 가져오는데 실패했습니다.");
  }

  const responseBody = await response.json();

  return responseBody;
}

export default GetBackgoundImages;
