/** @jsxImportSource @emotion/react */

import React from "react";
import PublicSiteFooter from "@/components/footer/publicSite";
import Navbar from "@/components/header";
import { Lines } from "@/components/lines";
import { useMediaQuery } from "@mui/material";
import WhatAreYouWaitingForFragment from "fragments/whatAreYouWaitingFor";
import Image from "next/image";
import { H1, H2, H3 } from "styles/components/typography";

export default function Index() {
  const isTablet = useMediaQuery("(max-width: 900px)");
  return (
    <div css={{ fontFamily: "'Poppins', sans-serif" }}>
      <Navbar />
      <div
        css={{
          backgroundImage: isTablet
            ? "url(/assets/pngs/about-mobile.png)"
            : " url(/assets/pngs/about.png) ",
          height: isTablet ? "334px" : "413px",
          display: "flex",
          backgroundSize: "cover",
          justifyContent: "space-between",
          alignItems: isTablet ? "" : "center",
          fontFamily: "'Poppins', sans-serif",
          marginTop: "5rem",
          backdropFilter: "blur(5px) brightness(25%) contrast(100%)",
        }}
      >
        <H1
          css={{
            width: isTablet ? "100%" : "60%",
            paddingLeft: isTablet ? "1.5%" : "4%",
            paddingRight: isTablet ? "1%" : "",
            paddingTop: isTablet ? "2rem" : "",
          }}
          size={isTablet ? "1.6rem" : ""}
          small
        >
          We&lsquo;re modifying events {!isTablet && <br />} making it more
          social, paperless and to be witness able by all
        </H1>
        <div css={{ width: "17.5vw", height: "428px", position: "relative" }}>
          <Image src="/assets/pngs/circle_wl.png" alt="circle_l" fill />
        </div>
      </div>
      <Lines />

      <div css={{ textAlign: isTablet ? "left" : "center" }}>
        <H1
          small
          color={"#000"}
          css={{ width: isTablet ? "90%" : "60%", margin: "auto" }}
          size={isTablet ? "1.6rem" : ""}
        >
          Revolutionizing {isTablet ? "E" : "e"}vents {isTablet ? "W" : "w"}ith{" "}
          {isTablet ? "O" : "o"}ur {isTablet ? "S" : "s"}ocial{" "}
          {isTablet ? "U" : "u"}ser -{isTablet ? "F" : "f"}riendly{" "}
          {isTablet ? "P" : "p"}latform
        </H1>
        <div
          css={{
            width: isTablet ? "90%" : "80%",
            margin: "auto",
            fontSize: isTablet ? "16px" : "18px",
          }}
        >
          <p css={{ margin: "2% 0" }}>
            Planning and hosting events often mean juggling responsibilities and
            worrying that something doesn&apos;t work and spoils everything.
            It&apos;s considered one of the most stressful jobs.
          </p>
          <p css={{ marginBottom: "2%" }}>
            You want to save time handling tedious event management tasks such
            as creating and updating conference schedules over and over. You
            want to increase attendee participation. How about saving money with
            a better event registration/ticketing system? How about a digital
            paperless event program creation?
          </p>
          <p>
            <b>Ewitnex</b> - is a social user-friendly platform that provides
            tools for event planners to create, share, and manage every activity
            of their events from scheduling, Inviting, paperless program,
            attendees, and ticketing.
            <br />
            <span css={{ fontWeight: 500 }}>
              {" "}
              A platform that creates a fun social experience for event lovers.
            </span>
          </p>
        </div>
      </div>
      <div css={{ marginTop: "4rem" }}>
        <H2
          css={{
            textAlign: isTablet ? "left" : "center",
            paddingLeft: isTablet ? "5%" : "",
          }}
          small={isTablet}
        >
          What {isTablet ? "Y" : "y"}ou {isTablet ? "G" : "g"}et{" "}
          {isTablet ? "W" : "w"}th Ewitnex{" "}
        </H2>
        <div
          css={{
            display: isTablet ? "flex" : "grid",
            flexDirection: "column",
            gridTemplateColumns: "30% 30% 30%",
            gap: isTablet ? "2.5rem" : "4rem",
            marginTop: isTablet ? "1rem" : "",
            padding: "3% 5%",
          }}
        >
          <div>
            <H3>Express ticket bookings</H3>
            <p css={{ font: "1.125rem" }}>
              Booking ticket on ewitnex is very easy and fast! It takes less
              than 2mins to register and you&apos;ll have your ticket sent to
              your account ticket manager and email. No problem if you
              don&apos;t want to sign in to purchase ticket, ticket will always
              be sent to your email.
            </p>
          </div>
          <div>
            <H3>Social user friendly platform</H3>
            <p css={{ font: "1.125rem", marginTop: "0.8rem" }}>
              Ewitnex is designed and developed in a way that is able to be to
              use by all. the focus is to build a solution that is easy use,
              navigate, intuitive and enjoyable by all event lovers and
              organizers.
            </p>
          </div>
          <div>
            <H3>Secure Payment platforms</H3>
            <p css={{ font: "1.125rem", marginTop: "0.8rem" }}>
              At our core is a powerful payments platforms and engine that makes
              it easy to receive payments and making sure that&apos;s all card
              information is processed in a completely safe environment.
            </p>
          </div>
        </div>
        <div
          css={{
            display: isTablet ? "flex" : "grid",
            flexDirection: "column",
            gridTemplateColumns: "30% 30% 30%",
            gap: isTablet ? "2.5rem" : "4rem",
            marginTop: isTablet ? "1rem" : "",
            padding: "3% 5%",
          }}
        >
          <div>
            <H3>Account Manager</H3>
            <p css={{ font: "1.125rem", marginTop: "0.8rem" }}>
              Sitting atop of our payment platforms are applications to manage
              revenue, events, ticketing, know who is attending your event and
              prevent fraud.
            </p>
          </div>
          <div>
            <H3>Payout Request</H3>
            <p css={{ font: "1.125rem", marginTop: "0.8rem" }}>
              Ewitnex is designed and developed in a way that is able to be to
              use by all. the focus is to build a solution that is easy use,
              navigate, intuitive and enjoyable by all event lovers and
              organizers.
            </p>
          </div>
          <div>
            <H3>Infrastructure</H3>
            <p css={{ font: "1.125rem", marginTop: "0.8rem" }}>
              Our cloud-based infrastructure provides reliability, scalability,
              and security.
            </p>
          </div>
        </div>
        <div
          css={{
            display: isTablet ? "flex" : "grid",
            flexDirection: "column",
            gridTemplateColumns: "30% 30% 30%",
            gap: isTablet ? "2.5rem" : "4rem",
            marginBottom: "5rem",
            padding: "3% 5%",
          }}
        >
          <div>
            <H3>Social engagement</H3>
            <p css={{ font: "1.125rem" }}>
              Get involve in attendees post on other event, comment, like and
              share on them like you do your other social platforms.
            </p>
          </div>
          <div>
            <H3>Witness your attended event</H3>
            <p css={{ font: "1.125rem", marginTop: "0.8rem" }}>
              Let people know about the event that is going on by taking photo,
              videos, or just text of it and post for other event lovers to
              interact.
            </p>
          </div>
          <div>
            <H3>24/7 customer support</H3>
            <p css={{ font: "1.125rem", marginTop: "0.8rem" }}>
              Our support team is always available even at night to assist you
              with any challenge.
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
