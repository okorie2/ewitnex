/** @jsxImportSource @emotion/react */
import React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import TooltipComp from "../tooltip";

interface IHostEventTextField {
  label: string;
  type: string;
  name?:string;
  value?: any;
  padding?:string
  placeholder: string;
  color?:string;
  disabled?:boolean;
  background?:string
  border?:string
  height?: string;
  image?: string;
  setValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const HostEventTextField = (props: IHostEventTextField) => {
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
          <Tooltip title="info">
            <Image src={props.image} alt="" width={14.02} height={14.02} />
          </Tooltip>
        )}
      </label>

      {props.type === "text" && (
        <input
          type={props.type}
          placeholder={props.placeholder}
          css={{
            height: props.height ? props.height : "3.3rem",
            width: "100%",
            padding: "1rem",
            border: `1px solid ${"#AEAEAE"}`,
            borderRadius: "10px",
            fontSize: "14px",
            fontFamily: "'Poppins', sans-serif",
            color: "#AEAEAE",
          }}
        />
      )}
      {props.type === "select" && (
        <select
          id={props.label.split("").join("_")}
          placeholder={props.placeholder}
          css={{
            height: props.height ? props.height : "3.3rem",
            width: "100%",
            padding: "0.5rem 1rem",
            border: `1px solid ${"#AEAEAE"}`,
            borderRadius: "10px",
            fontSize: "14px",
            fontFamily: "'Poppins', sans-serif",
            color: "#000",
          }}
        >
          <option>{props.placeholder}</option>
        </select>
      )}
      {props.type === "textarea" && (
        <textarea
          id={props.label.split("").join("_")}
          placeholder={props.placeholder}
          name={props.name}
          disabled = {props.disabled}
          css={{
            height: props.height ? props.height : "8.25rem",
            width: "100%",
            padding: props.padding ? props.padding : "1rem ",
            border: props.border ? props.border :`1px solid ${"#AEAEAE"}`,
            borderRadius: "10px",
            fontSize: "14px",
            background: props.background,
            fontFamily: "'Poppins', sans-serif",
            color: props.color? props.color : "#AEAEAE",
            resize: "none",
          }}
        />
      )}
    </div>
  );
};

export default HostEventTextField;
