/** @jsxImportSource @emotion/react */

import { Poppins } from "@next/font/google";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { theme } from "styles/theme";

interface SearchSelectProps {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  menuList: string[];
  inputWidth: string;
}
const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
  preload: true,
});
export default function SearchSelect({ ...rest }: SearchSelectProps) {
  return (
    <div
      css={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "max-content",
        background: theme.common.white,
      }}
    >
      <input
        type="text"
        placeholder={rest.placeholder}
        onChange={rest.onChange}
        css={{
          backgroundColor: theme.common.white,
          outline: "none",
          border: "none",
          color: theme.shadow.secondary,
          fontSize: "1.5rem",
          fontWeight: "bold",
          width: rest.inputWidth,
          fontFamily: poppins.style.fontFamily,
        }}
      />
      <div css={{ marginTop: "7px" }}>
        <FaChevronDown fontSize={24} fontWeight={700} />
      </div>
      <div
        css={{
          backgroundColor: theme.common.white,
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
