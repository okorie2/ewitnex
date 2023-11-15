/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

interface Props {
  label: string;
  visible?: boolean;
  color?: string;
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  withIcon?: boolean;
  iconComponent?: React.ReactNode;
  value: string;
  placeholder: string;
  disabled?: boolean;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  type?: string;
  width?: string;
  error?: string;
  required?:boolean
}

export default function SettingsTextField({ label, name, ...rest }: Props) {
  const ref = useRef(null);
  const [divFocus, setDivFocus] = useState(false);

  const active = () => {
    if (typeof window !== "undefined") {
      return document.activeElement;
    }
  };

  const activeElement = active();

  useEffect(() => {
    if (activeElement === ref.current) {
      setDivFocus(true);
    } else {
      setDivFocus(false);
    }
  }, [activeElement]);

  // const handleClick = () => {
  //   if(ref.current !== null){
  //     ref.current.focus()
  //   }
  // }
  return (
    <div
      css={{ display: "flex", flexDirection: "column", marginBottom: "1rem" }}
    >
      <label
        css={{
          fontSize: "16px",
          fontWeight: "bold",
          fontFamily: "'Nunito', sans-serif",
          marginBottom: "0.6rem",
        }}
      >
        {label}
      </label>
      <div
        tabIndex={0}
        css={{
          position: "relative",
          border: divFocus
            ? `2px solid ${"#7C35AB"}`
            : `1px solid ${"#C0C0C0"}`,
          borderRadius: "10px",
          background: "#fff",
          height: "49px",
          width: rest.width ? rest.width : "",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: "13px",
          ":hover": {
            border: rest.disabled
              ? `1px solid ${"#C0C0C0"}`
              : `2px solid ${"#7C35AB"}`,
          },
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
          ref={ref}
          onClick={() => setDivFocus(true)}
          type={rest.type || "text"}
          value={rest.value}
          required = {rest.required}
          name={name}
          disabled={rest.disabled}
          placeholder={rest.placeholder}
          onChange={(e) => rest.setValue(e)}
          onKeyDown={(e) => {
            if (rest.handleKeyDown) {
              rest.handleKeyDown(e);
            }
          }}
        />
        {rest.withIcon && <>{rest.iconComponent}</>}
      </div>
    </div>
  );
}

export const SettingsPasswordTextField = ({
  label,
  placeholder,
  ...rest
}: Props) => {
  return (
    <div
      css={{ display: "flex", flexDirection: "column", marginBottom: "1rem" }}
    >
      <label
        css={{
          fontSize: "16px",
          fontWeight: "bold",
          fontFamily: "'Nunito', sans-serif",
          marginBottom: "0.6rem",
        }}
      >
        {label}
      </label>
      <div
        css={{
          position: "relative",
          border: rest.error ? "1px solid red" : `1px solid ${"#C0C0C0"}`,
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
            color: rest.color ? rest.color : "#AEAEAE",
            fontWeight: "bold",
          }}
          type={rest.visible ? "text" : "password"}
          placeholder={placeholder}
          name={rest.name}
          value={rest.value}
          onChange={(e) => rest.setValue(e)}
          required
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
      {rest.error && (
        <p
          css={{
            color: "red",
            fontFamily: '"Nunito", sans-serif',
            fontSize: "0.9rem",
          }}
        >
          {rest.error}
        </p>
      )}
    </div>
  );
};
