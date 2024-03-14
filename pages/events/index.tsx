/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import EventCard from "@/components/cards/eventCard";
import PublicSiteFooter from "@/components/footer/publicSite";
import Navbar from "@/components/header";
import { Lines } from "@/components/lines";
import { screen } from "styles/theme";
import Right from "public/assets/svgs/right_ar.svg";
import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";
import Layout from "./layout";
import { useAppSelector, useAppThunkDispatch } from "redux/store";
import { getEvents } from "redux/event/thunkAction";
import { IEvent } from "types/event";
import { formatNumber } from "utitlities/commonHelpers/numberFormatter";
import dayjs from "dayjs";
import EmptyState from "fragments/emptyState";
import { Button } from "styles/components/button";
import Link from "next/link";
import { TailSpin } from "react-loader-spinner";
import { useRouter } from "next/router";
import { getOrganizer } from "utitlities/commonHelpers/getOrganizer";
import EventJson from "../../utitlities/json/eventsData.json";
import { H1, H2, H3, H4 } from "styles/components/typography";

export default function Index() {
  const isTablet = useMediaQuery("(max-width: 900px)");

  const ticketRange = (event: IEvent) => {
    const tickets = event.tickets;
    const ticketPriceArray: number[] = [];

    if (tickets && tickets.length < 1) {
      return "Free";
    } else {
      if (tickets && tickets.length === 1)
        return `$${formatNumber(tickets[0].ticketPrice)}`;
      tickets &&
        tickets.map((ticket) => {
          ticketPriceArray.push(ticket.ticketPrice);
        });
      ticketPriceArray.sort((a, b) => a - b);
      return `${
        ticketPriceArray[0] === 0
          ? "Free"
          : `$${formatNumber(ticketPriceArray[0])}`
      } - $${formatNumber(ticketPriceArray[ticketPriceArray.length - 1])}`;
    }
  };

  const { loading, events } = useAppSelector(({ event }) => event);
  const [onlineEvents, setOnlineEvents] = useState<IEvent[] | []>([]);
  useEffect(() => {
    let temp: IEvent[] | [] = [];
    if (events) {
      temp = events.filter((event) => event.location?.type === "online");
    }
    setOnlineEvents(temp);
  }, [events]);

  const dispatch = useAppThunkDispatch();
  useEffect(() => {
    dispatch(getEvents("All"));
  }, []);

  return (
    <div>
      <Navbar />
      <Layout>
        <div
          css={{
            padding: "4% 2.5%",
            display: isTablet ? "block" : "none",
            flexDirection: isTablet ? "column" : "row",
            gap: isTablet ? "0" : "15px",
            width: "100%",
          }}
        >
          <div css={{ display: "flex", marginBottom: "0.8rem", gap: "5px" }}>
            <p>All Events</p>
            <div>
              <Image src={Right} alt="right" />
            </div>
          </div>
          <div>
            <p css={{ fontSize: "16px" }}>
              <b>{events?.length || "0"}</b>
            </p>
            <p css={{ color: "#707070" }}>events found</p>
          </div>
        </div>
        <div
          css={{
            display: "flex",
            width: isTablet ?  "90%" : "80%",
          }}
        >
          <>
            {/* {events.length < 1 && (
              <>
                {loading === "loading" ? (
                  <>
                    <div
                      css={{
                        height: "65vh",
                        width: "80vw",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TailSpin color={"#7c35ab"} width={100} height={100} />
                    </div>
                  </>
                ) : (
                  <div css={{ textAlign: "center", width: "100%" }}>
                    <EmptyState>
                      <div css={{ textAlign: "center", fontSize: "0.75rem" }}>
                        <p>No events to showcase right now.</p>
                        <p>
                          Ready to fill in this space with your exciting
                          programs?
                        </p>
                      </div> 
                      <Link href="/dashboard/hostEvent">
                        <Button height="52px" fontSize="1rem" width="16rem">
                          CREATE YOUR EVENT
                        </Button>
                      </Link>
                    </EmptyState>
                  </div>
                )}
              </>
            )} */}

            <div
              css={{
                display: "flex",
                width: "100%",
                gap: "1rem",
              }} 
            >
              <div
                css={{
                  display: "flex",
                  flexDirection: isTablet ? "column" : "row",
                  gap: isTablet ? "1rem" : "0.125rem",
                  justifyContent: "space-between",
                  flexWrap: isTablet ? "nowrap" : "wrap",
                  marginTop: isTablet ? "1.5rem" : "",
                  paddingInline: "2px",
                }}
              >
                {EventJson.map((data) => (
                  <div
                  key={data.id}
                    css={{
                      width: isTablet ? "100%" : "32%",
                      [screen.desktop]: {
                        width: isTablet ? "100%" : "32%",
                      },
                    }}
                  >
                    <EventCard
                      label={data.label}
                      attendees={data.attendees}
                      date={data.date}
                      id={data.id}
                      eventCode={data.eventCode}
                      location={data.location}
                      organizer={data.organizer}
                      priceRange={data.priceRange}
                      title={data.title}
                      img={data.img}
                      favourite={data.favourite}
                    />
                  </div>
                ))}
              </div>
              <div
                css={{
                  display: isTablet ? "none" : "block",
                  width: '20%'
                }}
              >
                <div
                  css={{
                    display: "flex",
                    marginBottom: "0.8rem",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <p>All Events</p>
                  <Image src={Right} alt="right" />
                </div>
                <div>
                  <p css={{ fontSize: "16px" }}>
                    <b>123456</b>
                  </p>
                  <p css={{ color: "#707070" }}>events found</p>
                </div>
              </div>
            </div>

            {/* data from events endpoint */}
            {/* {events &&
                events.map((event: IEvent, index) => (
                  <div key={index}>
                    <EventCard
                      label={event.category}
                      attendees="0"
                      date={
                        `${dayjs(
                          event.location?.startDate
                        ).toString()}`.includes("Invalid")
                          ? "Date: TBD"
                          : `${
                              dayjs(event.location?.startDate)
                                .toString()
                                .split(" ")[1]
                            } ${
                              dayjs(event.location?.startDate)
                                .toString()
                                .split(" ")[2]
                            }. ${
                              dayjs(event.location?.startDate)
                                .toString()
                                .split(" ")[3]
                            },  ${dayjs(event.location?.startDate).format(
                              "hh:mm A"
                            )}`
                      }
                      id={event?._id}
                      eventCode={event?.eventCode}
                      location={
                        event.location?.type === "live"
                          ? event.location?.searchLocation ||
                            event.location?.enterLocation
                          : `${event.location?.selectHost}` === "undefined"
                          ? "Venue: TBD"
                          : `${event.location?.selectHost}`
                      }
                      organizer={getOrganizer(event.OrganizedBy)}
                      priceRange={ticketRange(event)}
                      title={event.EventTitle}
                      img="/assets/pngs/card_2.png"
                      favourite={false}
                    />
                  </div>
                ))} */}
            <Box height={48} />
          </>
        </div>
      </Layout>
      <Lines />
      <PublicSiteFooter />
    </div>
  );
}
