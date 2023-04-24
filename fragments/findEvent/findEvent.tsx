/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

import React from "react";
import { Button } from "styles/components/button";
import { screen } from "styles/theme";
import SearchSelect from "./searchSelect";

export default function FindEventFragment() {
  const theme = useTheme();
  const desktop = useMediaQuery("(max-width:1024px)");
  return (
    <div
      css={{
        width: "93%",
        margin: "auto",
        backgroundColor: theme.common.white,
        boxShadow: "#00000029 0px 0px 10px",
        borderRadius: "56px",
        marginTop: "4%",
        fontFamily: "'Poppins', sans-serif",
        height: "6.5rem",
        display: "flex",
        alignItems: "center",
        padding: "0 3rem",
        gap: "6%",
        [screen.desktop]: {
          gap: "3%",
          padding: "0 2rem",
        },
        [screen.lg]: {
          gap: "5%",
          padding: "0 2rem",
        },
      }}
    >
      <SearchSelect
        menuList={[""]}
        placeholder="Witness Events In"
        onChange={(e) => console.log(e.target.value)}
        inputWidth={desktop ? "16vw" : "14vw"}
      />
      <SearchSelect
        menuList={[""]}
        placeholder="Event Type"
        onChange={(e) => console.log(e.target.value)}
        inputWidth={desktop ? "11vw" : "12vw"}
      />
      <SearchSelect
        menuList={[""]}
        placeholder="Price Range"
        onChange={(e) => console.log(e.target.value)}
        inputWidth={desktop ? "12vw" : "14vw"}
      />
      <SearchSelect
        menuList={[""]}
        placeholder="Category"
        onChange={(e) => console.log(e.target.value)}
        inputWidth={desktop ? "11vw" : "9vw"}
      />

      <Button
        css={{
          width: "13rem",
          [screen.desktop]: { width: "12rem" },
          [screen.lg]: {},
        }}
      >
        Find Event
      </Button>
    </div>
  );
}
