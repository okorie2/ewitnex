/** @jsxImportSource @emotion/react */

import React from 'react';
import { Button } from 'styles/components/button';
import { H1 } from 'styles/components/typography';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { screen } from 'styles/theme';

const HomeHero = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 900px)' });

  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });

  return (
    <React.Fragment>
      <div
        css={{
          height: '27rem',
          backgroundColor: '#7C35AB',
          [screen.mobile]: {
            height: '12rem',
          },
        }}
      >
        <div css={{ margin: 'auto', width: 'max-content' }}>
          <Image
            src='/assets/pngs/screen-shot.png'
            alt='Ewitnex'
            height={isMobile ? 500 : 900}
            width={isMobile ? 400 : 900}
            priority={true}
            style={{
              borderRadius: '20px',
              objectFit: 'contain',
              marginTop: isMobile ? '-8.6rem' : '-12.3rem',
            }}
          />
        </div>
      </div>
      <div
        css={{
          height: isTablet ? '585px' : '474px',
          backgroundColor: '#7C35AB33',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          fontFamily: '"Poppins", sans-serif',
          alignItems: 'center',
          gridTemplateColumns: '1fr 1fr',
          justifyContent: 'space-between',
          padding: ' 0 50px',
          [screen.tablet]: {
            flexDirection: 'column',
            padding: '0 1.125rem',
            width: '100vw',
            overflowX: 'clip',
            marginBottom: '15rem',
          },
        }}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '3rem',
          }}
        >
          <div>
            <H1
              small
              css={{
                display: 'flex',
                gap: '11px',
                color: '#7C35AB',
                alignItems: 'center',
                textAlign: 'left',
                [screen.desktop]: {
                  gap: '2px',
                },
                [screen.tablet]: {
                  display: 'block',
                  fontSize: '28px',
                },
              }}
            >
              Socially
              <span css={{ color: '#000' }}>
                {' '}
                Connected{isTablet ? ',' : '.'}
              </span>
              <p
                css={{
                  [screen.tablet]: {
                    fontSize: '28px',
                  },
                }}
              >
                Paperless{isTablet ? ',' : '.'}
              </p>
            </H1>
            <H1
              small
              css={{
                display: 'flex',
                gap: '11px',
                color: '#000',
                alignItems: 'center',
                textAlign: 'left',
                [screen.desktop]: {
                  gap: '2px',
                },
                [screen.tablet]: {
                  fontSize: '28px',
                },
              }}
            >
              Unforgettable Events.
            </H1>
          </div>
          <p
            css={{
              letterSpacing: '0.32px',
              fontSize: isTablet ? '15px' : '15px',
              marginTop: '1rem',
              marginBottom: isTablet ? '0' : '2rem',
              [screen.tablet]: {},
            }}
          >
            We believe that events should be socially connected, eco-friendly,
            and
            {!isTablet && <br />} truly memorable. Allowing you to seamlessly
            plan, organize, and engage {!isTablet && <br />} with your
            attendees. Discover the power of a paperless future, where{' '}
            {!isTablet && <br />} technology meets community, and events become
            unforgettable.
          </p>
          <Link href='/auth/signup' style={{ width: '13rem' }}>
            <Button
              css={{
                width: '13rem',
                [screen.desktop]: { width: '12rem' },
              }}
            >
              Get Started
            </Button>
          </Link>
        </div>
        <div
          css={{
            display: 'flex',
            gap: '10px',
            flexBasis: '35%',
          }}
        >
          <div
            css={{ textAlign: 'right', marginTop: isTablet ? '0' : '150px' }}
          >
            <Image
              src='/assets/pngs/heroimg1.png'
              alt='wedding event'
              height={276}
              width={177}
              style={{
                borderRadius: '20px',
                marginTop: isTablet ? '5rem' : '8rem',
              }}
            />
          </div>
          <div
            css={{
              textAlign: 'right',
              marginTop: isTablet ? '0' : '120px',
              [screen.tablet]: {
                order: '-1',
              },
            }}
          >
            <Image
              src='/assets/pngs/heroimg2.png'
              alt='lagos carnival'
              height={isTablet ? 197 : 236}
              width={177}
              quality={100}
              style={{
                borderRadius: '20px',
                marginTop: isTablet ? '1rem' : '3.5rem',
                objectFit: 'cover',
              }}
            />
            <Image
              src='/assets/pngs/heroimg3.png'
              alt='event hall'
              height={isTablet ? 203 : 175}
              width={177}
              quality={100}
              style={{
                borderRadius: '20px',
                marginTop: '0.3rem',
                objectFit: 'cover',
              }}
            />
          </div>
          <div css={{ textAlign: 'right', marginTop: isTablet ? '0' : '90px' }}>
            <Image
              src='/assets/pngs/heroimg4.png'
              alt='lagos carnival'
              height={isTablet ? 197 : 256}
              width={177}
              quality={100}
              style={{
                borderRadius: '20px',
                marginTop: isTablet ? '1rem' : '1.5rem',
                objectFit: 'cover',
                overflowX: 'hidden',
              }}
            />
            <Image
              src='/assets/pngs/heroimg5.png'
              alt='lagos carnival'
              height={isTablet ? 203 : 256}
              width={177}
              quality={100}
              style={{
                borderRadius: '20px',
                marginTop: isTablet ? '0.3rem' : '0.33rem',
                overflowX: 'hidden',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeHero;
