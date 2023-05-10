/** @jsxImportSource @emotion/react */

import React from "react";
import PublicSiteFooter from "@/components/footer/publicSite";
import Navbar from "@/components/header";
import { Lines } from "@/components/lines";
import { useRouter } from "next/router";
import Link from "next/link";
import { eventNav } from "fragments/eventDetails/event.data";
import EventTab from "./[tab]";
import { theme } from "styles/theme";

const SingleEvent = () => {
  const router = useRouter();
  const { id } = router.query;
  const activeTab = router.query?.tab || ("Details" as string | undefined);

  return (
    <div css={{ fontFamily: "'Poppins', sans-serif" }}>
      <Navbar />
      <div
        css={{
          marginBlock: "8.5rem 2rem",
          width: "90%",
          marginInline: "auto",
          paddingBottom: "5rem",
          boxShadow: `0px 0px 10px ${theme.shadow.border3}`,
          position: "relative",
          borderRadius: "20px",
        }}
      >
        <ul
          css={{
            boxShadow: `0px 0px 10px ${theme.shadow.border3}`,
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
            fontFamily: "'Open Sans', sans-serif",
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
          background: isActive
            ? theme.background.lightGreen
            : theme.background.secondary2,
          color: isActive ? theme.common.white : theme.color.grey,
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
