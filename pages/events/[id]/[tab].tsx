/** @jsxImportSource @emotion/react */

import React, { useMemo } from "react";
import EventActivities from "fragments/eventDetails/activities";
import EventDetails from "fragments/eventDetails/details";
import EventMessages from "fragments/eventDetails/messages";
import RSVP from "fragments/eventDetails/RSVP";
import EventSpeakers from "fragments/eventDetails/speakers";
import EventTickets from "fragments/eventDetails/tickets";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";
import AttenEventCTA from "fragments/eventDetails/attenEventCTA";

const EventTab = () => {
  const router = useRouter();
  const isTablet = useMediaQuery("(max-width: 900px)");
  const activeTab = router.query?.tab || ("Details" as string | undefined);

  const stateEvents = useMemo(() => {
    if (activeTab === "Details") return <EventDetails />;
    else if (activeTab === "Activities") return <EventActivities />;
    else if (activeTab === "Conversations") return <EventMessages />;
    else if (activeTab === "Tickets") return <EventTickets />;
    else if (activeTab === "Performers") return <EventSpeakers />;
    else if (activeTab === "RSVPs") return <RSVP />;
  }, [activeTab]);

  return (
    <div css={{ position: "relative" }}>
      <div>{stateEvents}</div>
      {!(activeTab === "Tickets" || activeTab === "RSVPs") && <AttenEventCTA link={`/events/Tec542445?tab=Tickets`} />}
    </div>
  );
};

export default EventTab;
