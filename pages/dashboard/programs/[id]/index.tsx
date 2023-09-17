/** @jsxImportSource @emotion/react */

import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { eventNav } from "fragments/eventDetails/event.data";
import EventTab from "./[tab]";
import DashboardLayout from "pages/dashboard/layout/layout";
import Image from "next/image";

const SingleEvent = () => {
  const router = useRouter();
  const { id } = router.query;
  const activeTab = router.query?.tab || ("Details" as string | undefined);

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
          <div css={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
            <Image
              src="/assets/svgs/arrow-left.svg"
              alt=""
              width={22}
              height={15}
            />
            <h3 css={{ fontWeight: "bold" }}>
              Medical Crusade with Doctor West
            </h3>
          </div>
          <div css={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
            <Image src="/assets/svgs/plus.svg" alt="" width={41} height={41} />
            <p css={{ fontWeight: "bold", fontSize: "1.125rem" }}>
              witness this event
            </p>
          </div>
        </div>
        <div
          css={{
            position: "relative",
            marginTop: "3rem",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <ul
            css={{
              boxShadow: `0px 0px 10px ${"#00000029"}`,
              borderRadius: "20px",
              padding: "1rem 2.5rem",
              display: "flex",
              justifyContent: "space-between",
              width: "60%",
              position: "absolute",
              zIndex: "1",
              top: "-1.5rem",
              left: "20%",
              backgroundColor: "#fff",
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
          <div
            css={{
              width: "97%",
              marginInline: "auto",
              paddingBottom: "5rem",
              boxShadow: `0px 0px 10px ${"#00000029"}`,
              borderRadius: "20px",
              height: "calc(100vh - (80px + 3rem))",
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
          background: isActive
            ? "#00D9B7"
            : "#F2F7FB",
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
