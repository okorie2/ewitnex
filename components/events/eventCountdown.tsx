/** @jsxImportSource @emotion/react */

import React from "react";
import { useMediaQuery } from "@mui/material";

const EventCountdown = () => {
  const isTablet = useMediaQuery("(max-width: 900px)");
  return (
    <div
      css={{
        display: "flex",
        gap: isTablet ? "0.5rem":"1.5rem",
        position: isTablet ? "absolute" : "relative",
        width:"53.5%",
        flexWrap:isTablet ? "wrap":"nowrap",
        top:isTablet ? "-27%" : "",
        right:isTablet ?"0%": ""
      }}
    >
      <div
        css={{
          display: "grid",
          placeContent: "center",
          width: "86px",
          height: "60px",
          border: `1px solid ${"#E4E4E4"}`,
          background: `linear-gradient(60deg, ${"#7C35AB"},${"#FFFFFF"})`,
          borderRadius: "5px",
        }}
      >
        <div
          css={{
            display: "flex",
            placeContent: "center",
            width: "82px",
            height: "55.61px",
            border: `1px solid ${"#707070"}`,
            borderRadius: "5px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <p
            css={{
              fontSize: "0.75rem",
              fontWeight: "bold",
              alignItems: "center",
              display: "flex",
              gap: "0.3rem",
            }}
          >
            <span css={{ fontSize: "1.5rem", fontWeight: "bolder" }}>24</span>
            Days
          </p>
        </div>
      </div>
      <div
        css={{
          display: "grid",
          placeContent: "center",
          width: "86px",
          height: "60px",
          border: `1px solid ${"#E4E4E4"}`,
          background: `linear-gradient(120deg, ${"#7C35AB"},${"#FFFFFF"},${"#FFFFFF"})`,
          borderRadius: "5px",
        }}
      >
        <div
          css={{
            display: "flex",
            placeContent: "center",
            width: "82px",
            height: "55.61px",
            border: `1px solid ${"#707070"}`,
            borderRadius: "5px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <p
            css={{
              fontSize: "0.75rem",
              fontWeight: "bold",
              alignItems: "center",
              display: "flex",
              gap: "0.3rem",
            }}
          >
            <span css={{ fontSize: "1.5rem", fontWeight: "bolder" }}>7</span>
            Hours
          </p>
        </div>
      </div>
      <div
        css={{
          display: "grid",
          placeContent: "center",
          width: "86px",
          height: "60px",
          border: `1px solid ${"#E4E4E4"}`,
          background: `linear-gradient(90deg, ${"#7C35AB"},${"#FFFFFF"})`,
          borderRadius: "5px",
        }}
      >
        <div
          css={{
            display: "flex",
            placeContent: "center",
            width: "82px",
            height: "55.61px",
            border: `1px solid ${"#707070"}`,
            borderRadius: "5px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <p
            css={{
              fontSize: "0.75rem",
              fontWeight: "bold",
              alignItems: "center",
              display: "flex",
              gap: "0.3rem",
            }}
          >
            <span css={{ fontSize: "1.5rem", fontWeight: "bolder" }}>54</span>
            Mins
          </p>
        </div>
      </div>
      <div
        css={{
          display: "grid",
          placeContent: "center",
          width: "86px",
          height: "60px",
          border: `1px solid ${"#E4E4E4"}`,
          background: `linear-gradient(60deg, ${"#7C35AB"},${"#FFFFFF"})`,
          borderRadius: "5px",
        }}
      >
        <div
          css={{
            display: "flex",
            placeContent: "center",
            width: "82px",
            height: "55.61px",
            border: `1px solid ${"#707070"}`,
            borderRadius: "5px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <p
            css={{
              fontSize: "0.75rem",
              fontWeight: "bold",
              alignItems: "center",
              display: "flex",
              gap: "0.3rem",
            }}
          >
            <span css={{ fontSize: "1.5rem", fontWeight: "bolder" }}>20</span>
            Secs
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCountdown;
