/** @jsxImportSource @emotion/react */

import React, { useRef, useState, useEffect } from "react";
import HostEventLayout from "./layout";
import Link from "next/link";
import { screen } from "styles/theme";
import Image from "next/image";
import HostEventModal from "@/components/modals/hostEventModal";
import { useMediaQuery } from "@mui/material";
import AddTicketForm from "fragments/hostEvent/addTicketForm";
import AddTicketModal from "@/components/modals/hostEventModal/addTicketModal";
import { getEventById, addTicket, publishEvent } from "redux/event/thunkAction";
import { useAppSelector, useAppThunkDispatch } from "redux/store";
import Ticket from "@/components/cards/hostEventTicket";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const HostEventTickets = () => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppThunkDispatch();
  const [formData, setFormData] = useState();
  const [addTicketModalOpen, setAddTicketModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsOpen(false);
  };
    const handleFormChange = (updatedFormData) => {
      setFormData(updatedFormData);
  };
  const newTicketRef = useRef<HTMLInputElement>(null);
  const [getTickets, setGetTickets] = useState(true);
  const [tickets, setTickets] = useState<
    {
      ticketType: string;
      ticketName: string;
      ticketPrice: number;
      ticketQty: number;
      ticketHandle: string;
      ticketRefund: string;
      _id: string;
    }[]
  >();

  const handleNewTicketClick = () => {
    if (isTablet) {
      setAddTicketModalOpen(!addTicketModalOpen);
    } else {
      if (newTicketRef.current != null) {
        newTicketRef.current.focus();
      }
    }
  };

  const [totalTickets, setTotalTickets] = useState(0);
  useEffect(() => {
    const calcTotalTickets = () => {
      if (tickets && tickets?.length > 0) {
        let total = 0;
        tickets.forEach((ticket) => {
          total += ticket.ticketQty;
        });
        setTotalTickets(total);
      } else {
        setTotalTickets(0);
      }
    };
    calcTotalTickets();
  }, [tickets]);

  const { loading } = useAppSelector(({ event }) => event);
  const [eventID, setEventID] = useState("");
  useEffect(() => {
    setEventID(localStorage.getItem("currenteventID") || "");
    setTickets(JSON.parse(sessionStorage.getItem("tickets") || "{}"));
  }, []);
  useEffect(() => {
    const getTickets = () => {
      dispatch(getEventById(eventID)).then((res) => {
        if (res.meta.requestStatus == "fulfilled") {
          const data = JSON.parse(sessionStorage.getItem("tickets") || "{}");
          let tickets = data;
          setTickets(tickets);
        }
      });
    };
    getTickets();
  }, [getTickets]);
  
  const router = useRouter()
  useEffect(() => {
    if(localStorage.getItem("currenteventID") === null ){
        toast.error("No current event")
        router.push("/dashboard/hostEvent")
    }
  },[eventID])

  const handleNext = () => {
    // localStorage.removeItem("createEventData");
    // localStorage.removeItem("eventLocationData");
    // sessionStorage.removeItem("performers");
    // sessionStorage.removeItem("tickets");
    console.log(formData)
    dispatch(addTicket({eventID, formData})).then(res => {
        if (res.meta.requestStatus == "fulfilled") {
           dispatch(publishEvent(eventID)).then(res => {
            if (res.meta.requestStatus == "fulfilled") {
              router.push('/dashboard')
            }
        })
      }
    })
    // dispatch(addTicket({eventID, formData}).then((res) => {
    //     if (res.meta.requestStatus == "fulfilled") {
    //       const data = JSON.parse(sessionStorage.getItem("tickets") || "{}");
    //       let tickets = data;
    //       setTickets(tickets);
    //     }
    //   }));
    // };
    // setIsOpen(true);
  };
  return (
    <>
      <AddTicketModal
        isOpen={addTicketModalOpen}
        onRequestClose={() => setAddTicketModalOpen(!addTicketModalOpen)}
        ticketRef={newTicketRef}
        setGetTickets={setGetTickets}
      />
      <HostEventLayout>
        <div css={{ width: isTablet ? "100vw" : "" }}>
          <div
            css={{
              height: isTablet ? "" : "110px",
              borderBottom: isTablet ? "" : `1px solid ${"#E4E4E4"}`,
              display: "flex",
              alignItems: "center",
              paddingInline: isTablet ? "1rem" : "2.5rem",
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
              {!isTablet && (
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
              )}
            </div>
          </div>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              height: isTablet ? "72vh" : "calc(100vh - 150px)",
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
            {!isTablet && (
              <AddTicketForm
                ticketRef={newTicketRef}
                setGetTickets={setGetTickets}
                onFormChange={handleFormChange}
              />
            )}
            <div
              css={{
                padding: isTablet ? "1rem" : " 1.5rem 2.5rem",
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
                  {tickets && tickets.length > 0 ? (
                    tickets?.map((ticket) => (
                      <Ticket
                        key={ticket._id}
                        ticketName={ticket.ticketName}
                        ticketPrice={ticket.ticketPrice}
                        ticketQty={ticket.ticketQty}
                        ticketRefund={""}
                        id={ticket._id}
                        setGetTickets={setGetTickets}
                      />
                    ))
                  ) : (
                    <></>
                  )}
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
                  <p css={{ fontSize: "0.875rem", fontWeight: "500" }}>
                    {totalTickets}
                  </p>
                  {isTablet && 
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
                    onClick={handleNewTicketClick}
                  >
                    {tickets && tickets.length < 1
                      ? "Add Ticket"
                      : " + Add Another Ticket"}
                  </button>
}
                </div>
              </div>
              <div
                css={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr",
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
                  onClick={handleNext}
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
