/** @jsxImportSource @emotion/react */

import React, { useEffect } from "react";
import EventTicket from "@/components/tickets/eventTicket";
import { H3 } from "styles/components/typography";
import { screen } from "styles/theme";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useAppSelector, useAppThunkDispatch } from "redux/store";
import { getEventById } from "redux/event/thunkAction";
import dayjs from "dayjs";
import EmptyState from "fragments/emptyState";

const EventTickets = () => {
  const router = useRouter();
  const loggedIn = router.pathname === "/dashboard/programs/[id]";
  const isTablet = useMediaQuery("(max-width: 900px)");
  const { id } = router.query;

  const { loading, event } = useAppSelector(({ event }) => event);
  const dispatch = useAppThunkDispatch();
  useEffect(() => {
    dispatch(getEventById(id?.toString() || ""));
  }, []);

  return (
    <div
      css={{
        boxShadow: `0px 0px 10px ${"#0000001A"}`,
        color: "#000",
        borderRadius: "10px",
        padding: "1.25rem 1.25rem 2rem",
        width: `${isTablet ? "100vw" : loggedIn ? "70%" : "60%"}`,
        marginInline: "auto",
        position: "relative",
        top: isTablet ? "0" : "3.5rem",
        marginBottom: isTablet ? "-5rem" : "",
      }}
    >
      <H3
        css={{
          marginBottom: "1.25rem",
          [screen.desktopLg]: {
            textAlign: isTablet ? "left" : "center",
          },
        }}
      >
        Select a ticket to purchase
      </H3>
      <div
        css={{
          display: isTablet ? "flex" : "grid",
          flexDirection: "column",
          gridTemplateColumns:  "1fr 1fr",
          gap: "1rem",
          alignItems:"center"
        }}
      >
        {event.tickets && event.tickets.length > 0 ? (
          event.tickets?.map((ticket) => {
            return (
              <div key={ticket._id}>
                <EventTicket
                  title={event.EventTitle}
                  eventID={id?.toString() || ""}
                  label={event.category}
                  date={
                    `${dayjs(event.location?.startDate).toString()}
                  `.includes("Invalid")
                      ? "Date: TBD"
                      : `${
                          dayjs(event.location?.startDate)
                            .toString()
                            .split(" ")[1]
                        }
                  ${
                    dayjs(event.location?.startDate).toString().split(" ")[2]
                  }.${
                          dayjs(event.location?.startDate)
                            .toString()
                            .split(" ")[3]
                        },
                  ${dayjs(event.location?.startDate).format("hh:mm A")}`
                  }
                  location={
                    event.location?.type === "live"
                      ? event.location?.searchLocation ||
                        event.location?.enterLocation
                      : `${event.location?.selectHost}` === "undefined"
                      ? "Venue: TBD"
                      : `${event.location?.selectHost}`
                  }
                  type={ticket.ticketName}
                  price={
                    ticket.ticketPrice === 0
                      ? "Free"
                      : `N ${ticket.ticketPrice}`
                  }
                  id={ticket._id}
                />
              </div>
            );
          })
        ) : (
          <div css = {{marginLeft:"", textAlign:"center"}}>
            <EmptyState>
              <p>No tickets were created for this event</p>
            </EmptyState>
            </div>
        )}
      </div>
    </div>
  );
};

export default EventTickets;
