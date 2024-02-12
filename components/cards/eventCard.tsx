/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import Image from 'next/image';
import { H3, H4 } from 'styles/components/typography';
import Link from 'next/link';
import { useMediaQuery } from '@mui/material';

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

export default function EventCard(props: IEventCard) {
  const [_favourite, setFavourite] = useState(props.favourite);
  const isMobile = useMediaQuery('(max-width: 425px)');
  return (
    <div
      css={{
        height: '500px',
        width: props.width || '100%',
        borderRadius: '10px',
        backgroundColor: '#fff',
        boxShadow: '#00000029 0px 0px 10px',
        fontFamily: "'Poppins', sans-serif",
        marginBottom: '5%',
      }}
    >
      <div css={{ position: 'relative', width: '100%', height: '171px' }}>
        <Image
          src={props.img}
          alt='card_img'
          css={{ borderRadius: '10px', objectFit: 'cover' }}
          fill
        />
        <div
          css={{
            position: 'absolute',
            top: '3%',
            right: '2%',
          }}
        >
          <div
            css={{
              width: '93px',
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
            }}
          >
            {props.label}
          </div>
        </div>
        <div
          css={{
            height: '41px',
            width: '41px',
            borderRadius: '50%',
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: '-9%',
            right: '3%',
            cursor: 'pointer',
          }}
          onClick={() => setFavourite(!_favourite)}
        >
          {_favourite ? (
            <Image
              src='/assets/svgs/filled-love.svg'
              alt='card_img'
              width={20.98}
              height={19.39}
            />
          ) : (
            <Image
              src='/assets/svgs/love.svg'
              alt='card_img'
              width={20.98}
              height={19.39}
            />
          )}
        </div>
      </div>
      <Link href={`/events/${props.id}`}>
        <div css={{ padding: '4% 6%' }}>
          <H3>{props.title}</H3>
          <p
            css={{
              color: '#AEAEAE',
              fontSize: '0.875rem',
              fontWeight: 600,
              marginTop: '2%',
            }}
          >
            {props.id}
          </p>
          <H4 color='#F05E78' css={{ marginTop: '1.2rem' }}>
            2{props.date}
          </H4>
          <H4 css={{ marginTop: '4%' }}> {props.location}</H4>
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '0.8rem',
              color: '#707070',
              fontWeight: 500,
              fontSize: '0.75rem',
              width: '100%',
              gap: '4rem'
            }}
          >
            <p
              css={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                css={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Image
                  src='/assets/svgs/range.svg'
                  alt='card_img'
                  width={19}
                  height={19}
                  css={{ borderRadius: '10px', marginRight: '.5rem' }}
                />
              </span>
              {props.priceRange}
            </p>
            <p
              css={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                css={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Image
                  src='/assets/svgs/people-2.svg'
                  alt='card_img'
                  width={19}
                  height={19}
                  css={{ borderRadius: '10px', marginRight: '.5rem' }}
                />
              </span>
              {props.attendees} Attending
            </p>
          </div>
          <p
            css={{
              marginTop: '1.5rem',
              color: '#707070',
              fontWeight: 500,
              fontSize: '0.75rem',
              marginBottom: isMobile ? '2rem': '0'
            }}
          >
            Organized by
          </p>
          <H4>{props.organizer}</H4>
        </div>
      </Link>
    </div>
  );
}
