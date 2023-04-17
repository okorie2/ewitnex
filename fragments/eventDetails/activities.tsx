/** @jsxImportSource @emotion/react */

import React from "react";
import Image from "next/image";
import { ButtonFormFilled } from "styles/components/button";
import { theme } from "styles/theme";
import { height } from "@mui/system";

const EventActivities = () => {
  return (
    <div
      css={{
        boxShadow: `0px 0px 10px ${theme.shadow.border4}`,
        color: theme.common.black,
        borderRadius: "10px",
        padding: "1.25rem 1.25rem 2rem",
        width: "60%",
        marginInline: "auto",
        position: "relative",
        top: "3.5rem",
        height: "60vh",
        display: "grid",
        placeContent: "center",
      }}
    >
      <div
        css={{
          width: "65%",
          marginInline: "auto",
          textAlign: "center",
        }}
      >
        <Image src="/assets/svgs/timesand.svg" alt="" width="21" height="26" />
        <p css={{ fontSize: "1.5rem", fontWeight: "bold" }}>Coming Soon...</p>
        <p css={{ marginBlock: "1rem" }}>
          Check back later as this page feature is currently on development
        </p>
        <ButtonFormFilled>GO TO PROGRAMS</ButtonFormFilled>
      </div>
    </div>
  );
};

export default EventActivities;
