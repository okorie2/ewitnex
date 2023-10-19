/** @jsxImportSource @emotion/react */

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "styles/components/button";

const MobileNav = ({
  shown,
  setClose,
  active
}: {
  shown: boolean;
  setClose: () => void;
  active: string
}) => {
  return (
    <>
      <div
        css={{
          position: "fixed",
          width: "100vw",
          height: "60vh",
          marginTop: shown ? active === "home" ? "2vh" : "0vh" : "-100vh",
          background: "#fff",
          zIndex: 101,
          transition: "margin-top 1s",
          display: "grid",
          paddingInline:"1rem",
          paddingBlock:"1.5rem",
          fontFamily: '"Nunito", sans-serif',
          borderTop:"1px solid #AEAEAE",
          borderRadius:"0 0 20px 20px",
          borderBottom:"!px solid #00000029"
        }}
      >
        <Link href="/onboarding" css={{WebkitTapHighlightColor:'transparent'}}>
          <div
            css={{
              borderRadius: "3.5rem",
              border: `1px solid ${"#7C35AB"}`,
              height: "3rem",
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
              backgroundColor: "#7C35AB",
              color: "#FFF",
              ":focus" : {
                opacity:"0.8"
              }
            }}
          >
            Create Event
          </div>
        </Link>
        <Link href="/auth/signin" css={{WebkitTapHighlightColor:'transparent'}}>
          <div
            css={{
              borderRadius: "3.5rem",
              border: `1px solid ${"#7C35AB"}`,
              height: "3rem",
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              backgroundColor: "#FFF",
              color: "#7C35AB",
            }}
          >
            Log In
          </div>
        </Link>
        <Link href="/"  css={{ color: active === "home" ? "#7C35AB" : "" }}>
          <div
            css={{
              borderTop: `1px solid ${"#E5E5E5"}`,
              height: "3rem",
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              backgroundColor: "#FFF",
              paddingTop:"1rem"
            }}
          >
            Home
          </div>
        </Link>
        <Link href="/events"  css={{ color: active === "events" ? "#7C35AB" : "" }}>
          <div
            css={{
              borderTop: `1px solid ${"#E5E5E5"}`,
              height: "3rem",
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              paddingTop:"1rem",
              backgroundColor: "#FFF",
            }}
          >
            Events
          </div>
        </Link>
        <Link href="/about"  css={{ color: active === "about" ? "#7C35AB" : "" }}>
          <div
            css={{
              borderTop: `1px solid ${"#E5E5E5"}`,
              height: "3rem",
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              paddingTop:"1rem",
              backgroundColor: "#FFF",
            }}
          >
            About
          </div>
        </Link>
        <Link href="/how-it-works"  css={{ color: active === "how" ? "#7C35AB" : "" }}>
          <div
            css={{
              borderTop: `1px solid ${"#E5E5E5"}`,
              height: "3rem",
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              backgroundColor: "#FFF",
              paddingTop:"1rem"
            }}
          >
           How It Works
          </div>
        </Link>
        <Link href="/">
          <div
            css={{
              height: "3rem",
              borderTop: `1px solid ${"#E5E5E5"}`,
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              backgroundColor: "#FFF",
              paddingTop:"1rem"
            }}
          >
            Support
          </div>
        </Link>
      </div>
      {shown && (
        <div
          css={{
            position: "fixed",
            width: "100vw",
            height: "42vh",
            background: "#000",
            marginTop: "58vh",
            opacity:"0.8",
            zIndex:99
          }}
          onClick={setClose}
        ></div>
      )}
    </>
  );
};

export default MobileNav;
