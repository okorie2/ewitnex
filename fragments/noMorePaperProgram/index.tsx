/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";

import React from "react";
import Image from "next/image";
import { H1 } from "styles/components/typography";

export default function NoMorePaperProgramFragment() {
  const theme = useTheme();
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "'Poppins', sans-serif",
        padding: "2% 4%",
      }}
    >
      <div css={{ flexBasis: "50%" }}>
        <H1 small color={"#000"}>
          No more use of paper programs
        </H1>
        <p
          css={{
            color: "#000",
            fontSize: "1.125",
            marginTop: "4%",
          }}
        >
          Say goodbye to paper programs at your next event! With the increasing
          focus on sustainability and the convenience of technology, it&apos;s
          time to ditch the paper and go digital. By using ewitnex as your
          digital event platform, attendees can access all the information they
          need - schedule, speaker bios, maps, and more - directly from their
          smartphones or tablets. Not only is this more eco-friendly, it&apos;s
          also more efficient and cost-effective. So make the switch, sign up on
          ewitnex and join the paperless movement at your next event&quot;
        </p>
      </div>
      <div css={{ width: "35.5vw", height: "35.5vw", position: "relative" }}>
        <Image src="/assets/pngs/program.png" alt="program" fill />
      </div>
    </div>
  );
}
