/** @jsxImportSource @emotion/react */

import React, { useMemo } from "react";
import EventActivities from "fragments/eventDetails/activities";
import EventDetails from "fragments/eventDetails/details";
import EventMessages from "fragments/eventDetails/messages";
import RSVP from "fragments/eventDetails/RSVP";
import EventSpeakers from "fragments/eventDetails/speakers";
import EventTickets from "fragments/eventDetails/tickets";
import { useRouter } from "next/router";
import { ButtonFormFilled } from "styles/components/button";
import { theme } from "styles/theme";

const EventTab = () => {
  const router = useRouter();
  const activeTab = router.query?.tab || ("Details" as string | undefined);

  const stateEvents = useMemo(() => {
    if (activeTab === "Details") return <EventDetails />;
    else if (activeTab === "Activities") return <EventActivities />;
    else if (activeTab === "Messages") return <EventMessages />;
    else if (activeTab === "Tickets") return <EventTickets />;
    else if (activeTab === "Speakers") return <EventSpeakers />;
    else if (activeTab === "RSVPs") return <RSVP />;
  }, [activeTab]);

  return (
    <div css={{ position: "relative" }}>
      <div>{stateEvents}</div>
      <div
        css={{
          width: "325px",
          height: "92px",
          boxShadow: `0px 0px 10px ${theme.shadow.border3}`,
          borderRadius: "40px 40px 0px 0px",
          display: "grid",
          placeContent: "center",
          position: "fixed",
          background: theme.background.white,
          bottom: "0",
          right: "5%",
          zIndex: "1",
        }}
      >
        <div
          css={{
            display: "flex",
            alignItems: "center",
            gap: "1.2rem",
          }}
        >
          <p css={{ color: theme.common.black, fontWeight: "bold" }}>
            $500 - $2K
          </p>
          <ButtonFormFilled css={{ width: "172px" }}>
            ATTEND EVENT
          </ButtonFormFilled>
        </div>
      </div>
    </div>
  );
};

export default EventTab;
