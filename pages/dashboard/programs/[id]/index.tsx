/** @jsxImportSource @emotion/react */

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { eventNav } from "fragments/eventDetails/event.data";
import EventTab from "./[tab]";
import DashboardLayout from "pages/dashboard/layout/layout";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useAppSelector, useAppThunkDispatch } from "redux/store";
import { getEventById } from "redux/event/thunkAction";
import { IEvent } from "types/event";

const SingleEvent = () => {
  const router = useRouter();
  const { id } = router.query;
  const activeTab = router.query?.tab || ("Details" as string | undefined);
  const isTablet = useMediaQuery("(max-width: 780px)");

  const { loading, event } = useAppSelector(({ event }) => event);
  const dispatch = useAppThunkDispatch();
  useEffect(() => {
    dispatch(getEventById(id?.toString() || ""));
  }, [id]);

  return (
    <DashboardLayout>
      <div
        css={{
          height: "100vh",
        }}
      >
        <div
          css={{
            height: "80px",
            borderBottom: `1px solid ${"#E4E4E4"}`,
            display: "flex",
            gap: "4rem",
            alignItems: "center",
            paddingInline: "2%",
          }}
        >
          <div
            css={{
              display: "flex",
              alignItems: "center",
              gap: isTablet ? "1rem" : "0.7rem",
            }}
          >
            <Link href="/dashboard/programs">
              <Image
                src="/assets/svgs/arrow-left.svg"
                alt=""
                width={22}
                height={15}
              />
            </Link>
            <h3 css={{ fontWeight: "bold", width: isTablet ? "80%" : "" }}>
              {event.EventTitle || ""}
            </h3>
          </div>
          {!isTablet && (
            <div css={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
              <Image
                src="/assets/svgs/plus.svg"
                alt=""
                width={41}
                height={41}
              />
              <p css={{ fontWeight: "bold", fontSize: "1.125rem" }}>
                witness this event
              </p>
            </div>
          )}
        </div>
        <div
          css={{
            position: "relative",
            marginTop: isTablet ? "" : "3rem",
            fontFamily: "'Poppins', sans-serif",
            width: isTablet ? "100vw" : "",
          }}
        >
          <ul
            css={{
              boxShadow: `0px 0px 10px ${"#00000029"}`,
              borderRadius: isTablet ? "0" : "20px",
              padding: isTablet ? "1.5rem 0.5rem" : "1rem 2.5rem",
              display: "flex",
              justifyContent: "space-between",
              width: isTablet ? "100vw" : "60%",
              position: isTablet ? "relative" : "absolute",
              zIndex: "1",
              top: isTablet ? "" : "-1.5rem",
              left: isTablet ? "0" : "20%",
              backgroundColor: "#fff",
              listStyleType: "none",
              fontFamily: "'Open Sans', sans-serif",
              overflowX: "auto",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              gap: "0.125rem",
              marginBottom: isTablet ? "0rem" : "",
            }}
          >
            {eventNav.map((navItem) => (
              <TabNav
                key={navItem}
                isActive={Boolean(activeTab === navItem)}
                tab={navItem}
                id={id?.toString()}
              />
            ))}
          </ul>
          <div
            css={{
              width: isTablet ? "100vw" : "97%",
              marginInline: "auto",
              paddingBottom: "5rem",
              boxShadow: `0px 0px 10px ${"#00000029"}`,
              borderRadius: isTablet ? "0" : "20px",
              height: "calc(100vh - (80px + 4rem))",
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <EventTab />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SingleEvent;

const TabNav: React.FC<{
  isActive: boolean;
  tab: string;
  id: string | undefined;
}> = ({ isActive, tab, id }) => {
  return (
    <li>
      <Link
        href={`/dashboard/programs/${[id]}?tab=${tab}`}
        css={{
          padding: "0.38rem 0.75rem ",
          borderRadius: "1rem",
          background: isActive ? "#00D9B7" : "#F2F7FB",
          color: isActive ? "#fff" : "#AEAEAE",
          cursor: "pointer",
          fontSize: "0.875rem",
          fontWeight: "500",
        }}
      >
        {tab}
      </Link>
    </li>
  );
};
