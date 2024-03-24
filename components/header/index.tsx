/** @jsxImportSource @emotion/react */

import React, { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mui/material';
import Logo from '@/components/logo';
import { screen } from 'styles/theme';
import MobileNav from 'fragments/homeHero/mobileNav';

export default function Navbar() {
  const isTablet = useMediaQuery('(max-width: 900px)');
  const isLarge = useMediaQuery('(max-width: 1200px)');
  const isMobile = useMediaQuery('(max-width: 425px)');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      html.style.overflow = isMobileNavOpen ? 'hidden' : 'auto';
    }
  }, [isMobileNavOpen]);

  const router = useRouter();

  const active = useMemo(() => {
    let route = router.route;
    if (route.includes('events')) {
      route = '/events';
    }
    switch (route) {
      case '/':
        {
          return 'home';
        }
        break;
      case '/events':
        {
          return 'events';
        }
        break;
      case '/about':
        {
          return 'about';
        }
        break;
      case '/how-it-works':
        {
          return 'how';
        }
        break;
      default: {
        return 'home';
      }
    }
  }, [router.route]);

  const waitlist: boolean = true;

  return (
    <>
      <div
        css={{
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: isTablet ? 'space-between' : 'space-evenly',
          alignItems: 'center',
          boxShadow: '#00000029 0px 0px 10px ',
          padding: '0% 1%',
          height: '5rem',
          fontFamily: "'Poppins', sans-serif",
          position: 'fixed',
          left: '0',
          right: '0',
          top: '0',
          zIndex: '2',
          width: '100vw',
          [screen.tablet]: {
            width: '100vw',
            padding: '0 2%',
          },
        }}
      >
        <Logo image='/assets/pngs/logo.png' />
        {!waitlist ? (
          <>
            <div
              css={{
                borderRadius: '66px',
                backgroundColor: '#F5F5F5',
                width: isTablet ? '20%' : '33.2%',
                height: '2.625rem',
                display: isTablet ? 'none' : 'flex',
                alignItems: 'center',
                paddingLeft: '17px',
                gap: '2%',
              }}
            >
              <div css={{ marginTop: '3px' }}>
                <Image
                  src='/assets/svgs/search.svg'
                  width={14.42}
                  height={14.41}
                  alt='logo'
                />
              </div>
              <input
                placeholder='Search event name , ID'
                type={'text'}
                css={{
                  borderRadius: '66px',
                  width: '100%',
                  outline: 'none',
                  border: 'none',
                  backgroundColor: '#F5F5F5',
                  height: '95%',
                  fontSize: '1rem',
                  fontFamily: '"Nunito", sans-serif',
                  fontWeight: '400',
                  color: '#AEAEAE',
                }}
              />
            </div>

            <div
              css={{
                display: isTablet ? 'none' : 'flex',
                color: '#000',
                fontSize: '1rem',
                width: '32%',
                fontWeight: 500,
                cursor: 'pointer',
                justifyContent: 'space-evenly',
                '>div': {
                  ':hover': {
                    color: '#AEAEAE',
                  },
                },
              }}
            >
              <div>
                <Link
                  href='/'
                  css={{ color: active === 'home' ? '#7C35AB' : '' }}
                >
                  {' '}
                  Home
                </Link>
              </div>
              <div>
                <Link
                  href='/events'
                  css={{ color: active === 'events' ? '#7C35AB' : '' }}
                >
                  Events
                </Link>
              </div>
              <div>
                <Link
                  href='/about'
                  css={{ color: active === 'about' ? '#7C35AB' : '' }}
                >
                  About
                </Link>
              </div>
              <div>
                <Link
                  href='/how-it-works'
                  css={{ color: active === 'how' ? '#7C35AB' : '' }}
                >
                  How It Works
                </Link>
              </div>
            </div>
            <div
              css={{
                display: isTablet ? 'none' : 'flex',
              }}
            >
              <hr css={{ width: '1px', height: '36px' }} />
            </div>
            <div
              css={{
                color: '#7C35AB',
                fontWeight: '600',
                display: isTablet ? 'none' : 'flex',
              }}
            >
              <Link href='/auth/signin'>Log in</Link>
            </div>
            <div
              css={{
                borderRadius: '3.5rem',
                border: `1px solid ${'#7C35AB'}`,
                height: '2.625rem',
                display: isTablet ? 'none' : 'flex',
                width: '8.063rem',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 500,
                backgroundColor: '#7C35AB',
                color: '#FFF',
              }}
            >
              <Link href='/onboarding'>Create Event</Link>
            </div>
            {isTablet && (
              <div
                css={{
                  display: 'flex',
                  paddingRight: '0.5rem',
                  gap: '2rem',
                  alignItems: 'center',
                  marginTop: '0.5rem',
                }}
              >
                <div>
                  <Image
                    src='/assets/svgs/search.svg'
                    width={20}
                    height={20}
                    alt='logo'
                  />
                </div>
                {isMobile ? (
                  <div
                    css={{
                      color: '#7C35AB',
                      fontWeight: '600',
                      display: 'flex',
                      border: '1px solid #7C35AB',
                      borderRadius: '55px',
                      padding: '.6rem 1.2rem',
                    }}
                  >
                    <Link href='/auth/signin'>Log In</Link>
                  </div>
                ) : null}
                <div onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                  <Image
                    src={
                      isMobileNavOpen
                        ? '/assets/svgs/hamburger.svg'
                        : '/assets/svgs/hamburger.svg'
                    }
                    width={20}
                    height={20}
                    alt='logo'
                  />
                </div>
              </div>
            )}
          </>
        ) : null}
      </div>
      {isMobileNavOpen && (
        <MobileNav
          active={active}
          shown={isMobileNavOpen}
          setClose={() => setIsMobileNavOpen(false)}
        />
      )}
    </>
  );
}
