/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import Modal from "react-modal";
import { theme, screen } from "styles/theme";
import TicketTextField from "../inputs/TicketTextField";
import styled from "@emotion/styled";
import { ButtonFormFilled } from "styles/components/button";
import EventTicketModal from "../modals/eventTicketModal";

interface IEventTicket {
  title: string;
  id: string;
  label: string;
  date: string;
  location: string;
  type: string;
  price: string;
}

const EventTicket = (props: IEventTicket) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModalClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        css={{
          display: "grid",
          gridTemplateColumns: "1.8fr 1.2fr",
          [screen.desktopLg]: {
            marginInline: "auto",
          },
          width: "374px",
          cursor: "pointer",
        }}
      >
        <div
          css={{
            fontFamily: "'Nunito', sans-serif",
            border: `0.5px solid ${theme.shadow.tertiary}`,
            borderRadius: "20px",
            borderRight: "none",
            height: "140px",
            padding: "1rem",
          }}
        >
          <p
            css={{
              fontSize: "1.25rem",
              fontWeight: "800",
              marginBottom: "0.5rem",
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
                color: theme.color.grey,
                paddingRight: "5px",
              }}
            >
              {props.id}
            </span>
            {props.label}
          </p>
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
        <div
          css={{
            border: "0.5px solid #707070",
            borderRadius: "20px",
            borderLeft: "none",
            height: "140px",
            padding: "1rem",
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