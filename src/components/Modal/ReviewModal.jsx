import React, { useState } from "react";
import styled from "styled-components";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/system/Stack";
import { userData } from "../../constants/userData";
import Rating from '@mui/material/Rating';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 400,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  padding: "1.5% 1%",
};

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  background-color: #f8f3f1;
  padding: 1%;
  margin-top: 10px;
  border-radius: 10px;
`;

const AddButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const ReviewModal = (props) => {
  // modal 관련
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // useState 관련
  const [userInput, setUserInput] = useState(userData); // 리뷰 내용
  const [value, setValue] = useState(2); // 별점 기능

  const reviewHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Add
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography sx={{ paddingLeft: "2%" }}>술 이름 영역</Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ paddingTop: "10px", paddingLeft: "1%" }}
          >
            <Avatar />
            <Box style={styles}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
          </Stack>
          <TextArea
            type="text"
            name="content"
            onChange={reviewHandler}
            placeholder="write your review"
          />
          <AddButton>
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{ width: "50%", marginRight: "1%" }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{ width: "50%", marginLeft: "1%" }}
              onClick={() => {
                props.dispatch({ type: "ADD", data: userInput });
                handleClose();
              }}
            >
              Add
            </Button>
          </AddButton>
        </Box>
      </Modal>
    </div>
  );
};

export default ReviewModal;
