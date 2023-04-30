/** @jsxImportSource @emotion/react */

import React from "react";
import EventTicket from "@/components/tickets/eventTicket";
import { H3 } from "styles/components/typography";
import { screen, theme } from "styles/theme";

const EventTickets = () => {
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
      }}
    >
      <H3
        css={{
          marginBottom: "1.25rem",
          [screen.desktopLg]: {
            textAlign: "center",
          },
        }}
      >
        Select a ticket to purchase
      </H3>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          [screen.desktopLg]: {
            gridTemplateColumns: "auto ",
          },
          gap: "1.25rem",
        }}
      >
        <EventTicket
          title="DevFest Aba"
          id="Tec542445"
          label="Tech"
          date="25 NOV. 2021 10:00 AM"
          location="Holikins Hotel, 22 Faulks Road, Aba, Abia"
          type="Regular"
          price="$500"
        />
        <EventTicket
          title="DevFest Aba"
          id="Tec542445"
          label="Tech"
          date="25 NOV. 2021 10:00 AM"
          location="Holikins Hotel, 22 Faulks Road, Aba, Abia"
          type="VIP"
          price="$1500"
        />
        <EventTicket
          title="DevFest Aba"
          id="Tec542445"
          label="Tech"
          date="25 NOV. 2021 10:00 AM"
          location="Holikins Hotel, 22 Faulks Road, Aba, Abia"
          type="VVIP"
          price="$2000"
        />
        <EventTicket
          title="DevFest Aba"
          id="Tec542445"
          label="Tech"
          date="25 NOV. 2021 10:00 AM"
          location="Holikins Hotel, 22 Faulks Road, Aba, Abia"
          type="Exclusive"
          price="$2000"
        />
        <EventTicket
          title="DevFest Aba"
          id="Tec542445"
          label="Tech"
          date="25 NOV. 2021 10:00 AM"
          location="Holikins Hotel, 22 Faulks Road, Aba, Abia"
          type="VVIP"
          price="$2000"
        />
        <EventTicket
          title="DevFest Aba"
          id="Tec542445"
          label="Tech"
          date="25 NOV. 2021 10:00 AM"
          location="Holikins Hotel, 22 Faulks Road, Aba, Abia"
          type="Exclusive"
          price="$2000"
        />
      </div>
    </div>
  );
};

export default EventTickets;
