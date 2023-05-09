/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import HostEventLayout from "./layout";
import Link from "next/link";
import { screen, theme } from "styles/theme";
import HostEventTextField from "@/components/inputs/hostEventTextField";
import Image from "next/image";
import Speaker from "@/components/cards/speaker";
import HostEventSplitInput from "@/components/inputs/HostEventSplitInput";
import HostEventModal from "@/components/modals/hostEventModal";

const HostEventTickets = () => {
  const [isOpen, setIsOpen] = useState(false);
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
              borderBottom: `1px solid ${theme.shadow.border}`,
              display: "flex",
              alignItems: "center",
              paddingInline: "3.2rem",
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
                <p>
                  Will you be giving out tickets to attendees for this event?
                </p>
              </div>
              <div
                css={{
                  display: "flex",
                  gap: "2rem",
                }}
              >
                <p
                  css={{
                    color: theme.color.primary,
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Preview
                </p>
                <Link
                  href="/dashboard"
                  css={{
                    color: theme.color.negative,
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </Link>
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
                borderRight: `1px solid ${theme.shadow.border}`,
                height: "100%",
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                [screen.lg]: {
                  overflowY: "initial",
                  borderBottom: `1px solid ${theme.shadow.border}`,
                },
                [screen.desktop]: {
                  overflowY: "initial",
                  borderBottom: `1px solid ${theme.shadow.border}`,
                },
              }}
            >
              <HostEventTextField
                label="Will you be giving out tickets to attendees for this event?"
                placeholder="Yes, attendees should purchase ticket"
                type="select"
              />
              <HostEventTextField
                label="Who want to handle the fee?"
                placeholder="Pass fees to attendees"
                type="select"
              />
              <div>
                <HostEventTextField
                  label="Can attendees ask for a refund?"
                  placeholder="Yes, ticket is refundable"
                  type="select"
                />
                <p css={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>
                  A refund will lead to you getting your payment 2 to 3 days to
                  your wallet after your events have ended.
                </p>
                <p css={{ fontSize: "0.875rem" }}>
                  A non refund, you will get your cash automatically to your
                  wallet
                </p>
              </div>
              <div>
                <HostEventTextField
                  label="Choose Ticket Type"
                  placeholder="Paid Ticket"
                  type="select"
                />
                <HostEventTextField
                  label=""
                  placeholder="Name ticket e.g VIP"
                  type="text"
                />
                <HostEventSplitInput
                  label=""
                  placeholder1="Price(NGN)"
                  placeholder2="Fee (NGN)"
                  text2="6,300"
                  input2={false}
                />
                <p css={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>
                  You will be charged N300 + 3% ticket service fee and 3%
                  payment processing fee of the price inputed per ticket sold to
                  attendees
                </p>
              </div>
              <HostEventTextField
                label=""
                placeholder="Enter ticket quantity"
                type="text"
              />
              <button
                css={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: theme.color.primary,
                  border: `1px solid ${theme.color.primary}`,
                  height: "52px",
                  marginBottom: "0.5rem",
                  background: theme.common.white,
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
                      <p css={{ fontSize: "0.75rem", color: theme.color.grey }}>
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
                      <p css={{ fontSize: "0.75rem", color: theme.color.grey }}>
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
                      <p css={{ fontSize: "0.75rem", color: theme.color.grey }}>
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
                      color: theme.color.grey,
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
                      color: theme.color.primary,
                      border: `1px solid ${theme.color.primary}`,
                      height: "43px",
                      marginBlock: "1rem",
                      background: theme.common.white,
                      borderRadius: "26px",
                      width: "65%",
                      cursor: "pointer",
                    }}
                  >
                    + Add Another Speaker
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
                      color: theme.color.primary,
                      border: `1px solid ${theme.color.primary}`,
                      height: "52px",
                      marginBottom: "0.5rem",
                      background: theme.common.white,
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
                    color: theme.common.white,
                    border: `1px solid ${theme.color.primary}`,
                    height: "52px",
                    marginBottom: "0.5rem",
                    background: theme.color.primary,
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
