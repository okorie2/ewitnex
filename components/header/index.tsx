/** @jsxImportSource @emotion/react */

import React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";

import Link from "next/link";

export default function Navbar() {
  const theme = useTheme();
  return (
    <div
      css={{
        backgroundColor: theme.common.white,
        display: "flex",
        justifyContent: "space-evenly",

        alignItems: "center",
        boxShadow: "#00000029 0px 0px 10px ",
        padding: "0% 1%",
        height: "5rem",
        fontFamily: "'Poppins', sans-serif",
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        zIndex: "2",
      }}
    >
      <div>
        <Image
          src="/assets/pngs/logo.png"
          width={93}
          height={43.13}
          alt="logo"
          css={{ marginTop: "0.8rem" }}
        />
      </div>
      <div
        css={{
          borderRadius: "66px",
          backgroundColor: theme.background.secondary,
          width: "33.2%",
          height: "2.625rem",
          display: "flex",
          alignItems: "center",
          paddingLeft: "17px",
          gap: "2%",
        }}
      >
        <div css={{ marginTop: "3px" }}>
          {" "}
          <Image
            src="/assets/svgs/search.svg"
            width={14.42}
            height={14.41}
            alt="logo"
          />
        </div>
        <input
          placeholder="Search Events"
          type={"text"}
          css={{
            borderRadius: "66px",
            width: "100%",
            outline: "none",
            border: "none",
            backgroundColor: theme.background.secondary,
            height: "95%",
            fontSize: "1rem",
            fontWeight: "400",
            color: theme.shadow.secondary,
          }}
        />
      </div>
      <div
        css={{
          display: "flex",
          color: theme.common.black,
          fontSize: "1rem",
          width: "32%",
          fontWeight: 500,
          cursor: "pointer",
          justifyContent: "space-evenly",
          ">div": {
            ":hover": {
              color: theme.background.primary,
            },
          },
        }}
      >
        <div>
          {" "}
          <Link href="/"> Home</Link>
        </div>
        <div>
          {" "}
          <Link href="/events">Events</Link>
        </div>
        <div>
          <Link href="/about">About</Link>{" "}
        </div>
        <div>
          <Link href="/how-it-works">How It Works</Link>
        </div>
      </div>
      <div>
        <hr css={{ width: "1px", height: "36px" }} />
      </div>
      <div css={{ color: theme.background.primary, fontWeight: "500" }}>
        <Link href="/auth/signin">Log in</Link>
      </div>
      <div
        css={{
          borderRadius: "3.5rem",
          border: `1px solid ${theme.background.primary}`,
          //   padding: "1px",
          height: "2.625rem",
          display: "flex",
          width: "8.063rem",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 500,
          color: theme.background.primary,
        }}
      >
        <Link href="/auth/signup">Create Event</Link>
      </div>
    </div>
  );
}
