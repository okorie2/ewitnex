/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { H1 } from "styles/components/typography";
import Image from "next/image";
import { Box, Tooltip } from "@mui/material";
import { Button } from "styles/components/button";
import Link from "next/link";

const DontSpectateFragment = () => {
  return (
    <div
      css={{
        padding: "5% 4%",
        marginTop: "7rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "#C8AADC",
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <div>
        <Image
          src="/assets/pngs/logo_black.png"
          alt=""
          height={30}
          width={70}
        />
        <Box height={"0.5rem"} />
        <H1 size={"2.4rem"} color="#000" small>
          Don't Just Be A Spectator,
          <br /> Be Part Of The{" "}
          <span css={{ color: "#7c35ab" }}>Conversation</span>
        </H1>
        <p
          css={{
            fontSize: "0.975rem",
            letterSpacing: "0.32px",
            width: "90%",
            marginTop: "1.5rem",
          }}
        >
          Engage and connect with like-minded attendees, industry experts, and
          speakers at our events, fostering meaningful discussions and
          collaborations that go beyond the event itself.
        </p>
        <Box height={"3rem"} />
        <Tooltip title = "Coming Soon" style = {{opacity:0.8}}>
          <Button width={"50%"}>Find your next event</Button>
        </Tooltip>
      </div>
      <div css={{ position: "relative" }}>
        <div
          css={{
            width: "100%",
            height: "138%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "-40%",
            borderRadius: "20px",
            background:
              "transparent linear-gradient(179deg, #f05e78 0%, #7c35ab 100%) 0% 0%",
          }}
        >
          <div css={{ width: "80%", height: "87.5%" }}>
            <Image
              src="/assets/pngs/dontSpectateImage.png"
              alt=""
              width={500}
              height={435}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DontSpectateFragment;
