/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { H1 } from "styles/components/typography";
import Image from "next/image";
import { Box, Tooltip } from "@mui/material";
import { Button } from "styles/components/button";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

const DontSpectateFragment = () => {
  const isTablet = useMediaQuery("(max-width: 900px)" );
  return (
    <div
      css={{
        padding: isTablet ? "5% 3%" : "5% 4%",
        marginTop: isTablet ? "3rem":"7rem",
        display: isTablet ? "flex" : "grid",
        flexDirection: "column",
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
        <H1 color="#000" small>
          Don't Just Be A Spectator,
          {!isTablet && <br />} Be Part Of The
          <span css={{ color: "#7c35ab" }}> Conversation</span>
        </H1>
        <p
          css={{
            fontSize: isTablet ? "0.85rem" :  "0.975rem",
            letterSpacing: "0.32px",
            width: isTablet ? "100%":"90%",
            marginTop: "1.5rem",
          }}
        >
          Engage and connect with like-minded attendees, industry experts, and
          speakers at our events, fostering meaningful discussions and
          collaborations that go beyond the event itself.
        </p>
        <Box height={isTablet ? "1.5rem" :"3rem"} />
        <Tooltip title = "Coming Soon" style = {{opacity:0.8}}>
          <Button width={isTablet ? "80%" : "50%"}>Find your next event</Button>
        </Tooltip>
      </div>
      <div css={{ position:"relative", marginTop: isTablet ? "1.5rem" : "" }}>
        <div
          css={{
            width: "100%",
            height: "138%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: isTablet ? "relative" : "absolute",
            top: "-40%",
            borderRadius: "20px",
            paddingBlock:"1rem",
            marginBottom: isTablet ? "-20%" : "",
            background:
              "transparent linear-gradient(179deg, #f05e78 0%, #7c35ab 100%) 0% 0%",
          }}
        >
          <div css={{ width: isTablet ? "85%" : "80%", height: "87.5%" }}>
            <Image
              src="/assets/pngs/dontSpectateImage.png"
              alt=""
              width={isTablet ? 300 : 500}
              height={isTablet ? 270 : 435}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DontSpectateFragment;
