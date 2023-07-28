/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { H1 } from "styles/components/typography";
import Image from "next/image";
import { Box, Tooltip } from "@mui/material";
import { Button } from "styles/components/button";

const SimplifyTicketFragment = () => {
  return (
    <div
      css={{
        padding: "5% 4%",
        marginTop: "7rem",
        display: "grid",
        gridTemplateColumns: "48% 52%",
        background: "#94EFE1",
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <div css={{ position: "relative" }}>
        <div
          css={{
            width: "100%",
            height: "140%",
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
          <Image
            src="/assets/pngs/simplifyTicketImage.png"
            alt=""
            width={500}
            height={400}
          />
        </div>
      </div>
      <div css={{ paddingLeft: "4rem" }}>
        <Image
          src="/assets/pngs/logo_black.png"
          alt=""
          height={30}
          width={70}
        />
        <Box height={"0.5rem"} />
        <H1 size={"2.4rem"} color="#000" small>
          Simplify <span css={{ color: "#7c35ab" }}>Ticket</span> Sales And
          Purchases{" "}
        </H1>
        <p
          css={{
            fontSize: "0.975rem",
            letterSpacing: "0.32px",
            width: "90%",
            marginTop: "1.5rem",
          }}
        >
          Ewitnex offers a seamless experience, allowing organizers to
          effortlessly sell tickets and attendees to easily purchase them,
          ensuring a smooth and hassle-free transaction process..
        </p>
        <Box height={"3rem"} />
        <Tooltip title = "Coming Soon" style = {{opacity:0.8}}>
          <Button width={"35%"}>Get Started</Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default SimplifyTicketFragment;
