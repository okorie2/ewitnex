/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { screen } from "styles/theme";
import Down from "public/assets/svgs/down_ar.svg";
import { useMediaQuery } from "@mui/material";
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
  containerSize: string
  paddingInline?:string
  active?:string
  handleActive: (name: string) => void
}

export default function SearchSelect({ ...rest }: SearchSelectProps) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const isTablet = useMediaQuery("(max-width: 900px)" );

  return (
    <div
      css={{
        position: "relative",
        display: "flex",
        gap: "3%",
        alignItems: "center",
        width: rest.containerSize,
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
          fontSize: "0.95rem",
          fontWeight: "bold",
          width: rest.inputWidth,
          fontFamily: "'Poppins', sans-serif",
          [screen.desktop]: {
            fontSize: "1rem",
          },
          [screen.lg]: {
            fontSize: "1rem",
          },
        }}
      />
      <div
        css={{ marginTop: "7px", cursor: "pointer" }}
      >
        {rest.name === rest.active ? (
          <div
          css={{
            transform: "rotate(180deg)",
            marginTop: "-50%",
          }}
        onClick={() => rest.handleActive("")}

        >
          <Image src={Down} alt="down" />
        </div>
        ) : (
          <div 
          onClick={() => rest.handleActive(rest.name)}
        >
          <Image src={Down} alt="down" />
          </div>
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
          display: rest.name === rest.active ? "block" : "none",
          borderRadius: "8px",
          boxShadow:
            "0 1px 17px 0 rgb(40 44 53 / 10%), 0 2px 4px 0 rgb(40 44 53 / 10%)",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#F5f5f5",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#AEAEAE",
            borderRadius: "8px",
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
