/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import { H2 } from 'styles/components/typography';
import EventCard from '@/components/cards/eventCard';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';
import { screen } from 'styles/theme';
import Link from 'next/link';

export default function EventsAroundYouFragment({
  title,
  description,
}: {
  title: String;
  description: String;
}) {
  const [seeAllHover, setSeeAllHover] = useState(false);
  const [scrollRightHover, setScrollRightHover] = useState(false);
  const isTablet = useMediaQuery('(max-width: 900px)');
  return (
    <div css={{ padding: '2% 4%', marginTop: '3rem' }}>
      <div
        css={{
          marginBottom: ' 2%',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div>
          <H2 small={isTablet}>{title}</H2>
        </div>
        <div
          css={{
            width: isTablet ? '100%' : '73%',
            letterSpacing: '0.32px',
            fontSize: isTablet ? '0.89rem' : '0.95rem',
            marginTop: '1rem',
          }}
        >
          <p>{description}</p>
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
            favourite={false}
            attendees='609'
            id='Tec542445'
            date='25 NOV. 2021, 10:00 AM'
            location='Holikins Hotel, 22 Faulks Road, Aba, Abia'
            organizer='Connack Foundarion'
            priceRange='$500-$2K'
            title='Connack Foundation African Music Award Of The Year'
            img='/assets/pngs/card_img.png'
            width={isTablet ? '90vw' : '100%'}
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
            favourite={false}
            attendees='609'
            date='3 DEC. 2022, 10:00 AM'
            id='Heal12548'
            location='Holikins Hotel, 22 Faulks Road, Aba, Abia'
            organizer='Eko Atlantic'
            priceRange='$500-$2K'
            title='Medical Crusade with Doctor West'
            img='/assets/pngs/card_2.png'
            width={isTablet ? '90vw' : '100%'}
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
            location='The Dom, 22 Faulks Road, Aba, Abia'
            organizer='Ada and Obi'
            favourite={false}
            priceRange='Free'
            title='Ada weds Obi'
            id='Wed54254'
            width={isTablet ? '90vw' : '100%'}
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
            title='Google Developers Festival Aba'
            width={isTablet ? '90vw' : '100%'}
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
