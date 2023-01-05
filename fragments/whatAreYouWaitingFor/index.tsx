/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";
import { Poppins } from "@next/font/google";
import Image from "next/image";
import React from "react";
import { Button } from "styles/components/button";
import { H1 } from "styles/components/typography";
import { screen } from "styles/theme";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
  preload: true,
});
export default function WhatAreYouWaitingForFragment() {
  const theme = useTheme();
  return (
    <div
      css={{
        background: "rgba(124, 53, 171, .42)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div css={{ position: "relative", width: "13.5vw", height: "53vh" }}>
        <Image src="/assets/pngs/circle_r.png" alt="circle_r" fill />
      </div>
      <div css={{ width: "42%", padding: "3rem 0" }}>
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
        <div css={{ width: "17.5vw", height: "53vh", position: "relative" }}>
          <Image src="/assets/pngs/circle_l.png" alt="circle_l" fill />
        </div>
      </div>
    </div>
  );
}
