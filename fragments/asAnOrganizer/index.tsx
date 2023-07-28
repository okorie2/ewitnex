/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { H1 } from "styles/components/typography";
import { screen } from "styles/theme";
import Image from "next/image";
import { Button } from "styles/components/button";
import {useRouter} from 'next/router'

const AsAnOrganizerFragment = () => {
  const router = useRouter()
  const optionList = [
    "Wedding",
    "Birthday",
    "Sports",
    "Political",
    "Political",
    "Cultural",
    "Trade",
    "Musical",
  ];
  return (
    <div
      css={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "0.8rem",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBlock: "5rem",
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <p css={{ fontWeight: "600" }}>As An Organizer</p>
      <H1 size={"2.4rem"} color={"#000"} small>
        Bring your vision to life with{" "}
        <span css={{ color: "#7c35ab" }}>Ewitnex</span>
      </H1>
      <div css={{ width: "57%" }}>
        <p>
          Ewitnex empowers you to effortlessly create and organize exceptional
          events, whether it's a conference, concert, workshop, or social
          gathering, with powerful tools for ticketing, paperless programs,
          attendee management, and logistics coordination.
        </p>
      </div>
      <div css={{ marginTop: "2rem" }}>
        <Button width = {"14rem"} onClick={() => router.push("/auth/signup")}>
            Get Started
        </Button>
      </div>
    </div>
  );
};

export default AsAnOrganizerFragment;
