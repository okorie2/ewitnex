/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import Performer from '@/components/cards/performer';
import { screen } from 'styles/theme';
import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import ContactOrganizerModal from '@/components/modals/programModal/contactOrganizerModal';
import ReportEventModal from '@/components/modals/programModal/reportEventModal';
import EventCountdown from '@/components/events/eventCountdown';
import { useRouter } from 'next/router';
import MobileModal from '@/components/modals/programModal/mobileModal';
import { useAppSelector, useAppThunkDispatch } from 'redux/store';
import { getEventById } from 'redux/event/thunkAction';
import { IEvent } from 'types/event';
import { formatNumber } from 'utitlities/commonHelpers/numberFormatter';
import dayjs from 'dayjs';
import { getOrganizer } from 'utitlities/commonHelpers/getOrganizer';

const EventDetails = () => {
  const router = useRouter();
  const isTablet = useMediaQuery('(max-width: 780px)');
  const [favorite, setFavourite] = React.useState(false);
  const [mobileModalOpen, setMobileModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactOrganizerModalOpen, setContactOrganizerModalOpen] =
    useState(false);
  const [reportEventModalOpen, setReportEventModalOpen] = useState(false);
  const handleMenuOpen = () => {
    if (isTablet) {
      setMobileModalOpen(!mobileModalOpen);
    } else {
      setIsMenuOpen(!isMenuOpen);
    }
  };
  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      html.style.overflow = mobileModalOpen ? 'hidden' : 'auto';
    }
  }, [mobileModalOpen]);
  const { id } = router.query;

  const event = useAppSelector((state) => state.event.currentEvent);
  const dispatch = useAppThunkDispatch();
  // useEffect(() => {
  //   console.log(id);
  //   dispatch(getEventById(id));
  // }, [id]);
  console.log(event)

  const ticketRange = (prices) => {
    const priceArr = prices.replace(/[NGN]/g, '').split('-');

    if (priceArr[0] === priceArr[1]) {
      if (priceArr[0] === 0) return 'Free';
      return `#${formatNumber(priceArr[0])}`;
    } else {
      return (
        `#${formatNumber(priceArr[0])}` -
        `#${formatNumber(priceArr[priceArr.length - 1])}`
      );
    }
  };

  return (
    <div css={{ maxWidth: '100vw' }}>
      {mobileModalOpen && (
        <MobileModal
          shown={mobileModalOpen}
          setClose={() => setMobileModalOpen(!mobileModalOpen)}
        />
      )}
      {isMenuOpen && (
        <div
          css={{
            height: '100vh',
            width: 'calc(100vw - 250px)',
            right: 0,
            zIndex: '1',
            position: 'absolute',
            cursor: 'pointer',
          }}
          onClick={handleMenuOpen}
        ></div>
      )}
      {contactOrganizerModalOpen && (
        <ContactOrganizerModal
          isOpen={contactOrganizerModalOpen}
          onRequestClose={() =>
            setContactOrganizerModalOpen(!contactOrganizerModalOpen)
          }
        />
      )}
      {reportEventModalOpen && (
        <ReportEventModal
          isOpen={reportEventModalOpen}
          onRequestClose={() => setReportEventModalOpen(!reportEventModalOpen)}
          eventID={event.id}
        />
      )}
      <div css={{ width: '100%', height: '394px', position: 'relative' }}>
        <div
          css={{
            position: 'absolute',
            top: '3%',
            left: '2%',
          }}
        >
          <div
            css={{
              height: '2.13rem',
              backdropFilter: 'brightness(50%) ',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              borderRadius: '10px',
              fontWeight: 500,
              textTransform: 'capitalize',
              backgroundColor: '#fff',
              opacity: '75%',
              paddingInline: '0.5rem',
            }}
          >
            {event?.category?.name}
          </div>
        </div>
        <div
          css={{
            position: 'absolute',
            top: '3%',
            right: '2%',

            // opacity: "85%",
          }}
          onClick={handleMenuOpen}
        >
          <div
            css={{
              opacity: '85%',
              height: '41px',
              width: '41px',
              borderRadius: '50%',
              backgroundColor: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <Image
              src='/assets/svgs/ellipse.svg'
              alt='card_img'
              width={20.98}
              height={19.39}
            />
          </div>
          {isMenuOpen && (
            <div
              css={{
                position: 'absolute',
                background: '#fff',
                height: 155,
                width: 240,
                left: '-525%',
                top: '2.2rem',
                right: '0',
                zIndex: '2',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: '8px',
                border: '1px solid #C0C0C0',
              }}
            >
              <div
                css={{
                  width: '80%',
                  marginTop: '1.2rem',
                  ':hover': { color: '#7c35ab' },
                  display: 'flex',
                  gap: '10%',
                  cursor: 'pointer',
                }}
              >
                <Image
                  src={'/assets/svgs/share.svg'}
                  alt={''}
                  width={20}
                  height={20}
                />
                <p>Share Ticket</p>
              </div>
              <div
                css={{
                  width: '80%',
                  marginTop: '1.2rem',
                  ':hover': { color: '#7c35ab' },
                  display: 'flex',
                  gap: '10%',
                  cursor: 'pointer',
                }}
                onClick={() => setContactOrganizerModalOpen(true)}
              >
                <Image
                  src={'/assets/svgs/mail.svg'}
                  alt={''}
                  width={20}
                  height={20}
                />
                <p>Contact Organizer</p>
              </div>
              <div
                css={{
                  width: '80%',
                  marginTop: '1.2rem',
                  ':hover': { color: '#7c35ab' },
                  display: 'flex',
                  gap: '10%',
                  cursor: 'pointer',
                }}
                onClick={() => setReportEventModalOpen(!reportEventModalOpen)}
              >
                <Image
                  src={'/assets/svgs/report-flag.svg'}
                  alt={''}
                  width={20}
                  height={20}
                />
                <p>Report Event</p>
              </div>
            </div>
          )}
        </div>
        <Image
          src={event.coverPhotoUrl}
          alt='header-img'
          css={{
            borderRadius: '10px 10px 0 0',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: '-1',
          }}
          fill
        />
        <div
          css={{
            width: isTablet ? '44%' : '193px',
            height: isTablet ? '200px' : '266px',
            borderRadius: '10px',
            backgroundColor: '#fff',
            boxShadow: `0px 0px 10px ${'#00000029'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: '-30%',
            left: '2%',
          }}
        >
          <Image
            src='/assets/pngs/gdg.png'
            alt='card_img'
            css={{
              borderRadius: '10px',
            }}
            fill
          />
        </div>
        <div
          css={{
            height: '41px',
            width: '41px',
            borderRadius: '50%',
            backgroundColor: '#fff',
            display: isTablet ? 'none' : 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: '-5%',
            right: '2%',
            cursor: 'pointer',
          }}
          onClick={() => setFavourite(!favorite)}
        >
          <Image
            src={`/assets/svgs/${favorite ? 'filled-' : ''}love.svg`}
            alt='card_img'
            width={20.98}
            height={19.39}
          />
        </div>
      </div>
      <div>
        <div
          css={{
            minWidth: '77%',
            width: '82%',
            marginLeft: 'auto',
            position: 'relative',
            [screen.desktopLg]: {
              width: '78%',
            },
            [screen.desktop]: {
              width: '96%',
              marginTop: '8rem',
            },
          }}
        >
          <h1
            css={{
              marginBlock: '1rem 0.5rem',
              fontSize: isTablet ? '1.8rem' : '2.5rem',
              fontWeight: '700',
              marginTop: isTablet ? '10rem' : '',
            }}
          >
            {event?.title || ''}
          </h1>
          <div css={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <p
              css={{
                color: '#707070',
                fontSize: '1.125rem',
                fontWeight: '600',
              }}
            >
              {event.eventId}
            </p>
            <Image src='/assets/svgs/copy.svg' alt='' width={24} height={24} />
          </div>
          <div
            css={{
              marginTop: '2.5rem',
              display: 'grid',
              gridTemplateColumns: 'auto ',
              [screen.desktopLg]: {
                gridTemplateColumns: isTablet ? '1fr' : '1.2fr 0.8fr',
              },
            }}
          >
            <div>
              <EventCountdown
                date={`${dayjs(event?.startDate)
                  .toString()
                  .split(' ')
                  .slice(0, -1)
                  .join(' ')}`}
              />
              <div
                css={{
                  display: 'grid',
                  gap: '0.5rem',
                  marginBlock: '1rem',
                }}
              >
                <div
                  css={{
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    src='/assets/svgs/calender.svg'
                    alt=''
                    width={24}
                    height={24}
                  />
                  <p css={{ color: '#707070' }}>Date and time</p>
                </div>
                <p
                  css={{
                    color: '#F05E78',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                  }}
                >
                  <>
                    {`${dayjs(event?.startDate).toString()}
                    `.includes('Invalid')
                      ? 'Date: TBD'
                      : `${dayjs(event?.startDate).toString().split(' ')[1]}
                    ${dayjs(event?.startDate).toString().split(' ')[2]}.${
                          dayjs(event?.startDate).toString().split(' ')[3]
                        },
                    ${dayjs(event?.startDate).format('hh:mm A')}`}
                  </>
                </p>
              </div>
              <div
                css={{
                  display: 'grid',
                  gap: '0.5rem',
                  marginBlock: '1rem',
                }}
              >
                <div
                  css={{
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    src='/assets/svgs/location.svg'
                    alt=''
                    width={24}
                    height={24}
                  />
                  <p css={{ color: '#707070' }}>Location</p>
                </div>
                <p
                  css={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                  }}
                >
                  {event?.address?.name}
                </p>
                <p css={{ fontSize: '0.875rem' }}>
                  {/* {event.location?.hostUrl && event.location?.hostUrl} */}
                </p>
              </div>
            </div>
            <div css={{ marginRight: isTablet ? '1rem' : '2rem' }}>
              <div
                css={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.5rem',
                  alignItems: 'center',
                }}
              >
                <div
                  css={{
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    src='/assets/svgs/cost.svg'
                    alt=''
                    width={25.5}
                    height={21.6}
                  />
                  <p css={{ color: '#707070' }}>
                    {ticketRange(event?.priceRange)}
                  </p>
                </div>
                <div
                  css={{
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    src='/assets/svgs/people.svg'
                    alt=''
                    width={24}
                    height={24}
                  />
                  <p css={{ color: '#707070' }}>
                    {event.attendanceCount} Attending
                  </p>
                </div>
              </div>
              <div
                css={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.5rem',
                  alignItems: 'center',
                }}
              >
                <div
                  css={{
                    display: 'grid',
                    gap: '0.5rem',
                    marginBlock: '1rem',
                  }}
                >
                  <p css={{ color: '#707070' }}>Organized by</p>
                  {event.organizers?.map(each => <p
                    css={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                    }}
                  >
                    {each.firstName}
                  </p>)}
                </div>
                <button
                  type='button'
                  css={{
                    border: `1px solid ${'#7C35AB'}`,
                    color: '#7C35AB',
                    borderRadius: '56px',
                    padding: '0.75rem',
                    backgroundColor: '#fff',
                    width: '145px',
                    height: '42px',
                    fontFamily: '"Nunito", sans-serif',
                    fontWeight: '500',
                  }}
                >
                  Follow Organizer
                </button>
              </div>
              <div
                css={{
                  display: 'grid',
                  gap: '0.5rem',
                  marginBlock: '1rem',
                }}
              >
                <div
                  css={{
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    src='/assets/svgs/audience.svg'
                    alt=''
                    width={24}
                    height={24}
                  />
                  <p css={{ color: '#707070' }}>Audience Type</p>
                </div>
                <p
                  css={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                  }}
                >
                  {event.isPublic ? 'Public' : 'Private'}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div css={{ paddingInline: '2%', marginBlock: '2.5rem' }}>
          <div
            css={{
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'center',
              color: '#707070',
            }}
          >
            <Image src='/assets/svgs/info.svg' alt='' width={24} height={24} />
            <p>About</p>
          </div>
          <div css={{ marginTop: '1.25rem' }}>
            <p
              css={{
                lineHeight: '22px',
                fontSize: isTablet ? '0.85rem' : '0.875rem',
              }}
            >
              {event.about}
            </p>
          </div>
        </div>
        <div css={{ paddingInline: '2%' }}>
          <div
            css={{
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'center',
              color: '#707070',
            }}
          >
            <Image
              src='/assets/svgs/speakers.svg'
              alt=''
              width={24}
              height={24}
            />
            <p>Performers</p>
          </div>
          <div
            css={{
              marginBlock: '1.25rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.38rem',
            }}
          >
            {event.performers && event.performers.length > 0 ? (
              event.performers?.map((performer) => {
                return (
                  <div key={performer.id}>
                    <Performer
                      name={performer.name}
                      title={performer.title}
                      role={performer.role}
                      img={performer.imageUrl}
                      id={performer.id}
                    />
                  </div>
                );
              })
            ) : (
              <>
                <p>This event does not have any performers</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
