/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { screen } from "styles/theme";
import Image from 'next/image'

interface SearchSelectProps {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSelect: (name:string , value:string) => void
  menuList: string[];
  inputWidth: string;
  height?: string;
  name: string
  value:string;
  width?: string;
  zIndex?: number;
  paddingInline?:string
}

export default function SearchSelect({ ...rest }: SearchSelectProps) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
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
        value = {rest.value}
        css={{
          backgroundColor: "#fff",
          outline: "none",
          border: "none",
          color: "#AEAEAE",
          fontSize: "1.3rem",
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
      <div
        css={{ marginTop: "7px", cursor: "pointer" }}
        onClick={() => setDropdownVisible(!dropdownVisible)}
      >
        {dropdownVisible ? (
          <FaChevronUp fontSize={24} fontWeight={700} />
        ) : (
          <FaChevronDown fontSize={24} fontWeight={700} />
        )}
      </div>
      <div
        css={{
          backgroundColor: "#fff",
          width: rest.width ? rest.width : "100%",
          paddingInline: rest.paddingInline ? rest.paddingInline : "16%",
          height: rest.height ? rest.height : "12rem",
          position: "absolute",
          top: "2.5rem",
          zIndex: rest.zIndex ? rest.zIndex : 1,
          display: dropdownVisible ? "block" : "none",
          borderRadius: "8px",
          boxShadow:
            "0 1px 17px 0 rgb(40 44 53 / 10%), 0 2px 4px 0 rgb(40 44 53 / 10%)",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#F5f5f5",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#AEAEAE",
            borderRadius: "10px",
            height:"5px",
            ":hover": {
              background: ` ${"#707070"}`,
            },
          },
        }}
      >
        {rest.placeholder === "Search events in" && 
          <div css = {{borderBottom: "1px solid #AEAEAE", fontSize: "14px", fontWeight: "600"}}>
            <div css = {{paddingBlock: "0.5rem", paddingLeft: "5%", display: "flex", alignItems: "center",gap: "14px" ,cursor: "pointer", ":hover" : {backgroundColor: "#F2F7FB"}}}>
              <Image src = {"/assets/svgs/location-pin.svg"} alt= "" width = {18} height = {18}/>
              Use my current location
            </div>
            <div css = {{paddingBlock: "0.5rem", paddingLeft: "5%", display: "flex", alignItems: "center", gap: "14px", cursor: "pointer", ":hover" : {backgroundColor: "#F2F7FB"}}}>
              <Image src = {"/assets/svgs/online-event.svg"} alt= "" width = {18} height = {18}/>
              Explore online events
            </div>
          </div>
        }
        {rest.menuList.map((name, i) => (
          <div
            key={i}
            css={{
              marginBlock: "0.5rem",
              fontSize: "14px",
              fontWeight: "600",
              paddingInline: rest.paddingInline ? "18%":"",
              cursor: "pointer",
              ":hover": {
                color: "#7C35AB",
              },
            }}
            onClick = {() => rest.handleSelect(rest.name, name)}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
