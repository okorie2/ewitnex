/** @jsxImportSource @emotion/react */

import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

const DashboardHeader = () => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  return (
    <div
      css={{
        height: "80px",
        borderBottom: `1px solid ${"#E4E4E4"}`,
        display: isTablet ? "none":"grid",
        gridTemplateColumns: "2fr 1fr",
        alignItems: "center",
        paddingInline: "1.5rem",
        gap: "3.5rem",
      }}
    >
      <div
        css={{
          borderRadius: "66px",
          backgroundColor: "#F5F5F5",
          width: "100%",
          marginInline: "auto",
          height: "2.625rem",
          display: "flex",
          alignItems: "center",
          paddingLeft: "1rem",
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
          placeholder="Search event name, id"
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
      <Link href="/dashboard/hostEvent">
        <div css={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <div
            css={{
              width: "45px",
              height: "45px",
              position: "relative",
              border: `1px solid ${"#7C35AB"}`,
              borderRadius: "50%",
              padding: "10px",
            }}
          >
            <Image src="/assets/svgs/host.svg" alt="" width={20} height={20} />
          </div>
          <p css={{ color: "#7C35AB", fontWeight: "bold" }}>
            Host Event
          </p>
        </div>
      </Link>
    </div>
  );
};
export default DashboardHeader;
