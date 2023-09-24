/** @jsxImportSource @emotion/react */

import HostEventTextField from "@/components/inputs/hostEventTextField";
import { Box, useMediaQuery } from "@mui/material";
import { screen } from "styles/theme";
import Image from "next/image";
import { RefObject, useRef, useState } from "react";

const AddTicketForm = () => {
  const [ticketType, setTicketType] = useState("paid");
  const isTablet = useMediaQuery("(max-width: 780px)");

  return (
    <form
      css={{
        padding: isTablet ? "0rem" : " 1.5rem 2.5rem",
        display: "grid",
        gap: "1.5rem",
        borderRight: isTablet ? "" : `1px solid ${"#E4E4E4"}`,
        height: "100%",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        [screen.lg]: {
          overflowY: "initial",
          borderBottom: `1px solid ${"#E4E4E4"}`,
        },
        [screen.desktop]: {
          overflowY: "initial",
          borderBottom: isTablet ? "" : `1px solid ${"#E4E4E4"}`,
        },
      }}
    >
      <div css={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <p
          css={{
            fontWeight: "bold",
            display: "flex",
            gap: "0.3rem",
            alignItems: "center",
          }}
        >
          Choose Ticket Type
        </p>
      </div>
      <div css={{ display: "flex", gap: "1rem", marginTop: "-3%" }}>
        <div
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            width: isTablet ? "100px" : "110px",
            height: "50px",
            background: ticketType === "paid" ? "#7C35AB21 " : "",
            border:
              ticketType === "paid" ? "1px solid #7C35AB" : "1px solid #AEAEAE",
            color: ticketType === "paid" ? "#7C35AB" : "#AEAEAE",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => setTicketType("paid")}
        >
          <p>Paid</p>
        </div>
        <div
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            width: isTablet ? "100px" : "110px",
            height: "50px",
            background: ticketType === "free" ? "#7C35AB21 " : "",
            border:
              ticketType === "free" ? "1px solid #7C35AB" : "1px solid #AEAEAE",
            color: ticketType === "free" ? "#7C35AB" : "#AEAEAE",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => setTicketType("free")}
        >
          <p>Free</p>
        </div>
        <div
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            width: isTablet ? "100px" : "110px",
            height: "50px",
            background: ticketType === "donation" ? "#7C35AB21 " : "",
            border:
              ticketType === "donation"
                ? "1px solid #7C35AB"
                : "1px solid #AEAEAE",
            color: ticketType === "donation" ? "#7C35AB" : "#AEAEAE",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => setTicketType("donation")}
        >
          <p>Donation</p>
        </div>
      </div>
      <div css={{ marginTop: "-4.5%" }}>
        <HostEventTextField
          label=""
          placeholder="Name ticket e.g VIP"
          type="text"
        />
      </div>
      <div
        css={{
          width: "100%",
          border: "0.124rem solid #AEAEAE",
          borderRadius: "10px",
          fontSize: "14px",
          fontFamily: "'Poppins', sans-serif",
          marginTop: "-3%",
          display: "flex",
        }}
      >
        <div
          css={{
            borderRight: "0.124rem solid #AEAEAE",
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <input
            type="text"
            placeholder="Price (NGN)"
            css={{
              height: "3.3rem",
              width: "90%",
              padding: "1rem",
              border: `none`,
              borderRadius: "10px",
              fontSize: "14px",
              fontFamily: "'Poppins', sans-serif",
            }}
          />
        </div>
        <div
          css={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem",
            fontWeight: "500",
          }}
        >
          <p>Fee (NGN)</p>
          <p>N6,300</p>
        </div>
      </div>
      <p css={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
        You will be charged N300 + 3% ticket service fee and 3% payment
        processing fee of the price inputed per ticket sold to attendees
      </p>
      <HostEventTextField
        label=""
        placeholder="Enter ticket quantity"
        type="text"
      />
      <HostEventTextField
        label="Who want to handle the fee?"
        placeholder="pass"
        type="select"
        options={[
          { value: "pass", label: "I want to pass the fees to the attendees" },
          { value: "absorb", label: "I want to absorb the fees" },
        ]}
      />
      <div>
        <HostEventTextField
          label="Can attendees ask for a refund?"
          placeholder="refundable"
          type="select"
          options={[
            { value: "refundable", label: "Yes, ticket is refundable" },
            { value: "non-refundable", label: "No, ticket is non-refundable" },
          ]}
        />
        <p css={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>
          A refund will lead to you getting your payment 3 to 5 working days to
          your wallet after your events have ended.
        </p>
      </div>

      <button
        css={{
          fontSize: "1rem",
          fontWeight: "bold",
          color: "#7C35AB",
          border: `1px solid ${"#7C35AB"}`,
          height: "45px",
          marginBottom: isTablet ? "2rem" : "0.5rem",
          background: "#fff",
          borderRadius: "26px",
          width: isTablet ? "100%" : "45%",
          cursor: "pointer",
        }}
      >
        Add Ticket
      </button>
      {isTablet && <Box height = {"0.125rem"}/>}
    </form>
  );
};

export default AddTicketForm;
