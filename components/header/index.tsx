/** @jsxImportSource @emotion/react */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/logo";

export default function Navbar() {
  return (
    <div
      css={{
        backgroundColor: "#fff",
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
      <Logo image="/assets/pngs/logo.png" />
      <div
        css={{
          borderRadius: "66px",
          backgroundColor: "#F5F5F5",
          width: "33.2%",
          height: "2.625rem",
          display: "flex",
          alignItems: "center",
          paddingLeft: "17px",
          gap: "2%",
        }}
      >
        <div css={{ marginTop: "3px" }}>
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
            backgroundColor: "#F5F5F5",
            height: "95%",
            fontSize: "1rem",
            fontWeight: "400",
            color: "#AEAEAE",
          }}
        />
      </div>
      <div
        css={{
          display: "flex",
          color: "#000",
          fontSize: "1rem",
          width: "32%",
          fontWeight: 500,
          cursor: "pointer",
          justifyContent: "space-evenly",
          ">div": {
            ":hover": {
              color: "#7C35AB",
            },
          },
        }}
      >
        <div>
          <Link href="/"> Home</Link>
        </div>
        <div>
          <Link href="/events">Events</Link>
        </div>
        <div>
          <Link href="/about">About</Link>
        </div>
        <div>
          <Link href="/how-it-works">How It Works</Link>
        </div>
      </div>
      <div>
        <hr css={{ width: "1px", height: "36px" }} />
      </div>
      <div css={{ color: "#7C35AB", fontWeight: "500" }}>
        <Link href="/auth/signin">Log in</Link>
      </div>
      <div
        css={{
          borderRadius: "3.5rem",
          border: `1px solid ${"#7C35AB"}`,
          height: "2.625rem",
          display: "flex",
          width: "8.063rem",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 500,
          color: "#7C35AB",
        }}
      >
        <Link href="/auth/signup">Get Started</Link>
      </div>
    </div>
  );
}
