/** @jsxImportSource @emotion/react */

import PublicSiteFooter from "@/components/footer/publicSite";
import Navbar from "@/components/header";
import { Lines } from "@/components/lines";
import { useTheme } from "@emotion/react";

import WhatAreYouWaitingForFragment from "fragments/whatAreYouWaitingFor";
import Image from "next/image";
import React from "react";
import { Button } from "styles/components/button";
import { H1, H3 } from "styles/components/typography";

export default function Index() {
  const theme = useTheme();
  return (
    <div css={{ fontFamily: "'Poppins', sans-serif" }}>
      <Navbar />

      <div
        css={{
          //   backgroundImage: "url(/assets/pngs/about.png)",
          backgroundImage: " url(/assets/pngs/how.png) ",
          height: "413px",
          //   width: "100vw",
          display: "flex",
          backgroundSize: "cover",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "'Poppins', sans-serif",
          // opacity: "90%",
          marginTop: "5rem",
          backdropFilter: "blur(5px) brightness(25%) contrast(100%)",
        }}
      >
        <div css={{ paddingLeft: "4%" }}>
          <H1 css={{ width: "45%" }} small>
            How Ewitnex Works
          </H1>
          <p
            css={{
              fontSize: "1.25rem",
              color: "#fff",
              width: "59%",
            }}
          >
            Create your free account, get verified, explore, interact or create
            an event, sell and buy tickets in seconds. With our easy-to-use
            event platform, it really is that simple!
          </p>
          <div css={{ width: "12.7vw", marginTop: "3rem" }}>
            <Button background={"#00D9B7"}>
              Get Started
            </Button>
          </div>
        </div>
        <div css={{ width: "17.5vw", height: "428px", position: "relative" }}>
          <Image src="/assets/pngs/circle_wl.png" alt="circle_l" fill />
        </div>
      </div>
      <Lines />
      <div
        css={{
          display: "flex",
          alignItems: "center",
          color: "#707070",
          font: "1.15rem",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        <p>As a host or event organizer</p>
        <p css={{ width: "1px", height: "29px", background: "#e0e0e0" }}></p>
        <p>As an attendee or event lover</p>
      </div>

      <div css={{ marginTop: "3rem", paddingLeft: "4%" }}>
        <H1 color={"#000"} small>
          As a host or event planner
        </H1>
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "30% 30% 30%",
            gap: "4rem",
            alignItems: "center",
            // marginTop: "3rem",
            padding: "2% 0%",
          }}
        >
          <div>
            <H3>Sign up for free & get verified</H3>
            <p css={{ font: "1.125rem" }}>
              It is easy to have an account, just fill in the necessary details
              and get your account verified free of charge. No need for a
              contract or your signature.
            </p>
          </div>
          <div>
            <H3>Create an event</H3>
            <p css={{ font: "1.125rem", marginTop: "0.8rem" }}>
              After you have signed up, you have access to create an event by
              filling in the necessary information as regards the events, with
              this you can get possible attendees interested.
            </p>
          </div>
          <div>
            <H3>Copy your event link and ID</H3>
            <p css={{ font: "1.125rem", marginTop: "0.8rem" }}>
              After successfully creating your event, copy your event ID and
              invitation link. Don&apos;t worry of forgetting them, it will be
              sent to you as notification, email and you can also find it in
              mange event.
            </p>
          </div>
        </div>
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "30% 30% 30%",
            gap: "4rem",
            alignItems: "center",
            // marginTop: "3rem",
            padding: "1% 0%",
          }}
        >
          <div>
            <H3>Send Invitations</H3>
            <p css={{ font: "1.125rem" }}>
              Sending invitations is an important step in planning any event,
              whether it be a wedding, birthday party, or business conference,
              etc. It allows guests to know when and where the event will be
              taking place, and allows them to RSVP and confirm their
              attendance. Sending invitations is a simple but crucial step in
              ensuring a successful event.
            </p>
          </div>
          <div>
            <H3>Sell tickets, get paid</H3>
            <p css={{ font: "1.125rem", marginTop: "0.8rem" }}>
              Are you looking to sell your event tickets and get paid? Look no
              further! Our platform allows you to easily list and sell your
              tickets to interested buyers. Simply create a listing, set your
              price, and wait for someone to purchase. Once the sale is
              complete, we&apos;ll transfer the payment directly to your
              account. No more waiting in line or dealing with the hassle of
              selling tickets on your own. Sell your event tickets and get paid
              today with our easy-to-use platform.
            </p>
          </div>
          <div>
            <H3>Manage event</H3>
            <p css={{ font: "1.125rem", marginTop: "0.8rem" }}>
              Ewitnex makes it easy to manage events of any size. With a range
              of customizable features, you can create a unique experience for
              your attendees. Our system allows you to create and manage
              registration pages, schedule sessions and speakers, and
              communicate with attendees. You can also track ticket sales and
              gather valuable data on your event. Take the stress out of event
              management with our easy-to-use platform.
            </p>
          </div>
        </div>
      </div>
      <div css={{ marginTop: "3rem", paddingLeft: "4%" }}>
        <H1 color={"#000"} small>
          As an attendee or event lover
        </H1>
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "30% 30% 30%",
            gap: "4rem",
            alignItems: "center",
            // marginTop: "3rem",
            padding: "2% 0%",
          }}
        >
          <div>
            <H3>Sign up for free & get verified</H3>
            <p css={{ font: "1.125rem" }}>
              It is easy to have an account, just fill in the necessary details
              and get your account verified free of charge. No need for a
              contract or your signature.
            </p>
          </div>
          <div>
            <H3>Explore events</H3>
            <p css={{ font: "1.125rem", marginTop: "0.8rem" }}>
              After you have signed up, you have access to create an event by
              filling in the necessary information as regards the events, with
              this you can get possible attendees interested.
            </p>
          </div>
          <div>
            <H3>Witness event and interact</H3>
            <p css={{ font: "1.125rem", marginTop: "0.8rem" }}>
              After successfully creating your event, copy your event ID and
              invitation link. Don&apos;t worry of forgetting them, it will be
              sent to you as notification, email and you can also find it in
              mange event.
            </p>
          </div>
        </div>
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "30% 30% 30%",
            gap: "4rem",
            alignItems: "center",
            marginBottom: "4rem",
            padding: "1% 0%",
          }}
        >
          <div>
            <H3>Buy tickets</H3>
            <p css={{ font: "1.125rem" }}>
              Looking to buy tickets for your next event? Look no further!
              ewitnex makes it easy to purchase tickets for concerts, sporting
              events, theater performances, and more. Simply search for the
              event you want to attend, choose your preferred seating and
              quantity, and complete the checkout process. Plus, our platform is
              secure and user-friendly, so you can buy your tickets with
              confidence. Don&apos;t miss out on the fun - buy your tickets
              today with ewitnex!
            </p>
          </div>
          <div>
            <H3>Attend event</H3>
            <p css={{ font: "1.125rem", marginTop: "0.8rem" }}>
              With ewitnex you can experience some of the best events in your
              area. It is designed to help you discover and attend a variety of
              events ranging from concerts and festivals to business
              conferences, networking events and many more. With our
              user-friendly interface and extensive event calendar, you can
              easily browse and purchase tickets to events that interest you.
              Plus, with our convenient ticket delivery options and secure
              payment system, attending events has never been easier. So get
              started and start attending amazing events with ewitnex!
            </p>
          </div>
        </div>
      </div>
      <WhatAreYouWaitingForFragment />
      <Lines />
      <PublicSiteFooter />
    </div>
  );
}
