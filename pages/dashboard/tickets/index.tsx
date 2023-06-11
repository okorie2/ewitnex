/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import DashboardLayout from "../layout";
import { theme } from "styles/theme";
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
            borderRight: `1px solid ${theme.shadow.border}`,
            height: "100vh",
          }}
        >
          <div
            css={{
              borderLeft: `1px solid ${theme.shadow.border}`,
              boxShadow: `0px 0px 5px ${theme.shadow.border3}`,
              marginLeft: "1.2rem",
              height: "100%",
              maxHeight: "100vh",
            }}
          >
            <div
              css={{
                height: "80px",
                borderBottom: `1px solid ${theme.shadow.border}`,
                display: "grid",
                alignItems: "center",
                paddingInline: "1.5rem",
                color: theme.common.black,
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
                  backgroundColor: theme.background.secondary2,
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
              borderBottom: `1px solid ${theme.shadow.border}`,
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "center",
              paddingInline: "1.5rem",
              paddingRight: "2.5rem",
              color: theme.common.black,
            }}
          >
            <h2>DevFest Aba</h2>
            <Image
              src={"/assets/svgs/ellipse.svg"}
              alt={""}
              width={20}
              height={20}
            />
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
        image="/assets/pngs/gdg.png"
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
