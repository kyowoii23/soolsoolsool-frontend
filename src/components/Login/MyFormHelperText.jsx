import React from "react";
import { useMemo } from "react";
import FormHelperText from '@mui/material/FormHelperText';
import { useFormControl } from '@mui/material/FormControl';

const MyFormHelperText = ({name}) => {
  const { focused } = useFormControl() || {};

  const helperText = useMemo(() => {
    if (focused) {
      return <p>Please enter your {name}</p>;
    }

    return 
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

export default MyFormHelperText;
