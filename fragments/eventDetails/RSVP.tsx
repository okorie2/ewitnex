/** @jsxImportSource @emotion/react */

import React from "react";
import RSVPCard from "@/components/cards/RSVPCard";
import { H3 } from "styles/components/typography";
import { screen } from "styles/theme";
import { ButtonFormFilled } from "styles/components/button";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";

const RSVP = () => {
  const router = useRouter();
  const isTablet = useMediaQuery("(max-width: 900px)");
  const loggedIn = router.pathname === "/dashboard/programs/[id]";
  return (
    <div
      css={{
        boxShadow: " 0px 0px 10px #0000001A",
        borderRadius: "10px",
        padding: isTablet ? "2rem 0.5rem":"2rem 2.5rem",
        width: `${isTablet ? "100vw":loggedIn ? "70%" : "60%"}`,
        marginInline: "auto",
        position: "relative",
        marginBottom:isTablet ? "-5rem" : "",
        top: isTablet ? "0":"3.5rem",
      }}
    >
      <div
        css={{
          width: isTablet ? "100%":"80%",
          marginInline: "auto",
          textAlign: "center",
          display: "grid",
          gap: "1rem",
        }}
      >
        <div
          css={{
            display: "grid",
            gridTemplateColumns: isTablet ?"1fr":"1fr 1fr",
            gap: "2.5rem",
            
          }}
        >
          <div>
            <H3>405</H3>
            <p css={{ color: "#707070", fontWeight: "500" }}>
              persons will be attending
            </p>
          </div>
          <div>
            <H3>40</H3>
            <p css={{ color: "#707070", fontWeight: "500" }}>
              persons are from your location, Uyo
            </p>
          </div>
        </div>
        <ButtonFormFilled css={{ width: "172px", marginInline: "auto", marginBlock:isTablet ?"1.5rem":"" }}>
          ATTEND EVENT
        </ButtonFormFilled>
        <p>
          You are the <span css={{ fontWeight: "bold" }}>____ attendant</span>{" "}
          of this event
        </p>
      </div>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          [screen.desktopLg]: {
            gridTemplateColumns: isTablet ? "1fr":"1fr 1fr",
          },
          gap: "1.25rem",
          marginTop: "3rem",
        }}
      >
        <RSVPCard
          img="/assets/pngs/profilepic_1.png"
          name="Franca Benibo"
          userName="Raiya"
          date=" Sept 20, 10: 20 AM"
        />
        <RSVPCard
          img="/assets/pngs/profilepic_2.png"
          name="Jama Blue"
          userName="JBlue"
          date=" Sept 20, 10: 20 AM"
        />
        <RSVPCard
          img="/assets/pngs/profilepic_3.png"
          name="Grace Lover"
          userName="Lover_G"
          date=" Sept 20, 10: 20 AM"
        />
        <RSVPCard
          img="/assets/pngs/profilepic_4.png"
          name="Jama Blue"
          userName="JBlue"
          date=" Sept 20, 10: 20 AM"
        />
      </div>
    </div>
  );
};

export default RSVP;
