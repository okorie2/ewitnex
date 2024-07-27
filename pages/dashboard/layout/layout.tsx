/** @jsxImportSource @emotion/react */

import React, {
  ReactNode,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from '@/components/logo';
import { useMediaQuery } from '@mui/material';
import Notification from 'fragments/notifications';
import MobileLayout from './mobile';
import { useAppSelector, useAppThunkDispatch } from 'redux/store';
import { logout } from 'redux/auth/thunkAction';
import Cookies from 'js-cookie';
import HomeSvg from 'public/assets/svgs/home';
import ProgramSvg from 'public/assets/svgs/programs';
import NotificationSvg from 'public/assets/svgs/notification';
import ProfileSvg from 'public/assets/svgs/profile';
import ManagerSvg from 'public/assets/svgs/manager';
import TicketsSvg from 'public/assets/svgs/tickets';
import FavouritesSvg from 'public/assets/svgs/favourites';
import WalletSvg from 'public/assets/svgs/wallet';
import SettingsSvg from 'public/assets/svgs/settings';
import LogoutSvg from 'public/assets/svgs/logout';
import Loading from 'utitlities/loaders';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const isTablet = useMediaQuery('(max-width: 780px)');
  const router = useRouter();

  const active = useMemo(() => {
    let route = router.route;
    if (route.includes('manager')) {
      route = '/dashboard/manager';
    }
    if (route.includes('programs')) {
      route = '/dashboard/programs';
    }
    switch (route) {
      case '/dashboard':
        {
          return 'feeds';
        }
        break;
      case '/dashboard/programs':
        {
          return 'programs';
        }
        break;
      case '/dashboard/notifications':
        {
          return 'notifications';
        }
        break;
      case '/dashboard/profile':
        {
          return 'profile';
        }
        break;
      case '/dashboard/manager':
        {
          return 'manager';
        }
        break;
      case '/dashboard/tickets':
        {
          return 'tickets';
        }
        break;
      case '/dashboard/favourites':
        {
          return 'favourites';
        }
        break;
      case '/dashboard/wallet':
        {
          return 'wallet';
        }
        break;
      case '/dashboard/settings':
        {
          return 'settings';
        }
        break;
      default: {
        return 'feeds';
      }
    }
  }, [router.route]);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const ISSERVER = typeof window === 'undefined';
  const [showMore, setShowMore] = useState(() => {
    if (ISSERVER) return false;
    if (sessionStorage.getItem('sidebarState') && sessionStorage) {
      return sessionStorage.getItem('sidebarState') === 'true';
    } else {
      sessionStorage.setItem('sidebarState', 'true');
      return true;
    }
  });

  useEffect(() => {
    sessionStorage.setItem('sidebarState', showMore.toString());
  }, [showMore]);

  const handleToggle = () => {
    setShowMore((prevState) => !prevState);
  };
  const [open, setOpen] = useState(false);
  const [feedsHovered, setFeedsHovered] = useState(false);
  const [loadingLogout, setLoadingLogout] = useState(false);
  const [notificationsHovered, setNotificationsHovered] = useState(false);
  const dispatch = useAppThunkDispatch();
  const { loading } = useAppSelector(({ logout }) => logout);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setLoadingLogout(true);
    dispatch(logout('')).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') {

        setTimeout(() => {
          setLoadingLogout(true);
           localStorage.removeItem('user');
           sessionStorage.removeItem('token');
           Cookies.remove('auth');
           router.push('/');
           sessionStorage.clear();
           localStorage.clear();
        }, 1000)       
      }
    });
  };

  return (
    <>
      {isClient &&
        (!isTablet ? (
          <>
            {<Notification shown={open} setClose={() => setOpen(false)} />}
            <div
              css={{
                fontFamily: "'Nunito', sans-serif",
                display: 'grid',
                gridTemplateColumns: '15% 85%',
                minHeight: '100vh',
              }}
            >
              <div
                css={{
                  paddingBlock: '0 2rem',
                  borderRight: `1px solid ${'#E4E4E4'}`,
                  fontSize: '1rem',
                  fontWeight: 'bold',
                }}
              >
                <div
                  css={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div css={{ width: '60%', margin: '0 auto 2.5rem' }}>
                      <Logo image='/assets/pngs/logo.png' />
                    </div>
                    <ul
                      css={{
                        listStyleType: 'none',
                        display: 'grid',
                        gap: '2.5rem',
                        width: '60%',
                        marginInline: 'auto',
                        fontSize: '1.125rem',
                      }}
                    >
                      <li>
                        <Link
                          href='/dashboard'
                          css={{
                            display: 'flex',
                            gap: '0.5rem',
                            alignItems: 'center',
                            ':hover': {
                              color: '#7c35ab',
                              svg: {
                                path: {
                                  fill: '#7c35ab',
                                },
                              },
                            },
                          }}
                        >
                          {active === 'feeds' ? (
                            <Image
                              src='/assets/svgs/home-active.svg'
                              alt=''
                              width={20}
                              height={20}
                            />
                          ) : (
                            <HomeSvg />
                          )}
                          <p
                            css={{
                              color: active === 'feeds' ? '#7C35AB' : '',
                            }}
                          >
                            Feeds
                          </p>
                        </Link>
                      </li>
                      <SidebarItem item={'programs'} activeItem={active} />
                      <li
                        onMouseEnter={() => setNotificationsHovered(true)}
                        onMouseLeave={() => setNotificationsHovered(false)}
                      >
                        <div
                          css={{
                            display: 'flex',
                            gap: '0.25rem',
                            cursor: 'pointer',
                            alignItems: 'center',
                            ':hover': {
                              color: '#7c35ab',
                              svg: {
                                path: {
                                  fill: '#7c35ab',
                                },
                              },
                            },
                          }}
                          onClick={() => {
                            setOpen(true);
                            setShowMore(false);
                          }}
                        >
                          <NotificationSvg />
                          <p>Notifications</p>
                        </div>
                      </li>
                      <SidebarItem item={'profile'} activeItem={active} />
                    </ul>
                    {showMore && (
                      <div
                        css={{
                          marginTop: '2rem',
                        }}
                      >
                        <hr
                          css={{
                            border: 'none',
                            borderTop: `1px solid ${'#E4E4E4'}`,
                          }}
                        />
                        <ul
                          css={{
                            listStyleType: 'none',
                            display: 'grid',
                            gap: '2rem',
                            marginBlock: '1.5rem',
                            width: '60%',
                            marginInline: 'auto',
                          }}
                        >
                          <SidebarItem item={'manager'} activeItem={active} />
                          <SidebarItem item={'tickets'} activeItem={active} />
                          <SidebarItem
                            item={'favourites'}
                            activeItem={active}
                          />
                          <SidebarItem item={'wallet'} activeItem={active} />
                          <SidebarItem item={'settings'} activeItem={active} />
                        </ul>
                        <hr
                          css={{
                            border: 'none',
                            borderTop: `1px solid ${'#E4E4E4'}`,
                          }}
                        />
                        <div
                          // href="/dashboard"
                          css={{
                            display: 'flex',
                            gap: '0.5rem',
                            width: '60%',
                            marginInline: 'auto',
                            paddingBlock: '1rem',
                            cursor: 'pointer',
                            ':hover': {
                              color: '#7c35ab',
                              svg: {
                                path: {
                                  fill: '#7c35ab',
                                },
                              },
                            },
                          }}
                          onClick={handleLogout}
                        >
                          <LogoutSvg />
                          <p>Log out</p>
                        </div>
                        <hr
                          css={{
                            border: 'none',
                            borderTop: `1px solid ${'#E4E4E4'}`,
                            marginBottom: '0.5rem',
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div
                    css={{
                      display: 'flex',
                      gap: '0.5rem',
                      width: '60%',
                      marginInline: 'auto',
                      cursor: 'pointer',
                      color: '#7C35AB;',
                    }}
                    onClick={handleToggle}
                  >
                    <Image
                      src='/assets/svgs/hamburger.svg'
                      alt=''
                      width={20}
                      height={20}
                    />
                    <p>{showMore ? 'Less' : 'More'}</p>
                    <div css={{ marginLeft: '1.5rem' }}>
                      {showMore ? (
                        <Image
                          src='/assets/svgs/elbow-down-purple.svg'
                          alt=''
                          width={12}
                          height={12}
                        />
                      ) : (
                        <Image
                          src='/assets/svgs/elbow-up-purple.svg'
                          alt=''
                          width={12}
                          height={12}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div
                css={{
                  minHeight: isTablet ? '' : '100vh',
                }}
              >
                {children}
                {loadingLogout ? <div
                  css={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    'z-index': 50
                  }}
                >
                  <Loading background={'rgba(0, 0, 0, 0.2)'} />
                </div> : null}
              </div>
            </div>
          </>
        ) : (
          <>
            <MobileLayout>{children}</MobileLayout>
          </>
        ))}
    </>
  );
}

export const SidebarItem = ({
  item,
  activeItem,
  notification,
}: {
  item: string;
  activeItem: string;
  notification?: boolean;
}) => {
  return (
    <li css={{ paddingBlock: notification ? '2.5%' : '' }}>
      <Link
        href={`/dashboard/${item}`}
        css={{
          display: 'flex',
          gap: notification ? '1.5rem' : '0.5rem',
          alignItems: 'center',
          ':hover': {
            color: '#7c35ab',
            svg: {
              path: {
                fill: '#7c35ab',
                stroke:
                  item === 'manager' || item === 'settings' ? '#7c35ab' : '',
              },
            },
          },
        }}
      >
        {activeItem === item ? (
          <Image
            src={`/assets/svgs/${item}-active.svg`}
            alt=''
            width={20}
            height={20}
            priority
          />
        ) : (
          <>
            {item === 'programs' && <ProgramSvg />}
            {item === 'profile' && <ProfileSvg />}
            {item === 'manager' && <ManagerSvg />}
            {item === 'tickets' && <TicketsSvg />}
            {item === 'favourites' && <FavouritesSvg />}
            {item === 'wallet' && <WalletSvg />}
            {item === 'settings' && <SettingsSvg />}
          </>
        )}
        <p css={{ color: activeItem === item ? '#7C35AB' : '' }}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </p>
      </Link>
    </li>
  );
};

// if (sessionStorage.getItem("sidebarState") && sessionStorage) {
//   if (active === "feeds" || active === "programs" || active === "profile") {
//     sessionStorage.setItem("sidebarState", "false");
//     return false;
//   } else {
//     return sessionStorage.getItem("sidebarState") === "true";
//   }
// } else {
//   if (active === "feeds" || active === "programs" || active === "profile") {
//     sessionStorage.setItem("sidebarState", "false");
//     return false;
//   } else {
//     sessionStorage.setItem("sidebarState", "true");
//     return true;
//   }
// }
