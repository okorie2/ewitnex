/** @jsxImportSource @emotion/react */

import React from "react";
import { useMediaQuery } from "@mui/material";
import { useCountDown } from "utitlities/hooks/UseCountDown";

const EventCountdown = ({ date }: { date: string }) => {
  const isTablet = useMediaQuery("(max-width: 900px)");
  const { days, hours, minutes, seconds } = useCountDown(date);
  if (days < 0)
    return (
      <div
        css={{
          display: "grid",
          placeContent: "center",
          width: "90px",
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
            marginTop:"0.15rem",
            marginLeft:"0.05rem"
          }}
        >
          <p
            css={{
              fontSize: "1rem",
              fontWeight: "bold",
              alignItems: "center",
              display: "flex",
              gap: "0.3rem",
            }}
          >
            Ended
          </p>
        </div>
      </div>
    );
  return (
    <div
      css={{
        display: "flex",
        gap: isTablet ? "0.5rem" : "1.5rem",
        position: isTablet ? "absolute" : "relative",
        width: "53.5%",
        flexWrap: isTablet ? "wrap" : "nowrap",
        top: isTablet ? "-27%" : "",
        right: isTablet ? "0%" : "",
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
            <span css={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
              {days}
            </span>
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
            <span css={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
              {hours}
            </span>
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
            <span css={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
              {minutes}
            </span>
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
            <span css={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
              {seconds}
            </span>
            Secs
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCountdown;
