/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import DashboardLayout from "../layout/layout";
import {
  activeButtonStyle,
  inactiveButtonStyle,
} from "styles/components/ButtonToggleStyles";
import TicketCard from "@/components/cards/ticketCard";
import Ticket from "@/components/tickets/Ticket";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import ContactOrganizerModal from "@/components/modals/programModal/contactOrganizerModal";
import ReportEventModal from "@/components/modals/programModal/reportEventModal";
import Link from "next/link";
import TicketDetailsFragment from "fragments/tickets/ticketDetailsFragment";
import TicketDetailsModal from "@/components/modals/tickets/ticketDetails";
import EmptyState from "fragments/emptyState";
import { useRouter } from "next/router";

const Tickets = () => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [showUpcoming, setShowUpcoming] = useState(true);
  const [showPast, setShowPast] = useState(false);
  const [activeTab, setActiveTab] = useState("upcoming");
  const [activeCardID, setActiveCardID] = useState("");
  const [activeMenuBar, setActiveMenuBar] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ticketDetailsOpen, setTicketDetailsOpen] = useState(false);
  const router = useRouter();

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleShowUpcoming = () => {
    setShowUpcoming(true);
    setShowPast(false);
    setActiveTab("upcoming");
  };
  const handleShowPast = () => {
    setShowPast(true);
    setShowUpcoming(false);
    setActiveTab("past");
  };

  const handleActiveCardID = (id: string) => {
    setActiveCardID(id);
    if (isTablet) {
      setTicketDetailsOpen(!ticketDetailsOpen);
    }
  };
  console.log(activeCardID);
  const [contactOrganizerModalOpen, setContactOrganizerModalOpen] =
    useState(false);
  const [reportEventModalOpen, setReportEventModalOpen] = useState(false);

  useEffect(() => {
    if (isTablet) {
      const refuseBackButton = () => {
        window.onpopstate = () => {
          router.push(router.pathname);
        };
      };
      if (ticketDetailsOpen) {
        refuseBackButton();
      } else {
        window.onpopstate = () => {
          router.push("/dashboard/profile");
        };
      }
    }
  }, [ticketDetailsOpen, isTablet, router]);
  return (
    <>
      <ContactOrganizerModal
        isOpen={contactOrganizerModalOpen}
        onRequestClose={() =>
          setContactOrganizerModalOpen(!contactOrganizerModalOpen)
        }
      />
      <ReportEventModal
        isOpen={reportEventModalOpen}
        onRequestClose={() => setReportEventModalOpen(!reportEventModalOpen)}
        eventID={activeCardID}
      />
      <TicketDetailsModal
        isOpen={ticketDetailsOpen}
        onRequestClose={() => setTicketDetailsOpen(!ticketDetailsOpen)}
        selectedEvent={activeCardID}
      />
      <DashboardLayout>
        <div
          css={{
            display: "grid",
            gridTemplateColumns: isTablet ? "1fr" : "40% 60%",
          }}
        >
          {isMenuOpen && (
            <div
              css={{
                height: "100vh",
                width: "calc(100vw - 250px)",
                right: 0,
                zIndex: "1",
                position: "absolute",
                cursor: "pointer",
              }}
              onClick={handleMenuOpen}
            ></div>
          )}
          <div
            css={{
              borderRight: isTablet ? "" : `1px solid ${"#E4E4E4"}`,
              height: "100vh",
            }}
          >
            <div
              css={{
                borderLeft: isTablet ? "" : `0.5px solid ${"#E4E4E4"}`,
                marginLeft: isTablet ? "" : "1.2rem",
                height: "100%",
                maxHeight: "100vh",
              }}
            >
              <div
                css={{
                  height: "80px",
                  borderBottom: `1px solid ${"#E4E4E4"}`,
                  display: isTablet ? "flex" : "grid",
                  alignItems: "center",
                  paddingInline: "1.5rem",
                  color: "#000",
                  gap: isTablet ? "1rem" : "",
                }}
              >
                {isTablet && (
                  <Link href="/dashboard/profile">
                    <div css={{ display: "flex" }}>
                      <Image
                        src="/assets/svgs/back.svg"
                        alt="back_arrow"
                        width={22}
                        height={15}
                      />
                    </div>
                  </Link>
                )}
                <h2>Tickets</h2>
              </div>
              <div
                css={{
                  height: "calc(100vh - 80px)",
                  overflowY: "scroll",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                  padding: isTablet ? "1rem" : "1.5rem",
                  // paddingRight: "1.5rem",

                  // background: "pink",
                }}
              >
                <div
                  css={{
                    borderRadius: "16px",
                    backgroundColor: "#F2F7FB",
                    width: "100%",
                    marginInline: "auto",
                    marginBottom: "1rem",
                    height: "2.5rem",
                    display: "flex",
                    alignItems: "center",
                    padding: "0.2rem",
                  }}
                >
                  <button
                    onClick={handleShowUpcoming}
                    css={
                      activeTab === "upcoming"
                        ? activeButtonStyle
                        : inactiveButtonStyle
                    }
                  >
                    Upcoming
                  </button>
                  <button
                    onClick={handleShowPast}
                    css={
                      activeTab === "past"
                        ? activeButtonStyle
                        : inactiveButtonStyle
                    }
                  >
                    Past Tickets
                  </button>
                </div>

                {activeTab === "past" ? (
                  <PreviousTicketTab
                    activeCardID={activeCardID}
                    setAsActiveCardID={handleActiveCardID}
                  />
                ) : (
                  <UpcomingTicketTab
                    activeCardID={activeCardID}
                    setAsActiveCardID={handleActiveCardID}
                  />
                )}
              </div>
            </div>
          </div>
          {!isTablet && (
            <div
              css={{
                height: "100vh",
              }}
            >
              <div
                css={{
                  height: "80px",
                  borderBottom: `1px solid ${"#E4E4E4"}`,
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  alignItems: "center",
                  paddingInline: "1.5rem",
                  paddingRight: "2.5rem",
                  color: "#000",
                }}
              >
                <h2>{/* DevFest Aba */}</h2>
                <div
                  css={{ cursor: "pointer", position: "relative" }}
                  onClick={handleMenuOpen}
                >
                  <Image
                    src={"/assets/svgs/ellipse.svg"}
                    alt={""}
                    width={20}
                    height={20}
                  />
                  {isMenuOpen && (
                    <div
                      css={{
                        position: "absolute",
                        background: "#fff",
                        height: 155,
                        width: 230,
                        left: "-1000%",
                        right: "0",
                        zIndex: "2",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        borderRadius: "8px",
                        border: "1px solid #C0C0C0",
                      }}
                    >
                      <div
                        css={{
                          width: "80%",
                          marginTop: "1.2rem",
                          ":hover": {
                            color: "#7c35ab",
                            fontWeight: "500",
                          },
                          display: "flex",
                          gap: "10%",
                        }}
                        onMouseEnter={() => setActiveMenuBar("share")}
                        onMouseLeave={() => setActiveMenuBar("")}
                      >
                        {activeMenuBar === "share" ? (
                          <Image
                            src={"/assets/svgs/share-purple.svg"}
                            alt={""}
                            width={20}
                            height={20}
                            priority
                          />
                        ) : (
                          <Image
                            src={"/assets/svgs/share.svg"}
                            alt={""}
                            width={20}
                            height={20}
                          />
                        )}
                        <p>Transfer Ticket</p>
                      </div>
                      <div
                        css={{
                          width: "80%",
                          marginTop: "1.2rem",
                          ":hover": { color: "#7c35ab", fontWeight: "500" },
                          display: "flex",
                          gap: "10%",
                        }}
                        onClick={() => setContactOrganizerModalOpen(true)}
                        onMouseEnter={() => setActiveMenuBar("contact")}
                        onMouseLeave={() => setActiveMenuBar("")}
                      >
                        {activeMenuBar === "contact" ? (
                          <Image
                            src={"/assets/svgs/mail-purple.svg"}
                            alt={""}
                            width={20}
                            height={20}
                          />
                        ) : (
                          <Image
                            src={"/assets/svgs/mail.svg"}
                            alt={""}
                            width={20}
                            height={20}
                          />
                        )}
                        <p>Contact Organizer</p>
                      </div>
                      <div
                        css={{
                          width: "80%",
                          marginTop: "1.2rem",
                          ":hover": { color: "#7c35ab", fontWeight: "500" },
                          display: "flex",
                          gap: "10%",
                        }}
                        onClick={() =>
                          setReportEventModalOpen(!reportEventModalOpen)
                        }
                        onMouseEnter={() => setActiveMenuBar("report")}
                        onMouseLeave={() => setActiveMenuBar("")}
                      >
                        {activeMenuBar === "report" ? (
                          <Image
                            src={"/assets/svgs/report-flag-purple.svg"}
                            alt={""}
                            width={20}
                            height={20}
                            priority
                          />
                        ) : (
                          <Image
                            src={"/assets/svgs/report-flag.svg"}
                            alt={""}
                            width={20}
                            height={20}
                          />
                        )}
                        <p>Report Event</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <TicketDetailsFragment selectedEvent={activeCardID} />
            </div>
          )}
        </div>
      </DashboardLayout>
    </>
  );
};

export default Tickets;

const UpcomingTicketTab = ({
  activeCardID,
  setAsActiveCardID,
}: {
  activeCardID: string;
  setAsActiveCardID: (id: string) => void;
}) => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  return (
    <div css={{ paddingBottom: isTablet ? "5rem" : "" }}>
      {/* <TicketCard
        image="/assets/pngs/devFestAba.png"
        title="DevFest Aba"
        time=" 10:00 AM"
        day="Sat"
        date="25"
        month="NOV"
        type="Tech"
        address="Holkins Hotel, 22 Faulks Road, Aba, Abia"
        id="Tec542445"
        active={activeCardID}
        onClick={setAsActiveCardID}
      /> */}
      <div css={{ marginLeft:isTablet ? "1rem": "-10vw", marginTop: "4vh" }}>
        <EmptyState>
          <div css={{ textAlign: "center", fontSize: "0.875rem" }}>
            <p>You do not have any upcoming tickets</p>
          </div>
          <Link href="/dashboard/hostEvent"></Link>
        </EmptyState>
      </div>
      <br />
    </div>
  );
};

const PreviousTicketTab = ({
  activeCardID,
  setAsActiveCardID,
}: {
  activeCardID: string;
  setAsActiveCardID: (id: string) => void;
}) => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  return (
    <div>
      {/* <TicketCard
        image="/assets/pngs/devFestAba.png"
        title="DevFest Aba"
        time=" 10:00 AM"
        day="Sat"
        date="25"
        month="NOV"
        type="Tech"
        address="Holkins Hotel, 22 Faulks Road, Aba, Abia"
        id="Tec542445"
        active={activeCardID}
        onClick={setAsActiveCardID}
      />*/}
      <div css={{ marginLeft: isTablet ? "1rem":"-10vw", marginTop: "4vh" }}>
        <EmptyState>
          <div css={{ textAlign: "center", fontSize: "0.875rem" }}>
            <p>You do not have any previous tickets</p>
          </div>
          <Link href="/dashboard/hostEvent"></Link>
        </EmptyState>
      </div>
    </div>
  );
};
