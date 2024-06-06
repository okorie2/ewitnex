/** @jsxImportSource @emotion/react */

import React, { useState, useEffect, startTransition } from 'react';
import { useTheme } from '@emotion/react';

import DashboardLayout from '../layout/layout';
import DashboardHeader from '@/components/header/dashboardHeader';
import EventCard from '@/components/cards/eventCard';
import { Box, useMediaQuery } from '@mui/material';
import { screen } from 'styles/theme';
import DashboardEventCard from '@/components/cards/dashboardEventCard';
import EventFilter from 'fragments/eventFilter';
import FeedsCard from '@/components/cards/feedsCard';
import dynamic from 'next/dynamic';
import Loader from 'utitlities/loaders';
import { useAppSelector, useAppThunkDispatch } from 'redux/store';
import { getEvents, createEvent } from 'redux/event/thunkAction';
import { IEvent } from 'types/event';
import { formatNumber } from 'utitlities/commonHelpers/numberFormatter';
import dayjs from 'dayjs';
import EmptyState from 'fragments/emptyState';
import { Button } from 'styles/components/button';
import Link from 'next/link';
import { TailSpin } from 'react-loader-spinner';
import { useRouter } from 'next/router';
import { getOrganizer } from 'utitlities/commonHelpers/getOrganizer';
import { useSelector } from 'react-redux';

