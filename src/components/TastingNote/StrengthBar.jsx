import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LongBar = styled.div`
  width: 100%;
  height: 20%;
  background-color: #f8f3f1;
  border-radius: 8px;
`;

const ShortBar = styled.div`
  width: 10%;
  height: 100%;
  background-color: #b82647;
  margin-left: ${props => props.strength + ";"}
  border-radius: 8px;
`;

const TastingBar = styled.div`
  display: flex;
`;

const BarText = styled.div`
  width: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// 술이 무슨 맛이 나는지 판단할 방법이 없으니 일단 random 값으로 설정했습니다.
const data = [
  { id: 1, taste: "Acidity", strength: Math.floor(Math.random() * (90 - 1) + 1) + "%" },
  { id: 2, taste: "sweet", strength: Math.floor(Math.random() * (90 - 1) + 1) + "%" },
  { id: 3, taste: "body", strength: Math.floor(Math.random() * (90 - 1) + 1) + "%" },
  { id: 4, taste: "spicy", strength: Math.floor(Math.random() * (90 - 1) + 1) + "%" },
  { id: 5, taste: "sparkling", strength: Math.floor(Math.random() * (90 - 1) + 1) + "%" },
];

function StrengthBar() {
  return (
    <>
      {data.map((element) => {
        return (
          <TastingBar key={element.id}>
            <BarText>{element.taste}</BarText>
            <Box>
              <LongBar>
                <ShortBar strength={element.strength} />
              </LongBar>
            </Box>
          </TastingBar>
        );
      })}
    </>
  );
}

export default StrengthBar;
