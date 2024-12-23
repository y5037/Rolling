import styled from "styled-components";

const type = {
  type1: {
    color: "var(--Beige500)",
    backgroundColor: "var(--Beige100)",
  },
  type2: {
    color: "var(--Purple500)",
    backgroundColor: "var(--Purple100)",
  },
  type3: {
    color: "var(--Green500)",
    backgroundColor: "var(--Green100)",
  },
  type4: {
    color: "var(--Blue500)",
    backgroundColor: "var(--Blue100)",
  },
};

const Badge = styled.div`
  ${({ $value }) => {
    if ($value === "type1") {
      return type.type1;
    } else if ($value === "type2") {
      return type.type2;
    } else if ($value === "type3") {
      return type.type3;
    } else if ($value === "type4") {
      return type.type4;
    }
  }};
  padding: 3px 15px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  display: inline-block;
  text-align: center;
`;

// 사용 예시 코드 입니다. $value 값에 따라 색상 타입이 변경 됩니다.
// _12.13 혜림
// ex) <Badge $value="type1">지인</Badge>

export default Badge;
