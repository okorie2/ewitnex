/** @jsxImportSource @emotion/react */


import React from "react";
import Link from "next/link";
import Image from "next/image";
import { screen } from "styles/theme";
import Logo from "@/components/logo";

export default function PublicSiteFooter() {
  return (
    <div
      css={{
        fontFamily: "'Poppins', sans-serif",
        background: "#fff",
        zIndex: "2",
        position: "relative",
      }}
    >
      <div
        css={{
          display: "flex",
          gap: "3%",
          justifyContent: "space-between",
          padding: "0% 4%",
        }}
      >
        <div css={{ width: "25%", marginTop: "-2%" }}>
          <Logo image="/assets/pngs/logo.png" width={125.13} height={58.12} />
          <p css = {{marginTop: "5%"}}>
            Ewitnex - is a social user-friendly platform that provides tools for
            event planners to create, share, and manage every activity of their
            events from scheduling, Inviting, paperless program, attendees, and
            ticketing. A platform that creates a fun social experience for event
            lovers.
          </p>
        </div>
        <div>
          <p css={{ fontWeight: "bold", marginBottom: "20%" }}>Use Ewitnex</p>
          <Link href = "/how-it-works"><p css={{ fontWeight: "500", ":hover":{color: "#7C35AB"} }}>How it works</p></Link>
          <p css={{ fontWeight: "500" }}>Pricing</p>
          <p css={{ fontWeight: "500" }}>Content standards</p>
          <p css={{ fontWeight: "500" }}>COVID-19 Resources</p>
          <p css={{ fontWeight: "500" }}>FAQs</p>
        </div>
        <div>
          <p css={{ fontWeight: "bold", marginBottom: "20%" }}>Find Events</p>
          <p css={{ fontWeight: "500" }}>Virtual Events</p>
          <p css={{ fontWeight: "500" }}>Online Events</p>
          <p css={{ fontWeight: "500" }}>Content Standards</p>
          <p css={{ fontWeight: "500" }}>Online Classes</p>
          <p css={{ fontWeight: "500" }}>Online Events</p>
          <p css={{ fontWeight: "500" }}>Birthday Events</p>
        </div>
        <div>
          <p css={{ fontWeight: "bold", marginBottom: "20%" }}>Connect with Ewitnex</p>
          <p css={{ fontWeight: "500" }}>Contact Support</p>
          <div css = {{display:"flex", gap:"1rem", marginTop:"1rem", alignItems:"center"}}>
            <Image 
              src = {"/assets/svgs/facebook.svg"}
              alt = {"facebook"}
              height = {20}
              width = {20}
            />
            <Image 
              src = {"/assets/svgs/twitter.svg"}
              alt = {"twitter"}
              height = {20}
              width = {20}
            />
            <Image 
              src = {"/assets/svgs/instagram.svg"}
              alt = {"instagram"}
              height = {20}
              width = {20}
            />
          </div>
        </div>
      </div>
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5%",
          border: "1px solid #E0e0e0",
          padding: "0.5% 3% ",
          paddingBottom: "1.5%",
        }}
      >

        <div
          css={{
            display: "flex",
            alignItems: "center",
            marginTop: "1.2rem",
            gap: "1.5rem",
          }}
        >
          <button
            css={{
              background: "none",
              border: "none",
              outline: "none",
              cursor: "pointer",
              position: "relative",
              width: "11vw",
              height: "6.5vh",
            }}
            type="button"
          >
            <Image src="/assets/svgs/playstore.svg" alt="playstore" fill />
          </button>
          <button
            css={{
              background: "none",
              border: "none",
              outline: "none",
              cursor: "pointer",
              position: "relative",
              width: "11vw",
              height: "6.5vh",
            }}
            type="button"
          >
            <Image src="/assets/svgs/appstore.svg" alt="appstore" fill />
          </button>
        </div>
      </div>
      <div
        css={{
          padding: "1% 0",
          textAlign: "center",
          borderBottom: "1px solid #E0e0e0",
        }}
      >
        © 2023 Ewitnex
      </div>
    </div>
  );
}
