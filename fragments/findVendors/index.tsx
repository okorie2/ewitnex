/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { H1 } from "styles/components/typography";
import Image from "next/image";
import LandingPageSearchInput from "@/components/inputs/landingPageSearchInput";

const FindVendorsFragment = () => {
  return (
    <div
      css={{
        padding: "0 3%",
        marginTop: "4rem",
        display: "grid",
        gridTemplateColumns: "55% 45%",
        background: "#C8AADC",
        fontFamily: '"Poppins", sans-serif',
        paddingBottom: "-4%",
      }}
    >
      <div
        css={{
          paddingRight: "4rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          paddingBlock: "3rem",
        }}
      >
        <p css={{ fontWeight: "600" }}>Coming Soon ...</p>
        <H1 size={"2.4rem"} color={"#000"} small>
          Effortlessly Find The Perfect
          <br /> <span css={{ color: "#C14D8D" }}>Vendors</span> For Your Event
        </H1>
        <div css={{ width: "86%" }}>
          <p>
            We provide a curated selection of reliable and professional vendors
            such as caterers, DJs, Rentals, photographers, etc. Ensuring you
            have access to the right resources to make your event a success.
          </p>
        </div>
        <LandingPageSearchInput placeholder="Search Vendor" />
      </div>
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
    </div>
  );
};

export default FindVendorsFragment;
