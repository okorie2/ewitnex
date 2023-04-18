/** @jsxImportSource @emotion/react */

import React from "react";
import { theme, screen } from "styles/theme";

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
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "1.8fr 1.2fr",
        [screen.desktopLg]: {
          marginInline: "auto",
        },
        width: "374px",
      }}
    >
      <div
        css={{
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
            fontWeight: "600",
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
            fontWeight: "500",
          }}
        >
          {props.date}
        </p>
        <p
          css={{
            fontSize: "0.875rem",
            fontWeight: "500",
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
        }}
      >
        <p
          css={{
            fontSize: "1.625rem",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {props.type}
        </p>
        <p
          css={{
            fontSize: "2.375rem",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          {props.price}
        </p>
        <p
          css={{
            fontSize: "0.875rem",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Make Payment
        </p>
      </div>
    </div>
  );
};

export default EventTicket;
