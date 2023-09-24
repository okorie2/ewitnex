import React, { ChangeEvent } from "react";
import Checkbox from "@mui/material/Checkbox";

const StyledCheckbox = ({
  checked,
  indeterminate,
  disabled,
  onChange,
}: {
  checked: boolean;
  indeterminate?: boolean;
  disabled?:boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Checkbox
      checked={checked}
      indeterminate={indeterminate}
      disabled = {disabled}
      onChange={onChange}
      size="small"
      sx={{
        color: "#7C35AB",
        "&.Mui-checked": {
          color: "#7C35AB",
        },
        "& .MuiSvgIcon-root" : {
          borderRadius: 12
        }
      }}
    />
  );
};

export default StyledCheckbox;
