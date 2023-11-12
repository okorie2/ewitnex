/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useAppSelector, useAppThunkDispatch } from "redux/store";
import { getEventById } from "redux/event/thunkAction";

const EventSpeakers = () => {
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
        height: `${loggedIn ? "70vh" : "60vh"}`,
        marginBottom: isTablet ? "-5rem" : "",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        div: {
          display: isTablet ? "flex" : "block",
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      {event.performers && event.performers.length > 0 ? (
        event.performers?.map((performer) => {
          return (
            <div key={performer._id}>
              <div
                css={{
                  width: "185px",
                  height: "185px",
                  borderRadius: "50%",
                  position: "relative",
                }}
              >
                <Image
                  src={performer.performerImage}
                  alt="speaker-img"
                  fill
                />
              </div>
              <div css={{ marginTop: "0.7rem" }}>
                <h4 css={{ fontSize: "1rem", fontWeight: "700" }}>
                  {performer.nameOfPerformer}
                </h4>
                <p
                  css={{
                    fontSize: "0.875rem",
                    marginTop: "0.3rem",
                    fontWeight: "500",
                  }}
                >
                  {performer.performerTitle}
                </p>
              </div>
              <p
                css={{
                  marginTop: "0.5rem",
                  lineHeight: "21px",
                  fontSize: "0.875rem",
                }}
              >
                {performer.aboutPerformer}
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
          <p>This event does not have any performers</p>
        </>
      )}

    </div>
  );
};

export default EventSpeakers;
