/** @jsxImportSource @emotion/react */

import PublicSiteFooter from "@/components/footer/publicSite";
import Navbar from "@/components/header";
import { Lines } from "@/components/lines";
import { useTheme } from "@emotion/react";
import { Poppins } from "@next/font/google";
import WhatAreYouWaitingForFragment from "fragments/whatAreYouWaitingFor";
import Image from "next/image";
import React from "react";
import { H1, H2 } from "styles/components/typography";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
  preload: true,
});
export default function Index() {
  const theme = useTheme();
  return (
    <div css={{ fontFamily: poppins.style.fontFamily }}>
      <Navbar />

      <div
        css={{
          //   backgroundImage: "url(/assets/pngs/about.png)",
          backgroundImage:
            "linear-gradient(to bottom, #878080, rgba(117, 19, 93, 0.73)), url(/assets/pngs/about.png) ",
          height: "413px",
          //   width: "100vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: poppins.style.fontFamily,
          //   backdropFilter: "blur(80%)",
        }}
      >
        <H1 css={{ width: "45%", paddingLeft: "4%" }} small>
          We&lsquo;re modifying events <br /> making it more social, paperless
          and to be witness able by all
        </H1>
        <div css={{ width: "17.5vw", height: "428px", position: "relative" }}>
          <Image src="/assets/pngs/circle_wl.png" alt="circle_l" fill />
        </div>
      </div>
      <Lines />

      <div css={{ textAlign: "center" }}>
        <H1
          small
          color={theme.common.black}
          css={{ width: "60%", margin: "auto" }}
        >
          Revolutionizing events with our social user -friendly platform
        </H1>
        <div css={{ width: "80%", margin: "auto", fontSize: "18px" }}>
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
      <div>
        <H2>What you get with Ewitnex </H2>
      </div>
      <WhatAreYouWaitingForFragment />
      <Lines />
      <PublicSiteFooter />
    </div>
  );
}
