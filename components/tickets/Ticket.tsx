/** @jsxImportSource @emotion/react */

import Image from "next/image";
import React from "react";
import { theme } from "styles/theme";

const Ticket = () => {
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "30% 40% 30%",
        border: `2px solid ${theme.shadow.border3}`,
        borderRadius: "40px",
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "8%",
        }}
      >
        <Image
          src={"/assets/svgs/qrcode.svg"}
          alt={""}
          width={120}
          height={120}
        />
        <p
          css={{
            border: `1px solid ${theme.color.grey}`,
            fontSize: "0.6rem",
            padding: "2% 9%",
            color: "black",
          }}
        >
          Ticket 1 of 2
        </p>
      </div>
      <div
        css={{
          display: "grid",
          gap: "5px",
          borderInline: `2px dashed ${theme.color.grey2}`,
          padding: "1rem",
          fontWeight: "bold",
        }}
      >
        <p
          css={{
            fontSize: "0.8rem",
            fontWeight: 500,
          }}
        >
          Name
        </p>
        <p
          css={{
            fontWeight: "bold",
          }}
        >
          Blessed Omoriode
        </p>
        <div
          css={{
            display: "flex",
            width: "70%",
            justifyContent: "space-between",
            fontSize: "0.8rem",
          }}
        >
          <div>
            <p css={{ fontWeight: 500 }}>Ticket Type</p>
            <p css={{ fontWeight: "bold" }}>VIP</p>
          </div>
          <div>
            <p css={{ fontWeight: 500 }}>Amount</p>
            <p css={{ fontWeight: "bold" }}>N 5500</p>
          </div>
        </div>
        <div css={{ fontSize: "0.8rem", marginBlock: "0.5rem" }}>
          <p css={{ fontWeight: 500 }}>Event</p>
          <p css={{ fontWeight: "bold" }}>DevFest Aba</p>
        </div>
        <div css={{ fontSize: "0.8rem" }}>
          <p css={{ fontWeight: 500 }}>Event Date</p>
          <p>Sat. 25 Nov, 2023</p>
          <p>Starts at: 10:00 GMT</p>
          <p>Ends at: 2:30 GMT</p>
        </div>

        <p
          css={{
            fontSize: "0.85rem",
            color: theme.color.primary,
            fontWeight: 500,
            marginBlock: "0.4rem",
          }}
        >
          Add to calendar
        </p>

        <div css={{ fontSize: "0.8rem", width: "70%" }}>
          <p css={{ fontWeight: 500 }}>Location</p>
          <p>Holikins Hotel, 22 Faulks Road, Aba, Abia</p>
        </div>
        <p
          css={{
            fontSize: "0.85rem",
            color: theme.color.primary,
            fontWeight: 500,
          }}
        >
          See map
        </p>
      </div>
      <div
        css={{
          padding: "1rem",
          fontWeight: "bold",
        }}
      >
        <div>
        <p
          css={{
            fontSize: "0.8rem",
            fontWeight: 500,
          }}
        >
          Ticket ID
        </p>
        <p
          css={{
            fontWeight: "bold",
            fontSize:"1rem"
          }}
        >
          #000123456
        </p>
        </div>
        <p
          css={{
            fontSize: "0.85rem",
            color: theme.color.primary,
            marginBlock: "1rem",
            fontWeight: 500
          }}
        >
          Event Details
        </p>
        <div>
        <p
          css={{
            fontSize: "0.8rem",
            fontWeight: 500,
          }}
        >
          Organizer
        </p>
        <p
          css={{
            fontWeight: "bold",
            fontSize:"0.9rem"
          }}
        >
          MiLab
        </p>
        </div>
        <div css = {{marginTop: "1rem"}}>
        <p
          css={{
            fontSize: "0.8rem",
            fontWeight: 500,
          }}
        >
          Refund policy
        </p>
        <p
          css={{
            fontWeight: "bold",
            fontSize:"1rem",
            color: theme.color.primary,
          }}
        >
          Refundable
        </p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
