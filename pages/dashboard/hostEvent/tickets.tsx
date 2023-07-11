/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import HostEventLayout from "./layout";
import Link from "next/link";
import { screen } from "styles/theme";
import HostEventTextField from "@/components/inputs/hostEventTextField";
import Image from "next/image";
import HostEventSplitInput from "@/components/inputs/HostEventSplitInput";
import HostEventModal from "@/components/modals/hostEventModal";
import { Tooltip } from "@mui/material";

const HostEventTickets = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ticketType, setTicketType] = useState("paid");
  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <HostEventLayout>
        <div>
          <div
            css={{
              height: "110px",
              borderBottom: `1px solid ${"#E4E4E4"}`,
              display: "flex",
              alignItems: "center",
              paddingInline: "2.5rem",
            }}
          >
            <div
              css={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <div>
                <h1 css={{ fontSize: "1.875rem" }}>Ticket</h1>
                <p>Enter ticket information for this event</p>
              </div>
              <div>
                <div
                  css={{
                    display: "flex",
                    gap: "2rem",
                  }}
                >
                  <p
                    css={{
                      color: "#7C35AB",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Preview
                  </p>
                  <Link
                    href="/dashboard"
                    css={{
                      color: "#F05E78",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              height: "calc(100vh - 150px)",
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              [screen.lg]: {
                gridTemplateColumns: "1fr",
              },
              [screen.desktop]: {
                gridTemplateColumns: "1fr",
              },
            }}
          >
            <form
              css={{
                padding: " 1.5rem 2.5rem",
                display: "grid",
                gap: "1.5rem",
                borderRight: `1px solid ${"#E4E4E4"}`,
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
                  borderBottom: `1px solid ${"#E4E4E4"}`,
                },
              }}
            >
              <div
                css={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
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
                    width: "110px",
                    height: "50px",
                    background: ticketType === "paid" ? "#7C35AB21 " : "",
                    border:
                      ticketType === "paid"
                        ? "1px solid #7C35AB"
                        : "1px solid #AEAEAE",
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
                    width: "110px",
                    height: "50px",
                    background: ticketType === "free" ? "#7C35AB21 " : "",
                    border:
                      ticketType === "free"
                        ? "1px solid #7C35AB"
                        : "1px solid #AEAEAE",
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
                    width: "110px",
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
                  display: "flex"
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
                    padding:"1rem",
                    fontWeight: "500"
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
                  {value: "pass", label:"I want to pass the fees to the attendees"},
                  {value:"absorb" ,label:"I want to absorb the fees"}
                ]}
              />
              <div>
                <HostEventTextField
                  label="Can attendees ask for a refund?"
                  placeholder="refundable"
                  type="select"
                  options={[
                    {value: "refundable" , label:"Yes, ticket is refundable"},
                    {value: "non-refundable" , label:"No, ticket is non-refundable"}
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
                  marginBottom: "0.5rem",
                  background: "#fff",
                  borderRadius: "26px",
                  width: "45%",
                  cursor: "pointer",
                }}
              >
                Add Ticket
              </button>
            </form>
            <div
              css={{
                padding: " 1.5rem 2.5rem",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                [screen.lg]: {
                  overflowY: "initial",
                },
                [screen.desktop]: {
                  overflowY: "initial",
                },
              }}
            >
              <div
                css={{
                  width: "80%",
                  display: "grid",
                  gap: "2rem",
                  [screen.lg]: {
                    width: "100%",
                  },
                  [screen.desktop]: {
                    width: "100%",
                  },
                }}
              >
                <div
                  css={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "2rem",
                  }}
                >
                  <div>
                    <div>
                      <h3 css={{ fontWeight: "bold", fontSize: "1.125rem" }}>
                        VIP
                      </h3>
                      <p css={{ fontSize: "0.875rem" }}>N50,000</p>
                      <p css={{ fontSize: "0.75rem", color: "#AEAEAE" }}>
                        45 Quantities
                      </p>
                    </div>
                    <div
                      css={{ display: "flex", gap: "1rem", marginTop: "1rem" }}
                    >
                      <Image
                        src="/assets/svgs/pencil.svg"
                        alt=""
                        width={21}
                        height={21}
                      />
                      <Image
                        src="/assets/svgs/trash.svg"
                        alt=""
                        width={17.88}
                        height={22}
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <h3 css={{ fontWeight: "bold", fontSize: "1.125rem" }}>
                        VVIP
                      </h3>
                      <p css={{ fontSize: "0.875rem" }}>N100,000</p>
                      <p css={{ fontSize: "0.75rem", color: "#AEAEAE" }}>
                        45 Quantities
                      </p>
                    </div>
                    <div
                      css={{ display: "flex", gap: "1rem", marginTop: "1rem" }}
                    >
                      <Image
                        src="/assets/svgs/pencil.svg"
                        alt=""
                        width={21}
                        height={21}
                      />
                      <Image
                        src="/assets/svgs/trash.svg"
                        alt=""
                        width={17.88}
                        height={22}
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <h3 css={{ fontWeight: "bold", fontSize: "1.125rem" }}>
                        REGULAR
                      </h3>
                      <p css={{ fontSize: "0.875rem" }}>N10,000</p>
                      <p css={{ fontSize: "0.75rem", color: "#AEAEAE" }}>
                        45 Quantities
                      </p>
                    </div>
                    <div
                      css={{ display: "flex", gap: "1rem", marginTop: "1rem" }}
                    >
                      <Image
                        src="/assets/svgs/pencil.svg"
                        alt=""
                        width={21}
                        height={21}
                      />
                      <Image
                        src="/assets/svgs/trash.svg"
                        alt=""
                        width={17.88}
                        height={22}
                      />
                    </div>
                  </div>
                </div>
                <div css={{ textAlign: "center" }}>
                  <p
                    css={{
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#AEAEAE",
                    }}
                  >
                    Total ticket quantities
                  </p>
                  <p css={{ fontSize: "0.875rem", fontWeight: "500" }}>100</p>
                  <button
                    css={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      fontFamily: "'Nunito', sans-serif",
                      color: "#7C35AB",
                      border: `1px solid ${"#7C35AB"}`,
                      height: "43px",
                      marginBlock: "1rem",
                      background: "#fff",
                      borderRadius: "26px",
                      width: "65%",
                      cursor: "pointer",
                    }}
                  >
                    + Add Another Ticket
                  </button>
                </div>
              </div>
              <div
                css={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBlock: "auto 1rem",
                  [screen.lg]: {
                    marginBlock: "1rem",
                  },
                  [screen.desktop]: {
                    marginBlock: "1rem",
                  },
                }}
              >
                <Link href="/dashboard/hostEvent/speakers">
                  <button
                    css={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      fontFamily: "'Nunito', sans-serif",
                      color: "#7C35AB",
                      border: `1px solid ${"#7C35AB"}`,
                      height: "52px",
                      marginBottom: "0.5rem",
                      background: "#fff",
                      borderRadius: "26px",
                      width: "100%",
                      cursor: "pointer",
                    }}
                  >
                    SAVE & RETURN
                  </button>
                </Link>
                <button
                  onClick={() => setIsOpen(true)}
                  css={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    fontFamily: "'Nunito', sans-serif",
                    color: "#fff",
                    border: `1px solid ${"#7C35AB"}`,
                    height: "52px",
                    marginBottom: "0.5rem",
                    background: "#7C35AB",
                    borderRadius: "26px",
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  PUBLISH PROGRAM
                </button>
              </div>
            </div>
          </div>
        </div>
      </HostEventLayout>
      <HostEventModal isOpen={isOpen} onRequestClose={handleModalClose} />
    </>
  );
};

export default HostEventTickets;
