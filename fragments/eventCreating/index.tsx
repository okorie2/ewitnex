/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";

import React from "react";
import Image from "next/image";
import { H1 } from "styles/components/typography";

export default function EventCreatingFragment() {
  const theme = useTheme();
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        background: "#fff",
        fontFamily: "'Poppins', sans-serif",
        padding: "3% 4%",
      }}
    >
      <div
        css={{
          position: "relative",
          width: "26.5vw",
          height: "100vh",
          objectFit: "scale-down",
        }}
      >
        <Image
          src={"/assets/pngs/fones_l.png"}
          alt="fones_l"
          fill
          css={{ objectFit: "scale-down" }}
        />
      </div>
      <div css={{ width: "50%", marginTop: "10%" }}>
        <H1 small color={"#000"}>
          Event Creating, hosting and ticketing done right
        </H1>
        <p css={{ marginTop: "4%" }}>
          When it comes to creating, hosting, and ticketing an event, it can be
          a daunting task. There are many moving parts and details to consider,
          and it&apos;s easy to feel overwhelmed. However, with the right
          planning and organization, you can host a successful event that meets
          your goals and exceeds your expectations with ewitnex. Here are some
          tips for creating, hosting, and ticketing an event done right:
        </p>
        <p css={{ marginTop: "4%" }}>
          Set clear goals for your event: What do you want to achieve with your
          event? Is it for fundraising, networking, or simply for entertainment?
          Setting clear goals will help you plan and execute a successful event.
        </p>
        <p css={{ marginTop: "4%" }}>
          Choose the right venue: The venue you choose can make or break your
          event. Consider factors like size, location, amenities, and
          accessibility.
        </p>
        <p css={{ marginTop: "4%" }}>
          Plan the event timeline: Plan out all the details of your event,
          including the schedule of activities, catering, and entertainment.
          Make sure you leave enough time for setup and cleanup.
        </p>
        <p css={{ marginTop: "4%" }}>
          {" "}
          Promote your event: Use social media, email marketing, and other
          marketing channels to promote your event and attract attendees.{" "}
        </p>
        <p css={{ marginTop: "4%" }}>
          Sell tickets online: Use an online ticketing platform like ewitnex to
          sell tickets to your event. This makes it easy for attendees to
          purchase tickets and helps you track ticket sales.
        </p>
        <p css={{ marginTop: "4%" }}>
          By following these tips, you can create, host, and ticket an event
          that is well-planned, well-attended, and successful all with ewitnex.
        </p>
      </div>
    </div>
  );
}
