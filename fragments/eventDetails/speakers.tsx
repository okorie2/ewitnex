/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useAppSelector, useAppThunkDispatch } from "redux/store";
import { getEventById } from "redux/event/thunkAction";
import Loader from "utitlities/loaders";
import EmptyState from "fragments/emptyState";

const EventSpeakers = () => {
  const router = useRouter();
  const loggedIn = router.pathname === "/dashboard/programs/[id]";
  const isTablet = useMediaQuery("(max-width: 900px)");
  const { id } = router.query;

  const { loading, currentEvent: event } = useAppSelector(({ event }) => event);
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
        height: `${loggedIn ? "70vh" : "60vh"}`,
        marginBottom: isTablet ? "-5rem" : "",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        ">div": {
          display: isTablet ? "flex" : "block",
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      {event.performers && event.performers.length > 0 ? (
        event.performers?.map((performer) => {
          return (
            <div key={performer.id}>
              <div
                css={{
                  width: "185px",
                  height: "185px",
                  borderRadius: "50%",
                  position: "relative",
                }}
              >
                <Image src={performer.imageUrl || ""} alt="speaker-img" fill />
              </div>
              <div css={{ marginTop: "0.7rem" }}>
                <h4 css={{ fontSize: "1rem", fontWeight: "700" }}>
                  {performer.name}
                </h4>
                <div
                  css={{
                    display: "flex",
                    flexDirection: "row",
                    fontWeight: "600",
                    fontSize: "0.875rem",
                    alignItems: "center",
                  }}
                >
                  <p>{performer.title}</p>
                  <div
                    css={{
                      background: "#000",
                      height: "0.3rem",
                      width: "0.3rem",
                      borderRadius: "50%",
                      marginInline: "0.4rem",
                    }}
                  ></div>
                  <p css={{ fontWeight: "400" }}>{performer.role}</p>
                </div>
              </div>
              <p
                css={{
                  marginTop: "0.5rem",
                  lineHeight: "21px",
                  fontSize: "0.875rem",
                }}
              >
                {performer.about}
              </p>
              <hr
                css={{
                  borderTop: `1px solid ${"#707070"}`,
                  marginBlock: "1.5rem",
                  opacity: "0.5",
                }}
              />
            </div>
          );
        })
      ) : (
        <>
          {loading === "loading" ? (
            <div css = {{display:"grid", placeItems:"center"}}>
            <Loader />
            </div>
          ) : (
            <div css = {{marginLeft:"", textAlign:"center"}}>
            <EmptyState>
              <p>This event does not have any performers</p>
            </EmptyState>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default EventSpeakers;
