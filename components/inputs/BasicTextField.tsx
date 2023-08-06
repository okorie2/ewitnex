/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { TextField, styled } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  label: string;
  visible?: boolean;
  type?:string
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  withIcon?: boolean;
  iconComponent?: React.ReactNode;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

export default function BasicTextField({ label, name, ...rest }: Props) {
  const [labelDisplay, setLabelDisplay] = useState(false);

  useEffect(() => {
    rest.value.length < 1 ? setLabelDisplay(false) : setLabelDisplay(true);
  }, [rest.value]);

  return (
    <div
      css={{
        position: "relative",
        border: `1px solid ${"#C0C0C0"}`,
        borderRadius: "10px",
        background: "#fff",
        height: "51.2px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: "13px",
      }}
    >
      <label
        css={{
          position: "absolute",
          top: labelDisplay ? "-11px" : "25px",
          left: "2%",
          background: "#fff",
          padding: "0 4%",
          fontSize: "14px",
          fontFamily: "'Nunito', sans-serif",
          transition: "top 0.2s ease-in",
          opacity: labelDisplay ? 1 : 0,
          zIndex: labelDisplay ? 0 : -1,
        }}
      >
        {label}
      </label>
      <input
        css={{
          border: "none",
          outline: "none",
          background: "inherit",
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          paddingLeft: "3%",
        }}
        type={rest.type ? rest.type : "text"}
        value={rest.value}
        name={name}
        placeholder={labelDisplay ? "" : label}
        onChange={(e) => rest.setValue(e)}
      />
      {rest.withIcon && <>{rest.iconComponent}</>}
    </div>
  );
}

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#7c35ab',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#7c35ab',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#7c35ab',
    },
  },
});

export const PasswordTextField = ({ label, ...rest }: Props) => {
  const [labelDisplay, setLabelDisplay] = useState(false);
  const [value, setValue] = useState("");
  useEffect(() => {
    value.length < 1 ? setLabelDisplay(false) : setLabelDisplay(true);
  }, [value]);
  return (
    <div
      css={{
        position: "relative",
        border: `1px solid ${"#C0C0C0"}`,
        borderRadius: "10px",
        background: "#fff",
        height: "51.2px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: "13px",
      }}
    >
      <label
        css={{
          position: "absolute",
          top: labelDisplay ? "-11px" : "25px",
          left: "2%",
          background: "#fff",
          padding: "0 4%",
          fontSize: "14px",
          fontFamily: "'Nunito', sans-serif",
          transition: "top 0.2s ease-in",
          opacity: labelDisplay ? 1 : 0,
          zIndex: labelDisplay ? 0 : -1,
        }}
      >
        {label}
      </label>
      <input
        css={{
          border: "none",
          outline: "none",
          background: "inherit",
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          paddingLeft: "3%",
        }}
        type={rest.visible ? "text" : "password"}
        placeholder={labelDisplay ? "" : label}
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
  );
};
