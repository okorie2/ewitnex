/** @jsxImportSource @emotion/react */

import RSVPCard from "@/components/cards/RSVPCard";
import React from "react";
import { H3 } from "styles/components/typography";
import { screen } from "styles/theme";

const RSVP = () => {
  return (
    <div
      css={{
        boxShadow: " 0px 0px 10px #0000001A",
        borderRadius: "10px",
        padding: "1.25rem 2.5rem 2rem",
        width: "60%",
        marginInline: "auto",
        position: "relative",
        top: "3.5rem",
      }}
    >
      <H3
        css={{
          marginBottom: "1.25rem",
          [screen.desktopLg]: {
            textAlign: "center",
          },
        }}
      >
        20 Attendees
      </H3>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          [screen.desktopLg]: {
            gridTemplateColumns: "auto ",
          },
          gap: "1.25rem",
        }}
      >
        <RSVPCard
          img="/assets/pngs/speaker_1.png"
          name="Franca Benibo"
          userName="Raiya"
          date=" Sept 20, 10: 20 AM"
        />
        <RSVPCard
          img="/assets/pngs/speaker_1.png"
          name="Jama Blue"
          userName="JBlue"
          date=" Sept 20, 10: 20 AM"
        />
        <RSVPCard
          img="/assets/pngs/speaker_1.png"
          name="Grace Lover"
          userName="Lover_G"
          date=" Sept 20, 10: 20 AM"
        />
        <RSVPCard
          img="/assets/pngs/speaker_1.png"
          name="Jama Blue"
          userName="JBlue"
          date=" Sept 20, 10: 20 AM"
        />
        <RSVPCard
          img="/assets/pngs/speaker_1.png"
          name="Franca Benibo"
          userName="Raiya"
          date=" Sept 20, 10: 20 AM"
        />
        <RSVPCard
          img="/assets/pngs/speaker_1.png"
          name="Grace Lover"
          userName="Lover_G"
          date=" Sept 20, 10: 20 AM"
        />
      </div>
    </div>
  );
};

export default RSVP;
