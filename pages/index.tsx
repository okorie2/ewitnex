/** @jsxImportSource @emotion/react */

import { config } from '../config/api';
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
  const fragments = [
    {
      title: 'Events Around You',
      description:
        'Discover local happenings, concerts, weddings, workshops hangouts, and more, all in one place, ensuring you never miss out on the vibrant experiences in your vicinity.',
    },
    {
      title: 'Upcoming Events',
      description:
        'Explore a diverse range of upcoming gatherings, conferences, festivals, and more, and be the first to secure your spot in these highly anticipated occasions.',
    },
    {
      title: 'Featured Events',
      description:
        'Explore a curated collection of exceptional gatherings that promise unforgettable experiences and create lasting memories.',
    },
  ];

  const EventsFragment = ({ fragmentNumber }: { fragmentNumber: number }) => {
    return config.production ? (
      <EventsAroundYouFragment
        title={fragments[fragmentNumber].title}
        description={fragments[fragmentNumber].description}
      />
    ) : null;
  };

  return (
    <>
      <Navbar />
      {/* <HomeSlide /> */}
      {!config.production ? <Waitlist />: null}
      <HomeHero />
      <FindEventFragment />
      <EventsFragment fragmentNumber={0} />
      <WhyUseEwitnexFragment />
      <EventsFragment fragmentNumber={1} />
      <DontSpectateFragment />
      <EventsFragment fragmentNumber={2} />
      <SimplifyTicketFragment />
      <DiscoverVenueFragment />
      <FindVendorsFragment />
      <AsAnAttendeeFragment />
      <SaveTreesFragment />
      <AsAnOrganizerFragment />
      {config.production ? <JoinRevolutionFragment /> : null}
      <Lines />
      <PublicSiteFooter />
    </>
  );
}
