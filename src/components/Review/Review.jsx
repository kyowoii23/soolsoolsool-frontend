import React from "react";
import styled from "styled-components";
import { useReducer } from "react";
import { userData } from "../../constants/userData";
import { userReducer } from "../../reducers/userReducer";
import BasicRating from "../UI/BasicRating";
import ReviewModal from "../Modal/ReviewModal";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";
import Container from "@mui/material/Container";

const ReviewContent = styled.div`
  width: 100%;
  height: auto;
  padding: 1%;
  word-break: keep-all;
  word-wrap: break-word;
`;

const AddButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Review = (props) => {
  const [state, dispatch] = useReducer(userReducer, userData);

  return (
    <Container sx={{ paddingTop: "100px" }}>
      <Box sx={{ width: "100%", height: "auto" }}>
        <Stack spacing={4} sx={{ maxWidth: 1200 }}>
          {state.map((element, i) => {
            return (
              <div key={i}>
                <SnackbarContent
                  message="로그인한 아이디"
                  sx={{ color: "black", bgcolor: "#F4F4F4" }}
                  action={<BasicRating />}
                />
                <ReviewContent>{element.content}</ReviewContent>
              </div>
            );
          })}
        </Stack>
        <AddButton>
          <ReviewModal dispatch={dispatch} />
        </AddButton>
      </Box>
    </Container>
  );
};

export default Review;
