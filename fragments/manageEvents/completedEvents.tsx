/** @jsxImportSource @emotion/react */

import { useMediaQuery } from "@mui/material";
import ManageEventCard from "@/components/cards/manageEventCard";
import EmptyState from "fragments/emptyState";
import { Button } from "styles/components/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getEvents } from "redux/event/thunkAction";
import { useAppSelector, useAppThunkDispatch } from "redux/store";
import { IEvent } from "types/event";
import { IUserDetails } from "types/user";
import dayjs from "dayjs";
import Loading from "utitlities/loaders/loading";
import { getTicketQuantity } from "utitlities/commonHelpers/getTicketQiuantity";

const CompletedEvents = () => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const { loading, events } = useAppSelector(({ event }) => event);
  const dispatch = useAppThunkDispatch();
  useEffect(() => {
    dispatch(getEvents(""));
  }, []);
  const [user, setUser] = useState<IUserDetails>();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") || "{}"));
  }, []);

  const [personalEvents, setPersonalEvents] = useState<IEvent[]>();
  useEffect(() => {
    const tempState: IEvent[] = [];
    events.map((event) => {
      if (event.OrganizedBy === user?._id) {
        tempState.push(event);
      }
    });
    setPersonalEvents(tempState);
  }, [events, user]);

  return (
    <div
      css={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        height: isTablet ? "72vh" : "",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {personalEvents && personalEvents.length > 0 ? (
        personalEvents.map((event, idx) => (
          <ManageEventCard
            key={idx}
            image="/assets/pngs/devFestAba.png"
            title={event.EventTitle}
            date={
              `${dayjs(event.location?.startDate).toString()}`.includes(
                "Invalid"
              )
                ? "Time: TBD"
                : `${
                    dayjs(event.location?.startDate).toString().split(" ")[0]
                  } ${
                    dayjs(event.location?.startDate).toString().split(" ")[1]
                  } ${
                    dayjs(event.location?.startDate).toString().split(" ")[2]
                  }. ${
                    dayjs(event.location?.startDate).toString().split(" ")[3]
                  }`
            }
            time={`${
              `${dayjs(event.location?.startDate).toString()}`.includes(
                "Invalid"
              )
                ? "Date: TBD"
                : `${dayjs(event.location?.startDate).format("hh:mm A")}`
            }${
              dayjs(event.location?.endDate)
                .format("hh:mm A")
                .toString()
                .includes("Invalid")
                ? ""
                : `-${dayjs(event.location?.endDate).format("hh:mm A")}`
            }`}
            type={event.category}
            attendees={`0/${getTicketQuantity(event)}`}
            id={event._id}
          />
        ))
      ) : (
        <>
          {loading === "loading" ? (
            <Loading />
          ) : (
            <div css={{ marginLeft: "10vw", marginTop: "2rem" }}>
              <EmptyState>
                <div css={{ textAlign: "center", fontSize: "0.875rem" }}>
                  <p>No events to showcase right now.</p>
                  <p>
                    Ready to fill in this space with your exciting programs?
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
      )}
    </div>
  );
};

export default CompletedEvents;
