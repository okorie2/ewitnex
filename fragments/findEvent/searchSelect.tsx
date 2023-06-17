/** @jsxImportSource @emotion/react */

import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { screen } from "styles/theme";

interface SearchSelectProps {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  menuList: string[];
  inputWidth: string;
}

export default function SearchSelect({ ...rest }: SearchSelectProps) {
  return (
    <div
      css={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "max-content",
        background: "#fff",
      }}
    >
      <input
        type="text"
        placeholder={rest.placeholder}
        onChange={rest.onChange}
        css={{
          backgroundColor: "#fff",
          outline: "none",
          border: "none",
          color: "#AEAEAE",
          fontSize: "1.5rem",
          fontWeight: "bold",
          width: rest.inputWidth,
          fontFamily: "'Poppins', sans-serif",
          [screen.desktop]: {
            fontSize: "1.3rem",
          },
          [screen.lg]: {
            fontSize: "1.3rem",
          },
        }}
      />
      <div css={{ marginTop: "7px" }}>
        <FaChevronDown fontSize={24} fontWeight={700} />
      </div>
      <div
        css={{
          backgroundColor: "#fff",
          width: "100%",
          height: "4rem",
          position: "absolute",
          top: "2.5rem",
          zIndex: 1,
          boxShadow:
            "0 1px 17px 0 rgb(40 44 53 / 10%), 0 2px 4px 0 rgb(40 44 53 / 10%)",
          display: "none",
        }}
      >
        {rest.menuList.map((name, i) => (
          <div key={i}>{name}</div>
        ))}
      </div>
    </div>
  );
}
