/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";

import Image from "next/image";
import React from "react";
import { Button } from "styles/components/button";
import { H1 } from "styles/components/typography";
import { screen } from "styles/theme";

export default function UploadDesignFragment() {
  const theme = useTheme();
  return (
    <div
      css={{
        background: "rgba(0, 217, 183, .42)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div css={{ position: "relative", width: "13.5vw", height: "53vh" }}>
        <Image src="/assets/pngs/circle_r.png" alt="circle_r" fill />
      </div>
      <div css={{ width: "42%" }}>
        <H1 small color={theme.common.black}>
          Upload your design or create with a template
        </H1>
        <p
          css={{ color: theme.common.black, fontSize: "1rem", marginTop: "3%" }}
        >
          Our easy to use templates help create beautiful and attractive
          programs for your events in seconds using a simple drag and drop
          technique.
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
        <div
          css={{
            width: "9.5vw",
            height: "27.5vh",
            position: "relative",
            marginTop: "7rem",
          }}
        >
          <Image src="/assets/pngs/fone.png" alt="fones" fill />
        </div>
        <div css={{ width: "17.5vw", height: "53vh", position: "relative" }}>
          <Image src="/assets/pngs/circle_l.png" alt="circle_l" fill />
        </div>
      </div>
    </div>
  );
}
