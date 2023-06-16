/** @jsxImportSource @emotion/react */

import React from "react";
import Image from "next/image";
import { screen } from "styles/theme";

interface IRSVPCard {
  img: string;
  name: string;
  userName: string;
  date: string;
}

const RSVPCard = (props: IRSVPCard) => {
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: "1.5rem",
        alignItems: "center",
        width: "318px",
        border: `1px solid  ${"#E4E4E4"}`,
        borderRadius: "20px",
        padding: "1.25rem",
        position: "relative",
        [screen.desktopLg]: {
          marginInline: "auto",
        },
      }}
    >
      <div
        css={{
          width: "91px",
          height: "91px",
          position: "relative",
        }}
      >
        <Image src={props.img} alt="guest-img" fill />
      </div>
      <div>
        <p
          css={{
            fontSize: "1rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
          }}
        >
          {props.name}
        </p>
        <p
          css={{
            fontSize: "0.875rem",
            fontWeight: "500",
            marginBottom: "0.5rem",
            color: "#AEAEAE",
          }}
        >
          {props.userName}
        </p>
        <p
          css={{
            fontSize: "0.75rem",
            fontWeight: "500",
            marginBottom: "0.5rem",
            color: "#AEAEAE",
          }}
        >
          {props.date}
        </p>
      </div>
    </div>
  );
};

export default RSVPCard;
