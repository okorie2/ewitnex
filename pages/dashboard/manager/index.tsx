/** @jsxImportSource @emotion/react */
import React from "react";

import DashboardLayout from "pages/dashboard/layout";
import { theme } from "styles/theme";
import {
  activeButtonStyle,
  inactiveButtonStyle,
} from "styles/components/ButtonToggleStyles";
import ManageEventCard from "@/components/cards/manageEventCard";

const Manager = () => {
  return (
    <DashboardLayout>
      <div
        css={{
          borderLeft: `1px solid ${theme.shadow.border}`,
          marginLeft: "1.5rem",
          height: "100%",
        }}
      >
        <div
          css={{
            height: "80px",
            borderBottom: `1px solid ${theme.shadow.border}`,
            display: "grid",
            alignItems: "center",
            paddingInline: "1.5rem",
            color: theme.common.black,
          }}
        >
          <h2>Manage Event</h2>
        </div>
        <div
          css={{
            paddingInline: "1.5rem",
          }}
        >
          <div
            css={{
              borderRadius: "16px",
              backgroundColor: theme.background.secondary2,
              width: "376px",
              marginBlock: "1rem 1.5rem",
              height: "2.5rem",
              display: "flex",
              alignItems: "center",
              padding: "0.2rem",
            }}
          >
            <button
              // onClick={handleShowFollowers}
              // css={
              //   activeTab === "followers"
              //     ? activeButtonStyle
              //     : inactiveButtonStyle
              // }
              css={activeButtonStyle}
            >
              Live
            </button>
            <button
              // onClick={handleShowFollowing}
              // css={
              //   activeTab === "following"
              //     ? activeButtonStyle
              //     : inactiveButtonStyle
              // }
              css={inactiveButtonStyle}
            >
              Completed
            </button>
            <button
              // onClick={handleShowFollowing}
              // css={
              //   activeTab === "following"
              //     ? activeButtonStyle
              //     : inactiveButtonStyle
              // }
              css={inactiveButtonStyle}
            >
              Draft
            </button>
            <button
              // onClick={handleShowFollowing}
              // css={
              //   activeTab === "following"
              //     ? activeButtonStyle
              //     : inactiveButtonStyle
              // }
              css={inactiveButtonStyle}
            >
              Canceled
            </button>
          </div>
          <div css={{ display: "flex", gap: "1rem" }}>
            <ManageEventCard
              image="/assets/pngs/devFestAba.png"
              title="DevFest Aba"
              date="Sat, Nov. 25, 2022"
              time=" 10:00 AM - 2:00 PM"
              type="Conference"
              attendees="0/500"
              id="tec542445"
            />
            <ManageEventCard
              image="/assets/pngs/fionaGabe.png"
              title="FIona & Gabe"
              date="Sat, Nov. 25, 2022"
              time=" 10:00 AM - 2:00 PM"
              type="Wedding"
              attendees="0/500"
              id="Wed542445"
            />
            <ManageEventCard
              image="/assets/pngs/gdg.png"
              title="DevFest Abuja"
              date="Sat, Nov. 25, 2022"
              time=" 10:00 AM - 2:00 PM"
              type="Conference"
              attendees="0/500"
              id="tec542445"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Manager;
