/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";

import React from "react";
import Image from "next/image";
import { H1 } from "styles/components/typography";

export default function TicketToSaleFragment() {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        background: "#fff",
        fontFamily: "'Poppins', sans-serif",
        padding: "0% 4%",
      }}
    >
      <div css={{ width: "50%" }}>
        <H1 small color={"#000"}>
          Got a ticket to sale for the event? We got you covered
        </H1>
        <p css={{ marginTop: "4%" }}>
          Are you trying to sell a ticket to an event, but don&apos;t know where
          to start? No need to worry, because we&apos;ve got you covered. With
          ewitnex, you can easily list and sell your ticket to interested
          buyers. Simply create a listing, upload your ticket information, and
          start receiving offers.
        </p>
        <p css={{ marginTop: "4%" }}>
          Plus, our platform is safe and secure, so you don&apos;t have to worry
          about any scams or fraud. So if you&apos;ve got a ticket to sell,
          don&apos;t hesitate. Start listing it with us today and find a buyer
          in no time.
        </p>
      </div>
      <div
        css={{
          position: "relative",
          width: "25.5vw",
          height: "100vh",
          marginTop: "-5rem",
        }}
      >
        <Image
          src={"/assets/pngs/fone_r.png"}
          alt="fone_r"
          fill
          css={{ objectFit: "scale-down" }}
        />
      </div>
    </div>
  );
}
