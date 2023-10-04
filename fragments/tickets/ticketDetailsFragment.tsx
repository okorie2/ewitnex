/** @jsxImportSource @emotion/react */
import Ticket from "@/components/tickets/Ticket";
import { useMediaQuery } from "@mui/material";
import React from "react";

const TicketDetailsFragment = ({
  selectedEvent,
}: {
  selectedEvent: string;
}) => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  return (
    <div
      css={{
        height: "calc(100vh - 80px)",
        padding: isTablet ? "1rem" : "1.5rem",
        overflowY: "scroll",
        paddingTop: isTablet ? "5rem" : "",
        display: isTablet ? "flex" : "grid",
        gap: "1rem",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Ticket
        qrcode="/assets/svgs/qrcode.svg"
        name="Blessed Omoriode"
        ticketType="VIP"
        price="5,500"
        event="DevFest Aba"
        date="Sat. 25 Nov, 2023"
        startTime="10:00AM"
        endTime="2:30PM"
        location="Holikins Hotel, 22 Faulks Road, Aba, Abia"
        ticketId="#000123456"
        eventHost="MiLab"
        eventID={selectedEvent}
        refundable={true}
        ticketNumber={1}
      />
      <Ticket
        qrcode="/assets/svgs/qrcode.svg"
        name="Blessed Omoriode"
        ticketType="VIP"
        price="5,500"
        event="DevFest Aba"
        date="Sat. 25 Nov, 2023"
        startTime="10:00AM"
        endTime="2:30PM"
        location="Holikins Hotel, 22 Faulks Road, Aba, Abia"
        ticketId="#000123456"
        eventHost="MiLab"
        eventID={selectedEvent}
        refundable={true}
        ticketNumber={2}
      />
    </div>
  );
};

export default TicketDetailsFragment;
