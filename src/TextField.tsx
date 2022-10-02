import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { ButtonProps } from "./type";

export default function SelectTextFields({ choices, id, label }: ButtonProps) {
  const [value, setValue] = React.useState(choices[0]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box component="form" noValidate>
      <TextField
        id={id}
        select
        label={label}
        value={value}
        onChange={handleChange}
        helperText="Please select your choice"
      >
        {choices.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
