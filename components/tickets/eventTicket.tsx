/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { screen } from "styles/theme";
import EventTicketModal from "@/components/modals/eventTicketModal";
import { useMediaQuery } from "@mui/material";
import {useRouter} from 'next/router';

interface IEventTicket {
  title: string;
  id: string;
  label: string;
  date: string;
  location: string;
  type: string;
  price: string;
  eventID:string
}

const EventTicket = (props: IEventTicket) => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const handleModalClose = () => {
    setIsOpen(false);
  };
  const handleClick = () => {
      setIsOpen(!isOpen)
  }
  return (
    <>
      <div
        onClick={handleClick}
        css={{
          display: "grid",
          gridTemplateColumns: "60% 40%",
          [screen.desktopLg]: {
            marginInline: "auto",
          },
          width: "inherit",
          cursor: "pointer",
        }}
      >
        <div
          css={{
            fontFamily: "'Nunito', sans-serif",
            border: `0.5px solid ${"#707070"}`,
            borderRadius: "20px",
            borderRight: "none",
            height: "140px",
            padding: "0.9rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p
            css={{
              fontSize: "1.25rem",
              fontWeight: "800",
            }}
          >
            {props.title}
          </p>
          <p
            css={{
              fontSize: "0.75rem",
              fontWeight: "600",
            }}
          >
            <span
              css={{
                color: "#AEAEAE",
                paddingRight: "5px",
              }}
            >
              {props.id}
            </span>
            {props.label}
          </p>
          <div>
            <p
              css={{
                fontSize: "0.75rem",
                fontWeight: "600",
              }}
            >
              {props.date}
            </p>
            <p
              css={{
                fontSize: "0.875rem",
                fontWeight: "600",
              }}
            >
              {props.location}
            </p>
          </div>
        </div>
        <div
          css={{
            border: "0.5px solid #707070",
            borderRadius: "20px",
            borderLeft: "none",
            height: "140px",
            padding: "0.6rem",
            fontFamily: "'Open Sans', sans-serif",
          }}
        >
          <p
            css={{
              fontSize: "1.625rem",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "0.2rem",
            }}
          >
            {props.type}
          </p>
          <p
            css={{
              fontSize: "2.375rem",
              fontWeight: "500",
              textAlign: "center",
              marginBottom: "0.2rem",
            }}
          >
            {props.price}
          </p>
          <p
            css={{
              fontSize: "0.875rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Make Payment
          </p>
        </div>
      </div>
      <EventTicketModal isOpen={isOpen} onRequestClose={handleModalClose} />
    </>
  );
};

export default EventTicket;
