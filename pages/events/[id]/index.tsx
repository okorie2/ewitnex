/** @jsxImportSource @emotion/react */

import React, { useEffect } from 'react';
import PublicSiteFooter from '@/components/footer/publicSite';
import Navbar from '@/components/header';
import { Lines } from '@/components/lines';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { eventNav } from 'fragments/eventDetails/event.data';
import { useMediaQuery } from '@mui/material';
import EventTab from './[tab]';
import { useAppSelector, useAppThunkDispatch } from 'redux/store';
import { getEventById } from 'redux/event/thunkAction';
import { IEvent } from 'types/event';

const SingleEvent = () => {
  const isTablet = useMediaQuery('(max-width: 900px)');
  const router = useRouter();
  const { id } = router.query;
  const activeTab = router.query?.tab || ('Details' as string | undefined);

  const { loading, event } = useAppSelector(({ event }) => event);
  const dispatch = useAppThunkDispatch();
  useEffect(() => {
    dispatch(getEventById(id?.toString() || ''));
  }, [id]);

  return (
    <div css={{ fontFamily: "'Poppins', sans-serif" }}>
      <Navbar />
      <div
        css={{
          marginBlock: isTablet ? '5rem' : '8.5rem',
          width: isTablet ? '100vw' : '90%',
          marginInline: 'auto',
          paddingBottom: '5rem',
          boxShadow: `0px 0px 10px ${'#00000029'}`,
          position: 'relative',
          borderRadius: '20px',
        }}
      >
        <ul
          css={{
            boxShadow: `0px 0px 10px ${'#00000029'}`,
            borderRadius: isTablet ? '' : '20px',
            padding: isTablet ? '1.5rem 0.5rem' : '1rem 2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            width: isTablet ? '100vw' : '60%',
            position: isTablet ? 'relative' : 'absolute',
            zIndex: '1',
            top: isTablet ? '' : '-1.5rem',
            left: isTablet ? '0%' : '20%',
            backgroundColor: '#fff',
            listStyleType: 'none',
            fontFamily: "'Open Sans', sans-serif",
            overflowX: 'auto',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            gap: '0.125rem',
          }}
        >
          {eventNav.map((navItem) => (
            <TabNav
              key={navItem}
              isActive={Boolean(activeTab === navItem)}
              tab={navItem}
              id={id?.toString()}
            />
          ))}
        </ul>
        <EventTab />
      </div>
      <Lines />
      <PublicSiteFooter />
    </div>
  );
};

export default SingleEvent;

const TabNav: React.FC<{
  isActive: boolean;
  tab: string;
  id: string | undefined;
}> = ({ isActive, tab, id }) => {
  return (
    <li>
      <Link
        href={`/events/${[id]}?tab=${tab}`}
        css={{
          padding: '0.38rem 0.75rem ',
          borderRadius: '1rem',
          background: isActive ? '#00D9B7' : '#F2F7FB',
          color: isActive ? '#fff' : '#AEAEAE',
          cursor: 'pointer',
          fontSize: '0.875rem',
          fontWeight: '500',
        }}
      >
        {tab}
      </Link>
    </li>
  );
};
