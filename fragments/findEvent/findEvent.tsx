/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";
import { Poppins } from "@next/font/google";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Button } from "styles/components/button";
import SearchSelect from "./searchSelect";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
  preload: true,
});
export default function FindEventFragment() {
  const theme = useTheme();
  return (
    <div
      css={{
        width: "93%",
        margin: "auto",
        backgroundColor: theme.common.white,
        boxShadow: "#00000029 0px 0px 10px",
        borderRadius: "56px",
        marginTop: "4%",
        fontFamily: poppins.style.fontFamily,
        height: "6.5rem",
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
        gap: "6rem",
      }}
    >
      <SearchSelect
        menuList={[""]}
        placeholder="Witness Events In"
        onChange={(e) => console.log(e.target.value)}
        inputWidth="15rem"
      />
      <SearchSelect
        menuList={[""]}
        placeholder="Event Type"
        onChange={(e) => console.log(e.target.value)}
        inputWidth="10rem"
      />
      <SearchSelect
        menuList={[""]}
        placeholder="Price Range"
        onChange={(e) => console.log(e.target.value)}
        inputWidth="10rem"
      />
      <SearchSelect
        menuList={[""]}
        placeholder="Category"
        onChange={(e) => console.log(e.target.value)}
        inputWidth="10rem"
      />

      <Button css={{ width: "15.5%" }}>Find Event</Button>
    </div>
  );
}
