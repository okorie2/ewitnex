/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";

import React from "react";
import Image from "next/image";
import { Button } from "styles/components/button";
import { H1 } from "styles/components/typography";
import { screen } from "styles/theme";

export default function WhatAreYouWaitingForFragment() {
  const theme = useTheme();
  return (
    <div
      css={{
        background: "rgba(124, 53, 171, .42)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div css={{ position: "relative", width: "12.9vw", height: "27.2vw" }}>
        <Image src="/assets/pngs/circle_r.png" alt="circle_r" fill />
      </div>
      <div css={{ width: "42%" }}>
        <H1 small color={theme.common.black}>
          What are you waiting for? Sign up, create event, find event, get
          attendees and get involve
        </H1>
        <p
          css={{ color: theme.common.black, fontSize: "1rem", marginTop: "3%" }}
        >
          Our world is rapidly changing, and we are constantly looking for
          opportunities to meet people who share our interests. The way event
          planners do their work is being revolutionized by Ewitnex.
        </p>
        <Button
          css={{
            width: "13rem",

            marginTop: "4%",
            [screen.desktop]: {
              width: "13rem",
            },
          }}
        >
          Create Event
        </Button>
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
        <div css={{ width: "16.5vw", height: "27.4vw", position: "relative" }}>
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
