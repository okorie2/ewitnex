/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { H1 } from "styles/components/typography";
import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";
import LandingPageSearchInput from "@/components/inputs/landingPageSearchInput";

const FindVendorsFragment = () => {
  const isTablet = useMediaQuery("(max-width: 900px)");
  return (
    <div
      css={{
        padding: "0 3%",
        marginTop: isTablet ? "3rem" : "4rem",
        display: isTablet ? "block" : "grid",
        gridTemplateColumns: "55% 45%",
        background: "#C8AADC",
        fontFamily: '"Poppins", sans-serif',
        paddingBottom: "-4%",
      }}
    >
      {isTablet && (
        <div css={{ position: "relative" }}>
          <div css={{ width: "100%", height: "179px" }}>
            <Image
              src="/assets/pngs/findVendorsHalfUp.png"
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      )}
      <div
        css={{
          paddingRight: isTablet ? "" : "4rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          paddingBlock: "3rem",
        }}
      >
        <p css={{ fontWeight: "600" }}>Coming Soon ...</p>
        {isTablet && <Box height={"1.2rem"} />}
        <H1 color={"#000"} small>
          Effortlessly Find The Perfect
          {!isTablet && <br />} <span css={{ color: "#C14D8D" }}>Vendors</span>{" "}
          For Your Event
        </H1>
        <div
          css={{
            width: isTablet ? "100%" : "86%",
            marginBottom: isTablet ? "2.5rem" : "",
          }}
        >
          <p
            css={{
              fontSize: isTablet ? "0.9rem" : "0.975rem",
              letterSpacing: "0.32px",
              width: isTablet ? "100%" : "90%",
              marginTop: "1rem",
            }}
          >
            We provide a curated selection of reliable and professional vendors
            such as caterers, DJs, Rentals, photographers, etc. Ensuring you
            have access to the right resources to make your event a success.
          </p>
        </div>
        <LandingPageSearchInput placeholder="Search Vendor" />
      </div>
      {!isTablet && (
        <div css={{ position: "relative" }}>
          <div css={{ width: "585px", height: "498px" }}>
            <Image
              src="/assets/pngs/findVendorsImage.png"
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      )}
      {isTablet && (
        <div css={{ position: "relative" }}>
          <div css={{ width: "100%", height: "179px" }}>
            <Image
              src="/assets/pngs/findVendorsHalfDown.png"
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FindVendorsFragment;
