/** @jsxImportSource @emotion/react */

import Navbar from "components/header";

import FindEventFragment from "fragments/findEvent/findEvent";
import EventsAroundYouFragment from "fragments/eventsAroundYou";

import UpcomingEventsFragment from "fragments/upcomingEvents";
import FeaturedEventsFragment from "fragments/featuredEvents";

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
