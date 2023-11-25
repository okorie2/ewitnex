/** @jsxImportSource @emotion/react */

import ManageEventCard from "@/components/cards/manageEventCard";
import { useMediaQuery } from "@mui/material";
import EmptyState from "fragments/emptyState";
import { Button } from "styles/components/button";
import Link from "next/link";

const Drafts = () => {
  const isTablet = useMediaQuery("(max-width: 780px)");

    return (
      <div css={{ display: "flex",
      gap: "1rem",
      flexWrap: "wrap",
      height: isTablet ? "72vh" : "",
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        display: "none",
      }, }}>
        
        {/* <ManageEventCard
          image="/assets/pngs/fionaGabe.png"
          title="FIona & Gabe"
          date="Sat, Nov. 25, 2022"
          time=" 10:00 AM - 2:00 PM"
          type="Wedding"
          attendees="0/500"
          id="Wed542445"
        /> */}
        <EmptyState>
        <div css={{ textAlign: "center", fontSize: "0.875rem" }}>
          <p>Your unpublished programs will be displayed here.</p>
          <p>Ready to fill in this space with your exciting programs?</p>
        </div>
        <Link href="/dashboard/hostEvent">
          <Button height="52px" fontSize="1rem" width="16rem">
            CREATE YOUR EVENT
          </Button>
        </Link>
      </EmptyState>
      </div>
    );
  };
  
  export default Drafts