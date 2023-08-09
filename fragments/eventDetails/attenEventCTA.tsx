/** @jsxImportSource @emotion/react */

import Link from "next/link";
import React from "react";
import { ButtonFormFilled } from "styles/components/button";

const AttenEventCTA = ({link}:{link:string}) => {
  return (
    <div
      css={{
        width: "325px",
        height: "92px",
        boxShadow: `0px 0px 10px ${"#00000029"}`,
        borderRadius: "40px 40px 0px 0px",
        display: "grid",
        placeContent: "center",
        position: "fixed",
        background: "#FFFFFF",
        bottom: "0",
        right: "5%",
        zIndex: "3",
      }}
    >
      <div
        css={{
          display: "flex",
          alignItems: "center",
          gap: "1.2rem",
        }}
      >
        <p css={{ color: "#000", fontWeight: "bold" }}>
          $500 - $2K
        </p>
        <Link href = {link}>
        <ButtonFormFilled css={{ width: "172px" }}>
          ATTEND EVENT
        </ButtonFormFilled>
        </Link>
      </div>
    </div>
  );
};

export default AttenEventCTA;
