/** @jsxImportSource @emotion/react */
import React from "react";
import { theme } from "styles/theme";
import Image from "next/image";

interface IHostEventTextField {
  label: string;
  type: string;
  placeholder: string;
  height?: string;
  image?: string;
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
          <Image src={props.image} alt="" width={14.02} height={14.02} />
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
            border: `1px solid ${theme.shadow.secondary}`,
            borderRadius: "10px",
            fontSize: "14px",
            fontFamily: "'Poppins', sans-serif",
            color: theme.color.grey,
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
            border: `1px solid ${theme.shadow.secondary}`,
            borderRadius: "10px",
            fontSize: "14px",
            fontFamily: "'Poppins', sans-serif",
            color: theme.color.grey,
          }}
        >
          <option>{props.placeholder}</option>
        </select>
      )}
      {props.type === "textarea" && (
        <textarea
          id={props.label.split("").join("_")}
          placeholder={props.placeholder}
          css={{
            height: props.height ? props.height : "8.25rem",
            width: "100%",
            padding: "1rem ",
            border: `1px solid ${theme.shadow.secondary}`,
            borderRadius: "10px",
            fontSize: "14px",
            fontFamily: "'Poppins', sans-serif",
            color: theme.color.grey,
            resize: "none",
          }}
        />
      )}
    </div>
  );
};

export default HostEventTextField;
