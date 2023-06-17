/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import DashboardLayout from "../layout";
import {
  activeButtonStyle,
  inactiveButtonStyle,
} from "styles/components/ButtonToggleStyles";
import TicketCard from "@/components/cards/ticketCard";
import Ticket from "@/components/tickets/Ticket";
import Image from "next/image";

const Tickets = () => {
  const [showUpcoming, setShowUpcoming] = useState(true);
  const [showPast, setShowPast] = useState(false);
  const [activeTab, setActiveTab] = useState("upcoming");
  const [activeCard, setActiveCard] = useState("");
  const [isMenuOpen , setIsMenuOpen] = useState(false)
  
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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

  const handleActiveCard = (id: string) => {
    setActiveCard(id);
  };
  console.log(activeCard);
  return (
    <DashboardLayout>
      <div css={{ display: "grid", gridTemplateColumns: "40% 60%" }}>
        <div
          css={{
            borderRight: `1px solid ${"#E4E4E4"}`,
            height: "100vh",
          }}
        >
          <div
            css={{
              borderLeft: `1px solid ${"#E4E4E4"}`,
              boxShadow: `0px 0px 5px ${"#00000029"}`,
              marginLeft: "1.2rem",
              height: "100%",
              maxHeight: "100vh",
            }}
          >
            <div
              css={{
                height: "80px",
                borderBottom: `1px solid ${"#E4E4E4"}`,
                display: "grid",
                alignItems: "center",
                paddingInline: "1.5rem",
                color: "#000",
              }}
            >
              <h2>Tickets</h2>
            </div>
            <div
              css={{
                height: "calc(100vh - 80px)",
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                padding: "1.5rem",
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
                  activeCard={activeCard}
                  setAsActiveCard={handleActiveCard}
                />
              ) : (
                <UpcomingTicketTab
                  activeCard={activeCard}
                  setAsActiveCard={handleActiveCard}
                />
              )}
            </div>
          </div>
        </div>
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
            <h2>DevFest Aba</h2>
            <div css={{ cursor: "pointer", position: "relative" }} onClick={handleMenuOpen}>
            <Image
              src={"/assets/svgs/ellipse.svg"}
              alt={""}
              width={20}
              height={20}
            />
            { isMenuOpen &&
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
                <div css={{ width: "80%", marginTop: "1.2rem" , ":hover": {fontWeight: "bold"}, display:"flex", gap: "10%"}}>
                  <Image src={"/assets/svgs/share.svg"} alt={""} width={20} height={20}/>
                  <p>Transfer Ticket</p>
                </div>
                <div css={{ width: "80%", marginTop: "1.2rem", ":hover": {fontWeight: "bold"}, display:"flex", gap: "10%"}}>
                  <Image src={"/assets/svgs/mail.svg"} alt={""} width={20} height={20}/>
                  <p>Contact Organizer</p>
                </div>
                <div css={{ width: "80%", marginTop: "1.2rem", ":hover": {fontWeight: "bold"}, display:"flex", gap: "10%"}}>
                  <Image src={"/assets/svgs/report-flag.svg"} alt={""} width={20} height={20} />
                  <p>Report Event</p>
                </div>
              </div>
              }
            </div>
          </div>
          <div
            css={{
              height: "calc(100vh - 80px)",
              padding: "1.5rem",
              overflowY: "scroll",
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
              eventID={activeCard}
              refundable={true}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Tickets;

const UpcomingTicketTab = ({
  activeCard,
  setAsActiveCard,
}: {
  activeCard: string;
  setAsActiveCard: (id: string) => void;
}) => {
  return (
    <div>
      <TicketCard
        image="/assets/pngs/devFestAba.png"
        title="DevFest Aba"
        time=" 10:00 AM"
        day="Sat"
        date="25"
        month="NOV"
        type="Tech"
        address="Holkins Hotel, 22 Faulks Road, Aba, Abia"
        id="Tec542445"
        active={activeCard}
        onClick={setAsActiveCard}
      />
      <TicketCard
        image="/assets/pngs/fionaGabe.png"
        title="DevFest Abuja"
        time=" 10:00 AM"
        day="Sat"
        date="25"
        month="NOV"
        type="Conference"
        address="Sheraton Hotel, Phase 1, Wuse, Abuja"
        id="Tec542446"
        active={activeCard}
        onClick={setAsActiveCard}
      />
    </div>
  );
};

const PreviousTicketTab = ({
  activeCard,
  setAsActiveCard,
}: {
  activeCard: string;
  setAsActiveCard: (id: string) => void;
}) => {
  return (
    <div>
      <TicketCard
        image="/assets/pngs/devFestAba.png"
        title="DevFest Aba"
        time=" 10:00 AM"
        day="Sat"
        date="25"
        month="NOV"
        type="Tech"
        address="Holkins Hotel, 22 Faulks Road, Aba, Abia"
        id="Tec542445"
        active={activeCard}
        onClick={setAsActiveCard}
      />
    </div>
  );
};
