/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { H1 } from "styles/components/typography";
import Image from "next/image";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { Button } from "styles/components/button";

const SaveTreesFragment = () => {
  const isTablet = useMediaQuery("(max-width: 900px)" );
  return (
    <div
      css={{
        padding: isTablet ? "5% 3%" : "5% 4%",
        marginTop: isTablet ? "0rem":"7rem",
        display: isTablet ? "flex" : "grid",
        flexDirection: "column",
        gridTemplateColumns: "1fr 1fr",
        background: "#C14D8D",
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <div>
        <Image src="/assets/pngs/logo_yt.png" alt="" height={30} width={70} />
        <Box height={"0.5rem"} />
        <H1 small>
          Join Ewitnex In Our <br/> Mission To
          <span css={{ color: "#00d9b7" }}> Save Trees,</span><br/> Protect The
          Climate, And Preserve Our Planet
        </H1>
        <p
          css={{
            fontSize: isTablet ? "0.9rem" :  "0.975rem",
            letterSpacing: "0.32px",
            width: isTablet ? "100%":"90%",
            marginTop: "1.5rem",
            color:"#fff",
            lineHeight: isTablet ? "1.5rem" : ""
          }}
        >
          Embrace paperless event management, reduce waste, and make a positive
          impact on the environment while enjoying seamless and sustainable
          event experiences.
        </p>
      </div>
      <div css={{ position: "relative",  marginTop: isTablet ? "1.5rem" : ""  }}>
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
            marginBottom: isTablet ? "-20%" : "",
            paddingBlock:"1rem",
            background:
             isTablet ?  "transparent linear-gradient(179deg, #7C35AB 0%, #F05E78 100% ) 0% 0% no-repeat padding-box" : "transparent linear-gradient(179deg, #F05E78 0%, #7C35AB 100%) 0% 0% no-repeat padding-box",
          }}
        >
          <div css={{ width:  isTablet ? "75%" :"80%", height: "87.5%" }}>
            <Image
              src="/assets/pngs/saveTreesImage.png"
              alt=""
              width={isTablet ? 259 : 500}
              height={isTablet ? 290 : 435}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveTreesFragment;
