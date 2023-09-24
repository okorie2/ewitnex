/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import HostEventLayout from "./layout";
import Link from "next/link";
import { screen } from "styles/theme";
import Image from "next/image";
import HostEventModal from "@/components/modals/hostEventModal";
import { useMediaQuery } from "@mui/material";
import AddTicketForm from "fragments/hostEvent/addTicketForm";
import AddTicketModal from "@/components/modals/hostEventModal/addTicketModal";

const HostEventTickets = () => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [isOpen, setIsOpen] = useState(false);
  const [addTicketModalOpen, setAddTicketModalOpen] = useState(false)
  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
    <AddTicketModal isOpen={addTicketModalOpen} onRequestClose={() => setAddTicketModalOpen(!addTicketModalOpen)} />
      <HostEventLayout>
        <div css={{ width: isTablet ? "100vw" : "" }}>
          <div
            css={{
              height: isTablet ? "" :"110px",
              borderBottom: isTablet ? "" :`1px solid ${"#E4E4E4"}`,
              display: "flex",
              alignItems: "center",
              paddingInline:isTablet ? "1rem" : "2.5rem",
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
               {!isTablet && <div
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
                </div>}
            </div>
          </div>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              height: isTablet ? "72vh":"calc(100vh - 150px)",
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
            {!isTablet && <AddTicketForm /> }
            <div
              css={{
                padding: isTablet ? "1rem":" 1.5rem 2.5rem",
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
                    onClick = {() => setAddTicketModalOpen(!addTicketModalOpen)}
                  >
                    + Add Another Ticket
                  </button>
                </div>
              </div>
              <div
                css={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: isTablet ? "1fr":"1fr 1fr",
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
