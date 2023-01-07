/** @jsxImportSource @emotion/react */
import Head from "next/head";
import { useTheme } from "@emotion/react";
import Navbar from "components/header";
import WhoWeAre from "fragments/paper/whoWeAre";
import HomeSlide from "components/slides/homeSlide";
import FindEventFragment from "fragments/findEvent/findEvent";
import EventsAroundYouFragment from "fragments/eventsAroundYou";
import Image from "next/image";
import Tris from "public/assets/svgs/lines.svg";
import Tri_L from "public/assets/svgs/line_l.svg";

import Tri_R from "public/assets/svgs/line_r.svg";

import UpcomingEventsFragment from "fragments/upcomingEvents";
import FeaturedEventsFragment from "fragments/featuredEvents";
import NoMorePaperProgramFragment from "fragments/noMorePaperProgram";
import UploadDesignFragment from "fragments/uploadDesign";
import WitnessEventFragment from "fragments/witnessEvent";
import TicketToSaleFragment from "fragments/ticketToSale";
import EventCreatingFragment from "fragments/eventCreating";
import WhatAreYouWaitingForFragment from "fragments/whatAreYouWaitingFor";
import PublicSiteFooter from "@/components/footer/publicSite";
import { Lines } from "@/components/lines";
// import { IThemes } from "styles/theme";

export default function Home() {
  const theme = useTheme();
  console.log(theme, "theme");
  return (
    <>
      <Head>
        <title>Ewitnex</title>
        <meta name="description" content="Ewitnex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HomeSlide />
      <FindEventFragment />
      <EventsAroundYouFragment />
      <div css={{ overflowX: "hidden" }}>
        <Image src={Tri_L} alt="line" />
      </div>
      <UpcomingEventsFragment />
      <div
        css={{
          overflowX: "hidden",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Image src={Tri_R} alt="line_r" />
      </div>
      <FeaturedEventsFragment />
      <Lines />
      <NoMorePaperProgramFragment />
      <UploadDesignFragment />
      <WitnessEventFragment />
      <TicketToSaleFragment />
      <EventCreatingFragment />
      <WhatAreYouWaitingForFragment />
      <Lines />
      <PublicSiteFooter />
    </>
  );
}
