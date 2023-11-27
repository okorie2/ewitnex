/** @jsxImportSource @emotion/react */

import ManageEventCard from "@/components/cards/manageEventCard";
import { useMediaQuery } from "@mui/material";
import EmptyState from "fragments/emptyState";
import { Button } from "styles/components/button";
import Link from "next/link";

const CancelledEvents = () => {
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
          image="/assets/pngs/gdg.png"
          title="DevFest Abuja"
          date="Sat, Nov. 25, 2022"
          time=" 10:00 AM - 2:00 PM"
          type="Conference"
          attendees="0/500"
          id="tec542445"
        /> */}
      <div css={{ marginLeft: "10vw", marginTop: "2rem" }}>
        <EmptyState>
          <div css={{ textAlign: "center", fontSize: "0.875rem" }}>
            <p>Your cancelled programs will be displayed here.</p>
          </div>
          <Link href="/dashboard/hostEvent">
            <Button height="52px" fontSize="1rem" width="16rem">
              CREATE YOUR EVENT
            </Button>
          </Link>
        </EmptyState>
      </div>
    </div>
  );
};

export default CancelledEvents;
