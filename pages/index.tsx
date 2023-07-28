/** @jsxImportSource @emotion/react */
import Head from "next/head";
import { useTheme } from "@emotion/react";
import Navbar from "components/header";
import HomeSlide from "components/slides/homeSlide";
import FindEventFragment from "fragments/findEvent/findEvent";
import EventsAroundYouFragment from "fragments/eventsAroundYou";
import Image from "next/image";
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
import HomeHero from "fragments/homeHero";
import WhyUseEwitnexFragment from "fragments/whyUseEwitnex";
import DontSpectateFragment from "fragments/doNotSpectate";
import SimplifyTicketFragment from "fragments/simplifyTicket";
import DiscoverVenueFragment from "fragments/discoverVenue";
import FindVendorsFragment from "fragments/findVendors";
import AsAnAttendeeFragment from "fragments/asAnAttendee";
import SaveTreesFragment from "fragments/saveTrees";
import AsAnOrganizerFragment from "fragments/asAnOrganizer";
import JoinRevolutionFragment from "fragments/joinTheRevolution";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ewitnex</title>
        <meta name="description" content="Ewitnex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* <HomeSlide /> */}
      <HomeHero />
      <FindEventFragment />
      <EventsAroundYouFragment />
     <WhyUseEwitnexFragment />
      <UpcomingEventsFragment />
     <DontSpectateFragment />
      <FeaturedEventsFragment />
      <SimplifyTicketFragment />
      <DiscoverVenueFragment />
      <FindVendorsFragment />
      <AsAnAttendeeFragment />
      <SaveTreesFragment />
      <AsAnOrganizerFragment />
      <JoinRevolutionFragment />
      <Lines />
      <PublicSiteFooter />
    </>
  );
}
