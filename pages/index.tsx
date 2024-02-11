/** @jsxImportSource @emotion/react */

import Navbar from 'components/header';

import Waitlist from 'fragments/waitlist';
import FindEventFragment from 'fragments/findEvent/findEvent';
import EventsAroundYouFragment from 'fragments/eventsAroundYou';

import PublicSiteFooter from '@/components/footer/publicSite';
import { Lines } from '@/components/lines';
import HomeHero from 'fragments/homeHero';
import WhyUseEwitnexFragment from 'fragments/whyUseEwitnex';
import DontSpectateFragment from 'fragments/doNotSpectate';
import SimplifyTicketFragment from 'fragments/simplifyTicket';
import DiscoverVenueFragment from 'fragments/discoverVenue';
import FindVendorsFragment from 'fragments/findVendors';
import AsAnAttendeeFragment from 'fragments/asAnAttendee';
import SaveTreesFragment from 'fragments/saveTrees';
import AsAnOrganizerFragment from 'fragments/asAnOrganizer';
import JoinRevolutionFragment from 'fragments/joinTheRevolution';

export default function Home() {
  return (
    <>
      <Navbar />      
      {/* <HomeSlide /> */}
      <Waitlist/>
      <HomeHero />
      <FindEventFragment />
      <EventsAroundYouFragment title="Events Around You" description='Discover local happenings, concerts, weddings, workshops hangouts,
            and more, all in one place, ensuring you never miss out on the
            vibrant experiences in your vicinity.' />
      <WhyUseEwitnexFragment />
       <EventsAroundYouFragment title="Upcoming Events" description='Explore a diverse range of upcoming gatherings, conferences, festivals, and more, and be the first to secure your spot in these highly anticipated occasions.' />
      <DontSpectateFragment />
      <EventsAroundYouFragment title="Featured Events" description='Explore a curated collection of exceptional gatherings that promise unforgettable experiences and create lasting memories."' />
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
