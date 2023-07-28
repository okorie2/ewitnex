/** @jsxImportSource @emotion/react */

import React from "react";
import { H1 } from "styles/components/typography";
import Image from "next/image";

import LandingPageSearchInput from "@/components/inputs/landingPageSearchInput";

const DiscoverVenueFragment = () => {
  return (
    <div
      css={{
        padding: "0 3%",
        marginTop: "4rem",
        display: "grid",
        gridTemplateColumns: "45% 55%",
        background: "#C14D8D",
        fontFamily: '"Poppins", sans-serif',
        paddingBottom: "-4%",
      }}
    >
      <div css={{ position: "relative" }}>
        <div css={{ width: "585px", height: "498px" }}>
          <Image
            src="/assets/pngs/discoverVenueImage.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div
        css={{
          paddingLeft: "4rem",
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
        <H1 size={"2.4rem"} small>
          Discover The Perfect <span css={{ color: "#00d9b7" }}>Venue</span>{" "}
          <br /> For Your Event With Ease
        </H1>
        <div css={{ width: "80%" }}>
          <p>
            Our comprehensive venue search tool takes the hassle out of finding
            the right hall, providing you with a curated selection of
            exceptional venues tailored to your specific requirements.
          </p>
        </div>
        <LandingPageSearchInput placeholder="Find your venue in ..." />
      </div>
    </div>
  );
};

export default DiscoverVenueFragment;
