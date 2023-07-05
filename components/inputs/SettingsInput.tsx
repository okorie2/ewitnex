/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  label: string;
  visible?: boolean;
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  withIcon?: boolean;
  iconComponent?: React.ReactNode;
  value: string;
  placeholder: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  type?:string
}

export default function SettingsTextField({ label, name, ...rest }: Props) {

  return (
    <div css ={{display: "flex" , flexDirection: "column", marginBottom: "1rem"}}>
        <label
        css={{
          fontSize: "16px",
          fontWeight: "bold",
          fontFamily: "'Nunito', sans-serif",
          marginBottom: "0.6rem"
        }}
      >
        {label}
      </label>
    <div
      css={{
        position: "relative",
        border: `1px solid ${"#C0C0C0"}`,
        borderRadius: "10px",
        background: "#fff",
        height: "49px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: "13px",
      }}
    >
      <input
        css={{
          border: "none",
          outline: "none",
          background: "inherit",
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          paddingLeft: "5%",
          color: "#000",
          fontFamily: "'Poppins', sans-serif",
        }}
        type={rest.type || "text"}
        value={rest.value}
        name={name}
        placeholder={rest.placeholder}
        onChange={(e) => rest.setValue(e)}
        onKeyDown={(e) => {
          if(rest.handleKeyDown){
            rest.handleKeyDown(e);
          }
        }}
      />
      {rest.withIcon && <>{rest.iconComponent}</>}
    </div>
    </div>
  );
}

export const SettingsPasswordTextField = ({ label,placeholder, ...rest }: Props) => {
  const [value, setValue] = useState("");
  return (
    <div css ={{display: "flex" , flexDirection: "column", marginBottom: "1rem"}}>
        <label
        css={{
          fontSize: "16px",
          fontWeight: "bold",
          fontFamily: "'Nunito', sans-serif",
          marginBottom: "0.6rem"
        }}
      >
        {label}
      </label>
    <div
      css={{
        position: "relative",
        border: `1px solid ${"#C0C0C0"}`,
        borderRadius: "7px",
        background: "#fff",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: "13px",
      }}
    >
      
      <input
        css={{
          border: "none",
          outline: "none",
          background: "inherit",
          width: "100%",
          height: "100%",
          borderRadius: "7px",
          paddingLeft: "3%",
          fontFamily: "'Nunito', sans-serif",
          color: "#AEAEAE",
          fontWeight: "bold",
        }}
        type={rest.visible ? "text" : "password"}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />

      <div
        css={css`
          transform: ${rest.visible ? "rotate(180deg)" : "rotate(0deg)"};
          cursor: pointer;
        `}
        onClick={() =>
          (rest.setVisible as React.Dispatch<React.SetStateAction<boolean>>)(
            !rest.visible
          )
        }
      >
        <Image
          src="/assets/svgs/eye_close.svg"
          alt="icon"
          width={13.39}
          height={6.55}
        />
      </div>
    </div>
    </div>
  );
};
