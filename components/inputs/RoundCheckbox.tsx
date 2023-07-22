/** @jsxImportSource @emotion/react */
import React, { ChangeEvent } from "react";
import Checkbox from "@mui/material/Checkbox";

const RoundCheckbox = ({ checked }: { checked?: boolean }) => {
  return (
    // <Checkbox
    //   checked={checked}
    //   indeterminate={indeterminate}
    //   onChange={onChange}
    //   size="medium"
    //   sx={{
    //     color: "#AEAEAE",
    //     "&.Mui-checked": {
    //       color: "#7C35AB",
    //     },
    //     "& .MuiSvgIcon-root" : {
    //       borderRadius: "50%"
    //     }
    //   }}
    // />
    <div
      css={{
        height: "22px",
        width: "22px",
        border: "1px solid #707070",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent:"center"
      }}
    >
      {checked ? (
        <div
          css={{
            height: "14px",
            width: "14px",
            border: "1px solid #7C35AB",
            borderRadius: "50%",
            background: "#7C35AB",
          }}
        ></div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default RoundCheckbox;
