/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";

import React from "react";
import Image from "next/image";
import { Button } from "styles/components/button";
import { H1 } from "styles/components/typography";
import { useMediaQuery } from "@mui/material";
import { screen } from "styles/theme";
import Link from "next/link";

export default function WhatAreYouWaitingForFragment() {
  const isTablet = useMediaQuery("(max-width: 900px)");
  return (
    <div
      css={{
        background: "rgba(124, 53, 171, .42)",
        display: "flex",
        flexDirection: isTablet ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        css={{
          position: "relative",
          width: isTablet ? "60vw" : "12.9vw",
          height: isTablet ? "90vw" : "27.2vw",
          transform: isTablet ? "rotate(90deg)" : "rotate(0deg)",
          marginTop: isTablet ? "-15%" : "",
        }}
      >
        <Image src="/assets/pngs/circle_r.png" alt="circle_r" fill />
      </div>
      <div css={{ width: isTablet ? "90%":"55%" }}>
        <H1 small color={"#000"} size={"1.8rem"}>
          What are you waiting for?
        </H1>
        <H1 small color={"#000"} size={"1.8rem"}>
          Sign up, create event, find event, get attendees and get involve
        </H1>
        <p css={{ color: "#000", fontSize: "1rem", marginTop: "3%" , marginBottom:isTablet ? "3rem": ""}}>
          Our world is rapidly changing, and we are constantly looking for
          opportunities to meet people who share our interests. The way event
          planners do their work is being revolutionized by Ewitnex.
        </p>
        <Link href="/onboarding">
          <Button
            css={{
              width: "13rem",

              marginTop: "4%",
              [screen.desktop]: {
                width: "13rem",
              },
            }}
          >
            Get Started
          </Button>
        </Link>
      </div>
      <div css={{ display: "flex" }}>
        {/* <div
          css={{
            width: "9.5vw",
            height: "27.5vh",
            position: "relative",
            marginTop: "7rem",
          }}
        >
          <Image src="/assets/pngs/fone.png" alt="fones" fill />
        </div> */}
        <div css={{ width: isTablet ? "60vw" : "16.5vw",
          height: isTablet ? "90vw" : "27.2vw",
          transform: isTablet ? "rotate(90deg)" : "rotate(0deg)",
          marginBottom: isTablet ? "-25%" : "", 
          position: "relative" }}>
          <Image
            src="/assets/pngs/circle_l.png"
            alt="circle_l"
            fill
            css={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
