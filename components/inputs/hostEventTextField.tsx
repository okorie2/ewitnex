/** @jsxImportSource @emotion/react */
import React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import {Tooltip} from "@mui/material";


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
  tooltip?:string;
  height?: string;
  image?: string;
  options ?: string[];
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
          <Tooltip title={props.tooltip}>
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
          }}
        />
      )}
      {props.type === "select" && (
        <div css = {{position: "relative", border: `1px solid ${"#AEAEAE"}`,
        borderRadius: "10px",}}>
        <select
          id={props.label.split("").join("_")}
          placeholder={props.placeholder}
          css={{
            height: props.height ? props.height : "3.3rem",
            width: "100%",
            padding: "0.4rem 1rem",
            border: `none`,
            borderRadius: "10px",
            fontSize: "14px",
            fontFamily: "'Poppins', sans-serif",
            color: "#000",
            appearance: "none",
            opacity: 0.7,
            cursor:"pointer"
          }}
        >
          {props.options?.map(option => <option>{option}</option>)}
          
        </select>
        <div css = {{position: "absolute", right: "5%", top: "35%", zIndex: "-1"}}>
          <Image src = {"/assets/svgs/elbow-down-purple.svg"} alt = "" width = {15} height = {15}/>
        </div>
      </div>
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
