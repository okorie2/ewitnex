/** @jsxImportSource @emotion/react */

import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import React from "react";

interface TicketProps {
  qrcode: string;
  name: string;
  ticketType: string;
  price: string;
  event: string;
  eventID: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  ticketId: string;
  eventHost: string;
  refundable: boolean;
  ticketNumber: number
}

const Ticket = (props: TicketProps) => {
  const isTablet = useMediaQuery("(max-width: 780px)");

  return (
    <>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: isTablet ? "":"30% 40% 30%",
          boxShadow: `0px 0px 5px #00000029`,
          borderRadius: "40px",
          minWidth: isTablet ? "90vw" : "",
          height:isTablet ? "90vh":""
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8%",
            position:"relative",
            paddingBottom: isTablet ? "1rem":""
          }}
        >
          <Image
            src={"/assets/svgs/qrcode.svg"}
            alt={""}
            width={isTablet ? 130:100}
            height={isTablet ? 130:100}
          />
          <p
            css={{
              border: `1px solid #AEAEAE`,
              fontSize: "0.6rem",
              padding: isTablet ? "1.5% 4%":"2% 9%",
              color: "black",
              marginBottom:isTablet ? "":"",
              background:"#fff",
              position: isTablet ? "absolute":"relative",
              bottom:"-10%"
            }}
          >
            Ticket {props.ticketNumber} of 2
          </p>
        </div>
        <div
          css={{
            display: "grid",
            gap: "5px",
            borderInline: isTablet ? "" : `2px dashed #E4E4E4`,
            borderBlock: isTablet ? "2px dashed #E4E4E4" : "",
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
            {props.name}
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
              <p css={{ fontWeight: "bold" }}>{props.ticketType}</p>
            </div>
            <div>
              <p css={{ fontWeight: 500 }}>Amount</p>
              <p css={{ fontWeight: "bold" }}>N {props.price}</p>
            </div>
          </div>
          <div css={{ fontSize: "0.8rem", marginBlock: "0.5rem" }}>
            <p css={{ fontWeight: 500 }}>Event</p>
            <p css={{ fontWeight: "bold" }}>{props.event}</p>
          </div>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: isTablet ? "1fr 1fr" : "1fr",
              gap: "20px",
            }}
          >
            <div
              css={{
                display: "grid",
                gap: "5px",
              }}
            >
              <div css={{ fontSize: "0.8rem" }}>
                <p css={{ fontWeight: 450 }}>Event Date</p>
                <p>{props.date}</p>
                <p>Starts at: {props.startTime} GMT</p>
                <p>Ends at: {props.endTime} GMT</p>
              </div>

              <p
                css={{
                  fontSize: "0.75rem",
                  color: "#7C35AB",
                  fontWeight: 500,
                  marginBlock: "0.2rem",
                }}
              >
                Add to calendar
              </p>
            </div>
            <div
              css={{
                display: "grid",
                gap: "22px",
              }}
            >
              <div css={{ fontSize: "0.8rem", width: "70%" }}>
                <p css={{ fontWeight: 500 }}>Location</p>
                <p>{props.location}</p>
              </div>
              <p
                css={{
                  fontSize: "0.75rem",
                  color: "#7C35AB",
                  fontWeight: 500,
                  marginBlock: "0.2rem",
                }}
              >
                See map
              </p>
            </div>
          </div>
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
                fontSize: "1rem",
              }}
            >
              {props.ticketId}
            </p>
          </div>
          <Link href={`/dashboard/manager/${props.eventID}?tab=Overview`}>
            <p
              css={{
                fontSize: "0.75rem",
                color: "#7C35AB",
                marginBlock: "1rem",
                fontWeight: 500,
              }}
            >
              Event Details
            </p>
          </Link>
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
                fontSize: "0.9rem",
              }}
            >
              {props.eventHost}
            </p>
          </div>
          <div css={{ marginTop: "1rem" }}>
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
                fontSize: "0.9rem",
                color: "#7C35AB",
              }}
            >
              {props.refundable ? "Refundable" : "Non-Refundable"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
