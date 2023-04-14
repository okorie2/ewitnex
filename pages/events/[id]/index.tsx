/** @jsxImportSource @emotion/react */

import PublicSiteFooter from "@/components/footer/publicSite";
import Navbar from "@/components/header";
import { Lines } from "@/components/lines";
import Image from "next/image";
import React from "react";
import { theme } from "styles/theme";
import EventDetails from "fragments/eventDetails/details";
import { useRouter } from "next/router";
import Link from "next/link";
import { eventNav } from "fragments/eventDetails/event.data";
import EventTab from "./[tab]";

const SingleEvent = () => {
  const router = useRouter();
  const { id } = router.query;
  const activeTab = router.query?.tab || ("Details" as string | undefined);

  return (
    <div>
      <Navbar />
      <div
        css={{
          marginBlock: "8.5rem 2rem",
          width: "90%",
          marginInline: "auto",
          paddingBottom: "5rem",
          boxShadow: " 0px 0px 10px #00000029",
          position: "relative",
          borderRadius: "20px",
        }}
      >
        <ul
          css={{
            boxShadow: " 0px 0px 10px #00000029",
            borderRadius: "20px",
            padding: "1rem 2.5rem",
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
            position: "absolute",
            zIndex: "1",
            top: "-1.5rem",
            left: "20%",
            backgroundColor: theme.common.white,
            listStyleType: "none",
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
        <EventTab />
      </div>
      <Lines />
      <PublicSiteFooter />
    </div>
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
        href={`/events/${[id]}?tab=${tab}`}
        css={{
          padding: "0.38rem 0.75rem ",
          borderRadius: "1rem",
          background: isActive ? "#00D9B7" : "#F2F7FB",
          color: isActive ? theme.common.white : "#AEAEAE",
          cursor: "pointer",
        }}
      >
        {tab}
      </Link>
    </li>
  );
};
