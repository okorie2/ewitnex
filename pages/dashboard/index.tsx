/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import DashboardLayout from "./layout/layout";
import Image from "next/image";
import { ButtonFormFilled } from "styles/components/button";
import DashboardHeader from "@/components/header/dashboardHeader";
import FeedsCard from "@/components/cards/feedsCard";
import { Box, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { useAppSelector, useAppThunkDispatch } from "redux/store";
import { IEvent } from "types/event";
import { getEvents } from "redux/event/thunkAction";
import { TailSpin } from "react-loader-spinner";
import dayjs from "dayjs";
import { getOrganizer } from "utitlities/commonHelpers/getOrganizer";
import { formatNumber } from "utitlities/commonHelpers/numberFormatter";

const Feeds = () => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const { loading, events } = useAppSelector(({ event }) => event);
  const [onlineEvents, setOnlineEvents] = useState<IEvent[] | []>([]);

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
  
  useEffect(() => {
    let temp: IEvent[] | [] = [];
    if(events){
      temp = events.filter((event) => event.location?.type === "online");
    }
    setOnlineEvents(temp);
  }, [events]);

  const dispatch = useAppThunkDispatch();
  useEffect(() => {
    dispatch(getEvents('All'));
  }, []);
  return (
    <DashboardLayout>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: isTablet ? "1fr":"2.7fr 1.3fr",
          height: isTablet ? "80vh" : "100%",
          maxHeight: "100vh",
          marginTop: isTablet ? "5rem" : "",
        }}
      >
        <div
          css={{
            borderRight: `1px solid ${"#E4E4E4"}`,
            height: "100%",
          }}
        >
          <DashboardHeader />
          <div
            css={{
              color: "#000",
              display: "grid",
              placeContent: "center",
              height: "calc(100% - 80px)",
            }}
          >
            <div
              css={{
                width: isTablet ? "90%":"65%",
                marginInline: "auto",
                textAlign: "center",
              }}
            >
              <Image
                src="/assets/svgs/timesand.svg"
                alt=""
                width="21"
                height="26"
              />
              <p css={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                Coming Soon...
              </p>
              <p css={{ marginBlock: isTablet ? "1.5rem":"1rem" }}>
                Check back later as this page feature is currently on
                development
              </p>
              <Link href="/dashboard/programs">
                <ButtonFormFilled>GO TO PROGRAMS</ButtonFormFilled>
              </Link>
            </div>
          </div>
        </div>
        {!isTablet && (
          <div
            css={{
              padding: "1rem 1.5rem",
              maxWidth: "500px",
            }}
          >
            <div
              css={{
                marginBlock: "0.5rem",
              }}
            >
              <div
                css={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p
                  css={{
                    fontSize: "1.25rem",
                    color: "#707070",
                    fontWeight: "bold",
                  }}
                >
                  Suggested Events
                </p>
                <p
                  css={{
                    fontSize: "1.125rem",
                    color: "#7C35AB",
                    fontWeight: "bold",
                  }}
                >
                  See All
                </p>
              </div>
              <div
                css={{
                  display: "flex",
                  gap: "1.5rem",
                  overflowX: "scroll",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                  padding: "1rem 0.2rem 1rem 0",
                }}
              >
                <>
                    {events.length < 1 && (
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
                              <TailSpin
                                color={"#7c35ab"}
                                width={20}
                                height={20}
                              />
                            </div>
                          </>
                        ) : (
                          <div css={{ textAlign: "center", width: "100%" }}>
                            <p>No events to show</p>
                          </div>
                        )}
                      </>
                    )}
                    {events &&
                      events.map((event: IEvent, index) => (
                        <div key={index}>
                          <FeedsCard
                            label={event.category}
                            attendees="0"
                            id={event?._id}
                            eventCode={event?.eventCode}
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
                            location={
                              event.location?.type === "live"
                                ? event.location?.searchLocation ||
                                  event.location?.enterLocation
                                : `${event.location?.selectHost}` ===
                                  "undefined"
                                ? "Venue: TBD"
                                : `${event.location?.selectHost}`
                            }
                            organizer={getOrganizer(event.OrganizedBy)}
                            priceRange={ticketRange(event)}
                            title={event.EventTitle}
                            img="/assets/pngs/card_img.png"
                          />
                        </div>
                      ))}
                    <Box height={48} />
                  </>
              </div>
            </div>
            <div
              css={{
                marginBlock: "0.5rem",
              }}
            >
              <div css={{ display: "flex", justifyContent: "space-between" }}>
                <p
                  css={{
                    fontSize: "1.25rem",
                    color: "#707070",
                    fontWeight: "bold",
                  }}
                >
                  Online Events
                </p>
                <p
                  css={{
                    fontSize: "1.125rem",
                    color: "#7C35AB",
                    fontWeight: "bold",
                  }}
                >
                  See All
                </p>
              </div>
              <div
                css={{
                  display: "flex",
                  gap: "1.5rem",
                  overflowX: "scroll",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                  padding: "1rem 0.2rem 1rem 0",
                }}
              >
                {onlineEvents.length < 1 && (
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
                            <TailSpin
                              color={"#7c35ab"}
                              width={20}
                              height={20}
                            />
                          </div>
                        </>
                      ) : (
                        <div css={{ textAlign: "center", width: "100%" }}>
                          <p>No events to show</p>
                        </div>
                      )}
                    </>
                  )}
                  {onlineEvents &&
                    onlineEvents.map((event: IEvent, index) => (
                      <div key={index}>
                        <FeedsCard
                          label={event.category}
                          attendees="0"
                          id={event?._id}
                          eventCode={event?.eventCode}
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
                          img="/assets/pngs/card_img.png"
                        />
                      </div>
                    ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Feeds;
