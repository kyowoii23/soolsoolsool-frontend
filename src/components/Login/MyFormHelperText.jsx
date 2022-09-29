import React from "react";
import { useMemo } from "react";
import FormHelperText from "@mui/material/FormHelperText";
import { useFormControl } from "@mui/material/FormControl";

const MyFormHelperText = (props) => {
  const { filled } = useFormControl() || {};

  const filledHelperText = useMemo(() => {
    if (filled) {
      if (props.name === "email") {
        return <p>At least 8 letters, characters, numbers, special characters</p>;
      } else if (props.name === "password") {
        return <p>uppercase and lowercase, numbers, special characters</p>;
      } else if (props.name === "confirmPassword") {
        return <p>It must be the same as the password</p>;
      }
    } else {
      if (props.name === "firstName") {
        return <p>please enter your first name</p>;
      } else if (props.name === "lastName") {
        return <p>please enter your last name</p>;
      } else if (props.name === "nickName") {
        return <p>please enter your nickname</p>;
      }
    }
  }, [filled]);

  return (
    <>
      {props.invalid ? (
        <FormHelperText>{filledHelperText}</FormHelperText>
      ) : (
        <FormHelperText></FormHelperText>
      )}
    </>
  );
};

export default MyFormHelperText;
