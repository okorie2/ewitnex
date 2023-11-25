/** @jsxImportSource @emotion/react */

import ManageEventCard from "@/components/cards/manageEventCard";
import { useMediaQuery } from "@mui/material";
import EmptyState from "fragments/emptyState";
import Link from "next/link";
import { Button } from "styles/components/button";

const LiveEvents = () => {
  const isTablet = useMediaQuery("(max-width: 780px)");

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
      {/* <ManageEventCard
        image="/assets/pngs/devFestAba.png"
        title="DevFest Aba"
        date="Sat, Nov. 25, 2022"
        time=" 10:00 AM - 2:00 PM"
        type="Conference"
        attendees="0/500"
        id="tec542445"
      /> */}

      <EmptyState>
        <div css = {{textAlign:"center", fontSize:"0.875rem"}}>
          <p>There are no live events currently.</p>
          <p>Live events will be seen here.</p>
        </div>
        <Link href="/dashboard/hostEvent">
        <Button height="52px" fontSize ="1rem" width = "16rem">
          CREATE YOUR EVENT
        </Button>
        </Link>
      </EmptyState>
    </div>
  );
};

export default LiveEvents;
