/** @jsxImportSource @emotion/react */
import React, { useMemo, useState } from "react";
import { useMediaQuery } from "@mui/material";

import DashboardLayout from "pages/dashboard/layout/layout";
import {
  activeButtonStyle,
  inactiveButtonStyle,
} from "styles/components/ButtonToggleStyles";
import ManageEventCard from "@/components/cards/manageEventCard";
import Image from "next/image";
import LiveEvents from "fragments/manageEvents/liveEvents";
import CompletedEvents from "fragments/manageEvents/completedEvents";
import Drafts from "fragments/manageEvents/darfts";
import CancelledEvents from "fragments/manageEvents/cancelledEvents";
import Link from "next/link";

const Manager = () => {
  const [activeTab, setActiveTab] = useState("completed");
  const isTablet = useMediaQuery("(max-width: 780px)");
  const tabToView = useMemo(() => {
    if (activeTab === "live") {
      return <LiveEvents />;
    } else if (activeTab === "completed") {
      return <CompletedEvents />;
    } else if (activeTab === "drafts") {
      return <Drafts />;
    } else if (activeTab === "cancelled") {
      return <CancelledEvents />;
    }
  }, [activeTab]);
  return (
    <DashboardLayout>
      <div
        css={{
          borderLeft: isTablet ? "" : `1px solid ${"#E4E4E4"}`,
          marginLeft: isTablet ? "" : "1.5rem",
          height: "100%",
          width: isTablet ? "100vw" : "",
        }}
      >
        <div
          css={{
            height: "80px",
            borderBottom: `1px solid ${"#E4E4E4"}`,
            display: isTablet ? "flex":"grid",
            gap:"1rem",
            alignItems: "center",
            paddingInline: "1.5rem",
            color: "#000",
            width: isTablet ? "100vw" : "",
            background: "#FFF",
          }}
        >
          {isTablet && <Link href = "/dashboard/profile"><div css = {{display:"flex"}} >
            <Image
              src="/assets/svgs/back.svg"
              alt="back_arrow"
              width={22}
              height={15}
            />
          </div></Link>}
          <h2>Manage Event</h2>
        </div>
        <div
          css={{
            paddingInline: isTablet ? "1rem" : "1.5rem",
          }}
        >
          <div
            css={{
              borderRadius: "16px",
              backgroundColor: "#F2F7FB",
              width: isTablet ? "" : "376px",
              marginBlock: "1rem 1.5rem",
              height: "2.5rem",
              display: "flex",
              alignItems: "center",
              padding: "0.2rem",
            }}
          >
            <button
              onClick={() => setActiveTab("live")}
              css={
                activeTab === "live" ? activeButtonStyle : inactiveButtonStyle
              }
            >
              Live
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              css={
                activeTab === "completed"
                  ? activeButtonStyle
                  : inactiveButtonStyle
              }
            >
              Completed
            </button>
            <button
              onClick={() => setActiveTab("drafts")}
              css={
                activeTab === "drafts" ? activeButtonStyle : inactiveButtonStyle
              }
            >
              Drafts
            </button>
            <button
              onClick={() => setActiveTab("cancelled")}
              css={
                activeTab === "cancelled"
                  ? activeButtonStyle
                  : inactiveButtonStyle
              }
            >
              Canceled
            </button>
          </div>
          {tabToView}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Manager;
