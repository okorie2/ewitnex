/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { H1 } from "styles/components/typography";
import Image from "next/image";
import { Box } from "@mui/material";
import { Button } from "styles/components/button";

const SaveTreesFragment = () => {
  return (
    <div
      css={{
        padding: "6% 4%",
        marginTop: "7rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "#C14D8D",
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <div>
        <Image src="/assets/pngs/logo_yt.png" alt="" height={30} width={70} />
        <Box height={"0.5rem"} />
        <H1 size={"2.4rem"} small>
          Join Ewitnex In Our <br/> Mission To{" "}
          <span css={{ color: "#00d9b7" }}>Save Trees,</span><br/> Protect The
          Climate, And Preserve Our Planet
        </H1>
        <p
          css={{
            fontSize: "0.975rem",
            letterSpacing: "0.32px",
            color: "#fff",
            width: "90%",
            marginTop: "1.5rem",
          }}
        >
          Embrace paperless event management, reduce waste, and make a positive
          impact on the environment while enjoying seamless and sustainable
          event experiences.
        </p>
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
              "transparent linear-gradient(179deg, #F05E78 0%, #7C35AB 100%) 0% 0% no-repeat padding-box",
          }}
        >
          <div css={{ width: "80%", height: "87.5%" }}>
            <Image
              src="/assets/pngs/saveTreesImage.png"
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

export default SaveTreesFragment;
