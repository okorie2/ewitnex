/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import { H2 } from 'styles/components/typography';
import EventCard from '@/components/cards/eventCard';
import Image from 'next/image';
import { screen } from 'styles/theme';
import { useMediaQuery } from '@mui/material';
import Link from 'next/link';

export default function FeaturedEventsFragment() {
  const [seeAllHover, setSeeAllHover] = useState(false);
  const isTablet = useMediaQuery('(max-width: 900px)');
  const [scrollRightHover, setScrollRightHover] = useState(false);
  return (
    <div css={{ padding: '2% 4%', marginTop: isTablet ? '4.5rem' : '3.5rem' }}>
      <div
        css={{
          marginBottom: ' 2%',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div>
          <H2 small>Featured Events</H2>
        </div>
        <div
          css={{
            width: isTablet ? '100%' : '73%',
            letterSpacing: '0.32px',
            fontSize: isTablet ? '0.89rem' : '0.95rem',
            marginTop: '1rem',
          }}
        >
          <p>
            Explore a curated collection of exceptional gatherings that promise
            unforgettable experiences and create lasting memories.
          </p>
        </div>
      </div>
      <div
        css={{
          display: 'flex',
          gap: isTablet ? '1rem' : '0.125rem',
          justifyContent: 'space-between',
          flexWrap: isTablet ? 'nowrap' : 'wrap',
          marginTop: isTablet ? '1.5rem' : '',
          overflowX: 'auto',
          paddingInline: '2px',
        }}
      >
        <div
          css={{
            width: isTablet ? '100%' : '24%',
            [screen.desktop]: {
              width: isTablet ? '100%' : '32%',
            },
          }}
        >
          <EventCard
            label='Music'
            attendees='609'
            id='Tec542445'
            date='25 NOV. 2021, 10:00 AM'
            favourite={false}
            location='Holikins Hotel, 22 Faulks Road, Aba, Abia'
            organizer='Connack Foundarion'
            priceRange='$500-$2K'
            title='Connack Foundation African Music Award Of The Year'
            width={isTablet ? '90vw' : '100%'}
            img='/assets/pngs/card_img.png'
            eventCode={'Tec542445'}
          />
        </div>
        <div
          css={{
            width: isTablet ? '100%' : '24%',
            [screen.desktop]: {
              width: isTablet ? '100%' : '32%',
            },
          }}
        >
          <EventCard
            label='Concert'
            attendees='609'
            date='3 DEC. 2022, 10:00 AM'
            id='Heal12548'
            favourite={false}
            location='Holikins Hotel, 22 Faulks Road, Aba, Abia'
            organizer='Eko Atlantic'
            priceRange='$500-$2K'
            title='Medical Crusade with Doctor West'
            width={isTablet ? '90vw' : '100%'}
            img='/assets/pngs/card_2.png'
            eventCode={'Heal12548'}
          />
        </div>
        <div
          css={{
            width: isTablet ? '100%' : '24%',
            [screen.desktop]: {
              width: isTablet ? '100%' : '32%',
            },
          }}
        >
          <EventCard
            attendees='609'
            date='25 NOV. 2021, 10:00 AM'
            img='/assets/pngs/card_3.png'
            label='Wedding'
            favourite={false}
            location='The Dom, 22 Faulks Road, Aba, Abia'
            organizer='Ada and Obi'
            priceRange='Free'
            title='Ada weds Obi'
            width={isTablet ? '90vw' : '100%'}
            id='Wed54254'
            eventCode={'Wed54254'}
          />
        </div>
        <div
          css={{
            width: isTablet ? '100%' : '24%',
            [screen.desktop]: {
              width: isTablet ? '100%' : '32%',
            },
          }}
        >
          <EventCard
            attendees='609'
            date='3 DEC. 2022, 10:00 AM'
            id='Tec542445'
            favourite={false}
            img='/assets/pngs/card_4.png'
            label='Tech'
            location='IG Hub, 22 Faulks Road, Aba, Abia'
            organizer='GDG Aba'
            priceRange='$500-$2K'
            width={isTablet ? '90vw' : '100%'}
            title='Google Developers Festival Aba'
            eventCode={'Tec542445'}
          />
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
            <Image
              src={'/assets/svgs/elbow-right-purple.svg'}
              alt='right'
              width={20}
              height={24}
            />
          )}
        </div>
        <div css={{ display: 'flex', gap: '1rem' }}>
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
              />
            ) : (
              <Image
                src='/assets/svgs/elbow-right-light.svg'
                alt=''
                width={12}
                height={12}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
