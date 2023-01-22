/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";

import Image from "next/image";
import React from "react";
import { screen } from "styles/theme";

export default function PublicSiteFooter() {
  const theme = useTheme();
  return (
    <div
      css={{
        fontFamily: "'Poppins', sans-serif",
        background: theme.common.white,
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
        <div css={{ width: "40%" }}>
          <div>
            {" "}
            <Image
              src="/assets/pngs/logo.png"
              width={125.13}
              height={58.12}
              alt="logo"
            />
          </div>
          <p>
            Ewitnex - is a social user-friendly platform that provides tools for
            event planners to create, share, and manage every activity of their
            events from scheduling, Inviting, paperless program, attendees, and
            ticketing. A platform that creates a fun social experience for event
            lovers.
          </p>
        </div>
        <div>
          <p css={{ fontWeight: "bold", marginBottom: "7%" }}>Use Ewitnex</p>
          <p css={{ fontWeight: "500" }}>How it works</p>
          <p css={{ fontWeight: "500" }}>Pricing</p>
          <p css={{ fontWeight: "500" }}>Content standards</p>
          <p css={{ fontWeight: "500" }}>COVID-19 Resources</p>
          <p css={{ fontWeight: "500" }}>FAQs</p>
        </div>
        <div>
          <p css={{ fontWeight: "bold", marginBottom: "7%" }}>Plan Events</p>
          <p css={{ fontWeight: "500" }}>Sell Tickets Online</p>
          <p css={{ fontWeight: "500" }}>Software </p>{" "}
          <p css={{ fontWeight: "500" }}>Online RSVP</p>{" "}
          <p css={{ fontWeight: "500" }}>Virtual Events</p>{" "}
          <p css={{ fontWeight: "500" }}>Platform Event</p>{" "}
          <p css={{ fontWeight: "500" }}> Planning Event</p>{" "}
          <p css={{ fontWeight: "500" }}> Payment System</p>{" "}
          <p css={{ fontWeight: "500" }}>Nonprofits & Fundraisers Events</p>
          <p css={{ fontWeight: "500" }}>Event Marketing </p>
          <p css={{ fontWeight: "500" }}>Party Planning</p>
        </div>
        <div>
          <p css={{ fontWeight: "bold", marginBottom: "7%" }}>Find Events</p>
          <p css={{ fontWeight: "500" }}>All Events</p>
          <p css={{ fontWeight: "500" }}>Virtual Events</p>
          <p css={{ fontWeight: "500" }}>Online Webinars</p>
          <p css={{ fontWeight: "500" }}>Online Classes</p>
          <p css={{ fontWeight: "500" }}>Online Yoga</p>
          <p css={{ fontWeight: "500" }}>Virtual Runs</p>
          <p css={{ fontWeight: "500" }}>Online Zumba Classes</p>
          <p css={{ fontWeight: "500" }}>Virtual Conferences</p>
          <p css={{ fontWeight: "500" }}>Online Seminars</p>
          <p css={{ fontWeight: "500" }}>Online Speed Dating</p>
        </div>
      </div>
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5%",
          border: "1px solid #E0e0e0",
          padding: "0 3% ",
          paddingBottom: "1%",
        }}
      >
        <div
          css={{
            width: "51%",
            [screen.desktop]: {
              width: "62%",
            },
          }}
        >
          <p css={{ fontWeight: "bold", textAlign: "center", padding: "3% 0" }}>
            Connect with Ewitnex
          </p>
          <div
            css={{
              display: "flex",

              justifyContent: "space-between",
            }}
          >
            <p>Contact support</p>

            <p>Twitter</p>
            <p>Facebook</p>
            <p>LinkedIn</p>
            <p>Instagram</p>
          </div>
        </div>

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
        © 2022 Ewitnex
      </div>
    </div>
  );
}
