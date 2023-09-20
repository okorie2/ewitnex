/** @jsxImportSource @emotion/react */

import React from "react";
import { H1 } from "styles/components/typography";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import LandingPageSearchInput from "@/components/inputs/landingPageSearchInput";

const DiscoverVenueFragment = () => {
  const isTablet = useMediaQuery("(max-width: 900px)");

  return (
    <div
      css={{
        padding: "0 3%",
        marginTop: isTablet ? "6rem" : "4rem",
        display: isTablet ? "block" : "grid",
        gridTemplateColumns: "45% 55%",
        background: "#C14D8D",
        fontFamily: '"Poppins", sans-serif',
        paddingBottom: "-4%",
      }}
    >
      <div css={{ position: "relative" }}>
        {isTablet && (
          <div css={{ width: "100%", height: "179px" }}>
            <Image
              src="/assets/pngs/discoverVenueHalfUp.png"
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
        {!isTablet && (
          <div css={{ width: "585px", height: "498px" }}>
            <Image
              src="/assets/pngs/discoverVenueImage.png"
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
      </div>
      <div
        css={{
          paddingLeft: isTablet ? "" : "4rem",
          color: "#FFF",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          paddingBlock: "3rem",
        }}
      >
        <p>Coming soon ...</p>
        <H1 small>
          Discover The Perfect <span css={{ color: "#00d9b7" }}>Venue</span>
          {!isTablet && <br />} For Your Event With Ease
        </H1>
        <div
          css={{
            width: isTablet ? "100%" : "80%",
            marginBottom: isTablet ? "3rem" : "",
          }}
        >
          <p
            css={{
              fontSize: isTablet ? "0.85rem" : "0.975rem",
              letterSpacing: "0.32px",
              width: isTablet ? "100%" : "90%",
              marginTop: "1rem",
            }}
          >
            Our comprehensive venue search tool takes the hassle out of finding
            the right hall, providing you with a curated selection of
            exceptional venues tailored to your specific requirements.
          </p>
        </div>
        <LandingPageSearchInput placeholder="Find your venue in ..." />
      </div>
      {isTablet && (
        <div css={{ position: "relative" }}>
          <div css={{ width: "100%", height: "179px" }}>
            <Image
              src="/assets/pngs/discoverVenueHalfDown.png"
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

export default DiscoverVenueFragment;
