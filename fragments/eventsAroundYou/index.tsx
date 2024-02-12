/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import { H2 } from 'styles/components/typography';
import EventCard from '@/components/cards/eventCard';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';
import { screen } from 'styles/theme';
import Link from 'next/link';

interface IEventCard {
  img: string;
  label: string;
  title: string;
  id: string;
  date: string;
  location: string;
  priceRange: string;
  attendees: string;
  organizer: string;
  width?: string;
  favourite: boolean;
}

export default function EventsAroundYouFragment(props: {
  title: string;
  description: string;
}) {
  const [seeAllHover, setSeeAllHover] = useState(false);
  const [scrollRightHover, setScrollRightHover] = useState(false);
  const isLarge = useMediaQuery('(max-width: 1200px)');
  const isTablet = useMediaQuery('(max-width: 900px)');
  const isMobile = useMediaQuery('(max-width: 425px)');

  const events: IEventCard[] = [
    {
      label: 'Music',
      favourite: false,
      attendees: '609',
      date: '25 Nov. 2021, 10:00 AM',
      id: 'Tec542445',
      location: 'Holikins Hotel, 22 Faulks Road, Aba, Abia',
      organizer: 'Connack Foundarion',
      priceRange: '$500-$2K',
      title: 'Connack Foundation African Music Award Of The Year',
      img: '/assets/pngs/card_img.png',
    },
    {
      label: 'Music',
      favourite: false,
      attendees: '609',
      date: '25 Nov. 2021, 10:00 AM',
      id: 'Tec54244500',
      location: 'Holikins Hotel, 22 Faulks Road, Aba, Abia',
      organizer: 'Connack Foundarion',
      priceRange: '$500-$2K',
      title: 'Connack Foundation African Music Award Of The Year',
      img: '/assets/pngs/card_img.png',
    },
    {
      label: 'Music',
      favourite: false,
      attendees: '609',
      date: '25 Nov. 2021, 10:00 AM',
      id: 'Tec54244511',
      location: 'Holikins Hotel, 22 Faulks Road, Aba, Abia',
      organizer: 'Connack Foundarion',
      priceRange: '$500-$2K',
      title: 'Connack Foundation African Music Award Of The Year',
      img: '/assets/pngs/card_img.png',
    },
    {
      label: 'Concert',
      favourite: false,
      attendees: '609',
      date: '3 DEC. 2022, 10:00 AM',
      id: 'Heal12548',
      location: 'Holikins Hotel, 22 Faulks Road, Aba, Abia',
      organizer: 'Eko Atlantic',
      priceRange: '$500-$2K',
      title: 'Medical Crusade with Doctor West',
      img: '/assets/pngs/card_2.png',
    },
    {
      attendees: '609',
      date: '25 NOV. 2021, 10:00 AM',
      img: '/assets/pngs/card_3.png',
      label: 'Wedding',
      location: 'The Dom, 22 Faulks Road, Aba, Abia',
      organizer: 'Ada and Obi',
      favourite: false,
      priceRange: 'Free',
      title: 'Ada weds Obi',
      id: 'Wed54254',
    },
    {
      attendees: '609',
      date: '3 DEC. 2022, 10:00 AM',
      id: 'Tec542445000000000',
      favourite: false,
      img: '/assets/pngs/card_4.png',
      label: 'Tech',
      location: 'IG Hub, 22 Faulks Road, Aba, Abia',
      organizer: 'GDG Aba',
      priceRange: '$500-$2K',
      title: 'Google Developers Festival Aba',
    },
  ];

  const [position, setPosition] = useState(0);
  // for moving forward
  function moveReviewForward() {
    console.log('newP', position);
    if (position === 0) {
      let newPosition = 0;
      newPosition += isMobile ? 100 : 28;
      setPosition(newPosition);
    } else if (position > 0 && (isMobile ? position < 100 * (events.length - 1) : position < 28 * (events.length - 3))) {
      setPosition((prev) => (isMobile ? prev + 100 : prev + 28));
    } else {
      setPosition(0);
    }
  }

  // for moving backward
  function moveReviewBackward() {
    if (position > 0) {
      setPosition((prev) => (isMobile ? (prev - 100) : prev - 28));
    } else {
      setPosition(0);
    }
  }

  return (
    <div css={{ padding: '2% 4%', marginTop: '3rem' }}>
      <div
        css={{
          marginBottom: ' 2%',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div>
          <H2 small={true}>{props.title}</H2>
        </div>
        <div
          css={{
            width: isTablet ? '100%' : '73%',
            letterSpacing: '0.32px',
            fontSize: isTablet ? '0.89rem' : '0.95rem',
            marginTop: '1rem',
          }}
        >
          <p>{props.description}</p>
        </div>
      </div>
      <div css={{ overflow: 'hidden' }}>
        <div
          css={{
            display: 'flex',
            // gap: isTablet ? '1rem' : '0.125rem',
            justifyContent: 'space-between',
            marginTop: isTablet ? '1.5rem' : '',
            overflowX: 'auto',
            paddingInline: '2px',
            width: 'max-content',
            gap: '2rem',
            transition: 'all .5s',
            transform: `translateX(-${position}vw)`,
          }}
        >
          {events.map((each) => {
            return (
              <div
                key={each.id}
                css={{
                  width: isTablet ? '100%' : '24%',
                  [screen.desktop]: {
                    width: isTablet ? '100%' : '32%',
                  },
                }}
              >
                <EventCard
                  label={each.label}
                  favourite={each.favourite}
                  attendees={each.attendees}
                  id={each.id}
                  date={each.date}
                  location={each.location}
                  organizer={each.organizer}
                  priceRange={each.priceRange}
                  title={each.title}
                  img={each.img}
                  width={isMobile ? '90vw' : isTablet ? '50vw' : isLarge ? '30vw' : '23vw'}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '1rem',
        }}
      >
        <div
          css={{
            color: '#7C35AB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            fontFamily: '"Poppins", sans-serif',
            width: '12%',
            height: '46px',
            fontSize: '0.85rem',
            fontWeight: '550',
            cursor: 'pointer',
            border: '1px solid #7C35AB',
            ':hover': {
              color: '#FFF',
              background: '#7C35AB',
            },
            [screen.desktop]: {
              width: isTablet ? '40%' : '17%',
            },
            [screen.lg]: {
              width: '16%',
            },
          }}
          onMouseEnter={() => setSeeAllHover(true)}
          onMouseLeave={() => setSeeAllHover(false)}
        >
          <Link href='/events'>
            <p>See all events</p>
          </Link>
          {seeAllHover ? (
            <Image
              src={'/assets/svgs/elbow-right-white.svg'}
              alt='right'
              width={20}
              height={24}
            />
          ) : (
            <div>
              <Image
                src={'/assets/svgs/elbow-right-purple.svg'}
                alt='right'
                width={20}
                height={24}
              />
            </div>
          )}
        </div>
        <div
          css={{
            display: 'flex',
            gap: '1rem',
            marginTop: isTablet ? '1%' : '',
          }}
        >
          <div
            css={{
              width: isTablet ? '40px' : '46px',
              height: isTablet ? '40px' : '46px',
              borderRadius: '50%',
              border: '1px solid #AEAEAE',
              transform: 'rotate(180deg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.3,
            }}
          >
            <Image
              src='/assets/svgs/elbow-right-light.svg'
              alt=''
              width={12}
              height={12}
              onClick={moveReviewBackward}
            />
          </div>
          <div
            css={{
              width: isTablet ? '40px' : '46px',
              height: isTablet ? '40px' : '46px',
              borderRadius: '50%',
              border: '1px solid #AEAEAE',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              ':hover': {
                background: '#7C35AB',
              },
            }}
            onMouseEnter={() => setScrollRightHover(true)}
            onMouseLeave={() => setScrollRightHover(false)}
          >
            {scrollRightHover ? (
              <Image
                src='/assets/svgs/elbow-right-white.svg'
                alt=''
                width={20}
                height={20}
                onClick={moveReviewForward}
              />
            ) : (
              <Image
                src='/assets/svgs/elbow-right-light.svg'
                alt=''
                width={12}
                height={12}
                onClick={moveReviewForward}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
