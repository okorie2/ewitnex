/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";

import Image from "next/image";
import React, { ReactNode } from "react";
import Filter from "public/assets/svgs/filter.svg";
import Left from "public/assets/svgs/left_ar.svg";
import Down from "public/assets/svgs/down_ar.svg";

export default function Layout({ children }: { children: ReactNode }) {
  const theme = useTheme();
  return (
    <div css={{ fontFamily: "'Poppins', sans-serif" }}>
      <div
        css={{
          display: "flex",
          alignItems: "center",
          boxShadow: " 0px 0px 10px #00000029",
          backgroundColor: theme.common.white,
          justifyContent: "space-between",
          padding: "1% 2%",
          fontWeight: 500,
          position: "fixed",
          top: "5rem",
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <div>All</div>
        <div>Technology</div>
        <div>Music</div>
        <div>Conference</div>
        <div>health</div>
        <div>Music</div>
        <div>Weddings</div>
        <div>Community</div>
        <div>Government</div>
        <div>Holidays</div>
        <div>Sports & Fitness</div>
        <div>More</div>
      </div>
      <div css={{ display: "flex", marginTop: "8.3rem" }}>
        <div
          css={{
            backgroundColor: theme.common.white,
            boxShadow: "0px 0px 10px #00000029",

            height: "612px",
            width: "43vw",
          }}
        >
          <div
            css={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8% 0",
              paddingLeft: "2.2rem",
              paddingRight: "2rem",
              borderBottom: `2px solid ${theme.shadow.border}`,
            }}
          >
            <Image src={Filter} alt="filter" />
            <p css={{ fontSize: "1.125" }}>
              <b>Filters</b>
            </p>
            <Image src={Left} alt="left" />
          </div>
          <div
            css={{
              padding: "8% 0",
              paddingLeft: "2.2rem",
              paddingRight: "2rem",
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p>Location</p>
            <Image src={Down} alt="down" />
          </div>
          <div
            css={{
              padding: "8% 0",
              paddingLeft: "2.2rem",
              paddingRight: "2rem",
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p>Date</p>
            <Image src={Down} alt="down" />
          </div>
          <div
            css={{
              padding: "8% 0",
              paddingLeft: "2.2rem",
              paddingRight: "2rem",
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p>Event Type</p>
            <Image src={Down} alt="down" />
          </div>{" "}
          <div
            css={{
              padding: "8% 0",
              paddingLeft: "2.2rem",
              paddingRight: "2rem",
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p>Price</p>
            <Image src={Down} alt="down" />
          </div>
        </div>

        <div css={{ padding: "1% 1%" }}>{children}</div>
        <div css={{ width: "20vw", padding: "1% 0.5%" }}>
          <div css={{ display: "flex", marginBottom: "0.8rem" }}>
            <p>All Events</p>
            <Image src={Down} alt="down" />
          </div>
          <div>
            <p css={{ fontSize: "16px" }}>
              <b>123456</b>
            </p>
            <p css={{ color: theme.shadow.tertiary }}>events found</p>
          </div>
        </div>
      </div>
    </div>
  );
}
