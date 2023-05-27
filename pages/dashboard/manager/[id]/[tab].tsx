/** @jsxImportSource @emotion/react */

import React, { useMemo } from "react";
import EventActivities from "fragments/eventDetails/activities";
import EventDetails from "fragments/eventDetails/details";
import EventMessages from "fragments/eventDetails/messages";
import RSVP from "fragments/eventDetails/RSVP";
import EventSpeakers from "fragments/eventDetails/speakers";
import EventTickets from "fragments/eventDetails/tickets";
import { useRouter } from "next/router";
import EventOverview from "fragments/manageEvents/overview";

const ManageEventTab = () => {
  const router = useRouter();
  console.log(router);
  const activeTab = router.query?.tab || ("overview" as string | undefined);

  const stateEvents = useMemo(() => {
    if (activeTab === "Overview") return <EventOverview />;
    else if (activeTab === "TicketSales") return <EventActivities />;
    else if (activeTab === "Attendees") return <EventMessages />;
  }, [activeTab]);

  return (
    <div
      css={{
        position: "relative",
        height: "calc(100vh - 80px )",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <div>{stateEvents}</div>
    </div>
  );
};

export default ManageEventTab;
