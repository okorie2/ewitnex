/** @jsxImportSource @emotion/react */
import React, { Ref } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import { TextField, MenuItem, Tooltip } from "@mui/material";

interface IHostEventTextField {
  label?: string;
  type: string;
  name?: string;
  value?: any;
  padding?: string;
  placeholder: string;
  color?: string;
  disabled?: boolean;
  background?: string;
  border?: string;
  tooltip?: string;
  height?: string;
  image?: string;
  options?: { value: string; label: string }[];
  setValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const HostEventTextField = React.forwardRef(
  (props: IHostEventTextField, ref: Ref<HTMLInputElement>) => {
    return (
      <div css={{ display: "grid", gap: "0.5rem", width: "100%" }}>
        <label
          css={{
            fontWeight: "bold",
            display: "flex",
            gap: "0.3rem",
            alignItems: "center",
          }}
        >
          {props.label}
          {props.image && (
            <Tooltip title={props.tooltip}>
              <Image src={props.image} alt="" width={14.02} height={14.02} />
            </Tooltip>
          )}
        </label>

        {props.type === "text" && (
          <input
            type={props.type}
            placeholder={props.placeholder}
            ref={ref}
            css={{
              height: props.height ? props.height : "3.3rem",
              width: "100%",
              padding: "1rem",
              border: `1px solid ${"#AEAEAE"}`,
              borderRadius: "10px",
              fontSize: "14px",
              fontFamily: "'Poppins', sans-serif",
              ":hover": {
                border: `2px solid ${"#7C35AB"}`,
              },
              ":focus": {
                border: `2px solid ${"#7C35AB"}`,
              },
            }}
          />
        )}
        {props.type === "select" && (
          <div
            css={{
              position: "relative",
              borderRadius: "10px",
            }}
          >
            <TextField
              id="select"
              select
              defaultValue={props.placeholder}
              sx={{
                width: "100%",
                appearance: "none",
                opacity: 0.7,
                borderRadius: "10px",
                border: `none`,
                "& .MuiInputBase-root": {
                  ":hover": {
                    fieldset: {
                      "&.MuiOutlinedInput-notchedOutline": {
                        border: "2px solid #7C35AB",
                      },
                    },
                  },
                },
                fieldset: {
                  "&.MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #AEAEAE",
                    borderRadius: "10px",
                  },
                },
                "& .Mui-focused": {
                  border: `2px solid ${"#7C35AB"}`,
                  borderRadius: "10px",
                  outline: "none",
                  fieldset: {
                    border: "none",
                  },
                },
              }}
            >
              {props.options?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {/* <div css = {{position: "absolute", right: "5%", top: "35%", zIndex: "-1"}}>
          <Image src = {"/assets/svgs/elbow-down-purple.svg"} alt = "" width = {15} height = {15}/>
        </div> */}
          </div>
        )}
        {props.type === "textarea" && (
          <textarea
            id={props.label ? props.label.split("").join("_") : ""}
            placeholder={props.placeholder}
            name={props.name}
            disabled={props.disabled}
            css={{
              height: props.height ? props.height : "8.25rem",
              width: "100%",
              padding: props.padding ? props.padding : "1rem ",
              border: props.border ? props.border : `1px solid ${"#AEAEAE"}`,
              borderRadius: "10px",
              fontSize: "14px",
              background: props.background,
              fontFamily: "'Poppins', sans-serif",
              color: props.color ? props.color : "#AEAEAE",
              resize: "none",
              ":hover": {
                border: `2px solid ${"#7C35AB"}`,
              },
              ":focus": {
                border: `2px solid ${"#7C35AB"}`,
                outline: "none",
              },
            }}
          />
        )}
      </div>
    );
  }
);
HostEventTextField.displayName = "HostEventTextField"
export default HostEventTextField;
