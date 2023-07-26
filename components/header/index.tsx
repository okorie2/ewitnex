/** @jsxImportSource @emotion/react */

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "@/components/logo";

export default function Navbar() {
  const router = useRouter();
  const active = useMemo(() => {
    let route = router.route;
    if (route.includes("events")) {
      route = "/events";
    }
    switch (route) {
      case "/":
        {
          return "home";
        }
        break;
      case "/events":
        {
          return "events";
        }
        break;
      case "/about":
        {
          return "about";
        }
        break;
      case "/how-it-works":
        {
          return "how";
        }
        break;
      default: {
        return "home";
      }
    }
  }, [router.route]);
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
          placeholder="Search event name , ID"
          type={"text"}
          css={{
            borderRadius: "66px",
            width: "100%",
            outline: "none",
            border: "none",
            backgroundColor: "#F5F5F5",
            height: "95%",
            fontSize: "1rem",
            fontFamily: '"Nunito", sans-serif',
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
              color: "#AEAEAE",
            },
          },
        }}
      >
        <div>
          <Link href="/" css={{ color: active === "home" ? "#7C35AB" : "" }}>
            {" "}
            Home
          </Link>
        </div>
        <div>
          <Link
            href="/events"
            css={{ color: active === "events" ? "#7C35AB" : "" }}
          >
            Events
          </Link>
        </div>
        <div>
          <Link
            href="/about"
            css={{ color: active === "about" ? "#7C35AB" : "" }}
          >
            About
          </Link>
        </div>
        <div>
          <Link
            href="/how-it-works"
            css={{ color: active === "how" ? "#7C35AB" : "" }}
          >
            How It Works
          </Link>
        </div>
      </div>
      <div>
        <hr css={{ width: "1px", height: "36px" }} />
      </div>
      <div css={{ color: "#7C35AB", fontWeight: "600" }}>
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
          backgroundColor: "#7C35AB",
          color: "#FFF"
        }}
      >
        <Link href="/auth/signup">Create Event</Link>
      </div>
      
    </div>
  );
}
