/** @jsxImportSource @emotion/react */

import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";

const EventActivities = () => {
  const isTablet = useMediaQuery("(max-width: 900px)");
  const router = useRouter();
  const loggedIn = router.pathname === "/dashboard/programs/[id]";
  return (
    <div
      css={{
        // boxShadow: `0px 0px 10px ${"#0000001A"}`,
        color: "#000",
        borderRadius: "10px",
        padding: "1.25rem 1.25rem 2rem",
        width: `${isTablet ? "90%":loggedIn ? "70%" : "60%"}`,
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
          width: isTablet ?"100%":"65%",
          marginInline: "auto",
          textAlign: "center",
        }}
      >
        <Image src="/assets/svgs/timesand.svg" alt="" width="21" height="26" />
        <p css={{ fontSize: "1.5rem", fontWeight: "bold" }}>Coming Soon...</p>
        <p css={{ marginBlock: "1rem" }}>
          Check back later as this page feature is currently on development
        </p>
      </div>
    </div>
  );
};

export default EventActivities;
