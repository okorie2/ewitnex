/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";

import Image from "next/image";
import React from "react";
import { H1 } from "styles/components/typography";

export default function WitnessEventFragment() {
  const theme = useTheme();
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        background: theme.common.white,
        fontFamily: "'Poppins', sans-serif",
        padding: "10% 4%",
      }}
    >
      <div css={{ position: "relative", width: "27.6vw", height: "100vh" }}>
        <Image
          src={"/assets/pngs/fone_l.png"}
          alt="fone_l"
          fill
          css={{ objectFit: "scale-down" }}
        />
      </div>
      <div css={{ width: "50%" }}>
        <H1 small color={theme.common.black}>
          Witness your attended event and builds conversation
        </H1>
        <p css={{ marginTop: "4%" }}>
          Have you recently attended an event that you want to share with your
          friends and family? Maybe it was a concert, a sports game, or a
          cultural festival. Whatever the event, it&apos;s always exciting to
          relive the experience and share it with others.{" "}
        </p>
        <p css={{ marginTop: "4%" }}>
          One way to do this is by posting about the event on ewitnex event
          feed. Sharing photos and videos with other event lovers. You can even
          start a conversation by asking others if they attended the same event
          or if they have any similar experiences to share.
        </p>
        <p css={{ marginTop: "4%" }}>
          But don&apos;t just stop at sharing your experience. Use the event as
          an opportunity to build conversation and connections with others. Ask
          for recommendations on similar events to attend in the future, or
          discuss the highlights of the event and what made it special for you.
        </p>
        <p css={{ marginTop: "4%" }}>
          By sharing your attended event and building conversation around it,
          you can create meaningful connections with others and create lasting
          memories of the experience.
        </p>
      </div>
    </div>
  );
}
