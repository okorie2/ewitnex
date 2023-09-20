/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { H1 } from "styles/components/typography";
import Image from "next/image";
import { Box, Tooltip } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { Button } from "styles/components/button";

const SimplifyTicketFragment = () => {
  const isTablet = useMediaQuery("(max-width: 900px)" );
  return (
    <div
      css={{
        padding: isTablet ? "5% 3%" : "5% 4%",
        marginTop: isTablet ? "3rem":"7rem",
        display: isTablet ? "flex" : "grid",
        flexDirection: "column-reverse",
        gridTemplateColumns: "48% 52%",
        background: "#94EFE1",
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <div css={{ position: "relative" , marginTop: isTablet ? "1.5rem" : "" }}>
      <Box height={isTablet ? "0.5rem" :""} />
        <div
          css={{
            width: "100%",
            height: "140%",
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
          <Image
            src="/assets/pngs/simplifyTicketImage.png"
            alt=""
            width={isTablet ? 317 : 500}
              height={isTablet ? 214 : 435}
          />
        </div>
      </div>
      <div css={{ paddingLeft: isTablet ? "" : "4rem" }}>
        <Image
          src="/assets/pngs/logo_black.png"
          alt=""
          height={30}
          width={70}
        />
        <Box height={"0.5rem"} />
        <H1 color="#000" small>
          Simplify <span css={{ color: "#7c35ab" }}>Ticket</span> Sales And
          Purchases
        </H1>
        <p
           css={{
            fontSize: isTablet ? "0.85rem" :  "0.975rem",
            letterSpacing: "0.32px",
            width: isTablet ? "100%":"90%",
            marginTop: "1.2rem",
          }}
        >
          Ewitnex offers a seamless experience, allowing organizers to
          effortlessly sell tickets and attendees to easily purchase them,
          ensuring a smooth and hassle-free transaction process..
        </p>
        <Box height={isTablet ? "1.5rem" :"3rem"} />
        <Tooltip title = "Coming Soon" style = {{opacity:0.8}}>
          <Button width={isTablet ? "60%" : "35%"}>Get Started</Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default SimplifyTicketFragment;