const DashboardPrograms = () => {
  const isTablet = useMediaQuery('(max-width: 780px)');
  const [active, setActive] = useState('All');
  const [filterSectionOpen, setFilterSectionOpen] = useState(true);
  const router = useRouter();

  const handleActive = (tab: string) => {
    setActive(tab);
  };

  const handleFilterSectionOpen = () => {
    setFilterSectionOpen(!filterSectionOpen);
  };

  const ticketRange = (prices) => {
    const priceArr = prices.replace(/[NGN]/g, '').split('-');    

    if(priceArr[0] === priceArr[1]){
      if(priceArr[0] === 0) return 'Free';          
      return `#${formatNumber(priceArr[0])}`;
    }else{
      return `#${formatNumber(priceArr[0])}`
      - `#${formatNumber(priceArr[priceArr.length - 1])}`
    }    
  };
  
  const { loading, events } = useAppSelector(({ event }) => event);
  const [onlineEvents, setOnlineEvents] = useState<IEvent[] | []>([]);
  useEffect(() => {
    let temp: IEvent[] | [] = [];
    if (events) {
      temp = events.filter((event) => event.location?.type === 'online');
    }
    setOnlineEvents(temp);
  }, [events]);

  const dispatch = useAppThunkDispatch();

  const { loading: createEventLoading } = useAppSelector(
    ({ hostEvent }) => hostEvent
  );

  useEffect(() => {
    dispatch(getEvents(active));
  }, [active]);

  const categories = [
    'All',
    'Music',
    'Technology',
    'Health',
    'Weddings',
    'Conference',
    'Sports/Fitness',
    'Social',
    'Community',
    'Hangouts',
  ];

  const handleCreateEvent = () => {
    dispatch(createEvent()).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') {
        router.push(`/dashboard/hostEvent/${res.payload.id}`);
      }
    });
  };

  return (
    <DashboardLayout>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: isTablet
            ? '1fr '
            : filterSectionOpen
            ? '1fr 258px'
            : '1fr 75px',
          height: '100%',
          maxHeight: '100vh',
          fontFamily: 'Poppins',
          width: isTablet ? '100vw' : '',
        }}
      >
        <div>
          <DashboardHeader />
          <div
            css={{
              height: '60px',
              boxShadow: '0px 0px 5px #00000029;',
              paddingInline: '1.5rem',
              marginTop: isTablet ? '4.5rem' : '',
              width: isTablet ? '100vw' : '',
              display: 'flex',
              alignItems: 'center',
              overflowX: 'auto',
              overflowY: 'hidden',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            {categories.map((category) => (
              <Tab
                key={category}
                tab={category}
                active={active}
                onClick={handleActive}
              />
            ))}
          </div>
          {isTablet && (
            <div
              css={{
                padding: '1rem 1rem 1rem 0.75rem',
                maxWidth: '100vw',
              }}
            >
              <div
                css={{
                  marginBlock: '0.5rem',
                }}
              >
                <div
                  css={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <p
                    css={{
                      fontSize: isTablet ? '20px' : '1.25rem',
                      color: '#707070',
                      fontWeight: isTablet ? '600' : 'bold',
                    }}
                  >
                    Suggested Events
                  </p>
                  <p
                    css={{
                      fontSize: '1rem',
                      color: '#7C35AB',
                      fontWeight: '600',
                    }}
                  >
                    See all
                  </p>
                </div>
                <div
                  css={{
                    display: 'flex',
                    gap: '2rem',
                    overflowX: 'scroll',
                    '&::-webkit-scrollbar': {
                      display: 'none',
                    },
                    padding: '1rem 0.2rem 1rem 0',
                  }}
                >
                  <>
                    {events.length < 1 && (
                      <>
                        {loading === 'loading' ? (
                          <>
                            <div
                              css={{
                                height: '65vh',
                                width: '80vw',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                            >
                              <TailSpin
                                color={'#7c35ab'}
                                width={20}
                                height={20}
                              />
                            </div>
                          </>
                        ) : (
                          <div css={{ textAlign: 'center', width: '100%' }}>
                            <p>No events to show</p>
                          </div>
                        )}
                      </>
                    )}
                    {events &&
                      events.map((event: IEvent, index) => (
                        <div key={index}>
                          <FeedsCard
                            label={event.category}
                            attendees='0'
                            id={event?._id}
                            eventCode={event?.eventCode}
                            date={
                              `${dayjs(
                                event.location?.startDate
                              ).toString()}`.includes('Invalid')
                                ? 'Date: TBD'
                                : `${
                                    dayjs(event.location?.startDate)
                                      .toString()
                                      .split(' ')[1]
                                  } ${
                                    dayjs(event.location?.startDate)
                                      .toString()
                                      .split(' ')[2]
                                  }. ${
                                    dayjs(event.location?.startDate)
                                      .toString()
                                      .split(' ')[3]
                                  },  ${dayjs(event.location?.startDate).format(
                                    'hh:mm A'
                                  )}`
                            }
                            location={
                              event.location?.type === 'live'
                                ? event.location?.searchLocation ||
                                  event.location?.enterLocation
                                : `${event.location?.selectHost}` ===
                                  'undefined'
                                ? 'Venue: TBD'
                                : `${event.location?.selectHost}`
                            }
                            organizer={getOrganizer(event.OrganizedBy)}
                            priceRange={ticketRange(event)}
                            title={event.EventTitle}
                            img='/assets/pngs/card_img.png'
                          />
                        </div>
                      ))}
                    <Box height={48} />
                  </>
                </div>
              </div>
              <div
                css={{
                  marginBlock: '0.5rem',
                }}
              >
                <div
                  css={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <p
                    css={{
                      fontSize: isTablet ? '20px' : '1.25rem',
                      color: '#707070',
                      fontWeight: isTablet ? '600' : 'bold',
                    }}
                  >
                    Online Events
                  </p>
                  <p
                    css={{
                      fontSize: '1rem',
                      color: '#7C35AB',
                      fontWeight: '600',
                    }}
                  >
                    See all
                  </p>
                </div>
                <div
                  css={{
                    display: 'flex',
                    gap: '2rem',
                    overflowX: 'scroll',
                    '&::-webkit-scrollbar': {
                      display: 'none',
                    },
                    padding: '1rem 0.2rem 1rem 0',
                  }}
                >
                  {onlineEvents.length < 1 && (
                    <>
                      {loading === 'loading' ? (
                        <>
                          <div
                            css={{
                              height: '65vh',
                              width: '80vw',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <TailSpin
                              color={'#7c35ab'}
                              width={20}
                              height={20}
                            />
                          </div>
                        </>
                      ) : (
                        <div css={{ textAlign: 'center', width: '100%' }}>
                          <p>No events to show</p>
                        </div>
                      )}
                    </>
                  )}
                  {onlineEvents &&
                    onlineEvents.map((event: IEvent, index) => (
                      <div key={index}>
                        <FeedsCard
                          label={event.category}
                          attendees='0'
                          id={event?._id}
                          eventCode={event?.eventCode}
                          date={
                            `${dayjs(
                              event.location?.startDate
                            ).toString()}`.includes('Invalid')
                              ? 'Date: TBD'
                              : `${
                                  dayjs(event.location?.startDate)
                                    .toString()
                                    .split(' ')[1]
                                } ${
                                  dayjs(event.location?.startDate)
                                    .toString()
                                    .split(' ')[2]
                                }. ${
                                  dayjs(event.location?.startDate)
                                    .toString()
                                    .split(' ')[3]
                                },  ${dayjs(event.location?.startDate).format(
                                  'hh:mm A'
                                )}`
                          }
                          location={
                            event.location?.type === 'live'
                              ? event.location?.searchLocation ||
                                event.location?.enterLocation
                              : `${event.location?.selectHost}` === 'undefined'
                              ? 'Venue: TBD'
                              : `${event.location?.selectHost}`
                          }
                          organizer={getOrganizer(event.OrganizedBy)}
                          priceRange={ticketRange(event)}
                          title={event.EventTitle}
                          img='/assets/pngs/card_img.png'
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
          <div
            css={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              height: isTablet ? '' : 'calc(100vh - 130px)',
              gap: '1rem',
              overflowY: 'scroll',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              padding: '1.125rem',
              [screen.lg]: {
                gridTemplateColumns: '1fr 1fr',
              },
              [screen.desktop]: {
                gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr',
              },
            }}
          >
            {!isTablet ? (
              <>
                {events.length < 1 && (
                  <>
                    {loading === 'loading' ? (
                      <>
                        <div
                          css={{
                            height: '65vh',
                            width: '80vw',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <TailSpin
                            color={'#7c35ab'}
                            width={100}
                            height={100}
                          />
                        </div>
                      </>
                    ) : (
                      <div
                        css={{
                          textAlign: 'center',
                          width: filterSectionOpen ? '60vw' : '70vw',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <EmptyState>
                          <div
                            css={{ textAlign: 'center', fontSize: '0.875rem' }}
                          >
                            <p>No events to showcase right now.</p>
                            <p>
                              Ready to fill in this space with your exciting
                              programs?
                            </p>
                          </div>
                          {/* <Link href="/dashboard/hostEvent"> */}
                          <Button
                            height='52px'
                            fontSize='1rem'
                            width='16rem'
                            onClick={() => handleCreateEvent()}
                          >
                            {createEventLoading.status === 'loading' ? (
                              <TailSpin
                                height={15}
                                width={15}
                                color='#FFF'
                                ariaLabel='loading'
                                radius={'2'}
                              />
                            ) : (
                              'CREATE YOUR EVENT'
                            )}
                          </Button>
                          {/* </Link> */}
                        </EmptyState>
                      </div>
                    )}
                  </>
                )}
                {events &&
                  events.map((event: IEvent, index) => (
                    <div key={index}>
                      <DashboardEventCard
                        label={event.eventType}
                        attendees={event.attendanceCount}
                         date={
                            `${dayjs(
                              event?.startDate
                            ).toString()}`.includes('Invalid')
                              ? 'Date: TBD'
                              : `${
                                  dayjs(event?.startDate)
                                    .toString()
                                    .split(' ')[1]
                                } ${
                                  dayjs(event?.startDate)
                                    .toString()
                                    .split(' ')[2]
                                }. ${
                                  dayjs(event?.startDate)
                                    .toString()
                                    .split(' ')[3]
                                },  ${dayjs(event?.startDate).format(
                                  'hh:mm A'
                                )}`
                          }
                        id={event?.id}
                        eventCode={event?.eventId}
                       location={event.location}
                        organizer={event.organizers}
                        priceRange={ticketRange(event.priceRange)}
                        title={event.EventTitle}
                        img={event.coverPhotoUrl}
                      />
                    </div>
                  ))}
              </>
            ) : (
              <>
                {events.length < 1 && (
                  <>
                    {loading === 'loading' ? (
                      <>
                        <div
                          css={{
                            height: '65vh',
                            width: '80vw',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <TailSpin
                            color={'#7c35ab'}
                            width={100}
                            height={100}
                          />
                        </div>
                      </>
                    ) : (
                      <div
                        css={{
                          textAlign: 'center',
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <EmptyState>
                          <div
                            css={{ textAlign: 'center', fontSize: '0.875rem' }}
                          >
                            <p>No events to showcase right now.</p>
                            <p>
                              Ready to fill in this space with your exciting
                              programs?
                            </p>
                          </div>
                          <Link href='/dashboard/hostEvent'>
                            <Button height='52px' fontSize='1rem' width='16rem'>
                              CREATE YOUR EVENT
                            </Button>
                          </Link>
                        </EmptyState>
                      </div>
                    )}
                  </>
                )}
                {events &&
                  events.map((event: IEvent, index) => (
                    <div key={index}>
                      <FeedsCard
                        label={event.category}
                        attendees='0'
                        id={event?._id}
                        eventCode={event?.eventCode}
                        date={
                          `${dayjs(
                            event.location?.startDate
                          ).toString()}`.includes('Invalid')
                            ? 'Date: TBD'
                            : `${
                                dayjs(event.location?.startDate)
                                  .toString()
                                  .split(' ')[1]
                              } ${
                                dayjs(event.location?.startDate)
                                  .toString()
                                  .split(' ')[2]
                              }. ${
                                dayjs(event.location?.startDate)
                                  .toString()
                                  .split(' ')[3]
                              },  ${dayjs(event.location?.startDate).format(
                                'hh:mm A'
                              )}`
                        }
                        location={
                          event.location?.type === 'live'
                            ? event.location?.searchLocation ||
                              event.location?.enterLocation
                            : `${event.location?.selectHost}` === 'undefined'
                            ? 'Venue: TBD'
                            : `${event.location?.selectHost}`
                        }
                        organizer={getOrganizer(event.OrganizedBy)}
                        priceRange={ticketRange(event)}
                        title={event.EventTitle}
                        img='/assets/pngs/card_img.png'
                      />
                    </div>
                  ))}
                <Box height={48} />
              </>
            )}
          </div>
        </div>
        {!isTablet && (
          <EventFilter
            open={filterSectionOpen}
            setOpen={handleFilterSectionOpen}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default DashboardPrograms;

export const Tab = ({
  tab,
  active,
  weight,
  onClick,
}: {
  tab: string;
  active: string;
  weight?: string;
  onClick: (tab: string) => void;
}) => {
  const isTablet = useMediaQuery('(max-width: 900px)');
  return (
    <div
      css={{
        height: 'inherit',
        borderBottom: tab === active ? '0.125rem solid #7C35AB' : '',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isTablet ? '0.5% 1.5rem' : '0.5% 2%',
        fontWeight: weight ? weight : 'bold',
        cursor: 'pointer',
      }}
      onClick={() => onClick(tab)}
    >
      <p>{tab}</p>
    </div>
  );
};
