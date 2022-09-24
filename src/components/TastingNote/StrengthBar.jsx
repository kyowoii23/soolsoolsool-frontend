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

const data = [
  { id: 1, taste: "Acidity", strength: "10%" },
  { id: 2, taste: "sweet", strength: "20%" },
  { id: 3, taste: "body", strength: "30%" },
  { id: 4, taste: "spicy", strength: "50%" },
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
